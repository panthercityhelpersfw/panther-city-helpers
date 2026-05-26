import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Panther City Helpers | Repair, Build, Upgrade in Fort Worth",
    template: "%s | Panther City Helpers",
  },
  description:
    "Panther City Helpers helps Fort Worth repair, build, set up, and upgrade everyday home, garage, tech, and outdoor systems.",
  keywords: [
    "Panther City Helpers",
    "Panther City Helpers Fort Worth",
    "Fort Worth repair help",
    "Fort Worth build help",
    "Fort Worth garage storage setup",
    "Fort Worth shelving installation help",
    "Fort Worth smart home setup",
    "Fort Worth furniture assembly",
    "Fort Worth cable management",
    "Fort Worth tool wall setup",
    "Fort Worth small repairs",
    "Fort Worth home upgrades",
  ],
  authors: [{ name: "Panther City Helpers" }],
  creator: "Panther City Helpers",
  openGraph: {
    title: "Panther City Helpers | Repair, Build, Upgrade",
    description:
      "Fort Worth help for repairs, builds, setups, and everyday upgrades.",
    type: "website",
    locale: "en_US",
    siteName: "Panther City Helpers",
    images: [
      {
        url: "/fort-worth-skyline.jpg",
        width: 1600,
        height: 1000,
        alt: "Fort Worth skyline at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panther City Helpers | Repair, Build, Upgrade",
    description:
      "Fort Worth help for repairs, builds, setups, and everyday upgrades.",
    images: ["/fort-worth-skyline.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
