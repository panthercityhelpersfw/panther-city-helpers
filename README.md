# Panther City Helpers

Production-ready Next.js site for Panther City Helpers, a Fort Worth painting, cleaning, and home refresh service.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Global CSS in `app/globals.css`
- Vercel-ready with the default Next.js framework preset

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. If port `3000` is already in use, run:

```bash
npm run dev -- --hostname 127.0.0.1 --port 4317
```

## Production Build

```bash
npm run build
```

There is no lint script currently configured. The production build runs TypeScript and Next.js build checks.

## Current Contact Form Behavior

The public quote CTA sends project requests to the Fillout request form:

```text
https://forms.fillout.com/t/oiRvQbsxvmus
```

The form is a request, not an instant confirmation. Panther City Helpers reviews the scope, timing, materials, and fit before scheduling.

The email address is used throughout the site:

```text
panthercityhelpersfw@gmail.com
```

The temporary phone placeholder is:

```text
Business phone coming soon
```

TODO: Replace phone placeholder after claiming a free Google Voice number.

Google Voice is the preferred first option if available because it looks more reputable for a parent-facing local service. TextNow is another possible free option.

## Updating Contact Details

Shared launch constants live in:

```text
lib/site.ts
```

Update these values there:

- `CONTACT_EMAIL`
- `BOOKING_FORM_URL`
- `PHONE_PLACEHOLDER`
- social links and handles

Future backend connection options if Fillout is replaced later:

- Formspree endpoint
- Resend email API through a Vercel Server Action or API route
- Supabase table insert
- Firebase/Firestore write
- Native Vercel Server Action

## Brand Direction

Current positioning:

```text
Painting - Cleaning - Home Refresh
```

Panther City Helpers should feel like a bold, trustworthy Fort Worth home services brand focused on visible before-and-after improvement. Keep the copy direct and local. Emphasize interior painting, deep cleaning, garage cleanouts, garage organization, house number painting, and small home refresh jobs.

Do not add fake reviews, fake certifications, or claims that the business does "everything."

Social bios and content direction live in:

```text
docs/social-repositioning.md
```

## Environment Variables

Copy `.env.example` to `.env.local` for local production URL testing:

```bash
cp .env.example .env.local
```

Required for production SEO:

```text
NEXT_PUBLIC_SITE_URL=https://your-final-domain.com
```

If this is not set, the app falls back to Vercel's production URL when available.

## Deploy to Vercel from GitHub

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Next.js**.
5. Use the default commands:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: leave blank/default for Next.js
6. Add environment variables in **Project Settings -> Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL`
   - Any future form backend keys when added
7. Click **Deploy**.

Vercel will build the app and host the public site on a `.vercel.app` URL. After the GitHub repo is connected, pushes to the production branch create production deployments, and pull requests/other branches create preview deployments.

## Custom Domain Setup

1. In the Vercel project, open **Settings -> Domains**.
2. Add the final domain, such as `panthercityhelpersfw.com`.
3. Follow Vercel's DNS instructions at the domain registrar.
4. After the domain is verified, update:

```text
NEXT_PUBLIC_SITE_URL=https://panthercityhelpersfw.com
```

5. Redeploy so Open Graph and metadata use the final public URL.

## Why Vercel Keeps the Site Online

Vercel hosts the built Next.js site on its managed platform. Once deployed, the public URL stays available without keeping a local development server running. New GitHub pushes trigger fresh deployments, and Vercel keeps serving the latest successful production deployment.

## Launch Checklist

- Confirm final domain and set `NEXT_PUBLIC_SITE_URL`.
- Confirm the Facebook page URL once the exact public page link is available.
- Test the Fillout quote form from mobile and desktop.
- Test the email link on mobile and desktop email clients.
- Replace the phone placeholder after claiming the business number.
- Add real project photos when available.
