import { Mail } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Safety", href: "#trust" },
  { label: "Good jobs", href: "#good-first-jobs" },
  { label: "Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Panther City Helpers home">
        <span className="brand__mark">PCH</span>
        <span>
          <strong>Panther City Helpers</strong>
          <small>Fort Worth, TX</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="mailto:panthercityhelpersfw@gmail.com">
        <Mail size={17} aria-hidden="true" />
        Contact
      </a>
    </header>
  );
}
