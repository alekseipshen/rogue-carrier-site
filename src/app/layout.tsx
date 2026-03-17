import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rogue Carrier | CDL Class A Drivers Wanted — Top Industry Pay',
  description:
    'Join Rogue Carrier — 400+ trucks, dedicated Dry Van routes across 48 states. Competitive pay with modern 2024-2026 equipment. Apply now!',
  keywords: 'CDL Class A, truck driver jobs, Rogue Carrier, dedicated routes, dry van, OTR driving',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Rogue Carrier — Freight Without Limits',
    description: 'Join 400+ drivers earning competitive pay on dedicated routes across 48 states.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${oswald.variable} antialiased bg-rogue-black text-rogue-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
