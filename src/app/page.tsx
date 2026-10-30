import { ExternalIcon, SiteFooter, SiteHeader, Star } from "./_components/site";

const products = [
  {
    name: "Nonda AI",
    url: "https://nonda.ai",
    domain: "nonda.ai",
    description:
      "One studio from idea to finished piece. Chat with leading AI models, then create images, video, voice and music, and edit it all in a shared workspace with your team.",
    note: "Paid through monthly plans and credit packs, with the cost shown before each run.",
  },
  {
    name: "Listuply",
    url: "https://listuply.com",
    domain: "listuply.com",
    description:
      "Buy and sell locally across the United States. Search by ZIP code and distance, filter by what matters for cars, homes, jobs and everyday goods, and compare listings with built-in calculators.",
    note: "Revenue comes from promoted listings, marketplace services and advertising.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader home />

      <main className="wrap">
        <section className="hero">
          <Star className="hero-star" />
          <h1>Software for making things, and for finding them nearby.</h1>
          <p className="lede">
            Afterwish, Inc. designs, builds and runs two products: Nonda AI, a
            creative studio, and Listuply, a local marketplace in the United
            States.
          </p>
        </section>

        <section id="products" className="section">
          <h2>Products</h2>
          <ul className="products">
            {products.map((p) => (
              <li key={p.name} className="product">
                <div className="product-head">
                  <h3>{p.name}</h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ext"
                  >
                    {p.domain}
                    <ExternalIcon />
                  </a>
                </div>
                <p>{p.description}</p>
                <p className="note">{p.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="company" className="section about">
          <h2>Company</h2>
          <p>
            Afterwish, Inc. is the parent company of Nonda AI and Listuply. We
            write the software ourselves and handle billing, partners and
            customer support for both products directly.
          </p>
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
          </dl>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>
            For questions, partnerships, verification requests or help with
            either product, write to us.
          </p>
          <a href="mailto:support@afterwishinc.com" className="mail">
            support@afterwishinc.com
          </a>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
