import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from '@/lib/json-ld'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://neo-code.fr'
  ),
  title: {
    default: 'Neo Code - Artisan du logiciel sur-mesure',
    template: '%s | Neo Code',
  },
  description:
    "Créateur de solutions numériques sur-mesure pour PME/TPE. Développement from scratch et modernisation d'applications. Dordogne, Gironde, Paris.",
  keywords: [
    'logiciel sur mesure',
    'développement web',
    'application métier',
    'Dordogne',
    'Bergerac',
    'Gironde',
    'développeur freelance',
    'développement application',
    'modernisation logiciel',
  ],
  authors: [{ name: 'Fabien Dijaud', url: 'https://neo-code.fr' }],
  creator: 'Neo Code',
  publisher: 'Neo Code',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Neo Code',
    title: 'Neo Code - Artisan du logiciel sur-mesure',
    description:
      'Créateur de solutions numériques sur-mesure pour éliminer vos frictions quotidiennes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Neo Code - Artisan du logiciel sur-mesure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neo Code - Artisan du logiciel sur-mesure',
    description:
      'Créateur de solutions numériques sur-mesure pour éliminer vos frictions quotidiennes.',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-96BBNGVB47"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-96BBNGVB47');
          `}
        </Script>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
