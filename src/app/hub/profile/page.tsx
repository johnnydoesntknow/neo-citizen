"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="px-4 pb-8 sm:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">My Profile</h1>
        <p className="mt-1 text-sm text-text-muted">
          Manage your wallet, personal details, and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main content - 2 columns */}
        <div className="space-y-6 lg:col-span-2">
          {/* Wallet */}
          <div className="rounded-xl border border-surface-border bg-surface-card p-6">
            <h2 className="mb-4 text-lg font-semibold text-text-primary">
              Wallet
            </h2>
            <div className="flex items-center gap-4 rounded-lg border border-surface-border bg-surface-base p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-deep to-blue-bright text-sm font-bold text-white">
                0x
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-primary">
                  0x1a2b...9f8e
                </p>
                <p className="text-xs" style={{ color: "var(--accent-green)" }}>
                  Connected
                </p>
              </div>
              <button className="rounded-lg border border-surface-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary">
                Copy Address
              </button>
            </div>
            <div className="mt-4 flex gap-3">
              <button className="rounded-lg border border-surface-border px-4 py-2 text-xs font-medium text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary">
                Switch Wallet
              </button>
              <Link
                href="/"
                className="rounded-lg border border-red-500/30 px-4 py-2 text-xs font-medium text-red-400 transition-colors hover:border-red-500/50 hover:bg-red-500/10"
              >
                Disconnect
              </Link>
            </div>
          </div>

          {/* Personal Details */}
          <div className="rounded-xl border border-surface-border bg-surface-card p-6">
            <h2 className="mb-4 text-lg font-semibold text-text-primary">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[10px] uppercase tracking-wider text-text-faint">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-surface-border bg-surface-base px-3 py-2 text-sm text-text-primary placeholder:text-text-faint focus:border-blue-bright focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] uppercase tracking-wider text-text-faint">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-surface-border bg-surface-base px-3 py-2 text-sm text-text-primary placeholder:text-text-faint focus:border-blue-bright focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] uppercase tracking-wider text-text-faint">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  className="w-full rounded-lg border border-surface-border bg-surface-base px-3 py-2 text-sm text-text-primary placeholder:text-text-faint focus:border-blue-bright focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] uppercase tracking-wider text-text-faint">
                  Country of Residence
                </label>
                <input
                  type="text"
                  placeholder="Select your country"
                  className="w-full rounded-lg border border-surface-border bg-surface-base px-3 py-2 text-sm text-text-primary placeholder:text-text-faint focus:border-blue-bright focus:outline-none"
                />
              </div>
            </div>
            <button className="mt-4 rounded-lg bg-gradient-to-r from-blue-bright to-purple-deep px-4 py-2 text-xs font-semibold text-white transition-all hover:opacity-90">
              Save Changes
            </button>
          </div>

          {/* Notifications */}
          <div className="rounded-xl border border-surface-border bg-surface-card p-6">
            <h2 className="mb-1 text-lg font-semibold text-text-primary">
              Notifications
            </h2>
            <p className="mb-4 text-xs text-text-muted">
              All notifications will be sent to your email address above.
            </p>
            <div className="space-y-3">
              {[
                { label: "Application updates", desc: "Status changes, approvals, and document requests" },
                { label: "Payment confirmations", desc: "Receipts and transaction notifications" },
                { label: "Program announcements", desc: "New countries, policy changes, and deadlines" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-lg border border-surface-border bg-surface-base p-4"
                >
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {item.label}
                    </p>
                    <p className="text-xs text-text-muted">{item.desc}</p>
                  </div>
                  <div
                    className="h-5 w-9 rounded-full p-0.5 transition-colors"
                    style={{ background: "var(--accent-green)" }}
                  >
                    <div className="h-4 w-4 translate-x-4 rounded-full bg-white transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* KYC Status */}
          <div className="rounded-xl border border-surface-border bg-surface-card p-6">
            <h2 className="mb-3 text-lg font-semibold text-text-primary">
              KYC Status
            </h2>
            <div className="flex items-center gap-3 rounded-lg border border-surface-border bg-surface-base p-4">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ background: "var(--badge-yellow-bg)" }}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  style={{ color: "var(--accent-yellow)" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  Not Verified
                </p>
                <p className="text-xs text-text-muted">
                  Complete KYC to start applications
                </p>
              </div>
            </div>
            <button className="mt-3 w-full rounded-lg border border-surface-border px-4 py-2 text-xs font-medium text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary">
              Start Verification
            </button>
          </div>

          {/* Security */}
          <div className="rounded-xl border border-surface-border bg-surface-card p-6">
            <h2 className="mb-3 text-lg font-semibold text-text-primary">
              Security
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Two-Factor Auth
                  </p>
                  <p className="text-xs text-text-muted">Not enabled</p>
                </div>
                <button className="rounded-lg border border-surface-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary">
                  Enable
                </button>
              </div>
              <div className="h-px bg-surface-border" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Active Sessions
                  </p>
                  <p className="text-xs text-text-muted">1 session</p>
                </div>
                <button className="rounded-lg border border-surface-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary">
                  Manage
                </button>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="rounded-xl border border-surface-border bg-surface-card p-6">
            <h2 className="mb-2 text-sm font-semibold text-text-primary">
              Need Help?
            </h2>
            <p className="mb-3 text-xs text-text-muted">
              Have a question about your account or need assistance? Try our NEO Assistant for instant answers, available anytime.
            </p>
            <button className="w-full rounded-lg border border-surface-border px-4 py-2 text-xs font-medium text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
