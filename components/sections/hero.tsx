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
    // إضافة w-full و overflow-hidden هنا ضروري جداً لمنع الزحف الجانبي
    <section id="home" className="relative min-h-screen w-full flex items-center pt-20 pb-12 overflow-hidden bg-orange-50">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-white" />
      
      {/* كلمة ROOSTER: قمت بتصغيرها أكثر للهاتف لأنها غالباً هي من يدفع المحتوى لليسار */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[30vw] md:text-[20vw] font-black tracking-tighter text-orange-900 uppercase">ROOSTER</h1>
      </div>

      {/* px-4 للهاتف تضمن عدم التصاق النص بالحواف */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 z-10">
        <div dir={isRtl ? 'rtl' : 'ltr'} className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">
          
          {/* النص: تم إزالة أي max-w قد يسبب مشاكل وتم استبداله بـ w-full */}
          <div className={`w-full flex flex-col items-center text-center lg:items-start lg:text-left ${isRtl ? 'lg:items-start lg:text-right' : ''} space-y-6`}>
            <div className="inline-flex items-center gap-3 bg-orange-200/50 border border-orange-300 rounded-full px-4 py-1.5 shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-orange-900 text-[10px] font-bold uppercase tracking-widest">{dictionary.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-orange-950 leading-tight">
              Mr.Rooster
            </h1>

            <p className="text-orange-900/70 text-base md:text-lg max-w-md font-medium">
              {dictionary.hero.description}
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start w-full">
              <Button size="lg" className="bg-orange-600 text-white rounded-xl px-6 py-5 h-auto font-bold w-full sm:w-auto" asChild>
                <Link href="#breeds">
                  {dictionary.hero.viewBreeds}
                  <ArrowIcon className="mx-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/50 rounded-xl px-6 py-5 h-auto font-bold w-full sm:w-auto" asChild>
                <Link href="#contact">
                  <Phone className="mx-2 h-5 w-5" />
                  Contact
                </Link>
              </Button>
            </div>
          </div>

          {/* البطاقة: التأكد من أنها لا تتجاوز عرض الشاشة */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-orange-100 w-full max-w-[300px] sm:max-w-sm text-center space-y-4">
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto bg-orange-50 rounded-full overflow-hidden">
                <Image src="/images/breeds/B2.png" alt="Breed" fill className="object-contain p-4" />
              </div>
              <h3 className="text-xl font-black text-orange-950">
                {isRtl ? "سلالة أسترالورب" : "Australorp Breed"}
              </h3>
              <Button asChild variant="link" className="text-orange-600 font-bold p-0">
                <Link href="#breeds" className="flex items-center gap-2">
                  {isRtl ? "انظر المزيد" : "See More"}
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}