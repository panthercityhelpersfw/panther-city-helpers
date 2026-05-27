import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Hash,
  Home,
  Mail,
  MapPin,
  PaintRoller,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Trash2,
  Warehouse,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { BOOKING_FORM_URL, CONTACT_EMAIL } from "@/lib/site";

const services = [
  {
    icon: PaintRoller,
    title: "Interior Painting",
    description:
      "Walls, bedrooms, trim, touch-ups, and clean refreshes that make a room feel finished again.",
  },
  {
    icon: SprayCan,
    title: "Deep Cleaning",
    description:
      "Focused cleaning for move-outs, resets, garages, kitchens, and spaces that need real attention.",
  },
  {
    icon: Trash2,
    title: "Garage Cleanouts",
    description:
      "From cluttered to usable. Sorting, hauling prep, sweeping, and clearing space without the drama.",
  },
  {
    icon: Hash,
    title: "House Number Painting",
    description:
      "Crisp curb numbers that make the front of a home look sharper and easier to find.",
  },
  {
    icon: Home,
    title: "Home Refresh",
    description:
      "Small fixes, touch-ups, organization, and detail work that helps a home feel cared for.",
  },
];

const steps = [
  "Send the quote request with the service, photos, timing, and the address area.",
  "We review the scope and follow up with questions or an honest starting estimate.",
  "Once confirmed, we show up ready, protect the space, do the work, and leave it better.",
];

const trustPoints = [
  {
    icon: MapPin,
    title: "Local Fort Worth",
    description:
      "Built for Fort Worth homeowners who want direct, practical help without a complicated process.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable communication",
    description:
      "Quote requests are reviewed before scheduling so expectations, timing, and scope are clear.",
  },
  {
    icon: BadgeCheck,
    title: "Quality work",
    description:
      "We focus on clean lines, reset spaces, honest pricing, and before/after results people can see.",
  },
];

const transformations = [
  {
    title: "Interior Painting",
    before: "scuffed wall",
    after: "clean finish",
  },
  {
    title: "Garage Refresh",
    before: "cluttered bay",
    after: "usable zones",
  },
  {
    title: "House Numbers",
    before: "faded curb",
    after: "sharp numbers",
  },
];

const serviceAreas = [
  "Fort Worth",
  "TCU area",
  "Westcliff",
  "Arlington Heights",
  "Ridglea",
  "Cultural District",
  "Nearby areas by request",
];

const faqs = [
  {
    question: "Is the quote form an instant booking?",
    answer:
      "No. It sends a quote request. Panther City Helpers reviews the scope, timing, photos, and details before confirming a job.",
  },
  {
    question: "What should I include in the request?",
    answer:
      "Include the service you need, photos if possible, your area of Fort Worth, timing, and any details that affect the scope.",
  },
  {
    question: "Do you do huge remodels or licensed trade work?",
    answer:
      "No. The focus is painting, cleaning, garage refreshes, house numbers, and small home refresh jobs. We do not claim licensed trade work.",
  },
  {
    question: "Do you use fake reviews or stock transformations?",
    answer:
      "No. The transformation blocks are design placeholders until real before/after photos are ready.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Panther City Helpers",
  description:
    "Fort Worth painting, cleaning, garage cleanout, house number painting, and home refresh service.",
  email: CONTACT_EMAIL,
  areaServed: {
    "@type": "City",
    name: "Fort Worth",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/panthercityhelpersfw/",
    "https://www.tiktok.com/@panthercityhelpersfw",
  ],
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero__content">
            <p className="eyebrow">Fort Worth's go-to for</p>
            <h1>Fort Worth's Go-To For Painting, Cleaning & Home Refresh.</h1>
            <p className="hero__lede">
              Interior painting, deep cleaning, garage refreshes, house number
              painting, and more.
            </p>
            <div className="hero__actions" aria-label="Primary actions">
              <a
                className="button button--primary"
                href={BOOKING_FORM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get a Free Quote
                <CalendarCheck size={18} aria-hidden="true" />
              </a>
              <a className="button button--secondary" href="#services">
                View Services
                <ClipboardCheck size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="trust-badges" aria-label="Trust badges">
              <span>
                <MapPin size={17} aria-hidden="true" />
                Local Fort Worth
              </span>
              <span>
                <ShieldCheck size={17} aria-hidden="true" />
                Reliable
              </span>
              <span>
                <BadgeCheck size={17} aria-hidden="true" />
                Quality Work
              </span>
            </div>
          </div>
          <div className="hero__identity" aria-label="Panther City Helpers visual identity">
            <div className="mascot-card">
              <div className="mascot-card__burst" />
              <div className="mascot-card__portrait">
                <span>PCH</span>
              </div>
              <div className="mascot-card__stamp">
                <strong>PCH</strong>
                <span>FW</span>
              </div>
              <p>Painting - Cleaning - Home Refresh</p>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Service promise">
          <div>
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>Quality work</span>
          </div>
          <div>
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>Honest prices</span>
          </div>
          <div>
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>Before/after results</span>
          </div>
        </section>

        <section className="section section--light" id="services">
          <SectionHeader
            eyebrow="Our services"
            title="Clean, practical work that changes how a space feels"
            description="No overpromising. No fake certifications. Just focused painting, cleaning, garage refreshes, and small home upgrades."
          />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card__icon">
                  <service.icon size={27} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--dark" id="transformations">
          <SectionHeader
            eyebrow="Before / After"
            title="Transformations That Speak"
            description="Real project photos can drop into these slots later. For now, the layout is ready for clean before/after proof."
            inverted
          />
          <div className="transformation-grid">
            {transformations.map((item) => (
              <article className="transformation-card" key={item.title}>
                <div className="comparison">
                  <div className="comparison__side comparison__side--before">
                    <span>Before</span>
                    <strong>{item.before}</strong>
                  </div>
                  <div className="comparison__side comparison__side--after">
                    <span>After</span>
                    <strong>{item.after}</strong>
                  </div>
                </div>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="split">
            <SectionHeader
              eyebrow="Process"
              title="Quotes stay simple"
              description="Send the request, include photos if you have them, and we will confirm the scope before anything is scheduled."
            />
            <div className="step-list">
              {steps.map((step, index) => (
                <div className="step" key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--light" id="trust">
          <SectionHeader
            eyebrow="Why homeowners trust it"
            title="Local, direct, and focused on the finish"
            description="The goal is simple: make the space look better, feel better, and stay that way."
          />
          <div className="trust-grid">
            {trustPoints.map((point) => (
              <article className="trust-card" key={point.title}>
                <point.icon size={26} aria-hidden="true" />
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-band">
          <div>
            <p className="eyebrow">Ready to refresh your space?</p>
            <h2>Get a clear quote before the work starts.</h2>
          </div>
          <a
            className="button button--primary"
            href={BOOKING_FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Get a Free Quote
            <CalendarCheck size={18} aria-hidden="true" />
          </a>
        </section>

        <section className="section request-section" id="request-help">
          <div className="request-layout">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Tell us what needs refreshing.</h2>
              <p>
                Choose a service, describe the space, and send photos through
                the quote form if you have them. We will follow up with a clear
                next step.
              </p>
              <div className="contact-card">
                <Sparkles size={22} aria-hidden="true" />
                <div>
                  <strong>Prefer email?</strong>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="section section--light" id="service-area">
          <div className="area-layout">
            <div>
              <p className="eyebrow">Service area</p>
              <h2>Serving Fort Worth, TX</h2>
              <p>
                Panther City Helpers is built for Fort Worth homeowners who want
                practical improvements without a drawn-out process.
              </p>
            </div>
            <div className="area-list" aria-label="Example service areas">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark" id="faq">
          <SectionHeader
            eyebrow="FAQ"
            title="Good questions before you book"
            description="A few practical answers before you request a quote."
            inverted
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <a
        className="mobile-booking"
        href={BOOKING_FORM_URL}
        target="_blank"
        rel="noreferrer"
      >
        Get Quote
        <CalendarCheck size={18} aria-hidden="true" />
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
