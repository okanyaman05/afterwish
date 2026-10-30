import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Afterwish, Inc.",
  description: "Privacy Policy for Afterwish, Inc. and its digital properties.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900">
      <header className="border-b border-zinc-200/80 bg-white">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Afterwish, Inc.
          </Link>
          <span className="font-mono text-xs text-zinc-400">
            AFTERWISH, INC.
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-zinc-200/90 bg-white p-8 sm:p-12 shadow-2xs">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            Legal Documentation
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs font-mono text-zinc-500">
            Effective Date: October 2026 · Entity: Afterwish, Inc.
          </p>

          <div className="mt-8 space-y-6 text-sm text-zinc-600 leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-zinc-950">
                1. Overview
              </h2>
              <p className="mt-2">
                Afterwish, Inc. (&ldquo;Afterwish,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy
                and is committed to protecting personal data across our corporate
                website and our owned and operated platforms, including{" "}
                <strong>Nonda AI</strong> (https://nonda.ai) and{" "}
                <strong>Listuply</strong> (https://listuply.com).
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-950">
                2. Information We Collect
              </h2>
              <p className="mt-2">
                When you correspond with Afterwish, Inc. or use our software
                platforms, we may collect information you provide directly (such
                as your name, email address, account credentials, and billing
                details processed via PCI-compliant payment providers) as well as
                technical telemetry necessary to maintain service security and
                performance.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-950">
                3. How We Use Information
              </h2>
              <p className="mt-2">
                We use collected information strictly to operate, maintain, and
                improve our software services, process transactions, provide
                customer support, enforce our terms of service, and comply with
                applicable legal obligations. We do not sell personal contact
                information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-950">
                4. Platform-Specific Policies
              </h2>
              <p className="mt-2">
                Each individual product operated by Afterwish, Inc. (including
                Nonda AI and Listuply) maintains detailed, service-specific
                privacy disclosures accessible directly on its respective
                domain.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-950">
                5. Contact Us
              </h2>
              <p className="mt-2">
                For privacy-related inquiries, data access requests, or
                compliance questions, please contact Afterwish, Inc. at{" "}
                <a
                  href="mailto:support@afterwishinc.com"
                  className="font-medium text-zinc-900 underline underline-offset-4"
                >
                  support@afterwishinc.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
