"use client"

import Image from "next/image"
import { Award, Clock, Heart, Users, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

export function AboutSection() {
  const { dictionary, isRtl, currentLang } = useLanguage()
  
  // لضمان عدم حدوث خطأ في حال كانت اللغة غير معرفة
  const activeLang = currentLang || (isRtl ? 'ar' : 'en');

  const stats = [
    { icon: Clock, value: "10+", label: dictionary.about.stats.yearsExperience },
    { icon: Users, value: "500+", label: dictionary.about.stats.happyFarmers },
    { icon: Award, value: "50K+", label: dictionary.about.stats.chicksDelivered },
    { icon: Heart, value: "100%", label: dictionary.about.stats.qualityFocus },
  ]

  const partners = [
    {
      nameAr: "علف الساحل",
      nameFr: "Alf Sahel",
      nameEn: "Alf Sahel",
      logo: "/images/partners/alf-sahel.png",
      url: "https://www.alfsahel.com/ar/contact",
    },
    {
      nameAr: "الأطلسي للأدوية البيطرية",
      nameFr: "Atlas Vétérinaire",
      nameEn: "Atlas Veterinary",
      logo: "/images/partners/atlas-vet.png",
      url: "https://www.atlasvet.net/ar/%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA/%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D8%AC%D9%86/item/12-bromoflor-fort.html",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 min-h-[90vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRtl ? 'direction-rtl' : ''}`}>
          
          {/* الجانب الأيسر: شعار المزرعة */}
          <div className={`relative hidden lg:block ${isRtl ? 'lg:order-2' : ''}`}>
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-accent/10 rounded-[3rem] rotate-6 scale-95 blur-xl" />
              <Card className="relative w-full h-full border-0 shadow-2xl rounded-[2.5rem] bg-white flex items-center justify-center p-12">
                <Image
                  src="/images/logo.png"
                  alt="Mr. Rooster Logo"
                  width={320}
                  height={320}
                  className="object-contain"
                  priority
                />
              </Card>
            </div>
          </div>

          {/* الجانب الأيمن: المحتوى والشركاء */}
          <div className={`space-y-10 ${isRtl ? 'lg:order-1 text-right' : ''}`}>
            <div className="space-y-4">
              <span className="text-accent font-bold text-sm uppercase tracking-widest block">
                {dictionary.about.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-amber-950 leading-tight">
                {dictionary.about.title} <span className="text-accent">{dictionary.about.titleHighlight}</span>
              </h2>
              <p className="text-amber-900/70 text-lg leading-relaxed font-medium">
                <span className="text-accent font-bold">Mr.Rooster</span> {dictionary.about.intro?.replace(/.*:/, '')}
              </p>
            </div>

            {/* الإحصائيات المختصرة */}
            <div className="grid grid-cols-4 gap-4 py-8 border-y border-amber-200/50">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <p className="text-2xl md:text-3xl font-black text-amber-950 group-hover:text-accent transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-amber-700/60 font-bold uppercase tracking-tighter">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* قسم الشركاء المدمج بالألوان الأصلية */}
            <div className="pt-2">
              <h3 className="text-xs font-black text-amber-950/40 uppercase tracking-[0.3em] mb-6">
                {isRtl ? "شركاؤنا الاستراتيجيون" : "Our Strategic Partners"}
              </h3>
              
              <div className="flex flex-wrap gap-6 items-center">
                {partners.map((partner, idx) => {
                  const partnerName = activeLang === 'ar' ? partner.nameAr : (activeLang === 'fr' ? partner.nameFr : partner.nameEn);
                  return (
                    <a 
                      key={idx}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-36 h-20 md:w-44 md:h-24 bg-white rounded-2xl border border-amber-100 shadow-sm flex items-center justify-center p-4 transition-all hover:border-accent hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                      title={partnerName}
                    >
                      {/* عرض الشعار بألوانه الأصلية */}
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.logo}
                          alt={partnerName}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* إشارة بصرية خفيفة للانتقال عند التمرير */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4 text-accent/50" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}