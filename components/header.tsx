import { ClipboardList } from "lucide-react";
import { BOOKING_FORM_URL } from "@/lib/site";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Transformations", href: "#transformations" },
  { label: "Process", href: "#how-it-works" },
  { label: "Contact", href: "#request-help" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Panther City Helpers home">
        <span className="brand__mark">PCH</span>
        <span>
          <strong>Panther City Helpers</strong>
          <small>Painting - Cleaning - Home Refresh</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a
        className="header-contact"
        href={BOOKING_FORM_URL}
        target="_blank"
        rel="noreferrer"
      >
        <ClipboardList size={17} aria-hidden="true" />
        Get a Quote
      </a>
    </header>
  );
}
