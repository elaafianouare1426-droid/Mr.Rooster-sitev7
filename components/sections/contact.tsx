"use client"

import { Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function ContactSection() {
  const { isRtl } = useLanguage()

  const contactLinks = [
    {
      name: "WhatsApp",
      // أيقونة واتساب بصيغة SVG مباشرة
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-current text-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      href: "https://wa.me/212600000000",
      bgColor: "bg-[#25D366]",
      shadow: "shadow-[0_10px_20px_-5px_rgba(37,211,102,0.4)]"
    },
    {
      name: "Phone",
      icon: <Phone className="w-7 h-7 md:w-9 md:h-9 text-white" />,
      href: "tel:+212600000000",
      bgColor: "bg-orange-500",
      shadow: "shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)]"
    }
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-orange-600 font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
            {isRtl ? "تواصل معنا" : "GET IN TOUCH"}
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-orange-950">
            {isRtl ? "اتصل " : "Contact "}<span className="text-orange-600">{isRtl ? "بنا" : "Us"}</span>
          </h2>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-orange-50 shadow-2xl shadow-orange-900/5 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 ${link.bgColor} rounded-full ${link.shadow} transition-all duration-300 hover:scale-110 active:scale-95`}
              >
                {link.icon}
                <span className={`absolute inset-0 rounded-full ${link.bgColor} animate-ping opacity-20 -z-10`}></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}