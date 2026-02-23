"use client";

import Link from "next/link";

const countries = [
  {
    slug: "sao-tome",
    name: "São Tomé & Príncipe",
    flag: "🇸🇹",
    status: "live" as const,
    region: "Africa",
    investmentMin: "$150,000",
    processingTime: "4-6 months",
    image: "/sao-tome-tg.png",
    description:
      "Citizenship by Investment through a non-refundable contribution to the National Transformation Fund. Visa-free access to 70+ countries, no residency requirement, and exclusive OPN token staking rewards.",
    benefits: ["Visa-free to 70+ countries", "No residency requirement", "Dual citizenship allowed", "OPN token staking"],
  },
  {
    slug: "antigua",
    name: "Antigua & Barbuda",
    flag: "🇦🇬",
    status: "coming_soon" as const,
    region: "Caribbean",
    investmentMin: "$230,000",
    processingTime: "4-6 months",
    description:
      "Caribbean citizenship through the National Development Fund or real estate investment, offering visa-free access to 150+ countries including the UK and EU Schengen area.",
    benefits: ["Visa-free to 150+ countries", "Real estate option", "Family-friendly program"],
  },
  {
    slug: "st-kitts",
    name: "St. Kitts & Nevis",
    flag: "🇰🇳",
    status: "coming_soon" as const,
    region: "Caribbean",
    investmentMin: "$250,000",
    processingTime: "4-6 months",
    description:
      "The platinum standard of citizenship by investment programs, operating since 1984. One of the most prestigious passports in the Caribbean.",
    benefits: ["Oldest CBI program (since 1984)", "Visa-free to 150+ countries", "Prestigious passport"],
  },
];

const stats = [
  { label: "Available Programs", value: "3", sub: "countries" },
  { label: "Active Applications", value: "0", sub: "in progress" },
  { label: "Processing", value: "—", sub: "avg. time" },
  { label: "Documents", value: "0", sub: "uploaded" },
];

export default function HubPage() {
  return (
    <div className="px-4 pb-8 sm:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-text-primary sm:text-2xl">
          Become an IOPn Neo Citizen today
        </h1>
        <p className="mt-1 text-sm text-text-muted sm:text-base">
          Explore citizenship programs from around the world and start your application
        </p>
      </div>

      {/* Stats row */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-surface-border bg-surface-card px-5 py-4"
          >
            <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
            <p className="mt-0.5 text-sm text-text-muted">{stat.label}</p>
            <p className="text-xs text-text-faint">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Country Grid */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-text-primary">
          Programs
        </h2>
        <div className="flex gap-2">
          <button
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-blue-light"
            style={{ background: "var(--blue-active-bg)" }}
          >
            All
          </button>
          <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-text-muted hover:bg-surface-overlay">
            Caribbean
          </button>
          <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-text-muted hover:bg-surface-overlay">
            Africa
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {countries.map((country) => (
          <Link
            key={country.slug}
            href={`/hub/${country.slug}`}
            className="group relative overflow-hidden rounded-xl border border-surface-border bg-surface-card p-5 transition-all duration-200 hover:border-surface-border-hover"
          >
            {/* Background image */}
            {country.image && (
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: `url('${country.image}')` }}
              />
            )}

            {/* Status badge */}
            <div className="absolute right-4 top-4">
              {country.status === "live" ? (
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] font-semibold"
                  style={{ background: "var(--badge-green-bg)", color: "var(--accent-green)" }}
                >
                  Live
                </span>
              ) : (
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] font-semibold"
                  style={{ background: "var(--badge-yellow-bg)", color: "var(--accent-yellow)" }}
                >
                  Coming Soon
                </span>
              )}
            </div>

            {/* Country header */}
            <div className="relative mb-3 flex items-center gap-3">
              <span className="text-3xl">{country.flag}</span>
              <div>
                <h3 className="text-base font-semibold text-text-primary">
                  {country.name}
                </h3>
                <p className="text-xs text-text-muted">{country.region}</p>
              </div>
            </div>

            {/* Description */}
            <p className="relative mb-4 line-clamp-2 text-sm leading-relaxed text-text-muted">
              {country.description}
            </p>

            {/* Key info */}
            <div className="relative mb-4 flex gap-4">
              <div>
                <p className="text-xs text-text-faint">Min. Investment</p>
                <p className="text-base font-semibold text-blue-light">
                  {country.investmentMin}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-faint">Processing</p>
                <p className="text-base font-semibold text-text-primary">
                  {country.processingTime}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="relative flex flex-wrap gap-1.5">
              {country.benefits.map((b) => (
                <span
                  key={b}
                  className="rounded-md px-2 py-1 text-xs text-text-muted"
                  style={{ background: "var(--tag-bg)" }}
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Hover arrow */}
            <div className="absolute bottom-5 right-5 opacity-0 transition-all duration-200 group-hover:opacity-100">
              <svg
                className="h-5 w-5 text-blue-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
