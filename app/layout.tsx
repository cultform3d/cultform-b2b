import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'CULTFORM — Инвестиции в 3D-печать корпусов РЭА и приборов | 6% в месяц',
  description: 'Инвестиции в промышленные мощности 3D-печати CULTFORM. Пассивный доход 6% в месяц (72% годовых), обеспеченный контрактами на 3D-печать корпусов РЭА, сетевых устройств и приборов автоматики для КБ и R&D.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#100904',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
