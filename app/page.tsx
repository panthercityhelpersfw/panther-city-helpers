import {
  BadgeCheck,
  Car,
  CheckCircle2,
  Drill,
  Droplets,
  Gauge,
  Home,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Timer,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { BUSINESS_NAME, CONTACT_EMAIL } from "@/lib/site";

const services = [
  {
    icon: Sparkles,
    title: "Mobile Detailing",
    description:
      "Interior and exterior refreshes brought to you around Fort Worth. Clean, sharp, and handled with care.",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description:
      "Driveways, walkways, patios, bins, and outdoor surfaces that need a serious reset.",
  },
  {
    icon: Home,
    title: "Exterior Cleaning",
    description:
      "Home-facing cleanups for curb appeal: entry areas, patio surfaces, garage doors, and more.",
  },
  {
    icon: Car,
    title: "Interior Detail",
    description:
      "Vacuuming, wipe-downs, cupholders, panels, mats, and the little spots that make a car feel new again.",
  },
  {
    icon: Gauge,
    title: "Maintenance Wash",
    description:
      "Simple recurring washes for people who want their vehicle to stay presentable without overthinking it.",
  },
];

const transformations = [
  {
    title: "Wheel & Tire Reset",
    before: "road film",
    after: "sharp finish",
  },
  {
    title: "Driveway Wash",
    before: "stained concrete",
    after: "clean pass",
  },
  {
    title: "Interior Detail",
    before: "daily buildup",
    after: "fresh cabin",
  },
];

const processSteps = [
  {
    title: "Send the request",
    text: "Tell us the service, area, vehicle or surface, and the timing that works best.",
  },
  {
    title: "We confirm the scope",
    text: "We review the details and follow up before the job is scheduled. No instant-book confusion.",
  },
  {
    title: "We show up ready",
    text: "We bring the plan, do the work, and focus on the kind of result you can actually see.",
  },
];

const trustPoints = [
  "Fort Worth based",
  "Mobile-first service",
  "Clear communication",
  "No fake reviews",
  "Before/after focused",
  "Honest scope and pricing",
];

const faqs = [
  {
    question: "Is this still Panther City Helpers?",
    answer:
      "The site is being redesigned around Panther City Detailing. The current contact email and social handles still point to the existing Panther City accounts.",
  },
  {
    question: "Does the form submit on this website?",
    answer:
      "Yes. The booking form now submits to the website backend. Once Resend is configured in Vercel, new requests are emailed directly to Panther City.",
  },
  {
    question: "Is a booking request automatically confirmed?",
    answer:
      "No. A request starts the conversation. We review the scope, timing, access, and fit before confirming the job.",
  },
  {
    question: "Do you publish fake reviews?",
    answer:
      "No. Reviews and finished-project photos should only be added when they are real.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_NAME,
  description:
    "Fort Worth mobile detailing, pressure washing, exterior cleaning, and vehicle refresh service.",
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
            <h1>
              Cleaner.
              <br />
              Sharper.
              <br />
              <span>Better.</span>
            </h1>
            <p className="hero__lede">
              Mobile detailing, pressure washing, and exterior cleaning in Fort
              Worth, TX.
            </p>
            <div className="hero__actions" aria-label="Primary actions">
              <a className="button button--primary" href="#request-help">
                Book Your Service
                <Sparkles size={18} aria-hidden="true" />
              </a>
              <a className="button button--secondary" href="#services">
                Learn More
                <CheckCircle2 size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="trust-badges" aria-label="Service badges">
              <span>
                <Car size={17} aria-hidden="true" />
                Detailing
              </span>
              <span>
                <Drill size={17} aria-hidden="true" />
                Pressure Washing
              </span>
              <span>
                <Home size={17} aria-hidden="true" />
                Exterior Cleaning
              </span>
            </div>
          </div>

          <div className="hero__visual" aria-label="Panther City Detailing visual identity">
            <div className="vehicle-scene">
              <div className="vehicle-scene__skyline" />
              <div className="vehicle-scene__spray" />
              <div className="vehicle">
                <div className="vehicle__cab" />
                <div className="vehicle__body" />
                <div className="vehicle__wheel vehicle__wheel--front" />
                <div className="vehicle__wheel vehicle__wheel--back" />
                <span>PC</span>
              </div>
              <div className="panther-lockup">
                <span>Panther</span>
                <strong>City</strong>
                <em>Detailing</em>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Service promise">
          <div>
            <MapPin size={18} aria-hidden="true" />
            <span>Fort Worth, TX</span>
          </div>
          <div>
            <ShieldCheck size={18} aria-hidden="true" />
            <span>Trustworthy communication</span>
          </div>
          <div>
            <BadgeCheck size={18} aria-hidden="true" />
            <span>Quality work. Honest scope.</span>
          </div>
        </section>

        <section className="section section--dark" id="services">
          <SectionHeader
            eyebrow="Our services"
            title="Focused services with real transformation energy"
            description="Mobile detailing, exterior cleaning, and pressure washing without the overcomplicated quote process."
            inverted
          />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card__icon">
                  <service.icon size={28} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--gallery" id="transformations">
          <SectionHeader
            eyebrow="Before & After"
            title="Transformations that speak"
            description="Built for real project photos. Until those are ready, the gallery uses clean visual slots that are easy to replace in code."
          />
          <div className="transformation-grid">
            {transformations.map((item) => (
              <article className="transformation-card" key={item.title}>
                <div className="comparison">
                  <div className="comparison__side comparison__side--before">
                    <span>Before</span>
                    <strong>{item.before}</strong>
                  </div>
                  <div className="comparison__divider" />
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

        <section className="section about-section" id="about">
          <div className="about-panel">
            <div>
              <p className="eyebrow">About</p>
              <h2>Premium look. Local pace. Simple booking.</h2>
              <p>
                Panther City Detailing is built for Fort Worth drivers and
                homeowners who want the job handled cleanly without a messy
                back-and-forth. Send the request, we confirm the scope, then we
                show up ready.
              </p>
            </div>
            <div className="trust-list" aria-label="Trust points">
              {trustPoints.map((point) => (
                <span key={point}>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark" id="how-it-works">
          <SectionHeader
            eyebrow="How it works"
            title="Easy to request. Clear before we start."
            description="The on-site booking form emails your request directly, so nothing depends on a third-party form page."
            inverted
          />
          <div className="step-list">
            {processSteps.map((step, index) => (
              <article className="step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-band">
          <div>
            <p className="eyebrow">Ready for the reset?</p>
            <h2>Book a cleaner, sharper service without leaving the site.</h2>
          </div>
          <a className="button button--primary" href="#request-help">
            Book Now
            <Timer size={18} aria-hidden="true" />
          </a>
        </section>

        <section className="section request-section" id="request-help">
          <div className="request-layout">
            <div>
              <p className="eyebrow">Booking</p>
              <h2>Tell us what needs to look better.</h2>
              <p>
                The form below stays on this website and emails your request to
                Panther City. Add the vehicle or surface, your Fort Worth area,
                and a good time to follow up.
              </p>
              <div className="contact-card">
                <Mail size={22} aria-hidden="true" />
                <div>
                  <strong>Prefer email?</strong>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="section section--dark" id="faq">
          <SectionHeader
            eyebrow="FAQ"
            title="A few things before you book"
            description="Short answers, no fake polish."
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
      <a className="mobile-booking" href="#request-help">
        Book Now
        <Sparkles size={18} aria-hidden="true" />
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
