import {
  BadgeCheck,
  Boxes,
  CalendarCheck,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  Home,
  Lightbulb,
  Mail,
  MapPin,
  MonitorCog,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { BOOKING_FORM_URL, CONTACT_EMAIL } from "@/lib/site";

const services = [
  {
    icon: Boxes,
    title: "Garage systems",
    meta: "Storage that works",
    description:
      "Shelving, storage zones, tool walls, workbench setup, and garage resets that make everyday gear easier to use.",
  },
  {
    icon: Wrench,
    title: "Small repairs",
    meta: "Fix the nagging stuff",
    description:
      "Simple fixes, adjustments, tightening, diagnostics, and repair research for non-licensed household issues.",
  },
  {
    icon: MonitorCog,
    title: "Tech and smart setup",
    meta: "Devices, cables, rooms",
    description:
      "Smart home setup, device basics, cable management, LED strips, desk layouts, and tidier room utility systems.",
  },
  {
    icon: Hammer,
    title: "Assembly and builds",
    meta: "Useful things finished",
    description:
      "Furniture, desks, workbenches, planter boxes, patio lights, outdoor utility builds, and small fix/build projects.",
  },
  {
    icon: Lightbulb,
    title: "Upgrade projects",
    meta: "Improve the system",
    description:
      "Practical upgrades for garages, rooms, patios, workshops, and home systems people keep meaning to finish.",
  },
];

const steps = [
  "Send the project request with photos, measurements, the goal, and what already exists.",
  "We review scope, tools, safety, and whether the job fits our current repair/build skill level.",
  "If it fits, we confirm the plan, show up prepared, and work through the setup, build, or upgrade.",
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Scope before scheduling",
    description:
      "Every request is reviewed before scheduling so the project is clear, realistic, and safe.",
  },
  {
    icon: ClipboardCheck,
    title: "Honest skill level",
    description:
      "We do not claim to be certified electricians, plumbers, appliance technicians, or licensed trades.",
  },
  {
    icon: BadgeCheck,
    title: "Practical problem solvers",
    description:
      "The focus is hands-on setup, diagnostics, small repairs, useful builds, and project follow-through.",
  },
  {
    icon: Wrench,
    title: "Learning in public",
    description:
      "Some content may show appliance or tech diagnostics as learning content, not certified repair service.",
  },
];

const goodFirstJobs = [
  "Build a garage shelf layout and label storage zones.",
  "Set up a tool wall, pegboard, or workbench area.",
  "Assemble a desk, furniture piece, workbench, or utility cart.",
  "Clean up LED strips, chargers, extension cords, and cable runs.",
  "Install patio lights, planter boxes, hooks, bins, or simple outdoor utility pieces.",
  "Troubleshoot a basic appliance, device, or setup issue as diagnostics and learning content.",
];

const unavailableJobs = [
  "Electrical, plumbing, HVAC, gas, structural, roofing, or other licensed-trade work.",
  "Major appliance repair claims, warranty work, or anything presented as certified technician service.",
  "Dangerous jobs involving roofs, tall ladders, hazardous chemicals, heavy lifts, or unsafe tools.",
  "Emergency repairs, adult-only responsibility, or projects where the safe answer is to call a pro.",
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
  "Repair • Build • Upgrade",
  "Scope reviewed before scheduling",
  "Licensed-trade work declined",
];

const requestChecklist = [
  {
    title: "Photos of the current setup",
    description:
      "Show the garage, room, device, wall, patio, storage area, or system you want improved.",
  },
  {
    title: "The outcome you want",
    description:
      "Tell us whether you want it repaired, built, installed, organized, diagnosed, or upgraded.",
  },
  {
    title: "Parts, tools, and measurements",
    description:
      "Include what you already bought, what tools are available, measurements, and any product links.",
  },
  {
    title: "Safety and limits",
    description:
      "Mention anything electrical, plumbing, heavy, high, sharp, or risky so we can decline or redirect if needed.",
  },
];

const faqs = [
  {
    question: "How do I request help?",
    answer:
      "Use the project request form or email panthercityhelpersfw@gmail.com with photos, the goal, measurements, timing, and any safety notes.",
  },
  {
    question: "Are prices listed?",
    answer:
      "Not yet. Project scope, tools, parts, distance, and time can vary. Panther City Helpers can provide a clear starting estimate before anything is scheduled.",
  },
  {
    question: "What kinds of jobs are a good fit?",
    answer:
      "Good fits include garage systems, shelving, tool walls, workbench setup, furniture assembly, cable management, smart home setup, LED installs, planter boxes, patio lights, and small fix/build projects.",
  },
  {
    question: "Do you serve all of Fort Worth?",
    answer:
      "The service focuses on Fort Worth first. Nearby areas can be considered based on project scope, timing, transportation, and availability.",
  },
  {
    question: "Do you handle licensed trade work?",
    answer:
      "No. We do not present ourselves as certified electricians, plumbers, HVAC techs, appliance technicians, or licensed contractors. If a project needs a pro, we will say so.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Panther City Helpers",
  description:
    "Fort Worth repair, build, setup, and upgrade help for garages, rooms, tech, outdoor spaces, and everyday home systems.",
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
            <p className="eyebrow">Repair • Build • Upgrade</p>
            <h1>Fort Worth help for useful projects that need finishing.</h1>
            <p className="hero__lede">
              Panther City Helpers helps people fix, build, set up, and improve
              everyday systems around homes, garages, rooms, tech, workshops,
              and outdoor spaces.
            </p>
            <div className="hero__actions" aria-label="Primary actions">
              <a
                className="button button--primary"
                href={BOOKING_FORM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Request a Project
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
                We help with practical projects, not licensed trade work. Every
                request is reviewed for scope, safety, and fit before scheduling.
              </span>
            </div>
            <dl className="hero__stats" aria-label="Service highlights">
              <div>
                <dt>5</dt>
                <dd>project lanes</dd>
              </div>
              <div>
                <dt>FW</dt>
                <dd>local focus</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>review first</dd>
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
                <strong>Built for practical project follow-through</strong>
                <span>Setups, repairs, builds, diagnostics, and upgrades.</span>
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
            title="Repair, build, setup, and upgrade work"
            description="The first impression should be simple: useful projects, practical systems, honest scope, and no fake trade claims."
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
              title="A better way to finish stuck projects"
              description="The request form collects photos, measurements, parts, goals, and safety notes so we can decide whether the project is a fit."
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
              title="Useful help, honest boundaries"
              description="Panther City Helpers is evolving into a practical repair, build, setup, and upgrade brand. We stay clear about what we can and cannot do."
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
              title="Good project lanes to start with"
              description="The best requests have a visible problem, a practical goal, and a clear finish line. These are the kinds of jobs that fit the new direction."
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
              <h2>Send the details that make a project possible.</h2>
              <p>
                A clear request helps us see the system, understand the goal,
                and decide whether the project is safe and realistic. Photos are
                especially useful.
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
                Panther City Helpers is for practical setup, repair, build, and
                upgrade projects. If a request needs a licensed professional, is
                unsafe, or is outside our current skill level, we will pass on
                it or recommend calling a pro.
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
                Panther City Helpers focuses on Fort Worth projects that can be
                coordinated clearly and safely. Nearby areas can be considered
                when the scope and timing make sense.
              </p>
              <div className="area-note">
                <MapPin size={22} aria-hidden="true" />
                <span>
                  Include your neighborhood or nearest major intersection in the
                  request form so we can check whether the project is realistic.
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
              <h2>Send the project through the booking form.</h2>
              <p>
                Share the problem, the goal, photos, parts, measurements, and
                timing. We will review fit, safety, and availability before
                anything is scheduled. The booking form is a request, not an
                instant confirmation.
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
