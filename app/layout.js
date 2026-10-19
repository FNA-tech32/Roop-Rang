import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Oranienbaum, Montserrat } from "next/font/google";

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  variable: "--font-oranienbaum",
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
export const metadata = {
  title: {
    default: "Roop Rang | Bridal Makeup in Karachi",
    template: "%s | Roop Rang",
  },
  applicationName: "Roop Rang",
  description:
    "Discover bridal makeup, party makeup, hair, skin and beauty services at Roop Rang in DHA Phase 6, Karachi.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Roop Rang",
    title: "Roop Rang | Bridal Makeup in Karachi",
    description:
      "Bridal makeup, party makeup, hair, skin and beauty services in DHA Phase 6, Karachi.",
    images: [
      {
        url: "/images/og-image.jfif",
        width: 1200,
        height: 630,
        alt: "Roop Rang in Karachi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roop Rang | Bridal Makeup in Karachi",
    description:
      "Bridal makeup, party makeup, hair, skin and beauty services in DHA Phase 6, Karachi.",
    images: ["/images/og-image.jfif"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oranienbaum.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
