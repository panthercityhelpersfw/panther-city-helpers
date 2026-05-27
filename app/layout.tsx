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
    default: "Panther City Helpers | Fort Worth Painting, Cleaning & Home Refresh",
    template: "%s | Panther City Helpers",
  },
  description:
    "Panther City Helpers provides Fort Worth interior painting, deep cleaning, garage cleanouts, garage refreshes, house number painting, and small home refresh jobs.",
  keywords: [
    "Panther City Helpers",
    "Panther City Helpers Fort Worth",
    "Fort Worth interior painting",
    "Fort Worth deep cleaning",
    "Fort Worth garage cleanouts",
    "Fort Worth garage organization",
    "Fort Worth house number painting",
    "Fort Worth home refresh",
    "Fort Worth painting cleaning",
    "Fort Worth home services",
  ],
  authors: [{ name: "Panther City Helpers" }],
  creator: "Panther City Helpers",
  openGraph: {
    title: "Panther City Helpers | Painting, Cleaning & Home Refresh",
    description:
      "Fort Worth interior painting, deep cleaning, garage cleanouts, house number painting, and home refresh jobs.",
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
    title: "Panther City Helpers | Painting, Cleaning & Home Refresh",
    description:
      "Fort Worth interior painting, deep cleaning, garage cleanouts, house number painting, and home refresh jobs.",
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
