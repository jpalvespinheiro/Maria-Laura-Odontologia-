import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Sparkles, Smile, Star, CheckCircle2, ChevronRight, ChevronLeft, Phone, Mail, Wind, Coffee, ShieldCheck, Plus, Minus, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

import dentist1 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.38_(1)_1771948728851.jpeg";
import dentist2 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.36_1771948728854.jpeg";
import dentist3 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.35_1771948728854.jpeg";
import dentist4 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.37_1771948728853.jpeg";
import specMimetismo from "@assets/WhatsApp_Image_2026-02-24_at_13.05.38_1771949220712.jpeg";
import specClareamento from "@assets/WhatsApp_Image_2026-02-24_at_13.06.05_1771949220711.jpeg";
import specPeriodontal from "@assets/WhatsApp_Image_2026-02-24_at_13.06.19_1771949220710.jpeg";
import specRestauracao from "@assets/WhatsApp_Image_2026-02-24_at_13.06.31_1771949220708.jpeg";
import whatsappIcon from "/assets/whatsapp-custom.png";
import clinicImg from "@assets/dentista-em-lagoa-santa-scaled_1771954238429.jpg";

const WHATSAPP_URL = "https://wa.me/5564981644853?text=Olá,%20Dra.%20Maria%20Laura!%20Gostaria%20de%20conhecer%20os%20serviços%20e%20agendar%20uma%20avaliação.";
const INSTAGRAM_URL = "https://www.instagram.com/dra.marialauraodontologia/";
const FACEBOOK_URL = "https://www.facebook.com/people/Maria-Laura-Odontologia/61588240837741/?mibextid=wwXIfr&rdid=MSE1H9VaSlgYIUwR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18Nqeg93hG%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio";

const dentistPhotos = [dentist1, dentist2, dentist3, dentist4];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const testimonials = [
  {
    name: "Ana Beatriz",
    comment: "A Dra. Maria Laura superou todas as minhas expectativas. O resultado das minhas facetas ficou tão natural que ninguém percebe que fiz o procedimento. Atendimento impecável!",
    stars: 5
  },
  {
    name: "Lucas Ferreira",
    comment: "Ambiente extremamente acolhedor e climatizado. Me senti muito seguro durante todo o tratamento. Recomendo para quem busca perfeccionismo.",
    stars: 5
  },
  {
    name: "Juliana Mendes",
    comment: "O clareamento estratégico fez toda a diferença no meu sorriso. A precisão e o olhar artístico da Dra. são únicos. Estou muito feliz com meu novo sorriso.",
    stars: 5
  }
];

const services = [
  { 
    title: "Mimetismo Dental & Facetas em Resina", 
    shortDesc: "Você já imaginou transformar seu sorriso sem perder a naturalidade?",
    fullDesc: `Você já imaginou transformar seu sorriso sem perder a naturalidade?\n\nA Dra. Maria Laura une tecnologia de ponta e sensibilidade artística para criar restaurações que se confundem com dentes naturais. Utilizando técnicas avançadas de estratificação em resina, cada camada é aplicada estrategicamente para reproduzir cor, translucidez, brilho e textura com extrema fidelidade.\n\nO resultado? Um sorriso harmônico, elegante e absolutamente natural — sem aspecto artificial.\n\nAs facetas em resina são ideais para corrigir manchas, fraturas, desalinhamentos leves e diastemas, de forma conservadora e personalizada. Cada detalhe é planejado de acordo com o formato do rosto, proporção dental e expectativa do paciente.\n\nSe o seu sorriso já não representa quem você é hoje, talvez seja o momento de redescobrir sua melhor versão.\n\nAgende sua avaliação e descubra como a estética pode transformar não apenas dentes, mas autoestima e presença.`,
    img: specMimetismo,
    icon: <Sparkles className="w-6 h-6" />
  },
  { 
    title: "Clareamento Dental Estratégico", 
    shortDesc: "Você quer dentes mais brancos… ou um sorriso realmente impactante?",
    fullDesc: `Você quer dentes mais brancos… ou um sorriso realmente impactante?\n\nAntes das facetas, existe uma etapa que faz toda a diferença no resultado final: o clareamento estratégico. No é apenas estética — é planejamento inteligente.\n\nAo realizar o clareamento previamente, a Dra. Maria Laura cria a base ideal para alcançar tons mais claros e sofisticados nas facetas, garantindo uma harmonia perfeita entre naturalidade e luminosidade. Isso significa mais liberdade na escolha da cor e um resultado muito mais refinado.\n\nSem essa etapa, o potencial do seu sorriso pode ficar limitado.\nCom ela, o resultado se torna mais claro, mais equilibrado e muito mais impressionante.\n\nSe você busca um sorriso que chame atenção pela elegância — e não pelo exagero — o planejamento começa aqui.\n\nAgende sua avaliação e descubra como cada detalhe pode transformar completamente o seu resultado final.`,
    img: specClareamento,
    icon: <Star className="w-6 h-6" />,
    reverse: true
  },
  { 
    title: "Saúde Gengival: Estética Branca x Rosa", 
    shortDesc: "Você já percebeu que alguns sorrisos são bonitos… mas poucos são realmente sofisticados?",
    fullDesc: `Você já percebeu que alguns sorrisos são bonitos… mas poucos são realmente sofisticados?\n\nO segredo quase sempre está onde ninguém presta atenção: na gengiva.\n\nNão basta ter dentes claros e alinhados se a moldura não está em equilíbrio. A verdadeira harmonia acontece quando a estética branca (dentes) conversa perfeitamente com a estética rosa (gengiva). É essa proporção que transmite naturalidade, juventude e elegância.\n\nA Dra. Maria Laura realiza um planejamento periodontal personalizado para garantir que a gengiva esteja saudável, simétrica e contornando os dentes na medida exata. Quando necessário, pequenos ajustes estratégicos elevam completamente o padrão do resultado final.\n\nSem esse cuidado, o sorriso pode parecer artificial.\nCom ele, o resultado se torna refinado, harmônico e marcante.\n\nSe você busca um sorriso que impressiona pela naturalidade e não pelo exagero, o equilíbrio começa na base.\n\nAgende sua avaliação e descubra como cada detalhe transforma o todo.`,
    img: specPeriodontal,
    icon: <Smile className="w-6 h-6" />
  },
  { 
    title: "Restaurações de Alta Performance", 
    shortDesc: "Você confiaria sua saúde bucal a uma restauração que apenas “quebra o galho”?",
    fullDesc: `Você confiaria sua saúde bucal a uma restauração que apenas “quebra o galho”?\n\nQuando um dente é restaurado da forma correta, você não deve perceber diferença ao sorrir, falar ou mastigar. Ele precisa ter a mesma força, a mesma estética e a mesma naturalidade de um dente saudável.\n\nÉ por isso que utilizamos resinas de última geração e aplicamos o conceito de biomimética — reconstruindo o dente respeitando sua anatomia original, sua resistência e sua função. Cada camada é planejada para devolver não apenas a aparência, mas a performance completa do elemento dental.\n\nO objetivo é simples:\nninguém perceber que houve uma restauração.\n\nMais do que estética, é segurança, durabilidade e saúde a longo prazo.\n\nSe você busca um tratamento que vá além do básico e realmente preserve seu sorriso, a diferença está nos detalhes — e na técnica.\n\nAgende sua avaliação e descubra como uma restauração pode ser invisível aos olhos e poderosa na função.`,
    img: specRestauracao,
    icon: <CheckCircle2 className="w-6 h-6" />,
    reverse: true
  }
];

function FAQItem({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group bg-white border ${isOpen ? 'border-[#c29a63] shadow-lg shadow-[#c29a63]/5' : 'border-[#ebdabe]/50'} rounded-[2rem] overflow-hidden transition-all duration-500`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-7 flex items-center justify-between text-left transition-colors"
      >
        <span className={`text-lg font-heading font-bold transition-colors duration-300 ${isOpen ? 'text-[#c29a63]' : 'text-[#29221c]'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#c29a63] text-white rotate-180' : 'bg-[#faf8f5] text-[#c29a63]'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-8 text-[#5c4d40] font-light leading-relaxed text-base border-t border-[#faf8f5] pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ServiceModal({ service, isOpen, onClose }: { service: any, isOpen: boolean, onClose: () => void }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-3xl bg-[#faf8f5] rounded-[3rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-[#ebdabe]/50 flex items-center justify-center text-[#29221c] hover:bg-[#c29a63] hover:text-white transition-all shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="aspect-video sm:aspect-[21/9] w-full relative">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-transparent" />
            </div>

            <div className="px-8 sm:px-12 pb-12 pt-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#c29a63]/10 flex items-center justify-center text-[#c29a63]">
                  {service.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#29221c]">{service.title}</h3>
              </div>
              
              <div className="space-y-4 text-[#5c4d40] text-lg font-light leading-relaxed whitespace-pre-wrap">
                {service.fullDesc}
              </div>

              <div className="mt-10 pt-10 border-t border-[#ebdabe]/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-[#c29a63] font-heading font-bold text-lg italic">Pronta para redescobrir sua melhor versão?</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full px-8 shadow-xl shadow-[#c29a63]/20 font-bold uppercase tracking-widest flex items-center gap-2">
                    Agendar via WhatsApp
                    <img src={whatsappIcon} alt="" className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<any>(null);

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
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#faf8f5]/60 border-b border-[#ebdabe]/20 text-[#fffafa]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between text-[#fffafa] bg-[#ffffff00]">
          <div className="flex items-center gap-1 py-4">
            <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#a88252]/30 shadow-sm flex-shrink-0 bg-white">
              <img src="/assets/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-start -space-y-1">
              <span className="text-base md:text-lg font-normal tracking-tighter text-[#5c4d40] leading-none antialiased">
                Dra. Maria Laura
              </span>
              <span className="text-sm md:text-base font-normal tracking-tighter text-[#a88252] antialiased">
                Odontologia
              </span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-normal tracking-[0.1em] uppercase text-[#5c4d40]">
            <a href="#especialidades" className="hover:text-[#c29a63] transition-colors text-[13px] text-[#5c4d40]">Serviços</a>
            <a href="#clinica" className="hover:text-[#c29a63] transition-colors text-[13px] text-[#5c4d40]">Clínica</a>
            <a href="#sobre" className="hover:text-[#c29a63] transition-colors text-[13px] text-[#5c4d40]">Sobre Mim</a>
            <a href="#depoimentos" className="hover:text-[#c29a63] transition-colors text-[13px] text-[#5c4d40]">Depoimentos</a>
          </div>

          <div className="flex items-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button className="relative group overflow-hidden bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full px-8 h-12 transition-all duration-500 shadow-lg shadow-[#c29a63]/20 font-normal text-[13px] uppercase tracking-[0.1em] flex items-center gap-3 border border-white/10" data-testid="button-fale-conosco-nav">
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
                  Fale Conosco
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6 text-[#c29a63]" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#faf8f5] border-l-[#ebdabe]">
                <div className="flex flex-col gap-8 mt-12 text-center">
                  <SheetClose asChild><a href="#especialidades" className="text-xl font-heading font-bold text-[#29221c]">Serviços</a></SheetClose>
                  <SheetClose asChild><a href="#clinica" className="text-xl font-heading font-bold text-[#29221c]">Clínica</a></SheetClose>
                  <SheetClose asChild><a href="#sobre" className="text-xl font-heading font-bold text-[#29221c]">Sobre Mim</a></SheetClose>
                  <SheetClose asChild><a href="#depoimentos" className="text-xl font-heading font-bold text-[#29221c]">Depoimentos</a></SheetClose>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#c29a63] text-white rounded-full h-14 font-bold uppercase tracking-widest flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5" />
                      Fale Conosco
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-10">
            <motion.div variants={textVariant} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ebdabe]/40 text-[#a88252] uppercase tracking-[0.3em] mb-8 font-bold text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transforme seu <span className="text-[#c29a63]">sorriso</span> com naturalidade e <span className="text-[#c29a63]">precisão</span>.</span>
            </motion.div>
            
            <motion.h1 variants={textVariant} className="text-5xl lg:text-7xl font-heading font-bold leading-[1.05] mb-8 text-[#29221c] tracking-tight">
              Excelência em cada detalhe do seu <span className="text-[#c29a63]">sorriso</span>.
            </motion.h1>
            
            <motion.p variants={textVariant} className="text-xl text-[#5c4d40] mb-10 leading-relaxed max-w-lg font-light">
              Se você busca um resultado elegante, harmônico e sem aparência artificial, está no lugar certo. Trabalhamos com técnicas modernas de mimetismo dental para criar sorrisos que impressionam pela naturalidade e elevam sua confiança desde o primeiro olhar.
            </motion.p>
            
            <motion.div variants={textVariant} className="flex flex-col sm:flex-row gap-5">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="w-full sm:w-auto bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full text-sm h-14 px-8 shadow-xl shadow-[#c29a63]/20 font-normal uppercase tracking-widest flex items-center justify-center gap-3" data-testid="button-whatsapp-hero">
                    Agendar via WhatsApp
                    <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 object-contain" />
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl bg-[#ebdabe]/20"
            >
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
            </motion.div>

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

      <section id="clinica" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariant}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-[2px] w-12 bg-[#c29a63]" />
                <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">Ambiente Exclusivo</span>
              </motion.div>
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariant}
                className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] mb-8 leading-tight"
              >
                Nossa Clínica
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariant}
                className="text-[#5c4d40] text-lg font-light leading-relaxed mb-10"
              >
                Preparamos um espaço focado no seu bem-estar. Nossa clínica oferece um <span className="font-semibold text-[#c29a63]">ambiente organizado, totalmente climatizado</span> e projetado para proporcionar o melhor aconchego durante o seu atendimento.
              </motion.p>
              
              <div className="grid gap-6">
                {[
                  { icon: <Wind className="w-6 h-6" />, title: "Climatização Total", desc: "Temperatura ideal para o seu máximo conforto." },
                  { icon: <Coffee className="w-6 h-6" />, title: "Melhor Aconchego", desc: "Espaço acolhedor para uma experiência relaxante." },
                  { icon: <ShieldCheck className="w-6 h-6" />, title: "Organização & Biossegurança", desc: "Rigor técnico e organização impecável." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    whileHover={{ x: 10, backgroundColor: "#faf8f5" }}
                    className="flex items-center gap-4 bg-[#faf8f5]/50 p-5 rounded-2xl border border-[#ebdabe]/30 transition-all cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#c29a63] shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#29221c]">{item.title}</h4>
                      <p className="text-sm text-[#5c4d40]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -inset-4 border border-[#c29a63]/20 rounded-[3.5rem] -z-10" />
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
                <img src={clinicImg} alt="Clínica" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#c29a63] text-white p-8 rounded-[2rem] shadow-xl max-w-[240px]">
                <p className="text-sm font-light leading-relaxed italic">"Um espaço pensado para que sua única preocupação seja o seu bem-estar."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="py-24 px-6 bg-[#faf8f5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-4 py-1.5 rounded-full bg-[#ebdabe]/40 text-[#a88252] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Especialidades
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c]">
              Soluções Sob Medida para o Seu <span className="text-[#c29a63]">Sorriso</span>
            </motion.h2>
          </div>

          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 bg-white/40 backdrop-blur-sm p-8 lg:p-12 rounded-[3.5rem] border border-[#ebdabe]/50 hover:border-[#c29a63]/30 transition-all duration-500`}
              >
                <div className="w-full lg:w-1/2 relative">
                  <div className={`absolute -inset-4 border border-[#c29a63]/10 rounded-[2.5rem] -z-10 group-hover:scale-105 transition-transform duration-700`} />
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#c29a63]/10 flex items-center justify-center text-[#c29a63]">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-[#29221c] leading-tight group-hover:text-[#c29a63] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#5c4d40] font-light leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <Button 
                    onClick={() => setSelectedService(service)}
                    variant="link" 
                    className="p-0 text-[#c29a63] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group/btn"
                  >
                    Saiba Mais 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img src={dentist4} alt="Dra. Maria Laura" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ebdabe]/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#c29a63]/10 rounded-full blur-3xl" />
            </div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#c29a63]" />
                <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">Minha Trajetória</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] leading-tight">
                Apaixonada por devolver a <span className="text-[#c29a63]">confiança</span> através do sorriso.
              </h2>
              <div className="space-y-6 text-[#5c4d40] text-lg font-light leading-relaxed">
                <p>
                  Sou a Dra. Maria Laura, graduada pelo Centro Universitário de Goiatuba (UniCerrado) e inscrita no Conselho Regional de Odontologia sob o registro <span className="font-semibold text-[#a88252]">CRO-GO 25701</span>.
                </p>
                <p>
                  Minha missão é unir técnica científica e olhar artístico para proporcionar resultados que respeitem a individualidade de cada paciente. Acredito que a odontologia estética de alto padrão deve ser, acima de tudo, natural e saudável.
                </p>
                <p>
                  Cada planejamento é único, focado em entender não apenas a necessidade clínica, mas o desejo de cada pessoa que confia em meu trabalho para transformar sua autoestima.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#ebdabe]/50">
                <div className="flex flex-col gap-2">
                  <span className="text-3xl font-heading font-bold text-[#c29a63]">UNI</span>
                  <span className="text-xs text-[#8a7a6e] uppercase tracking-widest font-bold">Graduação Unicerrado</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl font-heading font-bold text-[#c29a63]">MIM</span>
                  <span className="text-xs text-[#8a7a6e] uppercase tracking-widest font-bold">Expertise em Mimetismo</span>
                </div>
              </div>

              <div className="pt-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full px-10 h-16 shadow-xl shadow-[#c29a63]/20 font-bold uppercase tracking-widest transition-all hover:scale-105">
                    Conhecer meu Trabalho
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-24 px-6 bg-[#faf8f5] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#ebdabe]/40 text-[#a88252] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              O que dizem os pacientes
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c]">
              Histórias que nos <span className="text-[#c29a63]">inspiram</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#ebdabe]/30 flex flex-col justify-between hover:shadow-xl hover:shadow-[#c29a63]/5 transition-all duration-500"
              >
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c29a63] text-[#c29a63]" />
                    ))}
                  </div>
                  <p className="text-[#5c4d40] text-lg font-light leading-relaxed italic">"{t.comment}"</p>
                </div>
                <div className="mt-8 pt-8 border-t border-[#faf8f5] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ebdabe]/40 flex items-center justify-center text-[#c29a63] font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-bold text-[#29221c]">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#29221c] mb-4">Perguntas Frequentes</h2>
            <p className="text-[#5c4d40] font-light">Tire suas principais dúvidas sobre nossos procedimentos e atendimentos.</p>
          </div>
          <div className="space-y-4">
            <FAQItem index={0} question="As facetas em resina ficam com aspecto artificial?" answer="Não. Utilizamos a técnica de mimetismo dental, onde a resina é aplicada em camadas estratégicas para imitar a cor, brilho e translucidez do dente natural. O objetivo é que ninguém perceba o procedimento." />
            <FAQItem index={1} question="Quanto tempo dura o tratamento?" answer="O tempo varia de acordo com o caso, mas geralmente os procedimentos de estética (como facetas) podem ser realizados em poucas sessões. Durante a avaliação, montamos seu cronograma personalizado." />
            <FAQItem index={2} question="É necessário desgastar o dente original?" answer="Trabalhamos com a odontologia conservadora. Na maioria dos casos de facetas em resina, o desgaste é mínimo ou inexistente, preservando ao máximo a estrutura natural do seu dente." />
            <FAQItem index={3} question="Onde a clínica está localizada?" answer="Atendemos em um consultório planejado e confortável para sua total comodidade. Entre em contato pelo WhatsApp para receber o endereço completo e agendar sua visita." />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#29221c] rounded-[4rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[150%] bg-[#c29a63] blur-[120px] rounded-full" />
              <div className="absolute bottom-[-50%] right-[-20%] w-[70%] h-[150%] bg-[#a88252] blur-[120px] rounded-full" />
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-10">
              <Award className="w-16 h-16 text-[#c29a63] mx-auto mb-4" />
              <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">Pronta para o seu novo <span className="text-[#c29a63]">sorriso</span>?</h2>
              <p className="text-white/70 text-xl font-light leading-relaxed">Não deixe sua autoestima para depois. Agende agora uma avaliação personalizada e descubra o que a excelência em odontologia pode fazer por você.</p>
              <div className="pt-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full px-12 h-18 text-lg font-bold uppercase tracking-widest shadow-2xl shadow-black/40 transition-all hover:scale-105">
                    Falar com a Dra. Maria Laura
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#faf8f5] pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 mb-20 border-b border-[#ebdabe]/50 pb-20">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[#a88252]/30 bg-white">
                  <img src="/assets/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-normal tracking-tighter text-[#5c4d40]">Dra. Maria Laura</span>
                  <span className="text-base font-normal tracking-tighter text-[#a88252]">Odontologia</span>
                </div>
              </div>
              <p className="text-[#8a7a6e] text-lg font-light leading-relaxed mb-8 max-w-md">
                Excelência em odontologia estética com foco em naturalidade e bem-estar. A cada sorriso, uma nova história.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <a href={INSTAGRAM_URL} target="_blank" className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center border border-[#a88252]/10 hover:bg-[#a88252]/10 transition-all group">
                    <img src="/assets/instagram-custom.png" alt="Instagram" className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                  </a>
                  <a href={FACEBOOK_URL} target="_blank" className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center border border-[#a88252]/10 hover:bg-[#a88252]/10 transition-all group">
                    <img src="/assets/facebook-custom.png" alt="Facebook" className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                <div className="h-8 w-[1px] bg-[#ebdabe] mx-2" />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-[#a88252]/10 text-[#a88252] text-[9px] font-bold uppercase tracking-[0.2em]">
                  <Sparkles className="w-3 h-3" />
                  <span>A cada sorriso uma história</span>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm border border-[#ebdabe] rounded-3xl p-8 shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#29221c] mb-6">Navegação</h4>
              <ul className="space-y-4">
                <li><a href="#especialidades" className="text-[#8a7a6e] hover:text-[#c29a63] transition-colors flex items-center gap-2 text-sm group"><div className="w-1 h-1 rounded-full bg-[#c29a63] opacity-0 group-hover:opacity-100 transition-all" /> Serviços</a></li>
                <li><a href="#clinica" className="text-[#8a7a6e] hover:text-[#c29a63] transition-colors flex items-center gap-2 text-sm group"><div className="w-1 h-1 rounded-full bg-[#c29a63] opacity-0 group-hover:opacity-100 transition-all" /> Clínica</a></li>
                <li><a href="#sobre" className="text-[#8a7a6e] hover:text-[#c29a63] transition-colors flex items-center gap-2 text-sm group"><div className="w-1 h-1 rounded-full bg-[#c29a63] opacity-0 group-hover:opacity-100 transition-all" /> Sobre Mim</a></li>
                <li><a href="#depoimentos" className="text-[#8a7a6e] hover:text-[#c29a63] transition-colors flex items-center gap-2 text-sm group"><div className="w-1 h-1 rounded-full bg-[#c29a63] opacity-0 group-hover:opacity-100 transition-all" /> Depoimentos</a></li>
              </ul>
            </div>

            <div className="bg-white/40 backdrop-blur-sm border border-[#ebdabe] rounded-3xl p-8 shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#29221c] mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#8a7a6e] group">
                  <MapPin className="w-5 h-5 text-[#a88252] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Goiatuba, Goiás - Atendimento Personalizado</span>
                </li>
                <li className="flex items-center gap-3 text-[#8a7a6e] group">
                  <Phone className="w-5 h-5 text-[#a88252] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">(64) 98164-4853</span>
                </li>
                <li className="flex items-center gap-3 text-[#8a7a6e] group">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <img src="/assets/gmail-custom.png" alt="Email" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                  </div>
                  <a href="mailto:dramarialaurabarbosacunhaesilv@gmail.com" className="text-sm hover:text-[#a88252] transition-colors truncate">
                    E-mail profissional
                  </a>
                </li>
                <li className="pt-4">
                  <a href="https://g.page/r/YOUR_GOOGLE_REVIEW_ID/review" target="_blank" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#a88252]/10 border border-[#a88252]/20 text-[#a88252] font-bold text-[10px] uppercase tracking-widest hover:bg-[#a88252] hover:text-white transition-all">
                    Avaliar no Google <ArrowRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[#8a7a6e]/40 text-[10px] uppercase font-bold tracking-[0.3em]">
            <p>© {new Date().getFullYear()} DRA. MARIA LAURA BARBOSA | LUXO & ODONTOLOGIA</p>
            <div className="flex items-center gap-2">
              <span>Desenvolvido por</span>
              <span className="text-[#a88252] text-xs">Ethos Desenvolvimento de Software</span>
            </div>
          </div>
        </div>
      </footer>
      <ServiceModal 
        service={selectedService} 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
}
