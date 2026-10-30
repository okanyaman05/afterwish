import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Store,
  ShieldCheck,
  Layers,
  Globe,
  Cpu,
  Mail,
  CheckCircle2,
  SlidersHorizontal,
  Film,
  Image as ImageIcon,
  MessageSquare,
  MapPin,
  Calculator,
  Search,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-zinc-900">
      {/* Top Subtle Announcement / Verification Bar */}
      <div className="border-b border-zinc-200/80 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono tracking-tight text-zinc-600">
              AFTERWISH, INC.
            </span>
            <span className="hidden sm:inline text-zinc-300">·</span>
            <span className="hidden sm:inline">
              Corporate &amp; Product Directory
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono">
            <a
              href="https://nonda.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors inline-flex items-center gap-0.5"
            >
              nonda.ai
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <span className="text-zinc-300">/</span>
            <a
              href="https://listuply.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors inline-flex items-center gap-0.5"
            >
              listuply.com
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-[#FAFAFA]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white font-mono text-sm font-semibold tracking-tighter shadow-xs transition-transform group-hover:scale-105">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-zinc-950 leading-none">
                Afterwish
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mt-0.5">
                Afterwish, Inc.
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <a
              href="#products"
              className="hover:text-zinc-950 transition-colors"
            >
              Products
            </a>
            <a
              href="#architecture"
              className="hover:text-zinc-950 transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#company"
              className="hover:text-zinc-950 transition-colors"
            >
              Company
            </a>
            <a
              href="#contact"
              className="hover:text-zinc-950 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:support@afterwishinc.com"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-2xs hover:border-zinc-300 hover:text-zinc-950 transition-all"
            >
              <Mail className="h-3.5 w-3.5 text-zinc-400" />
              <span>support@afterwishinc.com</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-200/80 bg-grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAFAFA]/60 to-[#FAFAFA] pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-2xs mb-8">
                <span className="font-mono uppercase tracking-wider text-[11px] text-zinc-900 font-semibold">
                  Holding &amp; Product Studio
                </span>
                <span className="text-zinc-300">|</span>
                <span>Consumer AI &amp; Digital Marketplaces</span>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl md:text-6xl leading-[1.08]">
                Building enduring software for creation and commerce.
              </h1>

              <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-2xl">
                <strong className="font-medium text-zinc-900">
                  Afterwish, Inc.
                </strong>{" "}
                is a technology company that designs, builds, and operates
                scalable web platforms. We develop multi-modal generative AI
                workspaces and structured digital marketplaces used by creators,
                teams, and everyday consumers.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-xs hover:bg-zinc-800 transition-colors"
                >
                  Explore Our Platforms
                </a>
                <a
                  href="#company"
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                >
                  Corporate Overview
                </a>
              </div>
            </div>

            {/* Key Metrics / Platform Strip */}
            <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-200/90 shadow-xs sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Legal Entity
                </p>
                <p className="mt-2 text-lg font-semibold text-zinc-950">
                  Afterwish, Inc.
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Parent Software Corporation
                </p>
              </div>
              <div className="bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Creative AI Division
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-semibold text-zinc-950">
                    Nonda AI
                  </p>
                  <a
                    href="https://nonda.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-zinc-500 hover:text-zinc-950 inline-flex items-center gap-0.5"
                  >
                    nonda.ai <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <p className="mt-1 text-xs text-zinc-500">
                  Multi-Modal AI Studio &amp; SaaS
                </p>
              </div>
              <div className="bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Commerce Division
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-semibold text-zinc-950">
                    Listuply
                  </p>
                  <a
                    href="https://listuply.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-zinc-500 hover:text-zinc-950 inline-flex items-center gap-0.5"
                  >
                    listuply.com <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <p className="mt-1 text-xs text-zinc-500">
                  U.S. Classifieds &amp; Local Marketplace
                </p>
              </div>
              <div className="bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Business Model
                </p>
                <p className="mt-2 text-lg font-semibold text-zinc-950">
                  SaaS &amp; Marketplace
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Subscriptions, Compute Credits &amp; Ads
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Products Section */}
        <section id="products" className="py-24 border-b border-zinc-200/80">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  01 / Owned &amp; Operated Platforms
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  Our Product Portfolio
                </h2>
              </div>
              <p className="max-w-md text-sm text-zinc-600 leading-relaxed">
                Every platform under Afterwish, Inc. is engineered in-house,
                combining intuitive interfaces with reliable cloud
                infrastructure.
              </p>
            </div>

            <div className="space-y-12">
              {/* Product 1: Nonda AI */}
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-xs transition-all hover:border-zinc-300">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Narrative Column */}
                  <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="inline-flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white">
                            <Sparkles className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                              Nonda AI
                            </h3>
                            <p className="font-mono text-xs text-zinc-400">
                              https://nonda.ai
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs font-medium text-zinc-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Production · SaaS &amp; Credits
                        </span>
                      </div>

                      <p className="mt-6 text-base text-zinc-600 leading-relaxed">
                        <strong className="font-medium text-zinc-900">
                          One studio from idea to finished piece.
                        </strong>{" "}
                        Nonda AI is a unified creative workspace that brings
                        leading foundation models for AI chat, image generation,
                        video editing, voice synthesis, music creation, and
                        layered design into a single collaborative studio.
                      </p>

                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-zinc-100 bg-zinc-50/70 p-4">
                          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                            <ImageIcon className="h-4 w-4 text-zinc-500" />
                            Multi-Model Creation
                          </div>
                          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                            Generate and refine images, video, voice, and music
                            using state-of-the-art AI models in one unified
                            catalog.
                          </p>
                        </div>

                        <div className="rounded-xl border border-zinc-100 bg-zinc-50/70 p-4">
                          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                            <Film className="h-4 w-4 text-zinc-500" />
                            Design &amp; Motion Studio
                          </div>
                          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                            Multi-track timeline video editing, Live Edit, Clip
                            Factory, Lipsync Studio, and layered canvas tools.
                          </p>
                        </div>

                        <div className="rounded-xl border border-zinc-100 bg-zinc-50/70 p-4">
                          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                            <MessageSquare className="h-4 w-4 text-zinc-500" />
                            Nonda Desk &amp; Workspace
                          </div>
                          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                            Connected AI Docs, Sheets, Notes, and private cloud
                            Drive with shared Team DNA and brand assets.
                          </p>
                        </div>

                        <div className="rounded-xl border border-zinc-100 bg-zinc-50/70 p-4">
                          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                            <Cpu className="h-4 w-4 text-zinc-500" />
                            Transparent Credit System
                          </div>
                          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                            Pre-execution credit estimates, flexible subscription
                            plans, and on-demand credit packages for individuals
                            and teams.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-zinc-500">
                        <span className="font-medium text-zinc-800">
                          Primary Revenue:
                        </span>{" "}
                        Recurring SaaS Subscriptions &amp; Usage Credit Packages
                      </div>
                      <a
                        href="https://nonda.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition-colors"
                      >
                        Visit nonda.ai
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Architectural Preview Column */}
                  <div className="border-t lg:border-t-0 lg:border-l border-zinc-200/80 bg-zinc-50/80 p-8 flex flex-col justify-center lg:col-span-5">
                    <div className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-2xs">
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-zinc-900" />
                          <span className="font-mono text-xs font-medium text-zinc-800">
                            Nonda Creative Studio
                          </span>
                        </div>
                        <span className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-[10px] text-zinc-600">
                          v2026 · Multi-Modal
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-3">
                          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                            <span>ACTIVE WORKSPACES</span>
                            <span>6 MODULES</span>
                          </div>
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {[
                              "AI Chat & Arena",
                              "Image Studio",
                              "Video Timeline",
                              "Voice & Music",
                              "Design Canvas",
                              "Nonda Desk",
                            ].map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md border border-zinc-200/80 bg-white px-2.5 py-1 text-xs font-medium text-zinc-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-3">
                          <div className="text-[11px] font-mono text-zinc-500">
                            INTEGRATED MODEL CATALOG
                          </div>
                          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                            Unified API orchestration across frontier language,
                            diffusion, video, and audio synthesis models with
                            team budget controls.
                          </p>
                        </div>

                        <div className="flex items-center justify-between rounded-lg bg-zinc-950 px-3.5 py-2.5 text-xs text-white">
                          <span className="font-mono text-[11px] text-zinc-300">
                            © Afterwish, Inc.
                          </span>
                          <span className="font-mono text-[11px] text-emerald-400">
                            ● Operational
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 2: Listuply */}
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-xs transition-all hover:border-zinc-300">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Narrative Column */}
                  <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="inline-flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-700 text-white">
                            <Store className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                              Listuply
                            </h3>
                            <p className="font-mono text-xs text-zinc-400">
                              https://listuply.com
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs font-medium text-zinc-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Production · U.S. Marketplace
                        </span>
                      </div>

                      <p className="mt-6 text-base text-zinc-600 leading-relaxed">
                        <strong className="font-medium text-zinc-900">
                          Buy and sell locally across the United States.
                        </strong>{" "}
                        Listuply is a modern classifieds marketplace built for
                        high-signal local discovery—allowing buyers to find
                        exactly what they need near them and sellers to list
                        goods with structured, category-specific attributes.
                      </p>

                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-zinc-100 bg-zinc-50/70 p-4">
                          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                            <MapPin className="h-4 w-4 text-zinc-500" />
                            ZIP-Radius Local Discovery
                          </div>
                          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                            Precision location filtering across all 50 U.S.
                            states for vehicles, real estate, jobs, services,
                            and everyday goods.
                          </p>
                        </div>

                        <div className="rounded-xl border border-zinc-100 bg-zinc-50/70 p-4">
                          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                            <SlidersHorizontal className="h-4 w-4 text-zinc-500" />
                            Structured Category Filters
                          </div>
                          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                            Deep domain attributes tailored to cars, property
                            listings, commercial equipment, electronics, and
                            home goods.
                          </p>
                        </div>

                        <div className="rounded-xl border border-zinc-100 bg-zinc-50/70 p-4">
                          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                            <Calculator className="h-4 w-4 text-zinc-500" />
                            Decision &amp; Valuation Tools
                          </div>
                          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                            Built-in vehicle payment estimators, housing budget
                            calculators, and used-item value estimators.
                          </p>
                        </div>

                        <div className="rounded-xl border border-zinc-100 bg-zinc-50/70 p-4">
                          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                            <Search className="h-4 w-4 text-zinc-500" />
                            Listuply AI Assistant
                          </div>
                          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                            Integrated intelligent marketplace search assistant
                            helping users compare listings and navigate local
                            categories.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-zinc-500">
                        <span className="font-medium text-zinc-800">
                          Primary Revenue:
                        </span>{" "}
                        Promoted Listings, Marketplace Services &amp; Display
                        Advertising
                      </div>
                      <a
                        href="https://listuply.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition-colors"
                      >
                        Visit listuply.com
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Architectural Preview Column */}
                  <div className="border-t lg:border-t-0 lg:border-l border-zinc-200/80 bg-zinc-50/80 p-8 flex flex-col justify-center lg:col-span-5">
                    <div className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-2xs">
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-violet-600" />
                          <span className="font-mono text-xs font-medium text-zinc-800">
                            Listuply Marketplace
                          </span>
                        </div>
                        <span className="rounded bg-violet-50 px-2 py-0.5 font-mono text-[10px] text-violet-700">
                          U.S. Nationwide
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-3">
                          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                            <span>CORE MARKETPLACE VERTICALS</span>
                            <span>U.S. ZIP SEARCH</span>
                          </div>
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {[
                              "Vehicles",
                              "Real Estate",
                              "Jobs",
                              "Local Services",
                              "Electronics",
                              "Business Equipment",
                            ].map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md border border-zinc-200/80 bg-white px-2.5 py-1 text-xs font-medium text-zinc-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-3">
                          <div className="text-[11px] font-mono text-zinc-500">
                            BUYER &amp; SELLER INFRASTRUCTURE
                          </div>
                          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                            Verified user accounts, automated moderation,
                            structured listing schemas, and interactive
                            financial calculators.
                          </p>
                        </div>

                        <div className="flex items-center justify-between rounded-lg bg-zinc-950 px-3.5 py-2.5 text-xs text-white">
                          <span className="font-mono text-[11px] text-zinc-300">
                            © Afterwish, Inc.
                          </span>
                          <span className="font-mono text-[11px] text-emerald-400">
                            ● Operational
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities & Operating Principles */}
        <section
          id="architecture"
          className="py-24 border-b border-zinc-200/80 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                02 / Operating Foundation
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                Engineered for reliability, clarity, and scale.
              </h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Afterwish, Inc. provides centralized product engineering,
                cloud infrastructure, compliance governance, and customer
                operations across all of our digital properties.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200/80 bg-[#FAFAFA] p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-2xs">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-zinc-950">
                  Shared Cloud Architecture
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  Our platforms run on modern edge-cached web infrastructure,
                  distributed databases, and low-latency inference pipelines
                  designed for high availability.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200/80 bg-[#FAFAFA] p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-2xs">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-zinc-950">
                  Trust, Safety &amp; Compliance
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  We enforce strict content moderation, transparent billing
                  disclosures, encrypted payment processing, and privacy-first
                  data governance across every product.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200/80 bg-[#FAFAFA] p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-2xs">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-zinc-950">
                  Direct-to-Consumer Scale
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  We build self-serve software products with clear, upfront
                  pricing—empowering individuals, creators, and small businesses
                  without enterprise complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate & Verification Summary Section */}
        <section id="company" className="py-24 border-b border-zinc-200/80">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  03 / Corporate Information
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
                  About Afterwish, Inc.
                </h2>
                <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
                  Afterwish, Inc. serves as the parent operating entity for
                  Nonda AI and Listuply. All software intellectual property,
                  billing operations, vendor relationships, and customer support
                  channels are managed directly by Afterwish, Inc.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "100% in-house software development & product operations",
                    "Clear digital subscription & marketplace monetization",
                    "Dedicated customer & billing support team",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-xs text-zinc-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-xs">
                  <div className="border-b border-zinc-100 bg-zinc-50/60 px-6 py-4 flex items-center justify-between">
                    <span className="font-mono text-xs font-medium text-zinc-700">
                      CORPORATE PROFILE &amp; ENTITY DETAILS
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Active Entity
                    </span>
                  </div>

                  <dl className="divide-y divide-zinc-100 text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-4 gap-1">
                      <dt className="font-medium text-zinc-500">
                        Legal Entity Name
                      </dt>
                      <dd className="sm:col-span-2 font-semibold text-zinc-950">
                        Afterwish, Inc.
                      </dd>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-4 gap-1">
                      <dt className="font-medium text-zinc-500">
                        Industry / Sector
                      </dt>
                      <dd className="sm:col-span-2 text-zinc-800">
                        Software Publishing, Generative AI SaaS &amp; Online
                        Marketplaces
                      </dd>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-4 gap-1">
                      <dt className="font-medium text-zinc-500">
                        Active Web Properties
                      </dt>
                      <dd className="sm:col-span-2 flex flex-wrap gap-3 font-mono text-xs">
                        <a
                          href="https://nonda.ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-zinc-800 hover:border-zinc-300"
                        >
                          https://nonda.ai
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                        <a
                          href="https://listuply.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-zinc-800 hover:border-zinc-300"
                        >
                          https://listuply.com
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </dd>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-4 gap-1">
                      <dt className="font-medium text-zinc-500">
                        Products &amp; Services
                      </dt>
                      <dd className="sm:col-span-2 text-zinc-800">
                        Digital creative studio subscriptions, AI compute
                        credits, and local classifieds marketplace listings.
                      </dd>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-4 gap-1">
                      <dt className="font-medium text-zinc-500">
                        Official Contact
                      </dt>
                      <dd className="sm:col-span-2 font-mono text-xs">
                        <a
                          href="mailto:support@afterwishinc.com"
                          className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600"
                        >
                          support@afterwishinc.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-zinc-200/90 bg-[#FAFAFA] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  04 / Contact &amp; Support
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                  Get in touch with Afterwish, Inc.
                </h2>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                  For corporate inquiries, partnership opportunities, banking
                  and compliance verification, or customer support regarding
                  Nonda AI and Listuply, please reach out to our team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                <a
                  href="mailto:support@afterwishinc.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white shadow-xs hover:bg-zinc-800 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>support@afterwishinc.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/80 bg-[#FAFAFA] py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-8 border-b border-zinc-200/60">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-white font-mono text-xs font-semibold">
                A
              </div>
              <span className="text-sm font-semibold tracking-tight text-zinc-950">
                Afterwish, Inc.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600">
              <a
                href="https://nonda.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 transition-colors inline-flex items-center gap-0.5"
              >
                Nonda AI
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href="https://listuply.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 transition-colors inline-flex items-center gap-0.5"
              >
                Listuply
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <Link
                href="/privacy"
                className="hover:text-zinc-950 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-zinc-950 transition-colors"
              >
                Terms of Service
              </Link>
              <a
                href="mailto:support@afterwishinc.com"
                className="hover:text-zinc-950 transition-colors"
              >
                support@afterwishinc.com
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
            <p>© {new Date().getFullYear()} Afterwish, Inc. All rights reserved.</p>
            <p>
              Nonda AI (nonda.ai) and Listuply (listuply.com) are owned and
              operated by Afterwish, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
