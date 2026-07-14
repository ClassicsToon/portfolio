import { createOpenAI } from "@ai-sdk/openai";

/**
 * OpenAI-compatible client.
 * - Default: OpenAI
 * - OpenRouter: set YASUKE_BASE_URL=https://openrouter.ai/api/v1
 */
export function getYasukeProvider() {
  const apiKey = process.env.YASUKE_API_KEY;
  if (!apiKey) {
    throw new Error("YASUKE_API_KEY is not set");
  }

  const baseURL = process.env.YASUKE_BASE_URL?.trim() || undefined;

  return createOpenAI({
    apiKey,
    baseURL,
  });
}

export function getYasukeModelId() {
  return process.env.YASUKE_MODEL?.trim() || "gpt-4o-mini";
}
