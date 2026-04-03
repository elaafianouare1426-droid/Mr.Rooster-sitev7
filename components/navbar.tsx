"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { dictionary, isRtl } = useLanguage()

  const navLinks = [
    { href: "#home", label: dictionary.nav.home },
    { href: "#breeds", label: dictionary.nav.breeds },
    { href: "#process", label: dictionary.nav.howItWorks },
    { href: "#about", label: dictionary.nav.about },
    { href: "#contact", label: dictionary.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-orange-100" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between h-24 ${isRtl ? 'flex-row-reverse' : ''}`}>
          
          {/* Logo - تم إصلاح وسم الإغلاق وتحسين الوضوح */}
          <Link href="/" className={`flex items-center gap-3 group ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className="rounded-full p-2 bg-white shadow-lg border-2 border-orange-100/50">
              <Image
                src="/images/logo.png"
                alt="Mr. Rooster Logo"
                width={60}
                height={60}
                className="h-14 w-14 object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-black tracking-tight text-orange-950 drop-shadow-sm transition-colors group-hover:text-orange-700">
              Mr.<span className="text-orange-600">Rooster</span>
            </span>
          </Link>

          {/* Desktop Navigation - نصوص برتقالية داكنة للوضوح */}
          <div className={`hidden md:flex items-center gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-bold transition-all duration-300 relative py-2 ${
                  scrolled 
                    ? "text-orange-950 hover:text-orange-600" 
                    : "text-orange-900 hover:text-orange-600"
                } after:absolute after:bottom-0 ${isRtl ? 'after:right-0' : 'after:left-0'} after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Language Switcher - ربط الزر بقسم Contact */}
          <div className={`hidden md:flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <LanguageSwitcher scrolled={true} /> 
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white border-0 shadow-lg px-7 py-5 h-auto text-sm font-black transition-transform active:scale-95">
              <Link href="#contact">
                {dictionary.nav.contact}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-orange-950 hover:bg-orange-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-t border-orange-100 shadow-xl">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-orange-950 hover:text-orange-600 hover:bg-orange-50 transition-all font-bold py-3.5 px-4 rounded-xl ${isRtl ? 'text-right' : 'text-left'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className={`pt-4 flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <LanguageSwitcher scrolled={true} />
              <Button asChild className="flex-1 bg-orange-600 hover:bg-orange-700 text-white border-0 shadow-lg py-6 h-auto font-black">
                <Link href="#contact">
                  {dictionary.nav.contact}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}