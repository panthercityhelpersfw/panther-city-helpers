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
  return (
    <div className="request-form contact-panel">
      <div className="form-heading">
        <h3>Request help</h3>
        <p>
          The new Fillout form sends a request, not an instant confirmation. A
          parent or guardian should submit or approve the request.
        </p>
      </div>

      <a
        className="button button--primary form-button"
        href={BOOKING_FORM_URL}
        target="_blank"
        rel="noreferrer"
      >
        Open the Fillout request form
        <CalendarCheck size={18} aria-hidden="true" />
      </a>

      <div className="form-summary">
        <ShieldCheck size={19} aria-hidden="true" />
        <p>
          We review requests before scheduling. We do not accept unsafe, fake,
          or adult-only job requests.
        </p>
      </div>

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
        Privacy note: do not include sensitive medical, financial, or emergency
        information in the booking request.
      </p>
    </div>
  );
}
