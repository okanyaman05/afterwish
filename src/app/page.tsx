import {
  ExternalIcon,
  MailIcon,
  SiteFooter,
  SiteHeader,
} from "./_components/site";

const products = [
  {
    key: "nonda",
    name: "Nonda AI",
    url: "https://nonda.ai",
    domain: "nonda.ai",
    description:
      "One studio from idea to finished piece. Chat with leading AI models, then create images, video, voice and music, and edit it all in a shared workspace with your team.",
    note: "Paid through monthly plans and credit packs, with the cost shown before each run.",
  },
  {
    key: "listuply",
    name: "Listuply",
    url: "https://listuply.com",
    domain: "listuply.com",
    description:
      "Buy and sell locally across the United States. Search by ZIP code and distance, filter by what matters for cars, homes, jobs and everyday goods, and compare listings with built-in calculators.",
    note: "Revenue comes from promoted listings, marketplace services and advertising.",
  },
];

// Order is left to right across the rotated strip; outer beams are cooler and dimmer.
const beams = [
  { tone: "cool", y: "-6%" },
  { tone: "deep", y: "8%" },
  { tone: "violet", y: "-10%" },
  { tone: "bright", y: "4%" },
  { tone: "bright", y: "-4%" },
  { tone: "violet", y: "10%" },
  { tone: "deep", y: "-8%" },
  { tone: "cool", y: "6%" },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader home />

      <main>
        <section className="hero">
          <div className="beams" aria-hidden="true">
            {beams.map((b, i) => (
              <span
                key={i}
                className={`beam ${b.tone}`}
                style={{ "--y": b.y } as React.CSSProperties}
              />
            ))}
          </div>
          <div className="grain" aria-hidden="true" />

          <div className="hero-copy">
            <h1>Software for creation and commerce.</h1>
            <p className="lede">
              Afterwish, Inc. builds and runs Nonda AI, a creative AI studio,
              and Listuply, a local marketplace across the United States.
            </p>
          </div>

          <div className="hero-actions">
            <a
              href="https://nonda.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
            >
              Visit Nonda AI
              <ExternalIcon />
            </a>
            <a
              href="https://listuply.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
            >
              Visit Listuply
              <ExternalIcon />
            </a>
          </div>
          <p className="hero-meta">
            nonda.ai<span>|</span>listuply.com
            <i className="meta-mail">
              <span>|</span>support@afterwishinc.com
            </i>
          </p>
        </section>

        <div className="wrap">
          <section id="products" className="section">
            <div className="section-head">
              <h2>Two products, one team.</h2>
              <p>
                We design, build and operate both in-house, from the first line
                of code to customer support.
              </p>
            </div>
            <ul className="products">
              {products.map((p) => (
                <li key={p.key} className={`product ${p.key}`}>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <p className="note">{p.note}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ext"
                  >
                    {p.domain}
                    <ExternalIcon />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="company" className="section">
            <div className="section-head">
              <h2>About the company</h2>
              <p>
                Afterwish, Inc. is the parent company of Nonda AI and Listuply
                and handles billing, partners and support for both directly.
              </p>
            </div>
            <dl className="facts">
              <div>
                <dt>Legal name</dt>
                <dd>Afterwish, Inc.</dd>
              </div>
              <div>
                <dt>Business</dt>
                <dd>
                  Software publishing, AI software subscriptions and online
                  marketplaces
                </dd>
              </div>
              <div>
                <dt>Websites</dt>
                <dd>
                  <a href="https://nonda.ai" target="_blank" rel="noopener noreferrer">
                    nonda.ai
                  </a>
                  ,{" "}
                  <a href="https://listuply.com" target="_blank" rel="noopener noreferrer">
                    listuply.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:support@afterwishinc.com">
                    support@afterwishinc.com
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section id="contact" className="section contact">
            <div className="section-head">
              <h2>Get in touch</h2>
              <p>
                Questions, partnerships, verification requests or help with
                either product.
              </p>
            </div>
            <a href="mailto:support@afterwishinc.com" className="btn btn-lg">
              <MailIcon />
              support@afterwishinc.com
            </a>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
