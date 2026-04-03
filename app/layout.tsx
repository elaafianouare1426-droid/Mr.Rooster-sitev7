import type { Metadata, Viewport } from 'next'
import { Poppins, Noto_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/language-context'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: 'Mr.Rooster Poultry Farm | Healthy Poultry, Strong Breeds, Trusted Farm',
  description: 'Mr.Rooster Poultry Farm - Your trusted source for healthy poultry, strong breeds, and premium farming solutions. Australorp Black, Golden Leghorn, French Hybrid, and our exclusive Mr.Rooster Light breed.',
  keywords: ['poultry farm', 'chicks', 'fertile eggs', 'incubation', 'farming', 'Mr Rooster', 'Australorp', 'Leghorn', 'chicken breeds'],
  authors: [{ name: 'Mr.Rooster Poultry Farm' }],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
      },
    ],
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Mr.Rooster Poultry Farm',
    description: 'Healthy Poultry | Strong Breeds | Trusted Farm',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF9900',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.className} ${notoSansArabic.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
