import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Sparkles, Smile, Star, CheckCircle2, ChevronRight, ChevronLeft, Instagram, Phone, Mail, ExternalLink } from "lucide-react";
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

// New Assets
import whatsappIcon from "@assets/whatsapp_4008228_1771950564376.png";
import teethLogo from "@assets/teeth_16255989_1771950564377.png";

const dentistPhotos = [dentist1, dentist2, dentist3, dentist4];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dentistPhotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % dentistPhotos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + dentistPhotos.length) % dentistPhotos.length);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#332b24] overflow-hidden selection:bg-[#d4b98e]/30 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf8f5]/80 backdrop-blur-md border-b border-[#ebdabe]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <img src={teethLogo} alt="Logo" className="w-10 h-10 object-contain drop-shadow-sm" />
             <div className="font-heading text-xl font-bold tracking-tight text-[#29221c]">
              Maria Laura <span className="text-[#c29a63] font-medium">Odontologia</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.1em] uppercase text-[#5c4d40]">
            <a href="#especialidades" className="hover:text-[#c29a63] transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-[#c29a63] transition-colors">A Dra.</a>
            <a href="#faq" className="hover:text-[#c29a63] transition-colors">Dúvidas</a>
            <a href="#contato" className="hover:text-[#c29a63] transition-colors">Contato</a>
          </div>
          <Button className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full px-6 transition-all duration-300 shadow-md shadow-[#c29a63]/20 font-heading font-bold text-xs uppercase tracking-widest" data-testid="button-agendar-nav">
            Agendar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-10">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ebdabe]/40 text-[#a88252] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Referência em Estética Dental</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-heading font-bold leading-[1.05] mb-8 text-[#29221c] tracking-tight">
              A ARTE DE <br/>
              <span className="text-[#c29a63] font-serif italic font-normal">Esculpir</span> SORRISOS
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-[#5c4d40] mb-10 leading-relaxed max-w-lg font-light">
              Elevando a odontologia ao nível da arte. Especialista em mimetismo dental e harmonia estética para transformar sua autoestima com naturalidade.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full text-base h-16 px-10 shadow-xl shadow-[#c29a63]/20 font-bold uppercase tracking-widest flex items-center gap-3" data-testid="button-whatsapp-hero">
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 object-contain" />
                Agendar via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl bg-[#ebdabe]/20">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlide}
                  src={dentistPhotos[currentSlide]} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
            </div>

            <div className="absolute bottom-8 right-8 flex gap-3 z-20">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-[#c29a63] text-white flex items-center justify-center hover:bg-[#a88252] transition-all shadow-lg shadow-[#c29a63]/40">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Improved Detailed View */}
      <section id="especialidades" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#c29a63]" />
              <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">Serviços Especializados</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] tracking-tight">O Que Fazemos de Melhor</h2>
          </div>

          <div className="grid gap-32">
            {[
              { 
                title: "Mimetismo Dental & Facetas em Resina", 
                desc: "A Dra. Maria Laura utiliza materiais modernos que garantem a estratificação (camadas de cor) ideal. A capacidade e técnica artística permitem criar restaurações que imitam perfeitamente a cor, translucidez, brilho e textura dos dentes naturais, sendo a solução perfeita para elementos dentais manchados, fraturados, desalinhados ou com presença de diastemas.",
                img: specMimetismo,
                icon: <Sparkles className="w-6 h-6" />
              },
              { 
                title: "Clareamento Dental Estratégico", 
                desc: "Realizar o clareamento antes de colocar as facetas permite que a Dra. Maria Laura alcance com facilidade uma cor de material mais clara, harmonizando perfeitamente com a tonalidade desejada pelo paciente. É a base fundamental para um sorriso luminoso e equilibrado.",
                img: specClareamento,
                icon: <Star className="w-6 h-6" />,
                reverse: true
              },
              { 
                title: "Saúde Gengival: Estética Branca x Rosa", 
                desc: "Prezamos pelo equilíbrio visual absoluto. A estética branca aliada à estética rosa permite sofisticação no sorriso. O tratamento periodontal personalizado garante que a gengiva saudável contorne os elementos dentais de forma simétrica, assegurando melhores resultados nas facetas e lentes de contato.",
                img: specPeriodontal,
                icon: <Smile className="w-6 h-6" />
              },
              { 
                title: "Restaurações de Alta Performance", 
                desc: "Utilizamos resinas de última geração para restaurações que devolvem a força e a função original do dente. O foco é na biomimética: o dente restaurado deve ser indistinguível do dente natural, mantendo a integridade e saúde bucal a longo prazo.",
                img: specRestauracao,
                icon: <CheckCircle2 className="w-6 h-6" />,
                reverse: true
              }
            ].map((service, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-16 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, x: service.reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative group ${service.reverse ? 'lg:order-2' : ''}`}
                >
                  <div className="absolute inset-4 border border-white/20 rounded-[2.5rem] z-10 pointer-events-none" />
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </motion.div>
                <div className={`${service.reverse ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="w-14 h-14 rounded-2xl bg-[#c29a63]/10 flex items-center justify-center text-[#c29a63] mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-6 text-[#29221c] leading-tight">{service.title}</h3>
                  <p className="text-[#5c4d40] text-lg font-light leading-relaxed mb-8">{service.desc}</p>
                  <Button variant="link" className="text-[#c29a63] p-0 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all">
                    Saber mais detalhes <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em] block mb-4">Informação</span>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] tracking-tight">Dúvidas Frequentes</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Quanto tempo duram as facetas em resina?", a: "As resinas modernas possuem alta estabilidade de cor e brilho. Com cuidados adequados e polimento semestral, podem durar muitos anos com estética impecável." },
              { q: "O clareamento dental causa sensibilidade?", a: "A sensibilidade é temporária e varia entre pacientes. Utilizamos géis modernos e protocolos dessensibilizantes para garantir uma experiência confortável." },
              { q: "As lentes de contato dental exigem desgaste?", a: "Prezamos pela odontologia minimamente invasiva. Em muitos casos, o desgaste é nulo ou extremamente reduzido, preservando o dente natural." },
              { q: "Qual a importância de tratar a gengiva antes da estética?", a: "A saúde gengival é a base de um sorriso duradouro. Uma gengiva saudável garante simetria e evita complicações futuras nas restaurações estéticas." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-[#ebdabe]/50 rounded-[1.5rem] px-8 overflow-hidden data-[state=open]:border-[#c29a63]/30 transition-all">
                <AccordionTrigger className="text-[#29221c] font-heading font-bold text-left hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#5c4d40] font-light leading-relaxed pb-8 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contato" className="bg-[#1a1612] text-white pt-24 pb-12 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <img src={teethLogo} alt="Logo" className="w-12 h-12 object-contain filter invert brightness-100" />
                <div className="font-heading text-2xl font-bold tracking-tight">
                  Maria Laura <br/><span className="text-[#c29a63] font-medium text-lg">Odontologia</span>
                </div>
              </div>
              <p className="text-white/50 max-w-sm mb-10 leading-relaxed font-light text-lg">
                Dra. Maria Laura | Odontologia preza pela ARTE natural e sofisticação no sorriso.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#c29a63] hover:border-[#c29a63] transition-all group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://wa.me/5564981644853" target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#c29a63] hover:border-[#c29a63] transition-all group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="text-[#c29a63] w-6 h-6" />
                <h3 className="font-heading font-bold text-xl uppercase tracking-widest text-[#c29a63]">Localização</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                  <p className="text-white/70 leading-relaxed font-light text-base mb-6">
                    Av. João Ferreira da Cunha, 470<br/>
                    Centro, Mossâmedes - GO<br/>
                    76150-000, Brasil
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/Dra.+Maria+Laura+%7C+Odontologia/@-16.11585,-50.1477755,17z/data=!4m6!3m5!1s0x935e4b0000000001:0x3b773a4b609deebf!8m2!3d-16.11585!4d-50.1477755!16s%2Fg%2F11vkx_494q" 
                    target="_blank" 
                    className="flex items-center gap-2 text-[#c29a63] font-bold text-xs uppercase tracking-widest hover:text-white transition-all group"
                  >
                    Avaliar no Google <ExternalLink className="w-3 h-3 group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="w-full h-full min-h-[150px] bg-white/5 rounded-[2.5rem] overflow-hidden relative border border-white/10 grayscale opacity-40 hover:opacity-100 transition-all duration-1000">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.238622159187!2d-50.1477755!3d-16.11585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e4b0000000001%3A0x3b773a4b609deebf!2sDra.%20Maria%20Laura%20%7C%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10 text-center text-white/20 text-[10px] uppercase font-bold tracking-[0.3em]">
            <p>© {new Date().getFullYear()} Dra. Maria Laura Barbosa | Luxo & Odontologia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}