"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const { dictionary, isRtl } = useLanguage()

  const footerLinks = {
    quickLinks: [
      { href: "#home", label: dictionary.nav.home },
      { href: "#breeds", label: dictionary.nav.breeds },
      { href: "#process", label: dictionary.nav.howItWorks },
      { href: "#about", label: dictionary.nav.about },
    ],
    services: [
      { href: "#breeds", label: dictionary.breeds.breeds.australorpBlack.name },
      { href: "#breeds", label: dictionary.breeds.breeds.goldenLeghorn.name },
      { href: "#breeds", label: dictionary.breeds.breeds.frenchHybrid.name },
      { href: "#breeds", label: dictionary.breeds.breeds.mrRoosterLight.name },
    ],
  }

  return (
    // تم تغيير الكلاس هنا من gradient-hero إلى خلفية برتقالية صريحة (bg-orange-600) لضمان ظهور اللون
    <footer className="bg-orange-600 text-white border-t border-orange-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 ${isRtl ? 'text-right' : 'text-left'}`}>
          
          {/* Brand & Logo Section */}
          <div className="space-y-6">
            <Link href="/" className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse justify-start' : ''}`}>
              <div className="bg-white rounded-full p-1 shadow-xl shadow-orange-950/20">
                <Image
                  src="/images/logo.png" // تأكد أن الشعار موجود في public/images/logo.png
                  alt="Mr. Rooster Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white drop-shadow-sm">Mr.Rooster</span>
            </Link>
            <p className="text-orange-50/90 leading-relaxed text-sm font-medium">
              {dictionary.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 decoration-white/30 decoration-2 underline-offset-8 underline">{dictionary.footer.quickLinks}</h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-orange-50/80 hover:text-white transition-all font-semibold inline-block hover:translate-x-1 duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Breeds Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 decoration-white/30 decoration-2 underline-offset-8 underline">{dictionary.footer.ourBreeds}</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-orange-50/80 hover:text-white transition-all font-semibold inline-block hover:translate-x-1 duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 decoration-white/30 decoration-2 underline-offset-8 underline">{dictionary.footer.contactUs}</h3>
            <ul className="space-y-5">
              <li className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-orange-50">+212 600 000 000</span>
              </li>
              <li className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-orange-50">info@mrrooster.farm</span>
              </li>
              <li className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-orange-50 leading-snug">Morocco, Farm Region</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-white/20">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-6 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-orange-50/80 font-bold text-sm">
              {new Date().getFullYear()} Mr.Rooster Poultry Farm. {dictionary.footer.allRightsReserved}
            </p>
            <div className={`flex gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <Link href="#" className="text-orange-50/80 hover:text-white font-bold text-sm transition-colors uppercase tracking-widest">
                {dictionary.footer.privacyPolicy}
              </Link>
              <Link href="#" className="text-orange-50/80 hover:text-white font-bold text-sm transition-colors uppercase tracking-widest">
                {dictionary.footer.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}