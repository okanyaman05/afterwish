import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service — Afterwish, Inc.",
  description: "Terms of Service for Afterwish, Inc. and its digital properties.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-xs font-mono text-zinc-500">
            Effective Date: October 2026 · Entity: Afterwish, Inc.
          </p>

          <div className="mt-8 space-y-6 text-sm text-zinc-600 leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-zinc-950">
                1. Agreement to Terms
              </h2>
              <p className="mt-2">
                These Terms of Service govern your access to and use of the
                corporate website of <strong>Afterwish, Inc.</strong> Services
                provided through our operating platforms—including{" "}
                <strong>Nonda AI</strong> (https://nonda.ai) and{" "}
                <strong>Listuply</strong> (https://listuply.com)—are governed by
                these foundational terms alongside the platform-specific terms of
                use published on each platform.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-950">
                2. Intellectual Property
              </h2>
              <p className="mt-2">
                All software, branding, interface designs, and documentation
                associated with Afterwish, Inc., Nonda AI, and Listuply are the
                exclusive property of Afterwish, Inc. or its respective
                licensors.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-950">
                3. Billing &amp; Subscriptions
              </h2>
              <p className="mt-2">
                Paid digital products, SaaS subscriptions, usage credits, and
                marketplace services offered across Afterwish, Inc. platforms
                display clear pricing prior to checkout. Billing inquiries and
                support requests are handled directly by our support team.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-950">
                4. Contact Information
              </h2>
              <p className="mt-2">
                Questions regarding these Terms of Service or any Afterwish,
                Inc. product may be directed to{" "}
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
