"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Phone, Sparkles, Facebook, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import Link from "next/link"

export function HeroSection() {
  const { dictionary, isRtl } = useLanguage()
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 overflow-hidden bg-orange-50">
      {/* خلفية برتقالية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-white" />
      
      {/* كلمة خلفية جمالية - تم تصغيرها للهواتف لضمان عدم خروجها عن الإطار */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] md:opacity-[0.05] select-none pointer-events-none">
        <h1 className="text-[25vw] md:text-[20vw] font-black tracking-tighter text-orange-900 uppercase">ROOSTER</h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full z-10">
        
        {/* تغيير الترتيب في الهاتف: الصورة أولاً ثم النص، أو العكس حسب تفضيلك */}
        <div dir={isRtl ? 'rtl' : 'ltr'} className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* المحتوى النصي - موازنة المحاذاة للهواتف */}
          <div className={`space-y-6 md:space-y-8 flex flex-col ${isRtl ? 'lg:items-start lg:text-right' : 'lg:items-start lg:text-left'} items-center text-center lg:block`}>
            <div className="inline-flex items-center gap-3 bg-orange-200/50 border border-orange-300 rounded-full px-4 py-1.5 shadow-sm w-fit">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-orange-900 text-[10px] md:text-xs font-bold uppercase tracking-widest">{dictionary.hero.badge}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-orange-950">
                Mr.Rooster
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700">
                {dictionary.hero.tagline}
              </p>
            </div>

            <p className="text-orange-900/70 text-sm md:text-lg leading-relaxed max-w-md font-medium">
              {dictionary.hero.description}
            </p>

            {/* الأزرار - متجاوبة لتصبح عمودية في الشاشات الصغيرة جداً */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 w-full sm:w-auto justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-8 py-6 h-auto font-bold shadow-lg shadow-orange-900/20 w-full sm:w-auto"
                asChild
              >
                <Link href="#breeds">
                  {dictionary.hero.viewBreeds}
                  <ArrowIcon className={`${isRtl ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-orange-200 text-orange-800 hover:bg-orange-100 rounded-xl px-8 py-6 h-auto font-bold bg-white/50 backdrop-blur-sm w-full sm:w-auto"
                asChild
              >
                <Link href="#contact">
                  <Phone className={`${isRtl ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                  Contact
                </Link>
              </Button>
            </div>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                <Link 
                  href="https://www.facebook.com/mohamed.anouar.elaafi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white/80 text-orange-700 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm border border-orange-200"
                >
                  <Facebook size={18}/>
                </Link>
                <Link 
                  href="https://www.instagram.com/mr_rooster.farm/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white/80 text-orange-700 rounded-full hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 hover:text-white transition-all shadow-sm border border-orange-200"
                >
                  <Instagram size={18}/>
                </Link>
                <Link 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white/80 text-orange-700 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-sm border border-orange-200"
                >
                  <Youtube size={18}/>
                </Link>
            </div>
          </div>

          {/* بطاقة السلالة - تم تعديل مقاساتها للهاتف */}
          <div className="relative flex items-center justify-center z-10 w-full">
            <div className={`bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-orange-950/5 border border-orange-100/50 w-full max-w-[280px] sm:max-w-sm text-center space-y-4 md:space-y-6 transform transition-all duration-500 active:scale-95 cursor-pointer ${isRtl ? 'lg:-rotate-2 lg:hover:rotate-0' : 'lg:rotate-2 lg:hover:rotate-0'}`}>
              
              <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto bg-orange-50 rounded-full p-2 border-2 border-dashed border-orange-200 overflow-hidden shadow-inner group">
                <Image
                  src="/images/breeds/B2.png" 
                  alt="Australorp Breed"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              <div className="space-y-2 md:space-y-3">
                <h3 className="text-xl md:text-2xl font-black text-orange-950 tracking-tight">
                  {isRtl ? "سلالة أسترالورب" : "Australorp Breed"}
                </h3>
                <p className="text-orange-900/70 text-[13px] md:text-sm font-semibold max-w-[240px] md:max-w-[280px] mx-auto leading-relaxed">
                  {isRtl 
                    ? "أفضل سلالة لإنتاج البيض واللحم في المزارع الحديثة" 
                    : "Premium breed for modern poultry farming production"}
                </p>
              </div>

              <Button asChild variant="link" className="text-orange-600 hover:text-orange-700 font-bold p-0 group hover:no-underline text-sm md:text-base">
                <Link href="#breeds" className="flex items-center gap-2">
                  {isRtl ? "انظر المزيد" : "See More"}
                  <ArrowIcon className={`w-4 h-4 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}