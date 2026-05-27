"use client";

import { FormEvent, useState } from "react";
import {
  Camera,
  CheckCircle2,
  Mail,
  MessageCircle,
  Music2,
  Phone,
  Send,
} from "lucide-react";
import { CONTACT_EMAIL, PHONE_PLACEHOLDER, SOCIALS } from "@/lib/site";

const serviceOptions = [
  "Mobile Detail",
  "Interior Detail",
  "Exterior Wash",
  "Full Detail",
  "Pressure Washing",
  "Exterior Cleaning",
  "Maintenance Wash",
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

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      vehicle: String(formData.get("vehicle") || ""),
      addressArea: String(formData.get("addressArea") || ""),
      preferredTime: String(formData.get("preferredTime") || ""),
      notes: String(formData.get("notes") || ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Request failed.");
      }

      setStatus("success");
      setMessage(result.message || "Request sent. We will follow up soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email us directly.",
      );
    }
  }

  return (
    <form className="booking-form contact-panel" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p>Book on-site</p>
        <h3>Request a mobile service</h3>
        <span>
          Send the details here. This emails Panther City directly, and we will
          follow up before confirming the job.
        </span>
      </div>

      <input
        className="hp-field"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form-grid">
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <div className="form-grid">
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Service
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select service
            </option>
            {serviceOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Vehicle / project
        <input
          name="vehicle"
          placeholder="Example: black F-150, two-car driveway, SUV interior"
        />
      </label>

      <div className="form-grid">
        <label>
          Fort Worth area
          <input
            name="addressArea"
            placeholder="Neighborhood or ZIP"
            autoComplete="address-level2"
            required
          />
        </label>
        <label>
          Preferred date/time
          <input name="preferredTime" placeholder="Example: Saturday morning" required />
        </label>
      </div>

      <label>
        Notes
        <textarea
          name="notes"
          rows={5}
          placeholder="Tell us what needs attention, how dirty it is, access details, or anything we should know."
        />
      </label>

      <label className="check-row">
        <input name="consent" type="checkbox" required />
        <span>
          I understand this is a request, not an instant confirmation. Panther
          City will review the job before scheduling.
        </span>
      </label>

      <button
        className="button button--primary form-button"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Booking Request"}
        {status === "success" ? (
          <CheckCircle2 size={18} aria-hidden="true" />
        ) : (
          <Send size={18} aria-hidden="true" />
        )}
      </button>

      {message ? (
        <p
          className={
            status === "success" ? "form-status form-status--success" : "form-status form-status--error"
          }
          role="status"
        >
          {message}
        </p>
      ) : null}

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
    </form>
  );
}
