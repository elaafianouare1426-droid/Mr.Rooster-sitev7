"use client"

import { useState, useEffect } from "react"
import { X, Phone, MessageCircle, ChevronLeft, ChevronRight, Info, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const breedsData = [
  {
    id: "australorp",
    names: { ar: "أسترالورب الأسود", en: "Black Australorp", fr: "Australorp Noir" },
    descriptions: { 
      ar: "تعتبر الأسترالورب الفخر الوطني لأستراليا، وهي حاملة الرقم القياسي العالمي في غزارة إنتاج البيض. هي سلالة نشيطة جداً وتمتاز بريش أسود كثيف بلمعة خضراء ساحرة. ما يميزها هو قدرتها العالية على التكيف مع مختلف الظروف المناخية وسرعة نموها الملحوظة، مما يجعلها الخيار الأول للمربين الباحثين عن مشروع مستدام يجمع بين غزارة الإنتاج وسهولة التربية.",
      en: "The national pride of Australia, holding the world record for egg production. Known for its climate adaptability and rapid growth, it's the top choice for sustainable projects combining high productivity with ease of care.",
      fr: "Fierté nationale de l'Australie, détenant le record mondial de ponte. Connue pour sa grande adaptabilité climatique et sa croissance rapide, c'est le choix idéal pour des projets durables alliant productivité et facilité d'élevage."
    },
    images: ["/images/breeds/A1.jpg", "/images/breeds/a2_optimized.png"],
    available: { eggs: true, chicks: true, hens: true },
    features: [
      { labels: { ar: "الأصل", en: "Origin", fr: "Origine" }, values: { ar: "أستراليا", en: "Australia", fr: "Australie" }, icon: "🇦🇺" },
      { labels: { ar: "الإنتاج", en: "Production", fr: "Production" }, values: { ar: "قياسي", en: "Record", fr: "Record" }, icon: "🏆" }
    ]
  },
  {
    id: "farnsi",
    names: { ar: "الدجاج الفرنسي (لا ماران)", en: "Marans (Fawn Black)", fr: "La Marans (Fauve Noir)" },
    descriptions: { 
      ar: "سلالة فرنسية أصيلة وعريقة، تشتهر عالمياً بلقب 'دجاجة البيض الذهبي' لإنتاجها بيضاً فريداً بلون بني داكن يشبه الشوكولاتة. تمتاز هذه السلالة ببنية جسدية قوية تجعلها ثنائية الغرض، فهي ممتازة لإنتاج اللحم الفاخر إلى جانب كفاءتها في وضع البيض. دجاج هادئ، مقاوم للأمراض، ويضيف لمسة من التميز والجمالية لأي مزرعة.",
      en: "An authentic French breed, globally nicknamed the 'Golden Egg Hen' for its unique chocolate-brown eggs. Its robust build makes it a dual-purpose breed, excellent for premium meat and efficient egg laying. Calm and disease-resistant.",
      fr: "Race française authentique, surnommée mondialement 'la poule aux œufs d'or' pour ses œufs uniques brun chocolat. Sa stature robuste en fait une race à double usage, excellente pour la viande de qualité et la ponte efficace."
    },
    images: ["/images/breeds/f11.png", "/images/breeds/f1.png", "/images/breeds/f14.png"],
    available: { eggs: true, chicks: true, hens: true },
    features: [
      { labels: { ar: "الأصل", en: "Origin", fr: "Origine" }, values: { ar: "فرنسا", en: "France", fr: "France" }, icon: "🇫🇷" },
      { labels: { ar: "اللحم", en: "Meat", fr: "Viande" }, values: { ar: "فاخر", en: "Premium", fr: "Premium" }, icon: "🍗" }
    ]
  },
  {
    id: "leghorn",
    names: { ar: "لجهورن الذهبي", en: "Golden Leghorn", fr: "Leghorn Doré" },
    descriptions: { 
      ar: "الماكينة الإيطالية الشهيرة التي لا تتوقف عن العطاء. تنفرد اللجهورن برشاقتها العالية وجمال ريشها الذهبي المنقط، وهي متخصصة بشكل كامل في إنتاج البيض الأبيض الكبير بنسب مرتفعة جداً. تتميز هذه السلالة بكفاءتها الاقتصادية العالية، حيث تستهلك كميات قليلة من العلف مقابل إنتاج غزير، مما يجعلها الحل الأمثل لمشاريع إنتاج البيض.",
      en: "The famous Italian egg machine. Unique for its agility and spotted golden feathers, it specializes in high-volume production of large white eggs. High economic efficiency with low feed consumption.",
      fr: "La célèbre machine à œufs italienne. Unique par son agilité et son plumage doré tacheté, elle se spécialise dans la production massive de gros œufs blancs. Très économique grâce à une faible consommation d'aliments."
    },
    images: ["/images/breeds/leg1.png", "/images/breeds/leghorn_dor2.png"],
    available: { eggs: true, chicks: true, hens: false },
    features: [
      { labels: { ar: "الأصل", en: "Origin", fr: "Origine" }, values: { ar: "إيطاليا", en: "Italy", fr: "Italie" }, icon: "🇮🇹" },
      { labels: { ar: "البيض", en: "Eggs", fr: "Œufs" }, values: { ar: "أبيض ناصع", en: "Pure White", fr: "Blanc Pur" }, icon: "🥚" }
    ]
  },
  {
    id: "isabrown",
    names: { ar: "إيزا براون", en: "Isa Brown", fr: "Isa Brown" },
    descriptions: { 
      ar: "ملكة الاستثمار في قطاع الدواجن بلا منازع. هي هجين فرنسي تم تطويره ليكون الأكثر موثوقية وإنتاجية للبيض البني في العالم. تمتاز إيزا براون بهدوئها الشديد وألفتها مع الإنسان، وتبدأ في وضع البيض في سن مبكرة جداً. هي دجاجة قوية، قليلة المشاكل الصحية، وتضمن للمربي استمرارية في الإنتاج طوال فصول السنة.",
      en: "The undisputed queen of poultry investment. A French hybrid developed for reliable brown egg production. Known for its calm nature and early laying. Robust and healthy for continuous production.",
      fr: "La reine incontestée de l'investissement avicole. Hybride français développé pour la production d'œufs bruns la plus fiable au monde. Très calme, elle commence à pondre tôt et garantit une production continue."
    },
    images: ["/images/breeds/isa2.png", "/images/breeds/isa1.png"],
    available: { eggs: true, chicks: true, hens: true },
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
  const [selectedBreed, setSelectedBreed] = useState<any>(null);
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [orderModal, setOrderModal] = useState<any>(null);

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
    fr: { eggs: "Œufs", chicks: "Poussins", hens: "Poules", details: "Détails", order: "Commander", about: "À propos", call: "Appel", whatsapp: "WhatsApp", selectOrder: "Que souhaitez-vous ?" },
    ar: { eggs: "البيض المخصب", chicks: "الكتاكيت", hens: "الدجاج", details: "التفاصيل", order: "طلب الآن", about: "نبذة عن السلالة", call: "اتصال", whatsapp: "واتساب", selectOrder: "ماذا ترغب في طلبه؟" },
    en: { eggs: "Eggs", chicks: "Chicks", hens: "Hens", details: "Details", order: "Order Now", about: "About", call: "Call", whatsapp: "WhatsApp", selectOrder: "What would you like?" }
  }[currentLang];

  return (
    <section id="breeds" dir={currentLang === "ar" ? "rtl" : "ltr"} className="py-12 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4">
        {breedsData.map((breed) => (
          <div key={breed.id} className="relative group bg-card rounded-[2rem] border p-4 md:p-6 flex flex-col items-center text-center hover:border-accent transition-all duration-500 shadow-sm hover:shadow-xl">
            {/* Hover Info Desktop */}
            <div className={`absolute z-50 hidden lg:group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-300 w-72 p-5 bg-card border-2 border-accent/30 rounded-3xl shadow-2xl -top-5 ${currentLang === 'ar' ? 'right-[105%]' : 'left-[105%]'}`}>
              <h4 className="font-black text-accent mb-2 text-sm">{breed.names[currentLang]}</h4>
              <p className="text-[11px] leading-relaxed text-foreground/80 line-clamp-4">{breed.descriptions[currentLang]}</p>
            </div>

            <div className="cursor-pointer flex-grow" onClick={() => { setSelectedBreed(breed); setSelectedImgIdx(0); }}>
              <div className="w-20 h-20 md:w-28 md:h-28 bg-accent/5 rounded-full mx-auto mb-4 overflow-hidden border-2 border-transparent group-hover:border-accent transition-all">
                <img src={breed.images[0]} className="w-full h-full object-cover" alt="breed" />
              </div>
              <h3 className="font-bold text-xs md:text-lg mb-3 h-10 flex items-center justify-center leading-tight">
                {breed.names[currentLang]}
              </h3>
              
              <div className="flex justify-center gap-4 mb-4">
                <div className={`flex flex-col items-center ${!breed.available.eggs && 'opacity-20 grayscale'}`}>
                  <span className="text-xl">🥚</span>
                  <span className="text-[9px] font-black text-yellow-700">{ui.eggs}</span>
                </div>
                <div className={`flex flex-col items-center ${!breed.available.chicks && 'opacity-20 grayscale'}`}>
                  <span className="text-xl">🐥</span>
                  <span className="text-[9px] font-black text-orange-600">{ui.chicks}</span>
                </div>
              </div>
            </div>

            <Button onClick={() => { setSelectedBreed(breed); setSelectedImgIdx(0); }} className="w-full bg-accent text-white rounded-xl h-10 font-bold">
              {ui.details}
            </Button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedBreed && (
          <div 
            onClick={() => setSelectedBreed(null)} // الإغلاق عند الضغط في الجوانب
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-0 md:p-6 backdrop-blur-md cursor-pointer"
          >
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              exit={{ y: "100%" }} 
              onClick={(e) => e.stopPropagation()} // منع الإغلاق عند الضغط داخل المودال
              className="bg-card w-full max-w-4xl max-h-screen overflow-y-auto md:rounded-[3rem] relative shadow-2xl cursor-default"
            >
              <button onClick={() => setSelectedBreed(null)} className="absolute top-6 right-6 z-[110] p-3 bg-black/20 hover:bg-black/40 rounded-full text-white"><X className="w-6 h-6"/></button>

              {/* معرض الصور Swipe Enabled */}
              <div className="relative aspect-square md:aspect-video bg-black overflow-hidden flex items-center justify-center">
                <motion.img
                  key={selectedImgIdx}
                  src={selectedBreed.images[selectedImgIdx]}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, { offset }) => {
                    if (offset.x < -50) setSelectedImgIdx((prev) => (prev + 1) % selectedBreed.images.length);
                    if (offset.x > 50) setSelectedImgIdx((prev) => (prev - 1 + selectedBreed.images.length) % selectedBreed.images.length);
                  }}
                  className="w-full h-full object-contain cursor-grab active:cursor-grabbing"
                />
              </div>

              <div className="p-6 md:p-12">
                <h2 className="text-2xl md:text-4xl font-black text-accent mb-6">{selectedBreed.names[currentLang]}</h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-muted-foreground mb-3 flex items-center gap-2 uppercase tracking-widest text-[10px]"><Info className="w-4 h-4"/> {ui.about}</h4>
                    <p className="leading-relaxed text-sm md:text-lg text-foreground/80">{selectedBreed.descriptions[currentLang]}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {selectedBreed.features.map((f: any, i: number) => (
                      <div key={i} className="p-5 bg-accent/5 rounded-3xl border border-accent/10 flex items-center gap-4">
                        <span className="text-3xl">{f.icon}</span>
                        <div>
                          <span className="text-[10px] text-muted-foreground block font-bold uppercase">{f.labels[currentLang]}</span>
                          <span className="font-bold text-accent md:text-lg">{f.values[currentLang]}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* خيارات الطلب المباشر */}
                  <div className="pt-8 border-t">
                    <h4 className="text-center font-bold mb-6">{ui.selectOrder}</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <Button onClick={() => setOrderModal({ b: selectedBreed.names[currentLang], t: ui.eggs })} disabled={!selectedBreed.available.eggs} variant="outline" className="h-24 rounded-3xl flex flex-col gap-2 border-2">
                        <span className="text-2xl">🥚</span><span className="text-[10px] font-black">{ui.eggs}</span>
                      </Button>
                      <Button onClick={() => setOrderModal({ b: selectedBreed.names[currentLang], t: ui.chicks })} disabled={!selectedBreed.available.chicks} variant="outline" className="h-24 rounded-3xl flex flex-col gap-2 border-2">
                        <span className="text-2xl">🐥</span><span className="text-[10px] font-black">{ui.chicks}</span>
                      </Button>
                      <Button onClick={() => setOrderModal({ b: selectedBreed.names[currentLang], t: ui.hens })} disabled={!selectedBreed.available.hens} variant="outline" className="h-24 rounded-3xl flex flex-col gap-2 border-2">
                        <span className="text-2xl">🐔</span><span className="text-[10px] font-black">{ui.hens}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* مودال التواصل */}
      <AnimatePresence>
        {orderModal && (
          <div onClick={() => setOrderModal(null)} className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-6 backdrop-blur-sm cursor-pointer">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()} className="bg-card p-8 rounded-[2.5rem] max-w-sm w-full text-center relative border shadow-2xl cursor-default">
              <button onClick={() => setOrderModal(null)} className="absolute top-6 right-6"><X/></button>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent"><ShoppingCart/></div>
              <h3 className="text-xl font-black mb-2">{ui.order}</h3>
              <p className="text-sm text-muted-foreground mb-8">{orderModal.b} - {orderModal.t}</p>
              <div className="grid gap-3">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center justify-center gap-3 p-4 bg-[#25D366] text-white rounded-2xl font-black"><MessageCircle className="w-5 h-5"/> {ui.whatsapp}</a>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-3 p-4 bg-accent text-white rounded-2xl font-black"><Phone className="w-5 h-5"/> {ui.call}</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}