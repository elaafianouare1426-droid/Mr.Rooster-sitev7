"use client"

import { useState } from "react"
import { MessageCircle, Phone, Send, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

interface ContactInfo {
  icon: React.ReactNode
  title: string
  value: string
  action: string
  colorClass: string 
}

export function ContactSection() {
  const { dictionary, isRtl } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    city: "", 
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  // تم الإبقاء على WhatsApp و Phone فقط وحذف الإيميل
  const contactInfo: ContactInfo[] = [
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      action: "https://wa.me/15551234567",
      colorClass: "bg-[#25D366]", // لون واتساب الأخضر
    },
    {
      icon: <Phone className="w-7 h-7 text-white" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      colorClass: "bg-orange-500", // لون البراند البرتقالي
    },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      console.log("Visit Request submitted:", formData)
      setFormData({ name: "", city: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            {isRtl ? "تواصل معنا" : "GET IN TOUCH"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {isRtl ? "اتصل " : "Contact "}<span className="text-accent">{isRtl ? "بنا" : "Us"}</span>
          </h2>
        </div>

        {/* Contact Info Cards - تظهر بطاقتان فقط الآن */}
        <div className={`grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-8 mb-16 ${isRtl ? "direction-rtl" : ""}`}>
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.action}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-3xl p-10 border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="flex flex-col items-center gap-5">
                <div className={`w-20 h-20 ${info.colorClass} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{info.title}</h3>
                <p className="text-foreground/70 font-medium">{info.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Visit Request Form */}
        <div className="max-w-2xl mx-auto bg-card rounded-[2.5rem] p-10 border border-border shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-border">
            <div className="p-3 bg-accent/10 rounded-xl">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-black text-foreground">
              {isRtl ? "طلب زيارة المزرعة" : "Book a Visit Request"}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={isRtl ? "text-right" : ""}>
                <label className="block text-sm font-bold text-foreground mb-2">{isRtl ? "الاسم الكامل" : "Full Name"}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={isRtl ? "أحمد محمد" : "John Doe"}
                  className="w-full px-5 py-4 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                  required
                />
              </div>
              <div className={isRtl ? "text-right" : ""}>
                <label className="block text-sm font-bold text-foreground mb-2">{isRtl ? "المدينة" : "City"}</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder={isRtl ? "الدار البيضاء" : "Casablanca"}
                  className="w-full px-5 py-4 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className={isRtl ? "text-right" : ""}>
              <label className="block text-sm font-bold text-foreground mb-2">{isRtl ? "رقم الهاتف" : "Phone Number"}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+212 600 000000"
                className="w-full px-5 py-4 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                required
              />
            </div>

            <div className={isRtl ? "text-right" : ""}>
              <label className="block text-sm font-bold text-foreground mb-2">{isRtl ? "رسالة قصيرة" : "Short Message"}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={isRtl ? "اكتب استفسارك هنا..." : "Tell us briefly..."}
                rows={3}
                className="w-full px-5 py-4 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="gradient-button text-white border-0 w-full py-6 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-accent/30 transition-all flex items-center justify-center gap-3"
            >
              <Send className="w-5 h-5" />
              {isLoading ? (isRtl ? "جاري الإرسال..." : "Sending...") : (isRtl ? "إرسال الطلب الآن" : "Send Visit Request")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}