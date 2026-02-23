"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  {
    label: "Dashboard",
    href: "/hub",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    label: "My Applications",
    href: "/hub/applications",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    label: "Payments",
    href: "/hub/payments",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    label: "My Profile",
    href: "/hub/profile",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

const programs = [
  { label: "São Tomé", flag: "🇸🇹", href: "/hub/sao-tome", status: "live" as const },
  { label: "Antigua", flag: "🇦🇬", href: "/hub/antigua", status: "soon" as const },
  { label: "St. Kitts", flag: "🇰🇳", href: "/hub/st-kitts", status: "soon" as const },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-surface-border bg-surface-sidebar backdrop-blur-xl transition-colors duration-300">
      {/* Logo area */}
      <div className="flex items-center gap-3 px-5 py-6">
        <Image
          src="/logo.jpg"
          alt="IOPn"
          width={40}
          height={40}
          className="rounded-lg"
          style={{ boxShadow: "var(--logo-shadow)" }}
        />
        <div className="flex flex-col">
          <span className="text-base font-bold tracking-wide text-text-primary leading-tight">
            IOPn
          </span>
          <span className="text-[11px] font-medium text-text-muted leading-tight">
            Neo Citizenship
          </span>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="ml-auto rounded-md border border-surface-border p-1.5 text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>
      </div>

      {/* Divider */}
      <div className="mx-4 h-px bg-surface-border" />

      {/* Main navigation */}
      <nav className="flex-1 px-3 py-4">
        <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
          Navigation
        </p>
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/hub"
                ? pathname === "/hub"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150"
                  style={{
                    background: isActive ? "var(--blue-active-bg)" : "transparent",
                    color: isActive ? "var(--accent-blue)" : "var(--fg-muted)",
                  }}
                >
                  {item.icon}
                  {item.label}
                  {isActive && (
                    <div className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-light" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Countries section */}
        <p className="mb-2 mt-6 px-3 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
          Active Programs
        </p>
        <ul className="flex flex-col gap-1">
          {programs.map((prog) => {
            const isActive = pathname === prog.href;
            return (
              <li key={prog.href}>
                <Link
                  href={prog.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150"
                  style={{
                    background: isActive ? "var(--blue-active-bg)" : "transparent",
                    color: isActive ? "var(--accent-blue)" : "var(--fg-muted)",
                  }}
                >
                  <span className="text-base">{prog.flag}</span>
                  {prog.label}
                  <span
                    className="ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium"
                    style={{
                      background: prog.status === "live" ? "var(--badge-green-bg)" : "var(--badge-yellow-bg)",
                      color: prog.status === "live" ? "var(--accent-green)" : "var(--accent-yellow)",
                    }}
                  >
                    {prog.status === "live" ? "Live" : "Soon"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Ecosystem CTA */}
      <div className="mx-3 mb-4 rounded-xl border border-purple-deep/30 bg-gradient-to-b from-purple-deep/10 to-transparent p-4">
        <p className="text-xs font-semibold text-text-primary">
          Explore the IOPn Ecosystem
        </p>
        <p className="mt-1 text-[10px] leading-relaxed text-text-muted">
          Discover DeFi, governance, staking, and more across the IOPn network.
        </p>
        <a
          href="https://iopn.io"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-blue-light transition-colors hover:text-blue-bright"
        >
          Visit iopn.io
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
