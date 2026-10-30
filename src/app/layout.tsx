import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afterwish, Inc. — Software for Creation & Commerce",
  description:
    "Afterwish, Inc. is a technology company building and operating modern software platforms, including Nonda AI (nonda.ai) and Listuply (listuply.com).",
  keywords: [
    "Afterwish, Inc.",
    "Afterwish",
    "Nonda AI",
    "nonda.ai",
    "Listuply",
    "listuply.com",
    "AI studio",
    "online marketplace",
    "software company",
  ],
  openGraph: {
    title: "Afterwish, Inc. — Software for Creation & Commerce",
    description:
      "Parent technology company behind Nonda AI (nonda.ai) and Listuply (listuply.com).",
    type: "website",
    siteName: "Afterwish, Inc.",
  },
  metadataBase: new URL("https://afterwishinc.com"),
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Afterwish, Inc.",
  legalName: "Afterwish, Inc.",
  description:
    "Technology company building and operating generative AI creative tools and digital marketplace platforms.",
  email: "support@afterwishinc.com",
  subOrganization: [
    {
      "@type": "Organization",
      name: "Nonda AI",
      url: "https://nonda.ai",
      description:
        "Multi-model AI creative studio for chat, image, video, voice, music, and collaborative design.",
    },
    {
      "@type": "Organization",
      name: "Listuply",
      url: "https://listuply.com",
      description:
        "Local classifieds and online marketplace platform across the United States.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
