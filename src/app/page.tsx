"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import SquigglyLines from "@/components/SquigglyLines";

const walletOptions = [
  { name: "MetaMask", icon: "M", color: "#E2761B" },
  { name: "WalletConnect", icon: "W", color: "#3B99FC" },
  { name: "Coinbase Wallet", icon: "C", color: "#0052FF" },
  { name: "Phantom", icon: "P", color: "#AB9FF2" },
];

export default function ConnectPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [connecting, setConnecting] = useState<string | null>(null);

  const handleConnect = (walletName: string) => {
    setConnecting(walletName);
    setTimeout(() => {
      router.push("/hub");
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface-base">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute right-6 top-6 z-20 rounded-lg border border-surface-border bg-surface-raised p-2 text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary"
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        )}
      </button>

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" style={{ background: "var(--gradient-glow-purple)" }} />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full blur-[100px]" style={{ background: "var(--gradient-glow-blue)" }} />
        <div className="absolute left-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full bg-purple-vivid/10 blur-[80px]" />
      </div>

      {/* Animated squiggly lines */}
      <SquigglyLines />

      <main className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.jpg"
            alt="IOPn"
            width={100}
            height={100}
            className="rounded-2xl"
            style={{ boxShadow: "var(--logo-shadow)" }}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="mb-2 text-center text-3xl font-bold tracking-tight text-text-primary">
          Become an IOPn Neo Citizen.
        </h1>
        <p className="mb-10 text-center text-sm text-text-muted">
          Connect your wallet to access the citizenship platform
        </p>

        {/* Wallet Options Card */}
        <div className="w-full rounded-2xl border border-surface-border bg-surface-raised/80 p-6 backdrop-blur-xl">
          <h2 className="mb-1 text-lg font-semibold text-text-primary">
            Connect Wallet
          </h2>
          <p className="mb-6 text-xs text-text-muted">
            Choose your preferred wallet to get started
          </p>

          <div className="flex flex-col gap-3">
            {walletOptions.map((wallet) => (
              <button
                key={wallet.name}
                onClick={() => handleConnect(wallet.name)}
                disabled={connecting !== null}
                className="group flex items-center gap-4 rounded-xl border px-4 py-3.5 transition-all duration-200 hover:border-surface-border-hover disabled:opacity-50"
                style={{
                  borderColor: "var(--wallet-btn-border)",
                  background: "var(--wallet-btn-bg)",
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white"
                  style={{ backgroundColor: wallet.color }}
                >
                  {wallet.icon}
                </div>
                <span className="flex-1 text-left text-sm font-medium text-text-primary">
                  {wallet.name}
                </span>
                {connecting === wallet.name ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-light/30 border-t-blue-light" />
                ) : (
                  <svg
                    className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-center text-xs text-text-faint">
          By connecting, you agree to the IOPn Terms of Service
        </p>
      </main>
    </div>
  );
}
