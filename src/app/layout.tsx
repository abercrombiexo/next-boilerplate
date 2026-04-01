import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = 'https://acme.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Acme - Build faster. Ship with confidence.',
    template: '%s | Acme',
  },
  description: 'The modern platform for teams who want to move fast without breaking things. Start building today with powerful developer tools.',
  generator: 'v0.app',
  keywords: ['developer tools', 'web development', 'deployment', 'platform', 'Next.js', 'React'],
  authors: [{ name: 'Acme, Inc.' }],
  creator: 'Acme, Inc.',
  publisher: 'Acme, Inc.',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Acme',
    title: 'Acme - Build faster. Ship with confidence.',
    description: 'The modern platform for teams who want to move fast without breaking things. Start building today with powerful developer tools.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Acme - Build faster. Ship with confidence.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acme - Build faster. Ship with confidence.',
    description: 'The modern platform for teams who want to move fast without breaking things.',
    images: ['/og-image.png'],
    creator: '@acme',
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <p className="label-12">Hello</p>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
