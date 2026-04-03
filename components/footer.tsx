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
    <footer className="gradient-hero">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 ${isRtl ? 'direction-rtl' : ''}`}>
          {/* Brand */}
          <div className={`space-y-6 ${isRtl ? 'text-right' : ''}`}>
            <Link href="/" className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className="bg-white rounded-full p-1 shadow-lg shadow-white/20">
                <Image
                  src="/images/logo.png"
                  alt="Mr. Rooster Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white drop-shadow-md">Mr.Rooster</span>
            </Link>
            <p className="text-white/85 leading-relaxed text-sm">
              {dictionary.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className={isRtl ? 'text-right' : ''}>
            <h3 className="text-white font-semibold text-lg mb-6">{dictionary.footer.quickLinks}</h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Breeds */}
          <div className={isRtl ? 'text-right' : ''}>
            <h3 className="text-white font-semibold text-lg mb-6">{dictionary.footer.ourBreeds}</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={isRtl ? 'text-right' : ''}>
            <h3 className="text-white font-semibold text-lg mb-6">{dictionary.footer.contactUs}</h3>
            <ul className="space-y-5">
              <li className={`flex items-center gap-4 text-white/80 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">+1 (555) 123-4567</span>
              </li>
              <li className={`flex items-center gap-4 text-white/80 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">info@mrrooster.farm</span>
              </li>
              <li className={`flex items-start gap-4 text-white/80 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">123 Farm Road, Rural County, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-white/20">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-6 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-white/80 font-medium">
              {new Date().getFullYear()} Mr.Rooster Poultry Farm. {dictionary.footer.allRightsReserved}
            </p>
            <div className={`flex gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <Link href="#" className="text-white/80 hover:text-white font-medium transition-colors">
                {dictionary.footer.privacyPolicy}
              </Link>
              <Link href="#" className="text-white/80 hover:text-white font-medium transition-colors">
                {dictionary.footer.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
