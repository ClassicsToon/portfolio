import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";
import { readFile } from "fs/promises";
import path from "path";
import { getYasukeModelId, getYasukeProvider } from "@/lib/ai/provider";
import { isLocale, type Locale } from "@/lib/i18n";

export const maxDuration = 30;

const rateBucket = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

function getClientIp(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const entry = rateBucket.get(ip);
  if (!entry || now > entry.resetAt) {
    rateBucket.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count += 1;
  return true;
}

async function loadKnowledgeBase() {
  const filePath = path.join(process.cwd(), "data", "cv-knowledge.md");
  return readFile(filePath, "utf8");
}

function buildInstructions(locale: Locale, knowledge: string) {
  return `You are Yasuke, a concise assistant on Harison Rahajandraibe's portfolio.
You MUST answer ONLY using the knowledge base below. No outside knowledge, no speculation.
If the answer is not in the knowledge base, say you don't know and suggest WhatsApp (+261 34 61 801 98) or email (harison.rhj@gmail.com).
Reply in ${locale === "fr" ? "French" : "English"}.
Keep answers short: 2–4 sentences max, actionable and reassuring for a startup founder evaluating a senior freelance developer.

--- KNOWLEDGE BASE START ---
${knowledge}
--- KNOWLEDGE BASE END ---`;
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return new Response("Too many requests", { status: 429 });
  }

  if (!process.env.YASUKE_API_KEY) {
    return new Response("Yasuke is not configured", { status: 503 });
  }

  try {
    const body = await req.json();
    const messages = body.messages as UIMessage[];
    const locale: Locale = isLocale(body.locale) ? body.locale : "fr";

    const knowledge = await loadKnowledgeBase();
    const openai = getYasukeProvider();
    const modelId = getYasukeModelId();

    const result = streamText({
      model: openai(modelId),
      instructions: buildInstructions(locale, knowledge),
      messages: await convertToModelMessages(messages),
    });

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ stream: result.stream }),
    });
  } catch (error) {
    console.error("[yasuke]", error);
    return new Response("Chat error", { status: 500 });
  }
}
