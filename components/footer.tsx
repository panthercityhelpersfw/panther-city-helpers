import { Camera, Mail, MapPin, MessageCircle, Music2, Phone } from "lucide-react";
import {
  BUSINESS_NAME,
  CONTACT_EMAIL,
  PHONE_PLACEHOLDER,
  SOCIALS,
} from "@/lib/site";

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
          <span className="brand__mark" aria-hidden="true">
            PC
          </span>
          <span>
            <strong>{BUSINESS_NAME}</strong>
            <small>Mobile detailing - pressure washing - exterior cleaning</small>
          </span>
        </a>
        <p>
          Fort Worth mobile detailing and exterior cleaning built around clean
          work, honest communication, and visible before/after results.
        </p>
      </div>
      <div className="footer-contact">
        <a href={`mailto:${CONTACT_EMAIL}`}>
          <Mail size={18} aria-hidden="true" />
          {CONTACT_EMAIL}
        </a>
        <span>
          <Phone size={18} aria-hidden="true" />
          {PHONE_PLACEHOLDER}
        </span>
        <span className="footer-location">
          <MapPin size={18} aria-hidden="true" />
          Fort Worth, TX
        </span>
        <a href="#request-help">Book on this site</a>
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
