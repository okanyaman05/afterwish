import Link from "next/link";

export function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0C12.9 7.2 16.8 11.1 24 12C16.8 12.9 12.9 16.8 12 24C11.1 16.8 7.2 12.9 0 12C7.2 11.1 11.1 7.2 12 0Z" />
    </svg>
  );
}

export function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3.5 8.5L8.5 3.5M4 3.5H8.5V8" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1.5" />
      <path d="M2.5 4.5L8 8.75L13.5 4.5" />
    </svg>
  );
}

export function SiteHeader({ home = false }: { home?: boolean }) {
  const prefix = home ? "" : "/";
  return (
    <div className="header-shell wrap">
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Afterwish, Inc. home">
          <Star />
          Afterwish
        </Link>
        <nav className="site-nav" aria-label="Main">
          <a href={`${prefix}#products`}>Products</a>
          <a href="https://nonda.ai" target="_blank" rel="noopener noreferrer">
            Nonda AI
          </a>
          <a href="https://listuply.com" target="_blank" rel="noopener noreferrer">
            Listuply
          </a>
          <a href={`${prefix}#company`}>Company</a>
        </nav>
        <a href="mailto:support@afterwishinc.com" className="btn">
          <MailIcon />
          Contact
        </a>
      </header>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="wrap">
      <div className="site-footer">
        <span>© {new Date().getFullYear()} Afterwish, Inc.</span>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
