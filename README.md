# Panther City Detailing

Production-ready Next.js site for Panther City Detailing, a Fort Worth mobile detailing, pressure washing, and exterior cleaning service.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Resend for booking request email
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

## On-Site Booking System

The booking form is now built into the site. It submits to:

```text
app/api/bookings/route.ts
```

The API route sends an email through Resend to:

```text
panthercityhelpersfw@gmail.com
```

Required environment variables:

```text
RESEND_API_KEY=
BOOKING_TO_EMAIL=panthercityhelpersfw@gmail.com
RESEND_FROM_EMAIL=Panther City Bookings <onboarding@resend.dev>
```

Use `onboarding@resend.dev` while testing. For launch, verify a sending domain in Resend and replace `RESEND_FROM_EMAIL` with a domain sender such as `Panther City Detailing <bookings@yourdomain.com>`.

## Contact Details

Shared launch constants live in:

```text
lib/site.ts
```

Update these values there:

- `BUSINESS_NAME`
- `CONTACT_EMAIL`
- `PHONE_PLACEHOLDER`
- social links and handles

The temporary phone placeholder is:

```text
Business phone coming soon
```

TODO: Replace phone placeholder after claiming a free Google Voice number.

Google Voice is the preferred first option if available because it looks more reputable for a customer-facing local service. TextNow is another possible free option.

## Environment Variables

Copy `.env.example` to `.env.local` for local testing:

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
   - `RESEND_API_KEY`
   - `BOOKING_TO_EMAIL`
   - `RESEND_FROM_EMAIL`
7. Click **Deploy**.

Vercel will build the app and host the public site on a `.vercel.app` URL. After the GitHub repo is connected, pushes to the production branch create production deployments, and pull requests/other branches create preview deployments.

## Custom Domain Setup

1. In the Vercel project, open **Settings -> Domains**.
2. Add the final domain, such as `panthercitydetailing.com`.
3. Follow Vercel's DNS instructions at the domain registrar.
4. After the domain is verified, update:

```text
NEXT_PUBLIC_SITE_URL=https://panthercitydetailing.com
```

5. Verify the same domain in Resend if you want to send from `bookings@panthercitydetailing.com`.
6. Redeploy so Open Graph and metadata use the final public URL.

## Brand Direction

Current positioning:

```text
Cleaner. Sharper. Better.
```

Panther City Detailing should feel premium, clean, mobile-first, and trustworthy. The strongest public impression should be mobile detailing, pressure washing, exterior cleaning, and visible before/after transformations.

Do not add fake reviews, fake certifications, fake before/after photos, or claims that the business does every service.

## Launch Checklist

- Add `RESEND_API_KEY` in Vercel.
- Confirm `BOOKING_TO_EMAIL` is correct.
- Replace `RESEND_FROM_EMAIL` after verifying a sending domain in Resend.
- Confirm final domain and set `NEXT_PUBLIC_SITE_URL`.
- Test the on-site booking form on mobile and desktop.
- Test the email link on mobile and desktop email clients.
- Replace the phone placeholder after claiming the business number.
- Add real before/after project photos when available.
