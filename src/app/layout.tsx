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
  title: "Verkauf der Dartsammlung",
  description: "Darts - same same but different - 26 verschiedene Sets verfügbar - von wie neu bis bespielt. PayPal-Zahlung, Versand möglich. WhatsApp-Kontakt für Fragen.",
  keywords: "Darts, Dart-Sets, Steeldarts, Tungsten, Verkauf, Dart-Verkauf, Dart-Sammlung",
  authors: [{ name: "Sebastian Grosse" }],
  creator: "Sebastian Grosse",
  publisher: "Sebastian Grosse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://darts.sebjogro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Verkauf der Dartsammlung",
    description: "Darts - same same but different - 26 verschiedene Sets verfügbar - von wie neu bis bespielt. PayPal-Zahlung, Versand möglich.",
    url: 'https://darts.sebjogro.com',
    siteName: 'Dart Sets Verkauf',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Verkauf der Dartsammlung",
    description: "Entdecke unsere Auswahl an hochwertigen Dart-Sets. 26 verschiedene Sets verfügbar - von wie neu bis bespielt. PayPal-Zahlung, Versand inklusive.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
