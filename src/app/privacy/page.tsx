import { SiteFooter, SiteHeader } from "../_components/site";

export const metadata = {
  title: "Privacy Policy — Afterwish, Inc.",
  description: "Privacy Policy for Afterwish, Inc. and its digital properties.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <main className="wrap">
        <article className="legal">
          <h1>Privacy Policy</h1>
          <p className="effective">Effective October 2026</p>

          <h2>1. Overview</h2>
          <p>
            Afterwish, Inc. (&ldquo;Afterwish,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is
            committed to protecting personal data across our corporate website
            and our owned and operated platforms, including{" "}
            <strong>Nonda AI</strong> (https://nonda.ai) and{" "}
            <strong>Listuply</strong> (https://listuply.com).
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            When you correspond with Afterwish, Inc. or use our software
            platforms, we may collect information you provide directly (such as
            your name, email address, account credentials, and billing details
            processed via PCI-compliant payment providers) as well as technical
            telemetry necessary to maintain service security and performance.
          </p>

          <h2>3. How We Use Information</h2>
          <p>
            We use collected information strictly to operate, maintain, and
            improve our software services, process transactions, provide
            customer support, enforce our terms of service, and comply with
            applicable legal obligations. We do not sell personal contact
            information to third parties.
          </p>

          <h2>4. Platform-Specific Policies</h2>
          <p>
            Each individual product operated by Afterwish, Inc. (including Nonda
            AI and Listuply) maintains detailed, service-specific privacy
            disclosures accessible directly on its respective domain.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            For privacy-related inquiries, data access requests, or compliance
            questions, please contact Afterwish, Inc. at{" "}
            <a href="mailto:support@afterwishinc.com">support@afterwishinc.com</a>
            .
          </p>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
