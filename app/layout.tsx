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
  description: 'Mr.Rooster Poultry Farm - Your trusted source for healthy poultry, strong breeds, and premium farming solutions.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF9900',
  width: 'device-width',
  initialScale: 1,
  // إضافة لمنع المستخدم من تكبير الشاشة يدوياً مما قد يسبب انزياحاً وهمياً
  maximumScale: 1, 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // ملاحظة: اللغة والاتجاه يتم التحكم بهما ديناميكياً عبر LanguageProvider
    // لذا نترك html كإطار عام
    <html lang="en" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body className={`${poppins.className} ${notoSansArabic.variable} antialiased overflow-x-hidden relative w-full m-0 p-0`}>
        <LanguageProvider>
          {/* الحاوية الرئيسية: أضفنا max-w-full لضمان عدم تجاوز العرض مهما حدث */}
          <main className="flex flex-col min-h-screen w-full max-w-full overflow-hidden">
            {children}
          </main>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}