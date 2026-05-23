import {
  BadgeCheck,
  CalendarCheck,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Dog,
  Home,
  Leaf,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { BOOKING_FORM_URL, CONTACT_EMAIL } from "@/lib/site";

const services = [
  {
    icon: Car,
    title: "Car washing",
    meta: "Driveway-ready",
    description:
      "Driveway washes, window cleaning, quick vacuuming, and interior wipe-downs using family-provided expectations.",
  },
  {
    icon: Leaf,
    title: "Yard work",
    meta: "Light outdoor jobs",
    description:
      "Raking, watering, weeding, bagging leaves, light clean-up, and other simple outdoor jobs around the house.",
  },
  {
    icon: Dog,
    title: "Pet help",
    meta: "Parent-approved care",
    description:
      "Friendly pet support like walks, yard let-outs, feeding reminders, water checks, and short parent-approved visits.",
  },
  {
    icon: Home,
    title: "Garage cleanouts",
    meta: "Simple resets",
    description:
      "Sorting, sweeping, moving light boxes, breaking down cardboard, and helping families reset usable garage space.",
  },
  {
    icon: ClipboardCheck,
    title: "Organizing",
    meta: "Tidy, practical help",
    description:
      "Simple organizing projects for shelves, closets, bins, sports gear, supplies, and everyday household areas.",
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
      "Jobs are kept simple and safe. We do not accept unsafe, fake, or adult-only job requests.",
  },
];

const goodFirstJobs = [
  "Wash a car in the driveway with supplies ready.",
  "Water plants, pull light weeds, or rake leaves into bags.",
  "Walk a friendly dog around the block with clear leash instructions.",
  "Sweep and sort a garage area with light lifting only.",
  "Organize bins, shelves, sports gear, or supplies with clear instructions.",
  "Bring trash cans up, sweep a porch, or tidy an outdoor area.",
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

const quickProof = [
  "Request first, confirmation second",
  "Parent or guardian approval expected",
  "Unsafe or adult-only jobs declined",
];

const requestChecklist = [
  {
    title: "Where the job is",
    description:
      "Neighborhood, nearest major cross street, and whether the helper should meet at the front door, driveway, or yard.",
  },
  {
    title: "What needs to be done",
    description:
      "A simple task list, supplies available, pets involved, and any areas that are off limits.",
  },
  {
    title: "When you need help",
    description:
      "Preferred day, time window, whether the timing is flexible, and how long you expect the job to take.",
  },
  {
    title: "Who is approving it",
    description:
      "Parent or guardian contact info, safety notes, and anything the family wants confirmed before scheduling.",
  },
];

const faqs = [
  {
    question: "How do I request help?",
    answer:
      "A parent or guardian can use the booking request form or email panthercityhelpersfw@gmail.com with the service, date, neighborhood, and a short description of the job.",
  },
  {
    question: "Are prices listed?",
    answer:
      "Not yet. Jobs vary by time, distance, task size, and supplies. Panther City Helpers can provide a clear starting estimate before anything is scheduled.",
  },
  {
    question: "What kinds of jobs are a good fit?",
    answer:
      "Simple neighborhood jobs are the best fit: car washing, yard work, pet help, garage cleanouts, organizing, trash cans, and similar family-approved chores.",
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
    "Fort Worth teen neighborhood helper service offering car washing, yard work, pet help, garage cleanouts, organizing, and family-approved simple jobs.",
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
            <p className="eyebrow">Fort Worth teen neighborhood helpers</p>
            <h1>Reliable local help for the jobs that keep piling up.</h1>
            <p className="hero__lede">
              Panther City Helpers provides dependable local help for car
              washing, yard work, pet help, garage cleanouts, organizing, and
              family-approved simple jobs. Parents and guardians approve the job
              before anything is scheduled.
            </p>
            <div className="hero__actions" aria-label="Primary actions">
              <a
                className="button button--primary"
                href={BOOKING_FORM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Book a Local Helper
                <CalendarCheck size={18} aria-hidden="true" />
              </a>
              <a
                className="button button--secondary"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                Email Us
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="hero__notice" role="note">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>
                The booking form is a request, not an instant confirmation.
                Every job is reviewed for fit and safety.
              </span>
            </div>
            <dl className="hero__stats" aria-label="Service highlights">
              <div>
                <dt>5</dt>
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
                <strong>Built for nearby, practical help</strong>
                <span>Simple requests, clear boundaries, local follow-up.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Booking safeguards">
          {quickProof.map((item) => (
            <div key={item}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </section>

        <section className="section section--cream" id="services">
          <SectionHeader
            eyebrow="Services"
            title="Straightforward help, booked the right way"
            description="Pick the kind of help you need, send the request, and we will confirm whether the job is a good fit before scheduling."
          />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <service.icon size={26} aria-hidden="true" />
                <span className="service-card__meta">{service.meta}</span>
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
              title="A cleaner request process for families"
              description="The new booking form collects the important details up front, so follow-up is faster and expectations are clearer."
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

        <section className="section checklist-section" id="request-checklist">
          <div className="checklist-layout">
            <div>
              <p className="eyebrow">Before you book</p>
              <h2>Better details make better jobs.</h2>
              <p>
                A clear request helps us quickly tell whether the job is safe,
                realistic, and a good fit for a teen helper. These notes also
                reduce back-and-forth for parents.
              </p>
              <a
                className="button button--primary checklist-button"
                href={BOOKING_FORM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Start the request
                <CalendarCheck size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="checklist-grid">
              {requestChecklist.map((item) => (
                <article className="checklist-card" key={item.title}>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
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
                we will pass on it. We do not accept unsafe, fake, or
                adult-only job requests.
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
              <h2>Send the request through the new booking form.</h2>
              <p>
                Parents and guardians should send or approve requests. Share the
                basics, and we will confirm timing, job details, safety fit, and
                availability before anything is scheduled. The booking form is a
                request, not an instant confirmation.
              </p>
              <div className="contact-card">
                <Sparkles size={22} aria-hidden="true" />
                <div>
                  <strong>Prefer email?</strong>
                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
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
      <a
        className="mobile-booking"
        href={BOOKING_FORM_URL}
        target="_blank"
        rel="noreferrer"
      >
        Book Help
        <CalendarCheck size={18} aria-hidden="true" />
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
