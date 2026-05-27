"use client";

import { FormEvent, useState } from "react";
import {
  CalendarCheck,
  Camera,
  Mail,
  MessageCircle,
  Music2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  BOOKING_FORM_URL,
  CONTACT_EMAIL,
  PHONE_PLACEHOLDER,
  SOCIALS,
} from "@/lib/site";

const serviceOptions = [
  "Interior Painting",
  "Deep Cleaning",
  "Garage Cleanout",
  "Garage Organization",
  "House Number Painting",
  "General Home Refresh",
];

const contactRows = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: PHONE_PLACEHOLDER,
  },
  {
    icon: Camera,
    label: "Instagram",
    value: SOCIALS.instagram.handle,
    href: SOCIALS.instagram.href,
  },
  {
    icon: Music2,
    label: "TikTok",
    value: SOCIALS.tiktok.handle,
    href: SOCIALS.tiktok.href,
  },
  {
    icon: MessageCircle,
    label: "Facebook",
    value: SOCIALS.facebook.handle,
    href: SOCIALS.facebook.href,
  },
];

export function ContactForm() {
  const [selectedService, setSelectedService] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(BOOKING_FORM_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="quote-form contact-panel" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h3>Get a free quote</h3>
        <p>
          Pick the service that fits best. The full quote request opens in
          Fillout so you can send photos and details.
        </p>
      </div>

      <label>
        Service needed
        <select
          value={selectedService}
          onChange={(event) => setSelectedService(event.target.value)}
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <div className={selectedService ? "form-summary" : "form-summary empty-state"}>
        <ShieldCheck size={19} aria-hidden="true" />
        <p>
          {selectedService
            ? `${selectedService} selected. Continue to the quote form to add photos, timing, and project details.`
            : "Choose a service to start. We review every quote request before confirming work."}
        </p>
      </div>

      <button className="button button--primary form-button" type="submit">
        Continue to Quote Form
        <CalendarCheck size={18} aria-hidden="true" />
      </button>

      <div className="contact-list" aria-label="Contact and social links">
        {contactRows.map((row) => (
          <div className="contact-row" key={row.label}>
            <row.icon size={19} aria-hidden="true" />
            <div>
              <span>{row.label}</span>
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {row.value}
                </a>
              ) : (
                <strong>{row.value}</strong>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="form-note">
        The quote form is a request, not an instant confirmation. No fake
        discounts, no surprise claims.
      </p>
    </form>
  );
}
