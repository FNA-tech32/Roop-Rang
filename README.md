# Roop Rang

A responsive website for Roop Rang, a beauty studio in DHA Phase 6, Karachi. Visitors can browse services, offers, and studio work, read reviews and FAQs, find the studio, and book by phone or WhatsApp.

## Sections

- Sticky navigation and a mobile booking bar
- Hero with a direct WhatsApp booking action
- Promotional offers
- Service catalog
- Image gallery with WhatsApp inquiries
- Customer testimonials
- Why choose the studio
- FAQ accordion
- Google Maps location and contact details
- Footer with phone, WhatsApp, and social links

## Tech stack

- [Next.js](https://nextjs.org/) 16
- React 19
- Tailwind CSS 4

## Business and contact details

Studio name, address, phone, WhatsApp, hours, social links, and map details live in [`app/data/business.js`](app/data/business.js). Booking and inquiry messages use that phone number and the studio name.

Other page content is in `app/data/`:

| File | Contents |
| --- | --- |
| `services.js` | Service catalog |
| `offers.js` | Promotional offers and WhatsApp messages |
| `gallery.js` | Gallery images and captions |
| `reviews.js` | Testimonials |
| `faqs.js` | FAQ answers |
| `why-us.js` | Reasons to visit |

Phone and WhatsApp links are built in [`app/lib/contact.js`](app/lib/contact.js).

## Project structure

```text
app/
  page.js                 Homepage
  layout.js               Site title and metadata
  data/                   Studio content
  lib/contact.js          Phone and WhatsApp helpers
  components/home/        Page sections
  components/ui/          Social and WhatsApp icons
  api/                    JSON routes for page content
public/images/            Gallery, service, and offer images
```

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build:

```bash
npm run build
```

Start that build locally:

```bash
npm start
```

The sitemap uses `NEXT_PUBLIC_SITE_URL` when it is set. Without that variable, it uses `http://localhost:3000`.
