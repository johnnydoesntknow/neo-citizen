"use client";

import Link from "next/link";

export default function WalletBar() {
  return (
    <div className="flex items-center justify-end px-8 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-deep to-blue-bright text-xs font-bold text-white">
          0x
        </div>
        <div className="overflow-hidden">
          <p className="truncate text-xs font-medium text-text-primary">
            0x1a2b...9f8e
          </p>
          <p className="text-[10px]" style={{ color: "var(--accent-green)" }}>
            Connected
          </p>
        </div>
        <Link
          href="/"
          className="rounded-md border border-surface-border p-1.5 text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary"
          title="Disconnect"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
