import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://circlekit.vercel.app"),
  title: "CircleKit - Group Support Session Platform for Facilitators",
  description:
    "Launch your group support practice in days. CircleKit provides peer specialists, coaches, and facilitators with CBT-based templates, scheduling, and payment processing.",
  keywords: [
    "group support session software",
    "peer support group platform",
    "how to run a support group",
    "grief support group software",
    "online support group platform",
    "facilitator tools",
    "CBT group therapy templates",
    "peer specialist software",
    "group coaching platform",
  ],
  alternates: {
    canonical: "https://circlekit.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "CircleKit - Group Support Session Platform",
    description:
      "Run professional group support sessions with evidence-based templates, integrated scheduling, and payment processing.",
    url: "https://circlekit.vercel.app",
    siteName: "CircleKit",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CircleKit - Group Support Sessions Made Easy",
    description:
      "Launch your group support practice in days with CBT-based templates and all-in-one tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "CircleKit",
              description:
                "Group support session platform for peer specialists, coaches, and facilitators to run structured, evidence-based support groups.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: "https://circlekit.vercel.app",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "CBT-based session templates",
                "Group scheduling and management",
                "Integrated payment processing",
                "Participant progress tracking",
                "Video conferencing integration",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
