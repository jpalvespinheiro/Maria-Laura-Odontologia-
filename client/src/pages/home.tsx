import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Sparkles, Smile, Star, CheckCircle2, ChevronRight, ChevronLeft, Instagram, Phone, Mail } from "lucide-react";
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const imageReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 1, ease: "easeInOut" } }
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
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
             <div className="w-10 h-10 bg-[#c29a63] rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold italic shadow-lg shadow-[#c29a63]/20">ML</div>
             <div className="font-heading text-xl font-extrabold tracking-tight text-[#29221c]">
              Maria Laura <span className="text-[#c29a63] font-semibold tracking-tighter ml-0.5">Odontologia</span>
            </div>
          </motion.div>
          <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.15em] uppercase text-[#5c4d40]">
            <a href="#especialidades" className="hover:text-[#c29a63] transition-all hover:scale-105">Serviços</a>
            <a href="#sobre" className="hover:text-[#c29a63] transition-all hover:scale-105">A Dra.</a>
            <a href="#faq" className="hover:text-[#c29a63] transition-all hover:scale-105">Dúvidas</a>
            <a href="#contato" className="hover:text-[#c29a63] transition-all hover:scale-105">Contato</a>
          </div>
          <Button className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full px-6 transition-all duration-300 shadow-md shadow-[#c29a63]/20 font-heading font-bold text-xs uppercase tracking-widest active:scale-95" data-testid="button-agendar-nav">
            Agendar Consulta
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-10">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ebdabe]/40 text-[#a88252] text-[10px] font-black uppercase tracking-[0.25em] mb-10 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Referência em Estética Dental</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-6xl lg:text-[5.5rem] font-heading font-extrabold leading-[0.95] mb-10 text-[#29221c] tracking-tighter">
              A ARTE DE <br/>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-[#c29a63] font-serif italic font-normal inline-block"
              >
                Esculpir
              </motion.span> <br className="lg:hidden" />
              SORRISOS
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-[#5c4d40] mb-12 leading-relaxed max-w-lg font-light tracking-tight">
              Elevando a odontologia ao nível da arte. Especialista em mimetismo dental e harmonia estética para transformar sua autoestima com naturalidade incomparável.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full text-sm h-16 px-12 shadow-2xl shadow-[#c29a63]/40 font-bold uppercase tracking-[0.15em] transition-all hover:-translate-y-1 active:scale-95 group" data-testid="button-whatsapp-hero">
                Agendar via WhatsApp
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div initial="hidden" animate="visible" variants={imageReveal} className="relative">
            <div className="relative rounded-[3.5rem] overflow-hidden aspect-[4/5] shadow-[0_32px_64px_-16px_rgba(194,154,99,0.25)] bg-[#ebdabe]/20">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlide}
                  src={dentistPhotos[currentSlide]} 
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                  transition={{ duration: 1.2, ease: "circOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
            </div>

            <div className="absolute bottom-10 right-10 flex gap-4 z-20">
              <button onClick={prevSlide} className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-2xl text-white border border-white/20 flex items-center justify-center hover:bg-white/30 transition-all active:scale-90">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button onClick={nextSlide} className="w-14 h-14 rounded-full bg-[#c29a63] text-white flex items-center justify-center hover:bg-[#a88252] transition-all shadow-xl shadow-[#c29a63]/40 active:scale-90">
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
            
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#c29a63]/20 to-transparent rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="especialidades" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32 text-center lg:text-left">
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
              <div className="h-[3px] w-16 bg-[#c29a63]" />
              <span className="text-[#c29a63] font-black text-xs uppercase tracking-[0.4em]">Tratamentos de Luxo</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-heading font-extrabold text-[#29221c] tracking-tighter">Serviços de Elite</h2>
          </motion.div>

          <div className="grid gap-40">
            {[
              { 
                title: "Mimetismo Dental de Alta Precisão", 
                desc: "A técnica do mimetismo utiliza resinas compostas de altíssima fidelidade para reproduzir as nuances de translucidez e textura dos dentes originais. Através da estratificação artística, criamos sorrisos que se fundem perfeitamente com a natureza.",
                img: specMimetismo,
                icon: <Sparkles className="w-7 h-7" />
              },
              { 
                title: "Clareamento Bio-Estético", 
                desc: "O clareamento é a base essencial para qualquer transformação estética. Protocolos controlados que removem pigmentos profundos com segurança máxima, garantindo um sorriso luminoso e pronto para receber lentes ou facetas.",
                img: specClareamento,
                icon: <Star className="w-7 h-7" />,
                reverse: true
              },
              { 
                title: "Arquitetura Periodontal", 
                desc: "O equilíbrio entre dentes e gengiva é o segredo da sofisticação. Tratamos o contorno gengival de forma simétrica e saudável, garantindo que o seu sorriso tenha a moldura perfeita, harmônica e extremamente duradoura.",
                img: specPeriodontal,
                icon: <Smile className="w-7 h-7" />
              },
              { 
                title: "Restauração Biomimética", 
                desc: "Restaurações tecnicamente invisíveis que devolvem a força e a função mastigatória sem deixar vestígios. Preservação absoluta da estrutura dental aliada à estética de alto padrão.",
                img: specRestauracao,
                icon: <CheckCircle2 className="w-7 h-7" />,
                reverse: true
              }
            ].map((service, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-24 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative group ${service.reverse ? 'lg:order-2' : ''}`}
                >
                  <div className="absolute inset-6 border-2 border-white/30 rounded-[3rem] z-10 pointer-events-none group-hover:inset-4 transition-all duration-500" />
                  <div className="rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] aspect-square lg:aspect-[4/5]">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                </motion.div>
                <div className={`${service.reverse ? 'lg:order-1 lg:pr-16' : 'lg:pl-16'}`}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-16 h-16 rounded-3xl bg-[#c29a63]/10 flex items-center justify-center text-[#c29a63] mb-10 shadow-sm">
                    {service.icon}
                  </motion.div>
                  <h3 className="text-4xl font-heading font-extrabold mb-8 text-[#29221c] leading-[1.1] tracking-tight">{service.title}</h3>
                  <p className="text-[#5c4d40] text-xl font-light leading-relaxed mb-10 tracking-tight">{service.desc}</p>
                  <Button variant="link" className="text-[#c29a63] p-0 font-black uppercase tracking-[0.25em] text-[10px] flex items-center gap-3 hover:gap-6 transition-all group">
                    Descobrir mais detalhes <ArrowRight className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 text-center">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#c29a63] font-black text-xs uppercase tracking-[0.4em] block mb-6">Expertise</motion.span>
            <h2 className="text-5xl lg:text-6xl font-heading font-extrabold text-[#29221c] tracking-tighter">Perguntas Frequentes</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {[
              { q: "As facetas em resina podem manchar com o tempo?", a: "Nossas resinas de última geração possuem uma estabilidade cromática superior. Com o polimento periódico preventivo realizado em consultório, o brilho e a cor original são mantidos por muitos anos, resistindo a pigmentos externos." },
              { q: "O clareamento dental enfraquece o esmalte?", a: "Mito. O processo de clareamento é bio-seguro e atua apenas na remoção de pigmentos intrínsecos sem alterar a dureza ou a estrutura mineral do esmalte dental. É um dos procedimentos mais conservadores da odontologia." },
              { q: "Existe dor durante o procedimento de facetas?", a: "Nossa abordagem é focada no conforto absoluto. Utilizamos protocolos anestésicos refinados e técnicas minimamente invasivas que garantem uma experiência totalmente indolor e relaxante para o paciente." },
              { q: "Qual a real durabilidade das lentes de contato?", a: "Quando seguidos os protocolos de manutenção e higiene, as lentes de contato possuem uma longevidade excepcional, podendo ultrapassar 10 anos mantendo a integridade funcional e estética impecável." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-[#ebdabe]/50 rounded-[2rem] px-10 overflow-hidden data-[state=open]:border-[#c29a63]/40 data-[state=open]:shadow-xl data-[state=open]:shadow-[#c29a63]/5 transition-all duration-500">
                <AccordionTrigger className="text-[#29221c] font-heading font-extrabold text-left hover:no-underline py-8 text-lg lg:text-xl tracking-tight">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#5c4d40] font-light leading-relaxed pb-10 text-lg tracking-tight">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contato" className="bg-[#1a1612] text-white pt-32 pb-16 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-24 mb-32">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-[#c29a63] rounded-2xl flex items-center justify-center text-white font-serif text-4xl font-bold italic shadow-2xl shadow-[#c29a63]/30">ML</div>
                <div className="font-heading text-3xl font-extrabold tracking-tighter">
                  Maria Laura <br/><span className="text-[#c29a63] font-semibold text-xl tracking-normal">Odontologia</span>
                </div>
              </div>
              <p className="text-white/40 max-w-sm mb-12 leading-relaxed font-light text-xl tracking-tight">
                Redefinindo os padrões da odontologia estética com precisão científica e sensibilidade artística.
              </p>
              <div className="flex gap-6">
                {[
                  { icon: <Instagram className="w-6 h-6" />, link: "#" },
                  { icon: <Phone className="w-6 h-6" />, link: "#" },
                  { icon: <Mail className="w-6 h-6" />, link: "#" }
                ].map((social, i) => (
                  <motion.a 
                    key={i} 
                    href={social.link} 
                    whileHover={{ y: -5, backgroundColor: "#c29a63", borderColor: "#c29a63" }}
                    className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-all shadow-sm"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <MapPin className="text-[#c29a63] w-7 h-7" />
                <h3 className="font-heading font-extrabold text-2xl uppercase tracking-[0.2em]">Atendimento</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500">
                  <p className="text-white/70 leading-relaxed font-light text-lg">
                    Av. João Ferreira da Cunha, 470<br/>
                    Centro, Mossâmedes - GO<br/>
                    76150-000, Brasil
                  </p>
                </div>
                <div className="w-full h-full min-h-[200px] bg-white/5 rounded-[3rem] overflow-hidden relative border border-white/10 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
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
          
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/20 text-[10px] uppercase font-black tracking-[0.4em]">© {new Date().getFullYear()} Dra. Maria Laura Barbosa | Luxo & Odontologia</p>
            <div className="flex gap-12 text-white/20 text-[10px] uppercase font-black tracking-[0.4em]">
              <a href="#" className="hover:text-[#c29a63] transition-colors">Políticas</a>
              <a href="#" className="hover:text-[#c29a63] transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}