import { CalendarCheck, Camera, Mail, MapPin, MessageCircle, Music2 } from "lucide-react";
import { BOOKING_FORM_URL, CONTACT_EMAIL, SOCIALS } from "@/lib/site";

const socials = [
  {
    label: SOCIALS.instagram.label,
    handle: SOCIALS.instagram.handle,
    href: SOCIALS.instagram.href,
    icon: Camera,
  },
  {
    label: SOCIALS.tiktok.label,
    handle: SOCIALS.tiktok.handle,
    href: SOCIALS.tiktok.href,
    icon: Music2,
  },
  {
    label: SOCIALS.facebook.label,
    handle: SOCIALS.facebook.handle,
    href: SOCIALS.facebook.href,
    icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand brand--footer" href="#home">
          <span className="brand__mark">PCH</span>
          <span>
            <strong>Panther City Helpers</strong>
            <small>Responsible teen help in Fort Worth</small>
          </span>
        </a>
        <p>
          Teen-run neighborhood help for parent-approved dog walking, pet
          sitting, babysitting help, yard work, car washing, and chores.
        </p>
      </div>
      <div className="footer-contact">
        <a href={`mailto:${CONTACT_EMAIL}`}>
          <Mail size={18} aria-hidden="true" />
          {CONTACT_EMAIL}
        </a>
        <a href={BOOKING_FORM_URL} target="_blank" rel="noreferrer">
          <CalendarCheck size={18} aria-hidden="true" />
          Booking request form
        </a>
        <span className="footer-location">
          <MapPin size={18} aria-hidden="true" />
          Fort Worth, TX
        </span>
        <div className="footer-handles" aria-label="Social handles">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}: {social.handle}
            </a>
          ))}
        </div>
        <div className="social-links" aria-label="Social links">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
            >
              <social.icon size={19} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
