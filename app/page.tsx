import {
  Baby,
  BadgeCheck,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Dog,
  Home,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";

const services = [
  {
    icon: Dog,
    title: "Dog walking",
    description:
      "Neighborhood walks, yard let-outs, feeding reminders, and simple check-ins with parent-approved instructions.",
  },
  {
    icon: Home,
    title: "Pet sitting",
    description:
      "Short pet visits for feeding, water, litter or crate checks, and basic care while families are nearby or away for the day.",
  },
  {
    icon: Baby,
    title: "Babysitting help",
    description:
      "Extra help for families who want a responsible teen sitter for appropriate ages, short windows, or parent-approved coverage.",
  },
  {
    icon: Leaf,
    title: "Yard work",
    description:
      "Raking, watering, weeding, bagging leaves, light clean-up, and other simple outdoor jobs around the house.",
  },
  {
    icon: Car,
    title: "Car washing",
    description:
      "Driveway washes, window cleaning, quick vacuuming, and interior wipe-downs using family-provided expectations.",
  },
  {
    icon: ClipboardCheck,
    title: "Neighbor chores",
    description:
      "Trash cans, porch sweeping, garage tidying, moving light boxes, organizing, and other safe neighborhood tasks.",
  },
];

const steps = [
  "A parent or guardian sends the request with the job, area, timing, and notes.",
  "We confirm whether the job is a good fit and make sure an adult has approved it.",
  "The helper shows up prepared, follows the agreed instructions, and checks out when finished.",
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Parents approve the job",
    description:
      "Requests should come from a parent or guardian, or be approved by one before anything is scheduled.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear task expectations",
    description:
      "Families can share instructions up front so everyone understands the job, timing, supplies, and boundaries.",
  },
  {
    icon: Users,
    title: "Teen-run and neighborly",
    description:
      "This is local Fort Worth help from teens learning responsibility, communication, and good work habits.",
  },
  {
    icon: BadgeCheck,
    title: "Appropriate work only",
    description:
      "Jobs are kept simple and safe. If something needs an adult professional, we will say so.",
  },
];

const goodFirstJobs = [
  "Walk a friendly dog around the block with clear leash instructions.",
  "Water plants, pull light weeds, or rake leaves into bags.",
  "Wash a car in the driveway with supplies ready.",
  "Bring trash cans up, sweep a porch, or tidy an outdoor area.",
  "Help organize a garage shelf or move light boxes with an adult nearby.",
  "Do a short pet check-in for food, water, and basic care notes.",
];

const unavailableJobs = [
  "Dangerous jobs involving ladders, roofs, power tools, chemicals, or heavy lifting.",
  "Overnight work or jobs that require a teen to be the only responsible person for too long.",
  "Transportation-heavy work, driving errands, or rides for children.",
  "Medical care, pool supervision, or anything that should be handled by an adult professional.",
];

const serviceAreas = [
  "Fort Worth neighborhoods",
  "TCU area",
  "Westcliff",
  "Arlington Heights",
  "Ridglea",
  "Rivercrest",
  "Cultural District",
  "Nearby areas by request",
];

const faqs = [
  {
    question: "How do I request help?",
    answer:
      "A parent or guardian can use the request form or email panthercityhelpersfw@gmail.com with the service, date, neighborhood, and a short description of the job.",
  },
  {
    question: "Are prices listed?",
    answer:
      "Not yet. Jobs vary by time, distance, task size, and supplies. Panther City Helpers can provide a clear starting estimate before anything is scheduled.",
  },
  {
    question: "What kinds of jobs are a good fit?",
    answer:
      "Simple neighborhood jobs are the best fit: dog walking, pet sitting, babysitting help, yard work, driveway car washing, organizing, trash cans, and similar chores.",
  },
  {
    question: "Do you serve all of Fort Worth?",
    answer:
      "The service focuses on Fort Worth neighborhoods first. Nearby areas can be considered based on timing, transportation, and helper availability.",
  },
  {
    question: "Can parents coordinate directly?",
    answer:
      "Yes. Parents and guardians should be the main point of contact for requests, approval, directions, and any safety details.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Panther City Helpers",
  description:
    "Fort Worth teen neighborhood helper service offering dog walking, pet sitting, babysitting help, yard work, car washing, and neighbor chores.",
  email: "panthercityhelpersfw@gmail.com",
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
            <p className="eyebrow">Fort Worth teen neighborhood helpers</p>
            <h1>Trusted extra hands for busy Panther City families.</h1>
            <p className="hero__lede">
              Panther City Helpers is a teen-run Fort Worth service for simple
              neighborhood help: dog walking, pet sitting, babysitting help,
              yard work, car washing, and chores. Parents and guardians approve
              the job before anything is scheduled.
            </p>
            <div className="hero__actions" aria-label="Primary actions">
              <a className="button button--primary" href="#request-help">
                Request help
                <MessageCircle size={18} aria-hidden="true" />
              </a>
              <a
                className="button button--secondary"
                href="mailto:panthercityhelpersfw@gmail.com"
              >
                Email us
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
            <dl className="hero__stats" aria-label="Service highlights">
              <div>
                <dt>6</dt>
                <dd>simple services</dd>
              </div>
              <div>
                <dt>FW</dt>
                <dd>local focus</dd>
              </div>
              <div>
                <dt>Adult</dt>
                <dd>approval expected</dd>
              </div>
            </dl>
          </div>
          <div className="hero__media">
            <img
              src="/fort-worth-skyline.jpg"
              alt="Fort Worth skyline at sunset"
            />
            <div className="hero__mediaPanel" aria-label="Available help">
              <CheckCircle2 size={22} aria-hidden="true" />
              <div>
                <strong>Available for one-time or recurring help</strong>
                <span>Simple neighborhood tasks, approved by parents.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--cream" id="services">
          <SectionHeader
            eyebrow="Services"
            title="Straightforward help close to home"
            description="These are everyday jobs that make sense for responsible teens and busy Fort Worth families. Nothing overcomplicated, nothing vague."
          />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <service.icon size={26} aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="split">
            <SectionHeader
              eyebrow="How it works"
              title="Simple scheduling, clear expectations"
              description="The request starts with an adult contact, clear notes, and a quick check that the job is appropriate for a teen helper."
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

        <section className="section section--navy" id="trust">
          <div className="section__inner">
            <SectionHeader
              eyebrow="Trust"
              title="Built around parent approval"
              description="Panther City Helpers is teen-run, but jobs should be requested, approved, and understood by a parent or guardian before anyone shows up."
              inverted
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
          </div>
        </section>

        <section className="section section--cream" id="good-first-jobs">
          <div className="jobs-layout">
            <SectionHeader
              eyebrow="Good first jobs"
              title="Safe, simple tasks are the sweet spot"
              description="The best requests are specific, local, and easy to explain. A good job has a clear start, clear finish, and an adult who knows what is happening."
            />
            <div className="jobs-grid">
              {goodFirstJobs.map((job) => (
                <div className="job-item" key={job}>
                  <CheckCircle2 size={19} aria-hidden="true" />
                  <span>{job}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section boundary-section" id="not-available">
          <div className="boundary-layout">
            <div>
              <p className="eyebrow">Not available for</p>
              <h2>Some work belongs with adults or professionals.</h2>
              <p>
                Panther City Helpers is for helpful neighborhood jobs, not risky
                work. If a request feels unsafe, too open-ended, or too adult,
                we will pass on it.
              </p>
            </div>
            <div className="unavailable-list">
              {unavailableJobs.map((job) => (
                <div className="unavailable-item" key={job}>
                  <span aria-hidden="true">Not a fit</span>
                  <p>{job}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cream" id="service-area">
          <div className="area-layout">
            <div>
              <p className="eyebrow">Service area</p>
              <h2>Local to Fort Worth, TX</h2>
              <p>
                Panther City Helpers focuses on nearby Fort Worth neighborhoods
                where jobs can be coordinated clearly and safely. If you are
                close by, send the request and we can confirm whether it works.
              </p>
              <div className="area-note">
                <MapPin size={22} aria-hidden="true" />
                <span>
                  Include your neighborhood or nearest major intersection in the
                  request form so we can check whether the job is realistic.
                </span>
              </div>
            </div>
            <div className="area-list" aria-label="Example service areas">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section request-section" id="request-help">
          <div className="request-layout">
            <div>
              <p className="eyebrow">Request help</p>
              <h2>Tell us what would make your week easier.</h2>
              <p>
                Parents and guardians should send or approve requests. Share the
                basics, and we will confirm timing, job details, safety fit, and
                availability before anything is scheduled.
              </p>
              <div className="contact-card">
                <Sparkles size={22} aria-hidden="true" />
                <div>
                  <strong>Prefer email?</strong>
                  <a href="mailto:panthercityhelpersfw@gmail.com">
                    panthercityhelpersfw@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="section section--cream" id="faq">
          <SectionHeader
            eyebrow="FAQ"
            title="Good questions before you book"
            description="A few practical answers for families checking whether Panther City Helpers is the right fit."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
