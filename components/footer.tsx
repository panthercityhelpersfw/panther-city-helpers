import { Camera, Mail, MessageCircle, Music2 } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/panthercityhelpersfw/",
    icon: Camera,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@panthercityhelpersfw",
    icon: Music2,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/search/top?q=Panther%20City%20Helpers",
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
        <a href="mailto:panthercityhelpersfw@gmail.com">
          <Mail size={18} aria-hidden="true" />
          panthercityhelpersfw@gmail.com
        </a>
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
