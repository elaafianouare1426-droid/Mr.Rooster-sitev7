"use client"

import { Phone, Mail, Send, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-orange-950">Contact <span className="text-orange-600">Us</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              {/* زر WhatsApp بالاسم المطلوب */}
              <a href="https://wa.me/212600000000" className="flex flex-col items-center p-6 bg-white border border-orange-100 rounded-[2rem] hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-100 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <span className="font-bold text-orange-950 text-sm uppercase tracking-widest">WhatsApp</span>
                <span className="text-orange-900/60 mt-1 font-medium">+212 600 000 000</span>
              </a>

              {/* زر Call بالاسم المطلوب */}
              <a href="tel:+212600000000" className="flex flex-col items-center p-6 bg-white border border-orange-100 rounded-[2.5rem] hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-100 group-hover:scale-105 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <span className="font-bold text-orange-950 text-sm uppercase tracking-widest">Call</span>
                <span className="text-orange-900/60 mt-1 font-medium">+212 600 000 000</span>
              </a>
            </div>
          </div>

          {/* نموذج المراسلة */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-orange-50 shadow-2xl shadow-orange-900/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-950">Send Message</h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full h-12 px-4 rounded-xl border border-orange-100 outline-none focus:border-orange-500" />
                <input type="email" placeholder="Email" className="w-full h-12 px-4 rounded-xl border border-orange-100 outline-none focus:border-orange-500" />
              </div>
              <textarea placeholder="Tell us about your requirements..." className="w-full p-4 rounded-xl border border-orange-100 min-h-[120px] outline-none focus:border-orange-500 resize-none"></textarea>
              <button className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}