"use client"

import React from "react"
import { 
  ShoppingCart, Send, Lightbulb, Gift, Syringe, ShieldCheck, 
  Activity, Thermometer, ArrowRight, ArrowLeft, Phone, MessageCircle, Truck
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ProcessSection() {
  const { isRtl } = useLanguage()
  const Arrow = isRtl ? ArrowLeft : ArrowRight

  const eggJourney = [
    { 
      icon: ShoppingCart, label: isRtl ? "طلب العميل" : "Order", color: "bg-orange-500",
      title: isRtl ? "كيفية طلب البيض المخصب" : "How to Order",
      details: isRtl ? "إتمام الطلب عبر الهاتف أو الواتساب بنظام حجز مرن." : "Order via phone or WhatsApp.",
      subIcon: <div className="flex gap-1"><Phone size={10} /><MessageCircle size={10} /></div>
    },
    { 
      icon: Send, label: isRtl ? "التحضير والإرسال" : "Prep & Shipping", color: "bg-orange-500",
      title: isRtl ? "معايير التغليف والشحن" : "Packaging & Shipping",
      details: isRtl ? "تغليف مضاد للصدمات لضمان وصول البيض بسلام." : "Safe cleaning and shockproof packaging.",
      subIcon: <Truck size={12} />
    },
    { 
      icon: Lightbulb, label: isRtl ? "المتابعة والاختبار" : "Testing", color: "bg-orange-600",
      title: isRtl ? "عملية فحص الخصوبة" : "Fertility Testing",
      details: isRtl ? "الفحص الضوئي في اليوم السابع للتأكد من نمو الجنين." : "Day 7 light testing to confirm embryo development."
    },
    { 
      icon: Gift, label: isRtl ? "التعويض" : "Replace", color: "bg-green-600",
      title: isRtl ? "ضمان التعويض" : "Replacement Guarantee",
      details: isRtl ? "تعويض مباشر ببيض جديد في حال عدم التخصيب." : "Instant replacement for unfertile eggs."
    },
  ]

  const vaccineSteps = [
    { icon: Syringe, label: isRtl ? "الكورزا" : "Corza", day: "اليوم 1", title: "لقاح الكورزا", info: isRtl ? "يحمي من تورم الوجه والإفرازات." : "Protects from swelling." },
    { icon: ShieldCheck, label: isRtl ? "نيوكاسل" : "Newcastle", day: "اليوم 7", title: "لقاح النيوكاسل", info: isRtl ? "يحمي من الفيروس القاتل للجهاز العصبي." : "Protects from Newcastle." },
    { icon: Activity, label: isRtl ? "الكوكسيديا" : "Coccidia", day: "اليوم 14", title: "لقاح الكوكسيديا", info: isRtl ? "يحمي من الطفيليات المعوية." : "Protects from parasites." },
    { icon: Thermometer, label: isRtl ? "الصالونلا" : "Salmonella", day: "اليوم 21", title: "لقاح الصالونلا", info: isRtl ? "يحمي من البكتيريا المعوية." : "Protects from Salmonella." },
    { icon: Gift, label: isRtl ? "إضافي" : "Extra", day: "اليوم 25", title: "لقاحات إضافية", info: isRtl ? "تعزيز المناعة حسب الحالة الوبائية." : "Immunity boosters." },
    { icon: ShieldCheck, label: isRtl ? "تذكير" : "Booster", day: "اليوم 30", title: "تذكير نيوكاسل", info: isRtl ? "جرعة تنشيطية لضمان الحماية." : "Booster dose." },
  ]

  return (
    <TooltipProvider delayDuration={150}>
      <section id="process" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-6 w-full relative z-10">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-orange-950 tracking-tight px-2">
              {isRtl ? "طريقة العمل والمعالجة" : "How It Works"}
            </h2>
            <div className="h-1.5 w-16 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-16 md:space-y-12">
            
            {/* مراحل البيض - تحويلها إلى Grid متجاوب */}
            <div className="bg-orange-50/40 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-orange-100/60 shadow-sm relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
                <span className="bg-orange-100 text-orange-900 px-4 md:px-6 py-1.5 rounded-full font-black text-[10px] md:text-sm border border-orange-200 whitespace-nowrap shadow-sm">
                  {isRtl ? "مراحل بيع البيض" : "Egg Sales Stages"}
                </span>
              </div>
              
              {/* تعديل التوزيع: عمودين في الهاتف، وأربعة في الحواسيب */}
              <div className={`grid grid-cols-2 md:flex md:justify-between items-center gap-y-10 gap-x-4 mt-6 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
                {eggJourney.map((step, index) => (
                  <React.Fragment key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center group cursor-help relative">
                          <div className={`w-14 h-14 md:w-16 md:h-16 ${step.color} text-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 relative`}>
                            <step.icon size={24} className="md:w-7 md:h-7" />
                            {step.subIcon && (
                                <div className="absolute -top-2 -right-2 bg-white text-orange-600 p-1 rounded-full shadow-md border border-orange-50">
                                    {step.subIcon}
                                </div>
                            )}
                          </div>
                          <span className="mt-3 font-bold text-orange-950 text-[10px] md:text-xs text-center">{step.label}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-[240px] bg-white text-orange-950 border-2 border-orange-100 p-4 shadow-2xl rounded-2xl z-[100]">
                           <p className="font-black text-orange-600 border-b pb-1 mb-1 text-xs">{step.title}</p>
                           <p className="text-[11px] leading-relaxed font-medium text-orange-900/80 italic">{step.details}</p>
                      </TooltipContent>
                    </Tooltip>
                    {/* إخفاء الأسهم في الهواتف لأن التصميم يصبح Grid */}
                    {index < eggJourney.length - 1 && <Arrow className="text-orange-200 hidden md:block opacity-40" size={20} />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* نظام التلقيح - تحسين الظهور في الهواتف */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-blue-50 shadow-xl shadow-blue-900/5 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
                <span className="bg-blue-50 text-blue-900 px-4 md:px-6 py-1.5 rounded-full font-black text-[10px] md:text-sm border border-blue-100 whitespace-nowrap shadow-sm">
                  {isRtl ? "نظام تلقيح الكتكوت" : "Protocole sanitaire"}
                </span>
              </div>

              {/* تحويلها إلى 3 أعمدة في الهاتف بدلاً من الزحام */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-2 mt-6">
                {vaccineSteps.map((vax, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center group cursor-help">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-blue-600 border border-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                          <vax.icon size={20} className="md:w-6 md:h-6" />
                        </div>
                        <p className="mt-2 text-[10px] md:text-xs font-black text-orange-950 text-center">{vax.label}</p>
                        <span className="text-[8px] md:text-[10px] font-bold text-orange-400 uppercase tracking-tighter">{vax.day}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-[240px] bg-white text-blue-950 border-2 border-blue-100 p-4 shadow-2xl rounded-2xl z-[100]">
                         <p className="font-black text-blue-600 border-b pb-1 mb-1 text-xs">{vax.title}</p>
                         <p className="text-[11px] leading-relaxed font-medium text-blue-900/80 italic">{vax.info}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}