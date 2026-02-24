import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Sparkles, Smile, Star, CheckCircle2, ChevronRight, ChevronLeft, Instagram, Phone, Mail, ExternalLink, Award, Heart, Wind, Coffee, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Assets
import dentist1 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.38_(1)_1771948728851.jpeg";
import dentist2 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.36_1771948728854.jpeg";
import dentist3 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.35_1771948728854.jpeg";
import dentist4 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.37_1771948728853.jpeg";
import specMimetismo from "@assets/WhatsApp_Image_2026-02-24_at_13.05.38_1771949220712.jpeg";
import specClareamento from "@assets/WhatsApp_Image_2026-02-24_at_13.06.05_1771949220711.jpeg";
import specPeriodontal from "@assets/WhatsApp_Image_2026-02-24_at_13.06.19_1771949220710.jpeg";
import specRestauracao from "@assets/WhatsApp_Image_2026-02-24_at_13.06.31_1771949220708.jpeg";
import whatsappIcon from "@assets/whatsapp_4008228_1771950564376.png";
import clinicImg from "@assets/dentista-em-lagoa-santa-scaled_1771954238429.jpg";

const WHATSAPP_URL = "https://wa.me/5564981644853?text=Olá,%20Dra.%20Maria%20Laura!%20Gostaria%20de%20conhecer%20os%20serviços%20e%20agendar%20uma%20avaliação.";

const dentistPhotos = [dentist1, dentist2, dentist3, dentist4];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const LogoSVG = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
    <path d="M50 95C65 95 80 85 80 60C80 40 70 30 50 30C30 30 20 40 20 60C20 85 35 95 50 95Z" fill="white" />
    <path d="M50 95C35 95 25 85 25 65C25 50 30 40 50 40C70 40 75 50 75 65C75 85 65 95 50 95ZM50 45C35 45 30 52 30 65C30 82 38 90 50 90C62 90 70 82 70 65C70 52 65 45 50 45Z" fill="#C29A63" />
    <path d="M50 80C50 80 45 70 45 60C45 50 50 45 50 45C50 45 55 50 55 60C55 70 50 80 50 80Z" fill="#C29A63" opacity="0.3" />
    <path d="M35 15L40 25H30L35 15ZM50 10L55 22H45L50 10ZM65 15L70 25H60L65 15ZM28 22L32 30H24L28 22ZM72 22L76 30H68L72 22Z" fill="#C29A63" />
    <circle cx="50" cy="30" r="15" fill="#C29A63" opacity="0.1" />
  </svg>
);

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
             <LogoSVG />
             <div className="font-heading text-lg font-bold tracking-tight text-[#29221c]">
              Dra. Maria Laura <span className="text-[#c29a63] font-medium border-l border-[#c29a63]/30 pl-2 ml-1">Odontologia</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.1em] uppercase text-[#5c4d40]">
            <a href="#especialidades" className="hover:text-[#c29a63] transition-colors">Serviços</a>
            <a href="#clinica" className="hover:text-[#c29a63] transition-colors">Clínica</a>
            <a href="#sobre" className="hover:text-[#c29a63] transition-colors">Sobre Mim</a>
            <a href="#faq" className="hover:text-[#c29a63] transition-colors">Dúvidas</a>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full px-6 transition-all duration-300 shadow-md shadow-[#c29a63]/20 font-heading font-bold text-xs uppercase tracking-widest flex items-center gap-2" data-testid="button-agendar-nav">
              <img src={whatsappIcon} alt="" className="w-4 h-4 brightness-0 invert" />
              Agendar Agora
            </Button>
          </a>
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
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full text-base h-16 px-10 shadow-xl shadow-[#c29a63]/20 font-bold uppercase tracking-widest flex items-center gap-3" data-testid="button-whatsapp-hero">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 object-contain" />
                  Agendar via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
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

      {/* Clínica Section */}
      <section id="clinica" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#c29a63]" />
                <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">Ambiente Exclusivo</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] mb-8 leading-tight">Nossa Clínica</h2>
              <p className="text-[#5c4d40] text-lg font-light leading-relaxed mb-10">
                Preparamos um espaço focado no seu bem-estar. Nossa clínica oferece um <span className="text-[#29221c] font-semibold">ambiente organizado, totalmente climatizado</span> e projetado para proporcionar o melhor aconchego durante o seu atendimento.
              </p>
              
              <div className="grid gap-6">
                <div className="flex items-center gap-4 bg-[#faf8f5] p-5 rounded-2xl border border-[#ebdabe]/30">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#c29a63] shadow-sm">
                    <Wind className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#29221c]">Climatização Total</h4>
                    <p className="text-sm text-[#5c4d40]">Temperatura ideal para o seu máximo conforto.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#faf8f5] p-5 rounded-2xl border border-[#ebdabe]/30">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#c29a63] shadow-sm">
                    <Coffee className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#29221c]">Melhor Aconchego</h4>
                    <p className="text-sm text-[#5c4d40]">Espaço acolhedor para uma experiência relaxante.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#faf8f5] p-5 rounded-2xl border border-[#ebdabe]/30">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#c29a63] shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#29221c]">Organização & Biossegurança</h4>
                    <p className="text-sm text-[#5c4d40]">Rigor técnico e organização impecável.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -inset-4 border border-[#c29a63]/20 rounded-[3.5rem] -z-10" />
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-video lg:aspect-[4/5]">
                <img src={clinicImg} alt="Ambiente da Clínica" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre a Dra Section */}
      <section id="sobre" className="py-24 px-6 bg-[#fdfbf9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c29a63]/5 rounded-full blur-3xl -z-10" />
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white">
                <img src={dentist1} alt="Dra. Maria Laura" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-[#ebdabe]/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#c29a63]/10 flex items-center justify-center text-[#c29a63]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#a88252]">Inscrição Profissional</p>
                    <p className="font-heading font-bold text-[#29221c]">CRO-GO 25701</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#c29a63]" />
                <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">A Doutora</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] mb-8 leading-tight">Sobre mim</h2>
              <div className="space-y-6 text-[#5c4d40] text-lg font-light leading-relaxed">
                <p>
                  Olá, eu sou a <span className="text-[#29221c] font-bold">Dra. Maria Laura</span>.
                </p>
                <p>
                  Sou Cirurgiã-Dentista formada pelo Centro Universitário Unibras Montes Belos (UniBras). Minha trajetória é marcada pelo constante aperfeiçoamento e um profundo perfeccionismo, especialmente voltado para <span className="text-[#c29a63] font-semibold">Facetas e Lentes em Resinas Compostas</span>.
                </p>
                <p>
                  Me considero uma entusiasta na arte dental, onde busco sempre resultados com extrema naturalidade, respeitando a essência de cada sorriso. Acredito que a odontologia estética vai além da técnica; é sobre devolver confiança e harmonia através de um olhar artístico e delicado.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#c29a63] mt-1" />
                  <p className="text-sm font-medium text-[#29221c]">Atendimento <br/>Humanizado</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#c29a63] mt-1" />
                  <p className="text-sm font-medium text-[#29221c]">Foco em <br/>Naturalidade</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                <LogoSVG />
                <div className="font-heading text-2xl font-bold tracking-tight">
                  Dra. Maria Laura <br/><span className="text-[#c29a63] font-medium text-lg">Odontologia</span>
                </div>
              </div>
              <p className="text-white/50 max-w-sm mb-10 leading-relaxed font-light text-lg">
                Referência em facetas e lentes em resinas compostas com foco em naturalidade e arte dental.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#c29a63] hover:border-[#c29a63] transition-all group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#c29a63] hover:border-[#c29a63] transition-all group">
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