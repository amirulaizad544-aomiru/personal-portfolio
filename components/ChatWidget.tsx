"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const CHATBOT_URL = process.env.NEXT_PUBLIC_CHATBOT_URL ?? "http://localhost:3000";

/**
 * Floating launcher that opens an iframe running the portfolio-chatbot
 * project. The iframe is only mounted after the first open, so the chatbot's
 * bundle/embedding model never loads for visitors who don't use it.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const toggle = () => {
    setOpen((value) => !value);
    setHasOpened(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Amirul's portfolio assistant"
          className="fixed inset-4 z-50 flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[0_8px_30px_-12px_rgb(0_0_0/0.6)] sm:absolute sm:inset-auto sm:bottom-16 sm:right-0 sm:h-[600px] sm:w-[380px]"
        >
          {hasOpened && (
            <iframe
              src={`${CHATBOT_URL}/?embed=1`}
              title="Portfolio assistant chat"
              className="h-full w-full flex-1 border-0"
            />
          )}
        </div>
      )}

      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close chat" : "Open chat with portfolio assistant"}
        aria-expanded={open}
        className="flex size-14 items-center justify-center rounded-full bg-accent text-background shadow-[0_8px_30px_-12px_rgb(0_0_0/0.6)] transition-transform hover:scale-105"
      >
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="size-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
