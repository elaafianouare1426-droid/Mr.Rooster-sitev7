import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/i18n/language-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mr.Rooster Farm',
  description: 'Premium Poultry Farm',
}

// التصدير الافتراضي ضروري جداً هنا
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}