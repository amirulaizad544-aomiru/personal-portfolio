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
    <>
      {/* Mobile-only backdrop overlay (click to close) */}
      {open && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm sm:hidden"
          onClick={() => setOpen(false)} 
        />
      )}

      {/* Chat Window Container */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Amirul's portfolio assistant"
          className="
            /* Mobile styles: Centered & smaller */
            fixed top-1/2 left-1/2 z-50 flex h-[500px] w-[88vw] max-w-[360px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[0_8px_30px_-12px_rgb(0_0_0/0.6)]
            
            /* Web/Desktop styles (sm and above): Fixed to bottom-right */
            sm:absolute sm:top-auto sm:left-auto sm:bottom-20 sm:right-6 sm:h-[600px] sm:w-[380px] sm:translate-x-0 sm:translate-y-0
          "
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

      {/* Launcher Button (Fixed at Bottom-Right for both) */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close chat" : "Open chat with portfolio assistant"}
        aria-expanded={open}
        className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-background shadow-[0_8px_30px_-12px_rgb(0_0_0/0.6)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="size-6" aria-hidden="true" />
        )}
      </button>
    </>
  );
}