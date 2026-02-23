"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

interface CountryData {
  name: string;
  flag: string;
  status: "live" | "coming_soon";
  region: string;
  investmentMin: string;
  processingTime: string;
  description: string;
  longDescription: string;
  benefits: string[];
  requirements: string[];
  steps: { title: string; description: string }[];
}

const countryData: Record<string, CountryData> = {
  "sao-tome": {
    name: "São Tomé & Príncipe",
    flag: "🇸🇹",
    status: "live",
    region: "Africa",
    investmentMin: "$150,000",
    processingTime: "4-6 months",
    description:
      "Citizenship by Investment through a non-refundable contribution to the National Transformation Fund.",
    longDescription:
      "São Tomé and Príncipe's Citizenship by Investment Program, offered through an exclusive partnership between IOPn and the São Tomé government, provides one of the most accessible pathways to a second citizenship. This tranquil island nation in the Gulf of Guinea — known as Africa's Hidden Paradise — offers a streamlined digital application process with no residency requirements, no interview, and the ability to include your entire family. Investments are non-refundable contributions to the National Transformation Fund, and applicants automatically receive OPN tokens staked on their behalf as an exclusive investor benefit.",
    benefits: [
      "Visa-free or visa-on-arrival access to 70+ countries",
      "No physical residency or visit requirement",
      "Dual and multi-citizenship allowed",
      "Include spouse, up to 2 children (under 30), and up to 2 parents (55+)",
      "No interview or language requirements",
      "Full citizenship rights for life",
      "No wealth, gift, inheritance, or capital gains tax",
      "Exclusive OPN token staking rewards (2,500,000 tokens at $0.06)",
      "Blockchain-powered application tracking",
      "Authorized agent: Carib International",
    ],
    requirements: [
      "Minimum age of 18 years",
      "Clean criminal record — no ongoing investigations",
      "Valid source of income and proof of funds",
      "Medical clearance certificate (including HIV/AIDS test, within 3 months)",
      "Police clearance from country of residence (last 10 years, within 6 months)",
      "Passport copies (all pages)",
      "Birth certificate (apostilled/notarized)",
      "Bank reference letter (within 3 months, on official letterhead)",
      "Evidence of wealth (bank statements 6 months, investments, property)",
      "Proof of address (utility bill within 3 months)",
      "Open to all nationalities except DPRK (North Korea)",
    ],
    steps: [
      {
        title: "Onboarding",
        description:
          "Complete KYC verification and initial payment. Your application is assigned a reference number (STP-XXXXXX).",
      },
      {
        title: "Preparing",
        description:
          "Submit required forms and documentation — passport, birth certificate, police clearance, medical certificate, bank references, and proof of wealth.",
      },
      {
        title: "Processing",
        description:
          "Background checking and due diligence review conducted by the government and authorized agents.",
      },
      {
        title: "Granted",
        description:
          "Approval in principle issued. Complete your $150,000 contribution to the National Transformation Fund via USDC, USDT, or DAI.",
      },
      {
        title: "Certified",
        description:
          "Certificate of registration issued. Your São Tomé and Príncipe passport is processed and delivered.",
      },
      {
        title: "Completion",
        description:
          "Receive your citizenship certificate, passport, and soulbound NFT representing your OPN token staking position (3-year lock period).",
      },
    ],
  },
  antigua: {
    name: "Antigua & Barbuda",
    flag: "🇦🇬",
    status: "coming_soon",
    region: "Caribbean",
    investmentMin: "$230,000",
    processingTime: "4-6 months",
    description:
      "Caribbean citizenship through the National Development Fund or approved real estate investment.",
    longDescription:
      "Antigua and Barbuda's Citizenship by Investment Program, established in 2013, offers a direct path to Caribbean citizenship with one of the most powerful passports in the region. Applicants can choose between a contribution to the National Development Fund or an approved real estate investment. Antigua & Barbuda is a member of the Commonwealth and CARICOM, providing holders with visa-free access to over 150 countries including the UK, EU Schengen area, Hong Kong, and Singapore.",
    benefits: [
      "Visa-free access to 150+ countries including UK & EU Schengen",
      "Commonwealth of Nations member",
      "Choice of NDF contribution or real estate investment",
      "Include spouse, children, parents, and siblings",
      "No residency requirement (5-day visit within 5 years)",
      "Dual citizenship allowed",
      "Mandatory virtual interview for applicants 16+",
      "Lifetime citizenship, passed to future generations",
      "No income, wealth, or inheritance tax",
      "English-speaking nation",
    ],
    requirements: [
      "Minimum age of 18 years",
      "Clean criminal record",
      "No visa refusals from visa-free countries",
      "Proof of legitimate source of funds",
      "Medical examination certificate",
      "Police clearance from country of residence",
      "Passport copies and birth certificate",
      "Professional or bank reference letters",
      "Completed application forms",
      "Virtual interview ($1,500 per applicant aged 16+)",
    ],
    steps: [
      {
        title: "Eligibility Assessment",
        description:
          "Preliminary review of your background, nationality, and financial qualifications to confirm eligibility.",
      },
      {
        title: "Document Preparation",
        description:
          "Compile all required legal, financial, and identity documentation with certified translations where needed.",
      },
      {
        title: "Application Submission",
        description:
          "Submit the complete application package through an authorized agent to the Citizenship by Investment Unit (CIU).",
      },
      {
        title: "Due Diligence & Processing",
        description:
          "The government conducts thorough background checks, financial verification, and compliance review.",
      },
      {
        title: "Approval & Investment",
        description:
          "Upon approval, complete your chosen investment — NDF contribution ($230,000) or approved real estate ($300,000+).",
      },
      {
        title: "Citizenship & Passport",
        description:
          "Receive your certificate of citizenship and apply for your Antigua & Barbuda passport.",
      },
    ],
  },
  "st-kitts": {
    name: "St. Kitts & Nevis",
    flag: "🇰🇳",
    status: "coming_soon",
    region: "Caribbean",
    investmentMin: "$250,000",
    processingTime: "4-6 months",
    description:
      "The platinum standard of citizenship by investment since 1984.",
    longDescription:
      "St. Kitts and Nevis operates the world's oldest and most prestigious Citizenship by Investment Program, established in 1984. Known as the 'Platinum Standard' of CBI, it offers one of the most powerful passports in the Caribbean with visa-free access to over 150 countries including the UK, EU Schengen, Hong Kong, and Singapore. Applicants can choose between the Sustainable Island State Contribution (SISC) or an approved real estate investment, both of which grant full citizenship rights for life.",
    benefits: [
      "World's oldest CBI program (established 1984)",
      "Visa-free access to 150+ countries",
      "Prestigious passport recognized worldwide",
      "No residency or visit requirement",
      "No tax on worldwide income, wealth, or inheritance",
      "Dual citizenship allowed",
      "Fast-track processing available (45-60 days)",
      "Include family — dependents up to age 30, parents 55+",
      "Real estate from $325,000 (approved) or $600,000 (private)",
      "Commonwealth of Nations member",
    ],
    requirements: [
      "Minimum age of 18 years",
      "No criminal convictions",
      "Pass enhanced due diligence screening",
      "Source of funds documentation",
      "Medical examination certificate",
      "Police clearance certificate",
      "Professional reference letters",
      "Passport copies and birth certificate",
      "Complete application dossier",
    ],
    steps: [
      {
        title: "Consultation",
        description:
          "Review investment options — Sustainable Island State Contribution ($250,000), approved real estate ($325,000+), or private property ($600,000+).",
      },
      {
        title: "Application Compilation",
        description:
          "Prepare and compile all required legal, financial, and identity documents with certified copies.",
      },
      {
        title: "Submission",
        description:
          "Formal submission through an authorized agent to the Citizenship Investment Unit (CIU).",
      },
      {
        title: "Due Diligence",
        description:
          "Enhanced background screening, financial verification, and compliance checks by the government.",
      },
      {
        title: "Approval & Investment",
        description:
          "Upon approval, complete the chosen investment and receive your citizenship certificate.",
      },
      {
        title: "Passport Issuance",
        description:
          "Apply for and receive your St. Kitts & Nevis passport with full citizenship rights.",
      },
    ],
  },
};

export default function CountryPage() {
  const params = useParams();
  const slug = params.country as string;
  const country = countryData[slug];

  if (!country) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">🌍</p>
          <h1 className="text-xl font-bold text-text-primary mb-2">
            Country Not Found
          </h1>
          <p className="text-sm text-text-muted mb-6">
            This program isn&apos;t available yet.
          </p>
          <Link
            href="/hub"
            className="rounded-lg bg-blue-bright px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-bright/80"
          >
            Back to Hub
          </Link>
        </div>
      </div>
    );
  }

  const isLive = country.status === "live";

  return (
    <div className="relative px-4 py-6 sm:px-8 sm:py-8">
      {/* Background image for São Tomé */}
      {slug === "sao-tome" && (
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url('/sao-tome-tg.png')" }}
        />
      )}

      {/* Breadcrumb */}
      <div className="relative mb-6 flex items-center gap-2 text-xs text-text-muted">
        <Link href="/hub" className="hover:text-blue-light transition-colors">
          Dashboard
        </Link>
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-primary">{country.name}</span>
      </div>

      {/* Country Header */}
      <div className="relative mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="text-4xl sm:text-5xl">{country.flag}</span>
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h1 className="text-xl font-bold text-text-primary sm:text-2xl">
                {country.name}
              </h1>
              {isLive ? (
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: "var(--badge-green-bg)", color: "var(--accent-green)" }}
                >
                  Live
                </span>
              ) : (
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: "var(--badge-yellow-bg)", color: "var(--accent-yellow)" }}
                >
                  Coming Soon
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-text-muted">{country.region}</p>
          </div>
        </div>

        {isLive ? (
          <a
            href="https://saotome.netlify.app/saotome"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl bg-gradient-to-r from-blue-bright to-purple-deep px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:opacity-90 pulse-glow sm:w-auto"
          >
            Start Application
          </a>
        ) : (
          <button
            disabled
            className="w-full cursor-not-allowed rounded-xl border border-surface-border bg-surface-card px-6 py-3 text-sm font-medium text-text-muted sm:w-auto"
          >
            Notify Me When Available
          </button>
        )}
      </div>

      {/* Quick stats */}
      <div className="relative mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        <div className="rounded-xl border border-surface-border bg-surface-card/90 backdrop-blur-sm px-5 py-4">
          <p className="text-[10px] uppercase tracking-wider text-text-faint">
            Minimum Investment
          </p>
          <p className="mt-1 text-xl font-bold text-blue-light">
            {country.investmentMin}
          </p>
        </div>
        <div className="rounded-xl border border-surface-border bg-surface-card/90 backdrop-blur-sm px-5 py-4">
          <p className="text-[10px] uppercase tracking-wider text-text-faint">
            Processing Time
          </p>
          <p className="mt-1 text-xl font-bold text-text-primary">
            {country.processingTime}
          </p>
        </div>
        <div className="rounded-xl border border-surface-border bg-surface-card/90 backdrop-blur-sm px-5 py-4">
          <p className="text-[10px] uppercase tracking-wider text-text-faint">
            Status
          </p>
          <p className="mt-1 text-xl font-bold" style={{ color: isLive ? "var(--accent-green)" : "var(--accent-yellow)" }}>
            {isLive ? "Accepting Applications" : "Coming Soon"}
          </p>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main content - 2 columns */}
        <div className="space-y-6 lg:col-span-2">
          {/* About */}
          <div className="rounded-xl border border-surface-border bg-surface-card/90 backdrop-blur-sm p-6">
            <h2 className="mb-3 text-lg font-semibold text-text-primary">
              About This Program
            </h2>
            <p className="text-base leading-relaxed text-text-muted">
              {country.longDescription}
            </p>
          </div>

          {/* Process Steps */}
          <div className="rounded-xl border border-surface-border bg-surface-card/90 backdrop-blur-sm p-6">
            <h2 className="mb-4 text-lg font-semibold text-text-primary">
              Application Process
            </h2>
            <div className="space-y-4">
              {country.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-blue-light"
                      style={{ background: "var(--stat-step-bg)" }}
                    >
                      {i + 1}
                    </div>
                    {i < country.steps.length - 1 && (
                      <div className="mt-1 h-full w-px bg-surface-border" />
                    )}
                  </div>
                  <div className="pb-4">
                    <h3 className="text-base font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="rounded-xl border border-surface-border bg-surface-card/90 backdrop-blur-sm p-6">
            <h2 className="mb-3 text-lg font-semibold text-text-primary">
              Requirements
            </h2>
            <ul className="space-y-2">
              {country.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-text-muted">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-blue-bright"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Benefits */}
          <div className="rounded-xl border border-surface-border bg-surface-card/90 backdrop-blur-sm p-6">
            <h2 className="mb-3 text-lg font-semibold text-text-primary">
              Key Benefits
            </h2>
            <ul className="space-y-2.5">
              {country.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <span className="mt-0.5" style={{ color: "var(--accent-green)" }}>&#10003;</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-purple-deep/30 bg-gradient-to-b from-purple-deep/10 to-surface-card p-6 text-center">
            <p className="mb-2 text-base font-semibold text-text-primary">
              Ready to get started?
            </p>
            <p className="mb-4 text-sm text-text-muted">
              {isLive
                ? "Begin your citizenship journey today."
                : "Join the waitlist to be notified when this program launches."}
            </p>
            {isLive ? (
              <a
                href="https://saotome.netlify.app/saotome"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-gradient-to-r from-blue-bright to-purple-deep px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:opacity-90"
              >
                Apply Now
              </a>
            ) : (
              <button className="w-full rounded-lg border border-surface-border bg-surface-overlay px-4 py-2.5 text-sm font-medium text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary">
                Join Waitlist
              </button>
            )}
          </div>

          {/* Support */}
          <div className="rounded-xl border border-surface-border bg-surface-card/90 backdrop-blur-sm p-6">
            <h2 className="mb-2 text-base font-semibold text-text-primary">
              Need Help?
            </h2>
            <p className="mb-3 text-sm text-text-muted">
              Have questions about the application process or requirements? Our NEO Assistant is available 24/7 to guide you through every step.
            </p>
            <button className="w-full rounded-lg border border-surface-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-surface-border-hover hover:text-text-primary">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
