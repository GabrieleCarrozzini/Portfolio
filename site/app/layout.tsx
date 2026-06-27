import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import IntroAnimation from '@/components/ui/IntroAnimation';
import CustomCursor from '@/components/ui/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gabrielecarrozzini.com'),
  title: {
    default: 'Gabriele Carrozzini — Visual Designer',
    template: '%s | Gabriele Carrozzini',
  },
  description:
    'Portfolio of Gabriele Carrozzini — Visual Designer based in Rome, Italy. Brand identity, art direction, poster design, character art, and digital experiences. Design should communicate before it decorates.',
  keywords: [
    'Visual Designer',
    'Art Director',
    'Brand Identity',
    'Graphic Design',
    'Poster Design',
    'Character Art',
    'Advertising Design',
    'Digital Experiences',
    'Gabriele Carrozzini',
    'Rome',
    'Italy',
  ],
  authors: [{ name: 'Gabriele Carrozzini' }],
  creator: 'Gabriele Carrozzini',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gabrielecarrozzini.com',
    siteName: 'Gabriele Carrozzini',
    title: 'Gabriele Carrozzini — Visual Designer',
    description: 'Visual Designer based in Rome. Brand identity, art direction, poster design, character art. Design should communicate before it decorates.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gabriele Carrozzini — Visual Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriele Carrozzini — Visual Designer',
    description: 'Visual Designer based in Rome. Brand identity, art direction, poster design, character art.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning style={{ background: 'var(--black-900)', color: 'var(--white)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Schema.org Person structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Gabriele Carrozzini',
              jobTitle: 'Visual Designer',
              description:
                'Visual Designer based in Rome, Italy. Brand identity, art direction, poster design, character art, and digital experiences.',
              url: 'https://gabrielecarrozzini.com',
              email: 'gabriele.carrozzini1@gmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Rome', addressCountry: 'IT' },
              knowsAbout: [
                'Brand Identity',
                'Visual Design',
                'Art Direction',
                'Poster Design',
                'Character Art',
                'Visual Storytelling',
                'Digital Experiences',
                'AI-Assisted Creative Work',
              ],
            }),
          }}
        />
        <CustomCursor />
        <IntroAnimation />
        <Nav />
        <main id="main-content" style={{ flex: 1 }} tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
