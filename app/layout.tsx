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
    default: "Panther City Detailing | Fort Worth Mobile Detailing",
    template: "%s | Panther City Detailing",
  },
  description:
    "Panther City Detailing provides Fort Worth mobile detailing, pressure washing, exterior cleaning, interior detailing, and vehicle refresh services.",
  keywords: [
    "Panther City Detailing",
    "Panther City Detailing Fort Worth",
    "Fort Worth mobile detailing",
    "Fort Worth car detailing",
    "Fort Worth interior detail",
    "Fort Worth exterior wash",
    "Fort Worth pressure washing",
    "Fort Worth exterior cleaning",
    "mobile car wash Fort Worth",
  ],
  authors: [{ name: "Panther City Detailing" }],
  creator: "Panther City Detailing",
  openGraph: {
    title: "Panther City Detailing | Cleaner. Sharper. Better.",
    description:
      "Fort Worth mobile detailing, pressure washing, exterior cleaning, and vehicle refresh services.",
    type: "website",
    locale: "en_US",
    siteName: "Panther City Detailing",
    images: [
      {
        url: "/fort-worth-skyline.jpg",
        width: 1600,
        height: 1000,
        alt: "Fort Worth skyline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panther City Detailing | Cleaner. Sharper. Better.",
    description:
      "Fort Worth mobile detailing, pressure washing, exterior cleaning, and vehicle refresh services.",
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
