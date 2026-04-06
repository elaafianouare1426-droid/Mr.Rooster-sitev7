"use client"

import { Phone } from "lucide-react"
// استيراد أيقونة واتساب من FontAwesome أو استخدام SVG مخصص
import { FaWhatsapp } from "react-icons/fa" 
import { useLanguage } from "@/lib/i18n/language-context"

export function ContactSection() {
  const { isRtl } = useLanguage()

  const contactLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      href: "https://wa.me/212600000000", // ضع رقمك هنا
      bgColor: "bg-[#25D366]",
      shadow: "shadow-[0_10px_20px_-5px_rgba(37,211,102,0.4)]"
    },
    {
      name: "Phone",
      icon: <Phone className="w-7 h-7 md:w-9 md:h-9 text-white" />,
      href: "tel:+212600000000", // ضع رقمك هنا
      bgColor: "bg-orange-500",
      shadow: "shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)]"
    }
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* العناوين */}
        <div className="text-center mb-12">
          <p className="text-orange-600 font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
            {isRtl ? "تواصل معنا" : "GET IN TOUCH"}
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-orange-950">
            {isRtl ? "اتصل " : "Contact "}<span className="text-orange-600">{isRtl ? "بنا" : "Us"}</span>
          </h2>
        </div>

        {/* الحاوية البيضاء التي تضم الأيقونات */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-orange-50 shadow-2xl shadow-orange-900/5 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative flex items-center justify-center 
                  w-20 h-20 md:w-28 md:h-28 
                  ${link.bgColor} rounded-full 
                  ${link.shadow}
                  transition-all duration-300 hover:scale-110 active:scale-95
                `}
              >
                {link.icon}
                {/* تأثير نبض خفيف خلف الأيقونة */}
                <span className={`absolute inset-0 rounded-full ${link.bgColor} animate-ping opacity-20 -z-10`}></span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}