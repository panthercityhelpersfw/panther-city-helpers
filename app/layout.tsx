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
    default: "Panther City Helpers | Fort Worth Neighborhood Help",
    template: "%s | Panther City Helpers",
  },
  description:
    "Panther City Helpers provides dependable local help for car washing, yard work, pet help, garage cleanouts, organizing, and family-approved simple jobs in Fort Worth.",
  keywords: [
    "Panther City Helpers",
    "Panther City Helpers Fort Worth",
    "Fort Worth TX neighborhood help",
    "Fort Worth Texas local chores",
    "Fort Worth teen helpers",
    "Fort Worth family approved jobs",
    "Fort Worth pet help",
    "Fort Worth garage cleanouts",
    "Fort Worth organizing help",
    "Fort Worth yard work",
    "Fort Worth car washing",
    "Fort Worth chore help",
    "neighborhood helper service",
  ],
  authors: [{ name: "Panther City Helpers" }],
  creator: "Panther City Helpers",
  openGraph: {
    title: "Panther City Helpers | Fort Worth Neighborhood Help",
    description:
      "Dependable local help for car washing, yard work, pet help, garage cleanouts, organizing, and family-approved simple jobs in Fort Worth.",
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
    title: "Panther City Helpers | Fort Worth Neighborhood Help",
    description:
      "Dependable local help for car washing, yard work, pet help, garage cleanouts, organizing, and family-approved simple jobs in Fort Worth.",
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
