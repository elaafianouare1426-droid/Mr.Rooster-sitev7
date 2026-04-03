"use client"

import { useState, useEffect } from "react"
import { X, Phone, MessageCircle, Info, Activity, Egg, Weight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BreedDetail {
  id: string
  names: { ar: string; en: string; fr: string }
  descriptions: { ar: string; en: string; fr: string }
  images: string[]
  stats: {
    eggs: string;
    meat: { ar: string; en: string; fr: string };
  }
  available: { eggs: boolean; chicks: boolean }
  features: {
    labels: { ar: string; en: string; fr: string }
    values: { ar: string; en: string; fr: string }
    icon: string
  }[]
}


const breedsData: BreedDetail[] = [
  {
    id: "australorp",
    names: { ar: "أسترالورب الأسود", en: "Black Australorp", fr: "Australorp Noir" },
    descriptions: { 
      ar: "سلالة أصيلة تم تطويرها في أستراليا، وتعتبر الفخر الوطني هناك. تتمتع بإنتاجية عالية جداً وهي من أفضل الدجاج البياض في العالم.", 
      en: "A pure breed developed in Australia. Excellent laying capacity and world-class productivity.", 
      fr: "Race pure développée en Australie. Excellente capacité de ponte et productivité de classe mondiale." 
    },
    images: ["/images/breeds/A1.jpg", "/images/breeds/a2_optimized.png", "/images/breeds/B2.png"],
    stats: { eggs: "+270", meat: { ar: "3kg - 4kg (ممتاز)", en: "3kg - 4kg", fr: "3kg - 4kg" } },
    available: { eggs: true, chicks: true },
    features: [
      { labels: { ar: "الأصل", en: "Origin", fr: "Origine" }, values: { ar: "أستراليا", en: "Australia", fr: "Australie" }, icon: "🇦🇺" },
      { labels: { ar: "المقاومة", en: "Resistance", fr: "Résistance" }, values: { ar: "قوية جداً", en: "Very Strong", fr: "Très Forte" }, icon: "🛡️" }
    ]
  },
  {
    id: "farnsi",
    names: { ar: "الدجاج الفرنسي (لا ماران)", en: "the Marans fawn aque black", fr: "la marans fauve aque noir" },
    descriptions: { 
      ar: "سلالة فرنسية عريقة نشأت في منطقة ماران. دجاج أصيل يتميز بحجم كبير وإنتاجية عالية للحم والبيض البني الداكن.", 
      en: "Ancient French breed from the Marans region. Known for dark brown eggs and high meat productivity.", 
      fr: "Ancienne race française de Marans. Connue pour ses œufs brun foncé." 
    },
    images: ["/images/breeds/f11.png", "/images/breeds/f1.png", "/images/breeds/f14.png", "/images/breeds/f12.png"],
    stats: { eggs: "+250", meat: { ar: "2kg - 3kg (متوسط)", en: "2kg - 3kg", fr: "2kg - 3kg" } },
    available: { eggs: true, chicks: true },
    features: [
      { labels: { ar: "الأصل", en: "Origin", fr: "Origine" }, values: { ar: "فرنسا", en: "France", fr: "France" }, icon: "🇫🇷" },
      { labels: { ar: "جودة اللحم", en: "Meat Quality", fr: "Qualité Viande" }, values: { ar: "ممتازة", en: "Excellent", fr: "Excellente" }, icon: "🍗" }
    ]
  },
  {
    id: "leghorn",
    names: { ar: "لجهورن الذهبي", en: "Golden Leghorn", fr: "Leghorn Doré" },
    descriptions: { 
      ar: "سلالة إيطالية شهيرة نشأت في منطقة توسكانا. متخصصة في إنتاج البيض، تتميز بجسم رشيق ونشاط عالٍ وريش ذهبي جذاب.", 
      en: "Famous Italian breed from Tuscany. Specialized in egg production.", 
      fr: "Célèbre race italienne de Toscane. Spécialisée dans la ponte." 
    },
    images: ["/images/breeds/leg1.png", "/images/breeds/leghorn_dor2.png"],
    stats: { eggs: "300", meat: { ar: "ضعيفة جداً (بياض صرف)", en: "Very Low", fr: "Très Faible" } },
    available: { eggs: true, chicks: true },
    features: [
      { labels: { ar: "الأصل", en: "Origin", fr: "Origine" }, values: { ar: "إيطاليا", en: "Italy", fr: "Italie" }, icon: "🇮🇹" },
      { labels: { ar: "النشاط", en: "Activity", fr: "Activité" }, values: { ar: "عالي جداً", en: "Very High", fr: "Très Élevée" }, icon: "⚡" }
    ]
  },
  {
    id: "isabrown",
    names: { ar: "إيزا براون", en: "Isa Brown", fr: "Isa Brown" },
    descriptions: { 
      ar: "سلالة هجينة حديثة تم تطويرها في فرنسا لأغراض تجارية. تعتبر ملكة إنتاج البيض البني، قوية جداً وتتحمل مختلف الظروف.", 
      en: "Modern hybrid developed in France. The queen of brown egg production, highly robust and healthy.", 
      fr: "Hybride moderne développé en France. Reine de la ponte, très robuste." 
    },
    images: ["/images/breeds/isa2.png", "/images/breeds/isa1.png", "/images/breeds/isa3.png"],
    stats: { eggs: "+300", meat: { ar: "ضعيفة", en: "Low", fr: "Faible" } },
    available: { eggs: false, chicks: true },
    features: [
      { labels: { ar: "النوع", en: "Type", fr: "Type" }, values: { ar: "هجين بياض", en: "Hybrid Layer", fr: "Hybride" }, icon: "🧬" },
      { labels: { ar: "التكيف", en: "Adaptability", fr: "Adaptabilité" }, values: { ar: "ممتاز", en: "Excellent", fr: "Excellent" }, icon: "🌍" }
    ]
  }
];

const PHONE_NUMBER = "+2126XXXXXXXX"
const WHATSAPP_NUMBER = "2126XXXXXXXX"

export function BreedsSection() {
  const [currentLang, setCurrentLang] = useState<"ar" | "en" | "fr">("fr");
  const [selectedBreed, setSelectedBreed] = useState<BreedDetail | null>(null);
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [orderModal, setOrderModal] = useState<{ isOpen: boolean; breedName: string; type: string } | null>(null);

  useEffect(() => {
    const updateLang = () => {
      const htmlLang = document.documentElement.lang as any;
      if (["ar", "en", "fr"].includes(htmlLang)) setCurrentLang(htmlLang);
    };
    updateLang();
    const observer = new MutationObserver(updateLang);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => observer.disconnect();
  }, []);

  const ui = {
    fr: { title: "Nos", titleAccent: "Races", subTitle: "Découvrez notre sélection d'élite pour une production d'excellence.", eggs: "Œufs", chicks: "Poussins", available: "Disponible", notAvailable: "Indisponible", details: "Détails", order: "Commander", call: "Appel", whatsapp: "WhatsApp", close: "Fermer", eggStats: "Œufs/an", meatStats: "Poids/Chair", quickView: "Aperçu", about: "À propos", selectOrder: "Que souhaitez-vous commander ?" },
    ar: { title: "نخبة", titleAccent: "السلالات", subTitle: "ننتقي أفضل السلالات العالمية لضمان أعلى جودة في إنتاج البيض واللحم.", eggs: "البيض", chicks: "الكتاكيت", available: "متاح", notAvailable: "غير متاح", details: "عرض التفاصيل الكاملة", order: "طلب الآن", call: "اتصال", whatsapp: "واتساب", close: "إغلاق", eggStats: "بيضة/سنة", meatStats: "اللحم/الوزن", quickView: "لمحة سريعة", about: "نبذة عن السلالة", selectOrder: "ماذا ترغب في طلبه؟" },
    en: { title: "Premium", titleAccent: "Breeds", subTitle: "We select the finest global breeds to ensure top-tier production quality.", eggs: "Eggs", chicks: "Chicks", available: "Available", notAvailable: "Not Available", details: "View Details", order: "Order", call: "Call", whatsapp: "WhatsApp", close: "Close", eggStats: "Eggs/yr", meatStats: "Meat/Wt", quickView: "Quick View", about: "About Breed", selectOrder: "What would you like to order?" }
  }[currentLang];

  return (
    <section id="breeds" dir={currentLang === "ar" ? "rtl" : "ltr"} className="py-24 px-6 bg-background relative">
      
      {/* قسم العنوان المضاف (Header) */}
      <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-2">
          <Activity className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Mr. Rooster Breeds</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
          {ui.title} <span className="text-accent">{ui.titleAccent}</span>
        </h2>
        <p className="text-muted-foreground text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          {ui.subTitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {breedsData.map((breed) => (
          <div key={breed.id} className="relative group bg-card rounded-[2.5rem] border border-border flex flex-col hover:border-accent hover:shadow-2xl transition-all duration-500">
            
            {/* 1. الـ Hover Card */}
            <div className={`absolute z-[70] invisible md:group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-500 w-80 p-6 bg-card border-2 border-accent/20 rounded-[2.5rem] shadow-2xl backdrop-blur-xl -top-10 ${currentLang === 'ar' ? 'right-[110%]' : 'left-[110%]'}`}>
              <div className="flex items-center gap-2 mb-4 text-accent border-b border-accent/10 pb-3">
                <Activity className="w-4 h-4 animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-widest">{ui.quickView}</span>
              </div>
              <p className="text-[13px] leading-relaxed text-foreground/80 mb-4 font-medium">{breed.descriptions[currentLang]}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-accent/5 p-3 rounded-2xl border border-accent/10">
                  <span className="text-[9px] font-black text-foreground/40 block mb-1 uppercase tracking-tighter">{ui.eggStats}</span>
                  <p className="text-xl font-black text-accent">{breed.stats.eggs}</p>
                </div>
                <div className="bg-accent/5 p-3 rounded-2xl border border-accent/10">
                  <span className="text-[9px] font-black text-foreground/40 block mb-1 uppercase tracking-tighter">{ui.meatStats}</span>
                  <p className="text-[10px] font-black text-foreground leading-tight">{breed.stats.meat[currentLang]}</p>
                </div>
              </div>
              <div className={`absolute top-20 w-4 h-4 bg-card border-t-2 border-l-2 border-accent/20 rotate-45 ${currentLang === 'ar' ? '-right-[9px]' : '-left-[9px]'}`} />
            </div>

            {/* 2. محتوى البطاقة */}
            <div className="p-6 text-center flex-grow cursor-pointer" onClick={() => { setSelectedBreed(breed); setSelectedImgIdx(0); }}>
              <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-500 border-2 border-transparent group-hover:border-accent shadow-lg">
                <img src={breed.images[0]} alt={breed.names[currentLang]} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-4 text-foreground group-hover:text-accent transition-colors">{breed.names[currentLang]}</h3>
              
              <div className="flex justify-center gap-4 mb-6">
                 <div className="flex flex-col items-center gap-1">
                    <span className={`text-xl ${!breed.available.eggs && 'grayscale opacity-30'}`}>🥚</span>
                    <span className={`text-[8px] font-bold ${breed.available.eggs ? 'text-yellow-600' : 'text-muted-foreground'}`}>{ui.eggs}</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <span className={`text-xl ${!breed.available.chicks && 'grayscale opacity-30'}`}>🐤</span>
                    <span className={`text-[8px] font-bold ${breed.available.chicks ? 'text-blue-600' : 'text-muted-foreground'}`}>{ui.chicks}</span>
                 </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <Button onClick={() => { setSelectedBreed(breed); setSelectedImgIdx(0); }} className="w-full bg-accent hover:bg-accent/90 text-white font-black rounded-xl h-11 transition-all shadow-md">
                {ui.details}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. مودال التفاصيل الكاملة */}
      {selectedBreed && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-card rounded-[2.5rem] w-full max-w-4xl max-h-[95vh] overflow-y-auto shadow-2xl border border-white/10">
            <div className="sticky top-0 bg-accent p-6 flex justify-between items-center z-10 text-white">
              <h2 className="text-3xl font-black">{selectedBreed.names[currentLang]}</h2>
              <button onClick={() => setSelectedBreed(null)} className="p-2 hover:bg-white/20 rounded-full transition-colors"><X className="w-8 h-8" /></button>
            </div>

            <div className="p-8 space-y-8">
              <div className="space-y-4 text-center">
                <div className="relative aspect-video w-full bg-muted rounded-3xl overflow-hidden border-4 border-accent/5">
                  <img src={selectedBreed.images[selectedImgIdx]} className="w-full h-full object-contain p-4 transition-all duration-500" alt="breed" />
                </div>
                <div className="flex gap-3 justify-center overflow-x-auto py-2">
                  {selectedBreed.images.map((img, idx) => (
                    <button key={idx} onClick={() => setSelectedImgIdx(idx)} className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImgIdx === idx ? "border-accent scale-105" : "border-transparent opacity-60 hover:opacity-100"}`}>
                      <img src={img} className="w-full h-full object-cover" alt="thumb" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold mb-4 text-accent border-b-2 border-accent/10 pb-2">{ui.about}</h4>
                    <p className="text-foreground/80 text-lg leading-relaxed">{selectedBreed.descriptions[currentLang]}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedBreed.features.map((f, i) => (
                      <div key={i} className="bg-accent/5 p-4 rounded-2xl border border-accent/10 flex items-center gap-3">
                        <span className="text-2xl">{f.icon}</span>
                        <div>
                          <p className="text-[9px] uppercase font-bold text-foreground/40">{f.labels[currentLang]}</p>
                          <p className="font-black text-accent text-sm">{f.values[currentLang]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-[2rem] border border-border">
                  <div className="flex items-center gap-2 mb-6">
                    <ShoppingCart className="w-5 h-5 text-accent" />
                    <h4 className="font-black text-lg">{ui.selectOrder}</h4>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={() => selectedBreed.available.eggs && setOrderModal({ isOpen: true, breedName: selectedBreed.names[currentLang], type: ui.eggs })}
                      className={`w-full p-4 rounded-2xl flex items-center justify-between border-2 transition-all ${
                        selectedBreed.available.eggs 
                        ? "border-yellow-200 bg-yellow-50/50 hover:border-yellow-400 text-yellow-900" 
                        : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">🥚</span>
                        <div className={`${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                          <p className="font-black">{ui.eggs}</p>
                          <p className="text-[10px] font-bold opacity-60">{selectedBreed.available.eggs ? ui.available : ui.notAvailable}</p>
                        </div>
                      </div>
                      {selectedBreed.available.eggs && <div className="bg-yellow-500 text-white p-2 rounded-full"><ShoppingCart className="w-4 h-4" /></div>}
                    </button>

                    <button
                      onClick={() => selectedBreed.available.chicks && setOrderModal({ isOpen: true, breedName: selectedBreed.names[currentLang], type: ui.chicks })}
                      className={`w-full p-4 rounded-2xl flex items-center justify-between border-2 transition-all ${
                        selectedBreed.available.chicks 
                        ? "border-blue-200 bg-blue-50/50 hover:border-blue-400 text-blue-900" 
                        : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">🐤</span>
                        <div className={`${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
                          <p className="font-black">{ui.chicks}</p>
                          <p className="text-[10px] font-bold opacity-60">{selectedBreed.available.chicks ? ui.available : ui.notAvailable}</p>
                        </div>
                      </div>
                      {selectedBreed.available.chicks && <div className="bg-blue-500 text-white p-2 rounded-full"><ShoppingCart className="w-4 h-4" /></div>}
                    </button>
                  </div>
                </div>
              </div>

              <Button onClick={() => setSelectedBreed(null)} className="w-full py-6 text-lg font-black bg-accent/10 text-accent border-2 border-accent/20 rounded-2xl hover:bg-accent hover:text-white transition-all">
                {ui.close}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 4. مودال التواصل */}
      {orderModal && (
        <div className="fixed inset-0 bg-black/70 z-[110] flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="bg-card rounded-[2.5rem] w-full max-w-sm p-8 border border-accent/20 shadow-2xl relative">
            <button onClick={() => setOrderModal(null)} className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full"><X className="w-5 h-5" /></button>
            <div className="text-center mb-8">
               <h3 className="font-black text-2xl text-accent mb-2">{ui.order} {orderModal.type}</h3>
               <p className="text-sm font-bold text-foreground/60">{orderModal.breedName}</p>
            </div>
            <div className="space-y-4">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-between p-5 bg-blue-50 rounded-2xl text-blue-700 border border-blue-100 hover:scale-[1.02] transition-transform font-bold">
                <div className="flex items-center gap-4"><Phone className="w-6 h-6" /> <span>{ui.call}</span></div>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center justify-between p-5 bg-green-50 rounded-2xl text-green-700 border border-green-100 hover:scale-[1.02] transition-transform font-bold">
                <div className="flex items-center gap-4"><MessageCircle className="w-6 h-6" /> <span>{ui.whatsapp}</span></div>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}