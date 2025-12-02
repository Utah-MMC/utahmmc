import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: 'Utah MMC - Employee Portal',
  description: 'Employee portal for Utah MMC - A diversified holding company overseeing a wide portfolio of service-focused businesses',
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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

