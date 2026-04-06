"use client"

import { MessageCircle, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

interface ContactInfo {
  icon: React.ReactNode
  title: string
  value: string
  action: string
  colorClass: string 
}

export function ContactSection() {
  const { isRtl } = useLanguage()

  const contactInfo: ContactInfo[] = [
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      action: "https://wa.me/15551234567",
      colorClass: "bg-[#25D366]", // لون واتساب
    },
    {
      icon: <Phone className="w-7 h-7 text-white" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      colorClass: "bg-orange-500", // لون البراند
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* العناوين - تم تصغيرها قليلاً للهواتف */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            {isRtl ? "تواصل معنا" : "GET IN TOUCH"}
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            {isRtl ? "اتصل " : "Contact "}<span className="text-accent">{isRtl ? "بنا" : "Us"}</span>
          </h2>
        </div>

        {/* 1. التعديل الأساسي: حاوية الأيقونات للهواتف */}
        {/* في الهاتف: flex لتصبح في سطر واحد، p-6 لتقليل المساحات البيضاء */}
        {/* في الحاسوب: تعود لشكل البطاقات md:grid md:grid-cols-2 gap-8 */}
        <div className={`max-w-3xl mx-auto bg-card rounded-[2.5rem] p-6 md:p-10 border border-border shadow-sm flex items-center justify-center gap-6 md:grid md:grid-cols-2 md:gap-8`}>
          
          {/* 2. التعديل الثانوي: الأيقونة نفسها */}
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.action}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center flex-shrink-0"
            >
              {/* في الهاتف: w-20 h-20، في الحاسوب: md:w-32 md:h-32 */}
              <div className="flex flex-col items-center gap-3">
                <div className={`w-20 h-20 md:w-32 md:h-32 ${info.colorClass} rounded-full md:rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  {info.icon}
                </div>
                {/* إخفاء التفاصيل في الهواتف وإظهارها في الحواسيب */}
                <h3 className="text-sm md:text-2xl font-bold text-foreground hidden md:block">{info.title}</h3>
                <p className="text-foreground/70 font-medium text-xs md:text-lg hidden md:block">{info.value}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}