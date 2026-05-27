import { CalendarCheck } from "lucide-react";
import { BUSINESS_NAME } from "@/lib/site";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#transformations" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#request-help" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${BUSINESS_NAME} home`}>
        <span className="brand__mark" aria-hidden="true">
          PC
        </span>
        <span>
          <strong>{BUSINESS_NAME}</strong>
          <small>Cleaner. Sharper. Better.</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="#request-help">
        <CalendarCheck size={17} aria-hidden="true" />
        Book Now
      </a>
    </header>
  );
}
