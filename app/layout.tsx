import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Utah MMC - Holdings, Services, Partnerships',
  description:
    'Utah MMC is a diversified holding company building service-focused businesses and long-term partnerships across multiple industries.',
  alternates: {
    canonical: 'https://utahmmc.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable}`}>{children}</body>
    </html>
  )
}

