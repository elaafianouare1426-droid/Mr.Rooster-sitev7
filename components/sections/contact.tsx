"use client"

import { Phone, Mail, Send, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

// تأكد من وجود كلمة export هنا لإصلاح الخطأ
export function ContactSection() {
  const { dictionary, isRtl } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-white border-t border-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${isRtl ? 'direction-rtl' : ''}`}>
          
          <div className={`space-y-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h2 className="text-4xl font-black text-orange-950">
              {isRtl ? <>اتصل <span className="text-orange-600">بنا</span></> : <>Contact <span className="text-orange-600">Us</span></>}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <a href="https://wa.me/212600000000" className="flex flex-col items-center p-6 bg-white border border-orange-100 rounded-[2rem] hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-100 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <span className="font-bold text-orange-950 text-sm uppercase">{isRtl ? 'واتساب' : 'WhatsApp'}</span>
              </a>

              <a href="tel:+212600000000" className="flex flex-col items-center p-6 bg-white border border-orange-100 rounded-[2.5rem] hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-100 group-hover:scale-105 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <span className="font-bold text-orange-950 text-sm uppercase">{isRtl ? 'إتصل بنا' : 'Call'}</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-orange-50 shadow-2xl shadow-orange-900/5">
            <div className={`flex items-center gap-3 mb-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-950">{isRtl ? 'أرسل رسالة' : 'Send Message'}</h3>
            </div>
            
            <div className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder={isRtl ? 'الاسم' : 'Name'} className="w-full h-12 px-4 rounded-xl border border-orange-100 outline-none focus:border-orange-500" />
                <input type="email" placeholder={isRtl ? 'البريد الإلكتروني' : 'Email'} className="w-full h-12 px-4 rounded-xl border border-orange-100 outline-none focus:border-orange-500" />
              </div>

              <select className={`w-full h-12 px-4 rounded-xl border border-orange-100 outline-none focus:border-orange-500 appearance-none bg-white font-medium text-orange-900/70 ${isRtl ? 'text-right pr-4' : 'text-left pl-4'}`}>
                <option value="visit_request">{isRtl ? 'لطلب موعد زيارة' : 'Request a Visit Appointment'}</option>
                <option value="general">{isRtl ? 'استفسار عام' : 'General Inquiry'}</option>
              </select>

              <textarea placeholder={isRtl ? 'أخبرنا عن تفاصيل الزيارة...' : 'Tell us about your requirements...'} className="w-full p-4 rounded-xl border border-orange-100 min-h-[120px] outline-none focus:border-orange-500 resize-none"></textarea>
              
              <button className={`w-full h-14 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                {isRtl ? 'إرسال الطلب' : 'Send Request'} <Send size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}