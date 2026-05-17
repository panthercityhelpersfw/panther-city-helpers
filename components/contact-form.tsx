"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const serviceOptions = [
  "Dog walking",
  "Pet sitting",
  "Babysitting help",
  "Yard work",
  "Car washing",
  "Neighbor chores",
  "Multiple services",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");
  const [selectedService, setSelectedService] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = [
      "Panther City Helpers request",
      "",
      `Parent/guardian: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      `Neighborhood/area: ${formData.get("neighborhood")}`,
      `Service needed: ${formData.get("service")}`,
      `Preferred date/time: ${formData.get("preferredDateTime") || "Flexible / not provided"}`,
      "",
      "Notes:",
      `${formData.get("notes")}`,
      "",
      "Parent/guardian confirmation: yes",
    ].join("\n");
    const subject = `Panther City Helpers request: ${formData.get("service")}`;
    const mailto = `mailto:panthercityhelpersfw@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // Future backend connection point:
    // Replace the mailto redirect with a POST to Formspree, Resend, Supabase,
    // Firebase, or a Vercel Server Action/API route.
    window.location.href = mailto;
    setStatus("opened");
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h3>Request help</h3>
        <p>
          Use a parent or guardian contact. This form opens a ready-to-send
          email so details can be confirmed directly.
        </p>
      </div>
      <div className="form-grid">
        <label>
          Parent or guardian name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="form-grid">
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Neighborhood
          <input
            name="neighborhood"
            type="text"
            placeholder="Example: TCU area"
            required
          />
        </label>
      </div>
      <div className="form-grid">
        <label>
          Service needed
          <select
            name="service"
            value={selectedService}
            onChange={(event) => setSelectedService(event.target.value)}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Preferred date/time
          <input name="preferredDateTime" type="datetime-local" />
        </label>
      </div>
      <label>
        Notes
        <textarea
          name="notes"
          rows={5}
          placeholder="What needs to be done? Include pets involved, supplies available, where to meet, and anything a parent or guardian should know."
          required
        />
      </label>
      <label className="checkbox-label">
        <input name="guardianApproval" type="checkbox" required />
        <span>
          I confirm this request is being sent by, or has been approved by, a
          parent or guardian.
        </span>
      </label>
      <div className={selectedService ? "form-summary" : "form-summary empty-state"}>
        {selectedService ? (
          <>
            <CheckCircle2 size={19} aria-hidden="true" />
            <p>
              <strong>{selectedService}</strong> selected. We will review the
              notes and confirm whether the job is a safe fit before scheduling.
            </p>
          </>
        ) : (
          <p>
            Choose a service to start a clear request. Good requests include the
            neighborhood, timing, supplies, and any safety notes.
          </p>
        )}
      </div>
      <button className="button button--primary form-button" type="submit">
        Open email request
        <Send size={18} aria-hidden="true" />
      </button>
      <p className="form-note" role={status === "opened" ? "status" : undefined}>
        {status === "opened"
          ? "Your email app should open with the request details filled in. Please review and send it from a parent or guardian account."
          : "Privacy note: this form does not store submissions yet. It opens your email app with the details you entered. Do not include sensitive medical, financial, or emergency information."}
      </p>
    </form>
  );
}
