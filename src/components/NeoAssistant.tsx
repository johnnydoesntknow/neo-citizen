"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hello! I'm your NEO Assistant, your guide to IOPn citizenship programs. Ask me about São Tomé, Antigua, St. Kitts, or anything about the application process!",
};

function getMockResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  if (msg.includes("sao tome") || msg.includes("são tomé") || msg.includes("stp")) {
    return "São Tomé & Príncipe offers citizenship through a $150,000 contribution to the National Transformation Fund. Processing takes 4-6 months with no residency requirement. Visa-free access to 70+ countries and exclusive OPN token staking rewards are included. Would you like to know about the requirements?";
  }
  if (msg.includes("antigua")) {
    return "Antigua & Barbuda's program is coming soon to our platform! It offers visa-free access to 150+ countries including the UK and EU Schengen area. Investment starts at $230,000 through the National Development Fund. I'll notify you when applications open!";
  }
  if (msg.includes("st. kitts") || msg.includes("st kitts") || msg.includes("saint kitts")) {
    return "St. Kitts & Nevis runs the world's oldest CBI program (since 1984). Known as the 'Platinum Standard,' it offers visa-free access to 150+ countries. Investment starts at $250,000. This program is coming soon to our platform!";
  }
  if (msg.includes("cost") || msg.includes("price") || msg.includes("invest") || msg.includes("how much")) {
    return "Investment minimums vary by program:\n• São Tomé & Príncipe: $150,000 (Live now)\n• Antigua & Barbuda: $230,000 (Coming soon)\n• St. Kitts & Nevis: $250,000 (Coming soon)\n\nWould you like details about a specific program?";
  }
  if (msg.includes("requirement") || msg.includes("document") || msg.includes("need") || msg.includes("eligible")) {
    return "General requirements include: valid passport, clean criminal record, proof of funds, medical clearance, police clearance, and birth certificate. Each program has specific additional requirements. Which country are you interested in?";
  }
  if (msg.includes("how long") || msg.includes("processing") || msg.includes("time") || msg.includes("duration")) {
    return "Most programs process within 4-6 months. São Tomé's process includes: Onboarding → Document Preparation → Processing → Approval → Certification → Completion. St. Kitts also offers fast-track processing in 45-60 days.";
  }
  if (msg.includes("token") || msg.includes("opn") || msg.includes("staking")) {
    return "São Tomé applicants receive 2,500,000 OPN tokens staked on their behalf at $0.06 per token. These tokens are locked for a 3-year period and represented by a soulbound NFT. This is an exclusive benefit of the IOPn citizenship program.";
  }
  if (msg.includes("family") || msg.includes("spouse") || msg.includes("children") || msg.includes("dependent")) {
    return "São Tomé allows you to include your spouse, up to 2 children (under 30), and up to 2 parents (55+) in your application. Antigua also offers generous family inclusion options. Would you like more details?";
  }
  if (msg.includes("visa") || msg.includes("travel") || msg.includes("passport")) {
    return "Visa-free access varies by program:\n• São Tomé & Príncipe: 70+ countries\n• Antigua & Barbuda: 150+ countries (UK, EU Schengen)\n• St. Kitts & Nevis: 150+ countries\n\nAll programs offer dual citizenship.";
  }
  if (msg.includes("hello") || msg.includes("hi ") || msg.includes("hey") || msg === "hi") {
    return "Hello! How can I help you today? I can provide information about our citizenship programs in São Tomé, Antigua, and St. Kitts.";
  }
  if (msg.includes("thank")) {
    return "You're welcome! Feel free to ask if you have any other questions about our citizenship programs. I'm here to help!";
  }

  return "I'm your NEO Assistant and I'll be able to help you with more detailed information soon! Our team is connecting me to the latest citizenship program data. In the meantime, try asking about São Tomé, Antigua, St. Kitts, costs, requirements, or processing times.";
}

export default function NeoAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const history = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/neo-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content, history }),
      });

      const data = await res.json();
      const reply =
        data.reply ||
        data.error ||
        "I'm sorry, something went wrong. Please try again.";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: reply,
        },
      ]);
    } catch {
      // Fallback to mock response if API is unreachable
      const response = getMockResponse(userMsg.content);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed z-50 flex flex-col overflow-hidden border border-surface-border bg-surface-raised shadow-2xl backdrop-blur-xl transition-all duration-200 ease-out inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[500px] sm:max-h-[calc(100vh-120px)] sm:w-[380px] sm:rounded-2xl ${
          isOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 translate-y-2 opacity-0"
        }`}
        role="dialog"
        aria-label="NEO Assistant chat"
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-surface-border px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-deep to-blue-bright text-sm font-bold text-white">
            N
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-text-primary">
              NEO Assistant
            </p>
            <p className="flex items-center gap-1 text-[10px] text-text-muted">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--accent-green)" }}
              />
              Online
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-surface-border p-1.5 text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary"
            aria-label="Close chat"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-blue-bright to-purple-deep text-white"
                    : "text-text-primary"
                }`}
                style={
                  msg.role === "assistant"
                    ? {
                        background: "var(--bg-overlay)",
                        border: "1px solid var(--bg-border)",
                      }
                    : undefined
                }
              >
                {msg.content.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < msg.content.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div
                className="rounded-xl px-4 py-3"
                style={{
                  background: "var(--bg-overlay)",
                  border: "1px solid var(--bg-border)",
                }}
              >
                <div className="flex gap-1">
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-text-muted"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-text-muted"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-text-muted"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-surface-border px-4 py-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about citizenship programs..."
              className="flex-1 rounded-lg border border-surface-border bg-surface-base px-3 py-2.5 text-sm text-text-primary placeholder:text-text-faint focus:border-blue-bright focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-blue-bright to-purple-deep text-white transition-opacity disabled:opacity-40"
              aria-label="Send message"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-bright to-purple-deep text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 ${
          !isOpen ? "pulse-glow" : ""
        }`}
        aria-label={isOpen ? "Close NEO Assistant" : "Open NEO Assistant"}
      >
        {isOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.671 1.09-.085 2.17-.207 3.238-.364 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        )}
      </button>
    </>
  );
}
