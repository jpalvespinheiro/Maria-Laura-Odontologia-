import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Sparkles, Smile, Star, CheckCircle2, ChevronRight, ChevronLeft, Instagram, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Dentist Photos
import dentist1 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.38_(1)_1771948728851.jpeg";
import dentist2 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.36_1771948728854.jpeg";
import dentist3 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.35_1771948728854.jpeg";
import dentist4 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.37_1771948728853.jpeg";

// Specialty Photos
import specMimetismo from "@assets/WhatsApp_Image_2026-02-24_at_13.05.38_1771949220712.jpeg";
import specClareamento from "@assets/WhatsApp_Image_2026-02-24_at_13.06.05_1771949220711.jpeg";
import specPeriodontal from "@assets/WhatsApp_Image_2026-02-24_at_13.06.19_1771949220710.jpeg";
import specRestauracao from "@assets/WhatsApp_Image_2026-02-24_at_13.06.31_1771949220708.jpeg";

const dentistPhotos = [dentist1, dentist2, dentist3, dentist4];

const fadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: { 
    opacity: [0.4, 0.7, 0.4], 
    scale: [1, 1.05, 1],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
  }
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dentistPhotos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % dentistPhotos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + dentistPhotos.length) % dentistPhotos.length);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#332b24] overflow-hidden selection:bg-[#d4b98e]/30 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf8f5]/80 backdrop-blur-md border-b border-[#ebdabe]/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
             <div className="w-8 h-8 bg-[#c29a63] rounded flex items-center justify-center text-white font-serif text-lg font-bold italic shadow-md shadow-[#c29a63]/20">ML</div>
             <div className="font-heading text-lg font-bold tracking-tight text-[#29221c]">
              Maria Laura <span className="text-[#c29a63] font-semibold tracking-tighter">Odontologia</span>
            </div>
          </motion.div>
          <div className="hidden md:flex gap-6 text-[10px] font-bold tracking-[0.1em] uppercase text-[#5c4d40]/80">
            <a href="#especialidades" className="hover:text-[#c29a63] transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-[#c29a63] transition-colors">Dra. Maria</a>
            <a href="#faq" className="hover:text-[#c29a63] transition-colors">Dúvidas</a>
            <a href="#contato" className="hover:text-[#c29a63] transition-colors">Contato</a>
          </div>
          <Button size="sm" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full px-5 h-9 transition-all shadow-sm font-heading font-bold text-[10px] uppercase tracking-wider" data-testid="button-agendar-nav">
            Agendar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 px-6 overflow-hidden">
        {/* Animated Background Glows */}
        <motion.div variants={glowVariants} initial="initial" animate="animate" className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c29a63]/10 rounded-full blur-[100px] -z-10" />
        <motion.div variants={glowVariants} initial="initial" animate="animate" className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ebdabe]/20 rounded-full blur-[80px] -z-10" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-10">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebdabe]/30 text-[#a88252] text-[9px] font-bold uppercase tracking-[0.2em] mb-6 border border-[#c29a63]/10">
              <Sparkles className="w-3 h-3 text-[#c29a63]" />
              <span>Estética Dental de Excelência</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6 text-[#29221c] tracking-tight">
              A harmonia que seu <br/>
              <span className="text-[#c29a63] font-serif italic font-normal">Sorriso</span> merece
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-base text-[#5c4d40] mb-8 leading-relaxed max-w-md font-light">
              Transformando sorrisos através da ciência e da arte. Especialista em mimetismo dental para resultados que preservam sua essência e saúde.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full text-xs h-14 px-8 shadow-lg shadow-[#c29a63]/20 font-bold uppercase tracking-wider transition-all group" data-testid="button-whatsapp-hero">
                <MessageCircle className="mr-2 w-5 h-5 fill-white" />
                Agendar via WhatsApp
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl bg-[#ebdabe]/10">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlide}
                  src={dentistPhotos[currentSlide]} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40" />
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all border border-white/20">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-[#c29a63] text-white flex items-center justify-center hover:bg-[#a88252] transition-all shadow-lg shadow-[#c29a63]/30">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="especialidades" className="py-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-[#c29a63]" />
              <span className="text-[#c29a63] font-bold text-[10px] uppercase tracking-[0.3em]">Tratamentos</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#29221c]">Especialidades de Elite</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mimetismo Dental", img: specMimetismo, icon: <Sparkles className="w-5 h-5" /> },
              { title: "Clareamento", img: specClareamento, icon: <Star className="w-5 h-5" /> },
              { title: "Estética Rosa", img: specPeriodontal, icon: <Smile className="w-5 h-5" /> },
              { title: "Restauração", img: specRestauracao, icon: <CheckCircle2 className="w-5 h-5" /> }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-lg"
              >
                <img src={service.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#c29a63]/20 backdrop-blur-md flex items-center justify-center text-[#c29a63] mb-3 border border-[#c29a63]/30">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-heading font-bold text-lg mb-1 tracking-tight">{service.title}</h3>
                  <p className="text-white/60 text-xs font-light">Resultados naturais e precisos.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-[#29221c] mb-4">Dúvidas Frequentes</h2>
            <p className="text-sm text-[#5c4d40]/70 font-light">Tudo o que você precisa saber sobre nossos tratamentos.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Quanto tempo dura o tratamento?", a: "Depende de cada caso, mas nossa abordagem foca em agilidade sem comprometer a precisão e saúde do seu sorriso." },
              { q: "O clareamento dói?", a: "Utilizamos técnicas modernas e géis de última geração para minimizar qualquer sensibilidade durante o processo." },
              { q: "As facetas de resina mancham?", a: "Com os cuidados adequados e polimento periódico, as resinas mantêm sua estética e brilho por muito tempo." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-[#ebdabe]/30 rounded-2xl px-6 overflow-hidden shadow-sm">
                <AccordionTrigger className="text-[#29221c] font-heading font-bold text-left hover:no-underline py-5 text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#5c4d40] font-light leading-relaxed pb-5 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#1a1612] text-white pt-16 pb-10 px-6 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#c29a63] rounded flex items-center justify-center text-white font-serif text-xl font-bold italic shadow-lg shadow-[#c29a63]/20">ML</div>
                <div className="font-heading text-xl font-bold tracking-tight">Maria Laura <span className="text-[#c29a63] font-medium text-base tracking-normal">Odontologia</span></div>
              </div>
              <p className="text-white/40 max-w-xs mb-8 font-light text-sm leading-relaxed">
                Transformando sorrisos com precisão científica e delicadeza artística em Mossâmedes.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#c29a63] hover:border-[#c29a63] transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://wa.me/5564981644853" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#c29a63] hover:border-[#c29a63] transition-all">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-[#c29a63] mb-6">Localização</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed mb-4">
                  Av. João Ferreira da Cunha, 470<br/>
                  Centro, Mossâmedes - GO<br/>
                  76150-000, Brasil
                </p>
                <a 
                  href="https://www.google.com/maps/place/Dra.+Maria+Laura+%7C+Odontologia/@-16.11585,-50.1477755,17z/data=!4m6!3m5!1s0x935e4b0000000001:0x3b773a4b609deebf!8m2!3d-16.11585!4d-50.1477755!16s%2Fg%2F11vkx_494q" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-[#c29a63] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Avalie-nos no Google <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/10 grayscale opacity-40 hover:opacity-100 transition-all duration-700 h-40">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.238622159187!2d-50.1477755!3d-16.11585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e4b0000000001%3A0x3b773a4b609deebf!2sDra.%20Maria%20Laura%20%7C%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/20 text-[9px] uppercase font-bold tracking-[0.2em]">© {new Date().getFullYear()} Dra. Maria Laura Barbosa | Odontologia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}