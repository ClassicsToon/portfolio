"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import {
  getSuggestionPrompt,
  suggestionIds,
  type SuggestionId,
} from "@/lib/yasuke-suggestions";

export function YasukeChat({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: { locale },
      }),
    [locale],
  );

  const { messages, sendMessage, status, error } = useChat({ transport });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("yasuke:open", onOpen);
    return () => window.removeEventListener("yasuke:open", onOpen);
  }, []);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open, busy]);

  function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    void sendMessage({ text: trimmed });
    setInput("");
    setOpen(true);
  }

  function onSuggestion(id: SuggestionId) {
    ask(getSuggestionPrompt(locale, id));
  }

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)] sm:bottom-6 sm:right-6">
      {open && (
        <div
          className="yasuke-panel pointer-events-auto flex h-[min(70vh,520px)] w-[min(calc(100vw-2rem),420px)] flex-col overflow-hidden border border-border bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
          role="dialog"
          aria-label={dict.yasuke.name}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="font-[family-name:var(--font-syne)] text-sm font-bold text-text-main">
                {dict.yasuke.name}
              </p>
              <p className="text-xs text-text-muted">{dict.yasuke.intro}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="cut-transition text-sm text-text-muted hover:text-accent"
              aria-label={dict.yasuke.close}
            >
              ✕
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.length === 0 && (
              <p className="text-sm text-text-muted">{dict.yasuke.intro}</p>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "ml-8 rounded-sm bg-accent/10 px-3 py-2 text-sm text-text-main"
                    : "mr-4 text-sm leading-relaxed text-text-main"
                }
              >
                {message.parts.map((part, index) =>
                  part.type === "text" ? (
                    <span key={index} className="whitespace-pre-wrap">
                      {part.text}
                    </span>
                  ) : null,
                )}
              </div>
            ))}
            {busy && (
              <p className="text-xs text-text-muted">{dict.yasuke.thinking}</p>
            )}
            {error && (
              <p className="text-xs text-accent">{dict.yasuke.error}</p>
            )}
          </div>

          <div className="border-t border-border px-3 py-2">
            <div className="flex flex-wrap gap-1.5 pb-2">
              {suggestionIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  disabled={busy}
                  onClick={() => onSuggestion(id)}
                  className="cut-transition rounded-sm border border-border px-2 py-1 text-[11px] text-text-muted hover:border-accent hover:text-accent disabled:opacity-50"
                >
                  {dict.yasuke.suggestions[id]}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={busy}
                placeholder={dict.yasuke.placeholder}
                className="min-w-0 flex-1 border border-border bg-background px-3 py-2 text-sm text-text-main outline-none placeholder:text-text-muted focus:border-accent"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="cut-transition bg-accent px-3 text-sm font-semibold text-white hover:brightness-110 disabled:opacity-50"
              >
                {dict.yasuke.send}
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto cut-transition flex h-14 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(211,47,47,0.35)] hover:brightness-110"
        aria-label={open ? dict.yasuke.close : dict.yasuke.open}
        aria-expanded={open}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 font-[family-name:var(--font-syne)] text-xs font-bold">
          Y
        </span>
        <span className="pr-1">{dict.yasuke.name}</span>
      </button>
    </div>
  );
}
