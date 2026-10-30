import { SiteFooter, SiteHeader } from "../_components/site";

export const metadata = {
  title: "Terms of Service — Afterwish, Inc.",
  description: "Terms of Service for Afterwish, Inc. and its digital properties.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />

      <main className="wrap">
        <article className="legal">
          <h1>Terms of Service</h1>
          <p className="effective">Effective October 2026</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service govern your access to and use of the
            corporate website of <strong>Afterwish, Inc.</strong> Services
            provided through our operating platforms—including{" "}
            <strong>Nonda AI</strong> (https://nonda.ai) and{" "}
            <strong>Listuply</strong> (https://listuply.com)—are governed by
            these foundational terms alongside the platform-specific terms of
            use published on each platform.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            All software, branding, interface designs, and documentation
            associated with Afterwish, Inc., Nonda AI, and Listuply are the
            exclusive property of Afterwish, Inc. or its respective licensors.
          </p>

          <h2>3. Billing &amp; Subscriptions</h2>
          <p>
            Paid digital products, SaaS subscriptions, usage credits, and
            marketplace services offered across Afterwish, Inc. platforms
            display clear pricing prior to checkout. Billing inquiries and
            support requests are handled directly by our support team.
          </p>

          <h2>4. Contact Information</h2>
          <p>
            Questions regarding these Terms of Service or any Afterwish, Inc.
            product may be directed to{" "}
            <a href="mailto:support@afterwishinc.com">support@afterwishinc.com</a>
            .
          </p>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
