import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Sparkles, Smile, Star, CheckCircle2, ChevronRight, ChevronLeft, Instagram, Phone, Mail, ExternalLink, Award, Heart, Wind, Coffee, ShieldCheck, Plus, Minus, X, Facebook, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

// Assets
import dentist1 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.38_(1)_1771948728851.jpeg";
import dentist2 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.36_1771948728854.jpeg";
import dentist3 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.35_1771948728854.jpeg";
import dentist4 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.37_1771948728853.jpeg";
import specMimetismo from "@assets/WhatsApp_Image_2026-02-24_at_13.05.38_1771949220712.jpeg";
import specClareamento from "@assets/WhatsApp_Image_2026-02-24_at_13.06.05_1771949220711.jpeg";
import specPeriodontal from "@assets/WhatsApp_Image_2026-02-24_at_13.06.19_1771949220710.jpeg";
import specRestauracao from "@assets/WhatsApp_Image_2026-02-24_at_13.06.31_1771949220708.jpeg";
import whatsappIcon from "@assets/icons8-whatsapp-32_1771954618804.png";
import clinicImg from "@assets/dentista-em-lagoa-santa-scaled_1771954238429.jpg";
import logoImg from "@assets/WhatsApp_Image_2026-02-24_at_14.00.46_1771955133778.jpeg";

import newLogoImg from "@assets/A8d309b8f7da943c18b43dc818515f3d0u_1771961817737.png";

const WHATSAPP_URL = "https://wa.me/5564981644853?text=Olá,%20Dra.%20Maria%20Laura!%20Gostaria%20de%20conhecer%20os%20serviços%20e%20agendar%20uma%20avaliação.";
const INSTAGRAM_URL = "https://www.instagram.com/dra.marialauraodontologia/";
const FACEBOOK_URL = "https://www.facebook.com/people/Maria-Laura-Odontologia/61588240837741/?mibextid=wwXIfr&rdid=MSE1H9VaSlgYIUwR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18Nqeg93hG%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio";
const EMAIL = "dramarialaurabarbosacunhaesilv@gmail.com";

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
                    <img src={whatsappIcon} alt="" className="w-5 h-5 brightness-0 invert" />
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
      {/* Navigation */}
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
      {/* Hero Section */}
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
                  <Button size="lg" className="w-full bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full text-base h-16 px-10 shadow-xl shadow-[#c29a63]/20 font-normal uppercase tracking-widest flex items-center gap-3" data-testid="button-whatsapp-hero">
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
      {/* Clínica Section */}
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
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-video lg:aspect-[4/5]">
                <motion.img 
                  src={clinicImg} 
                  alt="Ambiente da Clínica" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover" 
                />
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={textVariant} className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#c29a63]" />
                <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">A Doutora</span>
              </motion.div>
              <motion.h2 variants={textVariant} className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] mb-8 leading-tight">Sobre mim</motion.h2>
              <motion.div variants={textVariant} className="space-y-6 text-[#5c4d40] text-lg font-light leading-relaxed">
                <p>
                  Olá, eu sou a <span className="text-[#29221c] font-bold">Dra. Maria Laura</span>.
                </p>
                <p>
                  Sou Cirurgiã-Dentista formada pelo Centro Universitário Unibras Montes Belos (UniBras). Minha trajetória é marcada pelo constante aperfeiçoamento e um profundo perfeccionismo, especialmente voltado para <span className="text-[#c29a63] font-semibold">Facetas e Lentes em Resinas Compostas</span>.
                </p>
                <p>
                  Me considero uma entusiasta na arte dental, onde busco sempre resultados com extrema naturalidade, respeitando a essência de cada sorriso. Acredito que a odontologia estética vai além da técnica; é sobre devolver confiança e harmonia através de um olhar artístico e delicado.
                </p>
              </motion.div>
              <motion.div variants={textVariant} className="mt-10 grid grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -5, scale: 1.02 }} className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-[#ebdabe]/20 transition-all">
                  <Heart className="w-5 h-5 text-[#c29a63] mt-1" />
                  <p className="text-sm font-medium text-[#29221c]">Atendimento <br/>Humanizado</p>
                </motion.div>
                <motion.div whileHover={{ y: -5, scale: 1.02 }} className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-[#ebdabe]/20 transition-all">
                  <Sparkles className="w-5 h-5 text-[#c29a63] mt-1" />
                  <p className="text-sm font-medium text-[#29221c]">Foco em <br/>Naturalidade</p>
                </motion.div>
                <motion.div whileHover={{ y: -5, scale: 1.02 }} className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-[#ebdabe]/20 transition-all">
                  <Smile className="w-5 h-5 text-[#c29a63] mt-1" />
                  <p className="text-sm font-medium text-[#29221c]">Eleva qualidade de vida <br/>e autoestima</p>
                </motion.div>
                <motion.div whileHover={{ y: -5, scale: 1.02 }} className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-[#ebdabe]/20 transition-all">
                  <Award className="w-5 h-5 text-[#c29a63] mt-1" />
                  <p className="text-sm font-medium text-[#29221c]">Cirurgiã <br/>Dentista</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="especialidades" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={textVariant} className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#c29a63]" />
              <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">Serviços Especializados</span>
            </motion.div>
            <motion.h2 variants={textVariant} className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] tracking-tight">O Que Fazemos de Melhor</motion.h2>
          </motion.div>

          <div className="grid gap-32">
            {services.map((service, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-16 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, x: service.reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative group ${service.reverse ? 'lg:order-2' : ''}`}
                >
                  <div className="absolute inset-4 border border-white/20 rounded-[2.5rem] z-10 pointer-events-none" />
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                    <motion.img 
                      src={service.img} 
                      alt={service.title} 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className={`${service.reverse ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}
                >
                  <motion.div variants={textVariant} className="w-14 h-14 rounded-2xl bg-[#c29a63]/10 flex items-center justify-center text-[#c29a63] mb-8">
                    {service.icon}
                  </motion.div>
                  <motion.h3 variants={textVariant} className="text-3xl font-heading font-bold mb-6 text-[#29221c] leading-tight">{service.title}</motion.h3>
                  <motion.p variants={textVariant} className="text-[#5c4d40] text-lg font-light leading-relaxed mb-8">{service.shortDesc}</motion.p>
                  <motion.div variants={textVariant}>
                    <Button 
                      variant="link" 
                      onClick={() => setSelectedService(service)}
                      className="text-[#c29a63] p-0 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      Saber mais detalhes <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 px-6 bg-[#fdfbf9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c29a63]/10 text-[#c29a63] text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
            >
              <Star className="w-3.5 h-3.5" />
              <span>Depoimentos Reais</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] tracking-tight">Feedback de Clientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10, backgroundColor: "#fff", borderColor: "#c29a63" }}
                className="bg-white p-10 rounded-[2.5rem] border-2 border-[#ebdabe] shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c29a63] text-[#c29a63]" />
                    ))}
                  </div>
                  <p className="text-[#5c4d40] italic font-light leading-relaxed mb-8">"{t.comment}"</p>
                </div>
                <p className="font-heading font-bold text-[#29221c]">— {t.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Feedback Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-[3rem] border border-[#ebdabe]/30 shadow-xl"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-heading font-bold text-[#29221c] mb-2">Deixe sua avaliação</h3>
              <p className="text-[#5c4d40] font-light">Sua opinião é muito importante para nós.</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#a88252] ml-2">Seu Nome</label>
                  <input type="text" placeholder="Ex: Maria Silva" className="w-full h-14 bg-[#faf8f5] border border-[#ebdabe]/50 rounded-2xl px-6 focus:outline-none focus:border-[#c29a63] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#a88252] ml-2">Avaliação</label>
                  <div className="flex items-center h-14 bg-[#faf8f5] border border-[#ebdabe]/50 rounded-2xl px-6 gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 text-[#c29a63] cursor-pointer hover:fill-[#c29a63]" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#a88252] ml-2">Seu Comentário</label>
                <textarea rows={4} placeholder="Conte-nos como foi sua experiência..." className="w-full bg-[#faf8f5] border border-[#ebdabe]/50 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#c29a63] transition-all resize-none"></textarea>
              </div>
              <Button className="w-full bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full h-14 font-bold uppercase tracking-widest transition-all shadow-lg shadow-[#c29a63]/20">
                Enviar Avaliação
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-[#faf8f5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c29a63]/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c29a63]/5 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="mb-20 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c29a63]/10 text-[#c29a63] text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
            >
              <Smile className="w-3.5 h-3.5" />
              <span>Transparência & Cuidado</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] tracking-tight">Dúvidas Frequentes</h2>
            <p className="mt-4 text-[#5c4d40] font-light text-lg">Tudo o que você precisa saber para transformar o seu sorriso.</p>
          </div>

          <div className="grid gap-6">
            {[
              { q: "Quanto tempo duram as facetas em resina?", a: "As resinas modernas possuem alta estabilidade de cor e brilho. Com cuidados adequados e polimento semestral, podem durar muitos anos com estética impecável." },
              { q: "O clareamento dental causa sensibilidade?", a: "A sensibilidade é temporária e varia entre pacientes. Utilizamos géis modernos e protocolos dessensibilizantes para garantir uma experiência confortável." },
              { q: "As lentes de contato dental exigem desgaste?", a: "Prezamos pela odontologia minimamente invasiva. Em muitos casos, o desgaste é nulo ou extremamente reduzido, preservando o dente natural." },
              { q: "Qual a importância de tratar a gengiva antes da estética?", a: "A saúde gengival é a base de um sorriso duradouro. Uma gengiva saudável garante simetria e evita complicações futuras nas restaurações estéticas." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
             <motion.div variants={textVariant} className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#c29a63]" />
              <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">Visite-nos</span>
            </motion.div>
            <motion.h2 variants={textVariant} className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] tracking-tight">Onde Estamos</motion.h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-[#ebdabe]/50 group relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.238622159187!2d-50.1477755!3d-16.11585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e4b0000000001%3A0x3b773a4b609deebf!2sDra.%20Maria%20Laura%20%7C%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-8 left-8 right-8 md:right-auto">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-[#ebdabe]/50 max-w-sm"
              >
                <MapPin className="text-[#c29a63] w-6 h-6 mb-3" />
                <h4 className="font-bold text-[#29221c] mb-1">Dra. Maria Laura | Odontologia</h4>
                <p className="text-sm text-[#5c4d40]">Av. João Ferreira da Cunha, 470, Centro, Mossâmedes - GO</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Dra.+Maria+Laura+%7C+Odontologia" target="_blank" className="inline-flex items-center gap-2 text-[#c29a63] font-bold text-xs uppercase tracking-widest mt-4 hover:gap-3 transition-all">
                  Como chegar <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer Section */}
      <footer id="contato" className="bg-[#1a1612] text-white pt-24 pb-12 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-24 w-24 flex items-center justify-center">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024.000000 1024.000000"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-full fill-white">
                    <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" stroke="none">
                      <path d="M2095 6300 c-3 -11 -33 -60 -65 -110 -80 -121 -99 -161 -116 -239
                      -10 -51 -11 -88 -4 -148 5 -49 5 -105 0 -144 -5 -35 -10 -71 -11 -79 0 -8 -9
                      8 -18 35 -10 28 -31 72 -47 97 -42 68 -175 218 -187 211 -15 -9 -1 -139 22
                      -207 27 -76 52 -115 129 -200 35 -39 70 -83 78 -98 8 -15 21 -78 29 -140 18
                      -137 52 -265 105 -402 22 -56 40 -106 40 -110 0 -4 -12 6 -26 23 -14 17 -66
                      64 -116 103 -75 60 -88 75 -83 92 4 12 9 64 12 116 4 81 2 104 -17 153 -23 61
                      -86 137 -113 137 -21 0 -52 -61 -62 -118 -6 -39 -10 -43 -29 -37 -45 13 -173
                      24 -206 16 -32 -7 -35 -10 -32 -41 3 -35 50 -136 83 -178 l19 -25 -57 -51 -57
                      -52 31 -22 c45 -32 146 -55 202 -47 55 8 123 37 167 70 18 14 35 25 39 25 3 0
                      41 -28 83 -62 118 -95 206 -199 257 -303 25 -49 57 -110 72 -135 l27 -45 -54
                      53 c-79 78 -145 106 -432 189 -39 11 -12 -56 58 -143 52 -65 128 -110 276
                      -163 142 -51 190 -77 210 -114 19 -36 47 -157 59 -259 13 -106 29 -130 29 -44
                      0 125 -53 332 -127 500 -45 101 -42 130 30 283 31 65 61 138 67 162 20 78 13
                      266 -12 314 -13 26 -27 12 -87 -92 -93 -161 -104 -192 -110 -320 l-6 -114 -38
                      84 c-51 110 -127 313 -127 337 0 26 45 85 125 162 67 65 113 140 134 216 13
                      47 17 131 7 141 -4 4 -54 -40 -112 -98 -108 -107 -174 -208 -174 -268 -1 -25
                      -1 -25 -13 -6 -7 12 -12 60 -12 125 0 93 3 111 27 162 41 87 73 125 126 144
                      26 10 55 24 65 32 34 29 14 72 -33 72 -28 0 -51 -20 -85 -74 -11 -18 -39 -61
                      -62 -96 l-43 -63 0 44 c0 83 20 173 46 204 65 81 139 192 157 238 27 67 30
                      232 4 290 -18 41 -32 47 -42 17z m31 -86 c10 -70 -3 -170 -29 -227 -31 -66
                      -127 -198 -127 -174 0 18 22 83 59 175 12 29 16 52 10 52 -12 0 -89 -159 -89
                      -183 0 -9 -5 -19 -11 -23 -9 -5 -10 9 -5 54 11 101 32 154 101 257 36 53 65
                      101 65 106 0 5 4 9 9 9 6 0 13 -21 17 -46z m-312 -529 c31 -54 61 -135 50
                      -135 -2 0 -12 17 -23 38 -26 51 -81 125 -88 118 -3 -2 16 -43 41 -89 25 -47
                      46 -89 46 -93 0 -15 -61 51 -91 98 -36 56 -78 171 -79 213 0 30 1 29 55 -30
                      30 -33 70 -87 89 -120z m326 15 c0 -14 -48 -35 -58 -26 -8 9 26 36 45 36 7 0
                      13 -5 13 -10z m61 -283 c-11 -32 -36 -80 -55 -105 -37 -51 -136 -151 -136
                      -139 0 14 32 71 71 126 22 30 39 59 39 64 0 19 -61 -47 -97 -105 -20 -32 -37
                      -58 -39 -58 -2 0 4 19 12 42 24 68 71 134 148 204 81 76 91 70 57 -29z m-459
                      -94 c56 -60 83 -159 69 -250 l-7 -48 -14 45 c-10 31 -32 62 -68 98 -52 51 -54
                      55 -48 92 8 49 23 90 34 90 4 0 20 -12 34 -27z m-142 -117 c28 -10 37 -20 46
                      -53 14 -47 40 -101 63 -127 15 -18 15 -19 -14 -11 -16 5 -66 9 -110 10 l-80 0
                      -37 53 c-20 30 -43 73 -52 98 l-15 44 82 -1 c45 0 98 -6 117 -13z m116 -68
                      c33 -40 67 -113 62 -136 -2 -11 -16 2 -41 41 -69 103 -83 168 -21 95z m626
                      -149 c0 -104 -15 -161 -81 -299 l-51 -105 7 60 c3 33 16 99 28 148 12 48 19
                      87 15 87 -19 0 -70 -158 -70 -219 0 -19 -2 -32 -5 -29 -4 3 -6 46 -6 94 -1
                      109 21 181 94 308 46 82 51 87 59 65 5 -13 10 -63 10 -110z m-654 -4 c63 -19
                      67 -35 10 -35 -52 0 -107 14 -133 35 -19 13 -17 14 26 15 25 0 69 -7 97 -15z
                      m-129 -32 c31 -16 76 -28 113 -32 l62 -6 -54 -25 c-40 -19 -69 -25 -114 -24
                      -66 2 -137 22 -143 41 -3 9 69 73 83 73 1 0 25 -12 53 -27z m471 -443 c61 -24
                      129 -73 162 -116 19 -25 19 -27 2 -13 -23 20 -134 76 -186 95 -67 23 -41 -4
                      41 -45 80 -39 186 -109 177 -118 -4 -5 -185 54 -247 81 -65 28 -188 146 -189
                      183 0 12 139 -27 240 -67z"/>
                      <path d="M2275 6176 c-33 -9 -41 -16 -43 -40 -3 -26 -1 -28 20 -21 13 4 64 9
                      114 12 139 8 215 -19 433 -155 253 -157 297 -175 421 -176 68 0 95 4 134 22
                      55 25 58 37 5 22 -100 -29 -231 -1 -372 79 l-77 45 82 17 c49 10 133 39 204
                      72 154 69 204 81 310 74 150 -9 269 -87 341 -223 40 -76 54 -129 62 -234 6
                      -84 6 -85 34 -88 27 -3 27 -2 27 51 0 222 -117 430 -285 509 -144 67 -296 60
                      -478 -23 -172 -77 -216 -91 -294 -92 -70 0 -78 2 -206 66 -73 36 -159 73 -192
                      82 -69 18 -183 19 -240 1z"/>
                      <path d="M2838 5544 c-5 -4 -8 -142 -8 -306 l0 -298 128 0 c159 0 216 15 279
                      73 75 69 88 104 88 232 0 123 -13 161 -77 222 -62 59 -117 76 -268 81 -74 2
                      -138 1 -142 -4z m274 -51 c88 -35 134 -138 126 -278 -6 -89 -27 -142 -75 -187
                      -40 -38 -74 -48 -164 -48 l-79 0 0 263 c0 145 3 267 7 271 11 11 142 -4 185
                      -21z"/>
                      <path d="M4550 5246 c0 -299 0 -306 20 -306 19 0 20 7 21 253 0 160 4 245 9
                      232 58 -126 203 -454 207 -467 6 -19 53 -26 53 -9 0 5 45 119 100 253 l99 243
                      1 -252 0 -253 45 0 45 0 0 306 0 305 -46 -3 -45 -3 -93 -225 c-51 -124 -96
                      -234 -101 -245 -7 -18 -9 -16 -22 15 -8 19 -56 130 -107 245 l-92 210 -47 3
                      -47 3 0 -305z"/>
                      <path d="M6016 5534 c-32 -32 -11 -84 34 -84 53 0 78 50 42 83 -23 21 -56 22
                      -76 1z"/>
                      <path d="M6850 5245 l0 -305 190 0 c174 0 190 1 190 18 0 15 -14 17 -148 18
                      l-147 0 -3 287 -2 287 -40 0 -40 0 0 -305z"/>
                      <path d="M3564 5371 c-23 -10 -44 -26 -47 -35 -10 -27 -27 -18 -27 14 0 28 -2
                      30 -40 30 l-40 0 0 -220 0 -220 44 0 45 0 3 165 c3 165 3 165 31 192 23 23 36
                      28 80 28 47 0 52 2 55 24 7 43 -37 53 -104 22z"/>
                      <path d="M3827 5379 c-72 -17 -114 -49 -92 -71 3 -3 26 6 52 18 53 27 102 30
                      142 9 33 -17 41 -33 41 -85 l0 -38 -52 -7 c-137 -17 -210 -59 -223 -127 -8
                      -44 14 -100 49 -123 55 -36 155 -31 205 10 l29 25 6 -25 c5 -21 12 -25 44 -25
                      l37 0 -5 177 c-5 165 -7 180 -28 210 -16 23 -38 37 -74 48 -57 17 -75 17 -131
                      4z m144 -276 c-3 -78 -11 -97 -51 -118 -44 -23 -78 -19 -111 14 -48 49 -34
                      112 33 147 29 15 118 34 127 27 2 -2 3 -33 2 -70z"/>
                      <path d="M5357 5380 c-51 -13 -87 -38 -87 -61 0 -24 4 -24 40 2 34 26 117 36
                      149 19 39 -20 70 -129 39 -130 -40 -1 -169 -30 -195 -44 -80 -41 -98 -129 -40
                      -192 24 -26 43 -37 74 -41 58 -8 107 4 142 32 36 31 41 31 41 0 0 -23 4 -25
                      41 -25 l42 0 -8 173 c-7 189 -15 217 -70 249 -38 21 -118 30 -168 18z m153
                      -275 c0 -56 -4 -69 -27 -95 -60 -68 -165 -41 -165 42 0 43 15 73 45 90 26 14
                      129 37 140 31 4 -2 7 -33 7 -68z"/>
                      <path d="M5844 5376 c-17 -8 -40 -26 -52 -40 l-21 -27 -3 33 c-3 30 -6 33 -40
                      36 l-38 3 0 -220 0 -221 39 0 39 0 4 153 c5 176 15 208 73 227 19 6 48 9 64 5
                      25 -5 29 -3 35 21 11 44 -36 58 -100 30z"/>
                      <path d="M6282 5372 c-61 -22 -77 -35 -69 -55 5 -13 14 -11 53 9 103 52 184
                      17 184 -81 0 -32 -3 -34 -37 -40 -150 -23 -202 -45 -229 -98 -20 -37 -13 -100
                      13 -129 54 -61 178 -64 239 -7 l22 20 6 -25 c5 -22 12 -26 41 -26 l35 0 0 162
                      c0 142 -2 167 -20 204 -36 73 -138 101 -238 66z m154 -357 c-33 -50 -129 -57
                      -161 -12 -39 56 0 135 77 155 94 25 93 26 96 -52 2 -47 -2 -75 -12 -91z"/>
                      <path d="M7425 5384 c-79 -20 -118 -43 -110 -66 5 -12 14 -11 52 9 69 35 136
                      29 170 -16 13 -17 18 -101 6 -101 -45 -1 -155 -24 -189 -39 -71 -32 -103 -108
                      -71 -171 41 -82 178 -94 259 -23 15 14 18 13 24 -11 5 -22 12 -26 43 -26 l36
                      0 -5 172 c-6 192 -15 224 -75 252 -34 16 -110 27 -140 20z m133 -270 c2 -45
                      -2 -67 -17 -91 -39 -63 -142 -67 -170 -7 -36 79 11 130 144 157 35 8 40 1 43
                      -59z"/>
                      <path d="M8363 5371 c-23 -11 -47 -30 -54 -43 -13 -23 -14 -23 -19 12 -5 32
                      -8 35 -42 38 l-38 3 0 -220 0 -221 44 0 45 0 3 165 3 165 28 27 c23 24 35 28
                      77 26 46 -1 51 1 56 24 12 45 -33 55 -103 24z"/>
                      <path d="M8627 5380 c-73 -19 -114 -50 -92 -72 3 -3 26 6 52 18 102 52 183 17
                      183 -81 0 -33 -1 -33 -52 -40 -136 -17 -210 -60 -223 -129 -8 -42 15 -99 49
                      -121 55 -36 155 -31 205 10 l29 25 6 -25 c5 -21 12 -25 44 -25 l37 0 -5 172
                      c-6 195 -14 223 -74 252 -44 21 -111 28 -159 16z m143 -272 c-1 -76 -7 -92
                      -50 -121 -37 -26 -77 -21 -111 12 -37 37 -38 79 -4 119 23 28 76 48 158 61 4
                      0 7 -32 7 -71z"/>
                      <path d="M6017 5374 c-4 -4 -7 -103 -7 -221 l0 -213 45 0 45 0 -2 218 -3 217
                      -35 3 c-20 2 -39 0 -43 -4z"/>
                      <path d="M7734 5365 c-3 -8 -4 -85 -2 -172 3 -143 5 -161 26 -194 27 -44 75
                      -69 134 -69 44 0 101 27 125 59 10 14 13 12 19 -16 6 -29 10 -33 40 -33 l34 0
                      0 220 0 220 -40 0 -40 0 0 -166 0 -166 -34 -34 c-43 -43 -100 -47 -143 -10
                      l-28 24 -3 176 -3 176 -40 0 c-25 0 -42 -5 -45 -15z"/>
                      <path d="M4154 5015 c-34 -52 31 -111 76 -70 24 22 25 43 4 73 -21 30 -59 29
                      -80 -3z"/>
                      <path d="M3686 4663 c-85 -282 -193 -533 -265 -615 -46 -52 -98 -76 -130 -59
                      -33 18 -78 127 -126 304 -51 190 -93 286 -144 328 -48 39 -88 45 -143 21 -78
                      -34 -122 -121 -185 -362 -19 -74 -50 -168 -68 -207 -39 -85 -64 -103 -120 -86
                      l-35 11 0 -33 c0 -31 3 -35 35 -41 52 -9 104 14 141 63 35 46 66 132 119 330
                      39 150 70 219 115 257 36 30 66 33 96 8 53 -43 84 -118 139 -326 55 -211 103
                      -304 169 -326 103 -34 205 67 311 307 49 112 165 450 165 483 0 16 -18 30 -40
                      30 -4 0 -20 -39 -34 -87z"/>
                      <path d="M4506 4703 c-6 -15 8 -32 26 -33 12 0 18 18 12 34 -8 21 -30 20 -38
                      -1z"/>
                      <path d="M5503 4704 c-8 -21 13 -42 28 -27 13 13 5 43 -11 43 -6 0 -13 -7 -17
                      -16z"/>
                      <path d="M5640 4700 c-11 -11 -18 -26 -14 -32 5 -7 11 -5 20 7 13 18 15 18 50
                      -1 l36 -19 19 24 c10 12 16 28 12 34 -4 6 -11 4 -18 -6 -15 -21 -29 -21 -60
                      -1 -22 14 -25 14 -45 -6z"/>
                      <path d="M6993 4704 c-8 -21 13 -42 28 -27 13 13 5 43 -11 43 -6 0 -13 -7 -17
                      -16z"/>
                      <path d="M4265 4680 c-81 -53 -86 -196 -9 -247 55 -36 153 -35 184 2 22 26 1
                      33 -40 13 -36 -18 -44 -19 -82 -6 -74 23 -108 101 -73 168 28 55 118 78 169
                      44 34 -21 48 2 16 28 -32 26 -125 25 -165 -2z"/>
                      <path d="M5970 4555 l0 -145 81 0 c134 0 189 42 189 147 0 41 -5 58 -27 84
                      -37 44 -80 59 -168 59 l-75 0 0 -145z m180 100 c68 -35 79 -135 20 -187 -26
                      -25 -39 -28 -95 -28 l-65 0 0 115 0 115 55 0 c31 0 69 -7 85 -15z"/>
                      <path d="M6830 4656 c0 -15 -7 -26 -20 -29 -11 -3 -20 -10 -20 -16 0 -6 9 -11
                      20 -11 18 0 20 -7 20 -77 0 -43 4 -83 8 -89 22 -33 102 -38 102 -7 0 11 -7 14
                      -22 10 -45 -12 -58 7 -58 88 l0 75 36 0 c45 0 42 24 -4 28 -26 3 -32 8 -32 28
                      0 15 -6 24 -15 24 -9 0 -15 -9 -15 -24z"/>
                      <path d="M7317 4673 c-4 -3 -7 -14 -7 -24 0 -9 -9 -19 -20 -22 -11 -3 -20 -10
                      -20 -16 0 -6 9 -11 20 -11 18 0 20 -7 20 -79 0 -93 11 -111 71 -111 28 0 39 4
                      39 15 0 11 -7 14 -25 9 -43 -11 -55 10 -55 92 l0 74 35 0 c24 0 35 5 35 15 0
                      10 -11 15 -35 15 -31 0 -35 3 -35 25 0 24 -10 32 -23 18z"/>
                      <path d="M4510 4520 c0 -91 3 -110 15 -110 12 0 15 19 15 110 0 91 -3 110 -15
                      110 -12 0 -15 -19 -15 -110z"/>
                      <path d="M4620 4520 c0 -91 3 -110 15 -110 12 0 15 13 15 59 0 78 13 110 50
                      122 16 6 30 17 30 25 0 20 -23 17 -54 -7 l-26 -20 0 20 c0 12 -6 21 -15 21
                      -12 0 -15 -19 -15 -110z"/>
                      <path d="M4780 4556 c0 -96 11 -123 56 -142 38 -16 68 -12 97 14 15 14 17 13
                      17 -1 0 -10 7 -17 15 -17 12 0 15 19 15 110 0 91 -3 110 -15 110 -12 0 -15
                      -15 -15 -73 0 -48 -5 -80 -15 -94 -20 -29 -62 -38 -91 -18 -21 13 -23 23 -26
                      97 -3 70 -6 83 -20 86 -16 3 -18 -6 -18 -72z"/>
                      <path d="M5060 4520 c0 -91 3 -110 15 -110 12 0 15 14 15 70 0 62 3 74 25 95
                      13 14 31 25 40 25 8 0 15 7 15 15 0 19 -21 19 -46 0 -25 -19 -34 -19 -34 0 0
                      8 -7 15 -15 15 -12 0 -15 -19 -15 -110z"/>
                      <path d="M5264 4620 c-32 -13 -64 -59 -64 -92 0 -41 26 -87 56 -98 38 -15 87
                      -12 112 6 21 15 22 14 22 -14 0 -54 -55 -81 -119 -58 -23 7 -44 10 -47 5 -17
                      -29 71 -57 126 -40 67 20 75 38 75 171 0 119 -7 148 -28 119 -10 -13 -16 -13
                      -37 -2 -28 14 -65 16 -96 3z m100 -41 c53 -41 19 -129 -50 -129 -70 0 -103 81
                      -54 130 26 26 70 26 104 -1z"/>
                      <path d="M5500 4521 c0 -105 1 -111 20 -111 20 0 21 5 18 107 -3 93 -5 108
                      -20 111 -16 3 -18 -7 -18 -107z"/>
                      <path d="M5640 4621 c-14 -4 -27 -15 -28 -25 -3 -15 0 -17 14 -11 63 28 124
                      10 124 -36 0 -17 -7 -19 -59 -19 -52 0 -62 -3 -80 -26 -27 -35 -27 -40 9 -76
                      27 -27 35 -29 68 -23 20 4 43 11 50 17 8 7 12 7 12 -1 0 -6 7 -11 15 -11 12 0
                      15 16 15 85 0 78 -2 88 -25 110 -25 26 -62 31 -115 16z m110 -135 c0 -29 -34
                      -56 -70 -56 -30 0 -50 17 -50 42 0 24 27 37 78 38 38 0 42 -2 42 -24z"/>
                      <path d="M6344 4620 c-35 -14 -64 -59 -64 -101 0 -46 38 -95 83 -107 53 -14
                      129 11 113 36 -4 7 -17 5 -36 -5 -24 -12 -37 -12 -65 -3 -35 12 -68 46 -59 62
                      3 4 43 8 90 8 l84 0 0 29 c0 42 -51 91 -93 90 -18 0 -42 -4 -53 -9z m96 -40
                      c38 -38 27 -50 -50 -50 -63 0 -70 2 -70 19 0 46 84 67 120 31z"/>
                      <path d="M6550 4520 c0 -87 3 -110 14 -110 10 0 15 20 18 76 3 65 7 79 27 95
                      30 25 66 24 91 -1 16 -16 20 -33 20 -95 0 -60 3 -75 15 -75 12 0 15 16 15 85
                      0 79 -2 88 -26 112 -21 21 -32 25 -66 20 -22 -3 -48 -13 -58 -22 -16 -15 -18
                      -14 -23 5 -3 11 -10 20 -16 20 -7 0 -11 -37 -11 -110z"/>
                      <path d="M6990 4520 c0 -91 3 -110 15 -110 12 0 15 19 15 110 0 91 -3 110 -15
                      110 -12 0 -15 -19 -15 -110z"/>
                      <path d="M7105 4605 c-27 -27 -30 -37 -15 -65 9 -17 39 -30 103 -44 35 -8 37
                      -42 2 -58 -19 -8 -35 -8 -66 1 -46 14 -64 6 -35 -15 24 -17 116 -18 138 -1 9
                      6 19 22 23 34 8 29 -34 73 -70 73 -37 0 -65 17 -65 40 0 24 36 35 85 26 27 -5
                      35 -4 35 7 0 14 -41 27 -87 27 -13 0 -35 -11 -48 -25z"/>
                      <path d="M7482 4615 c-31 -23 -15 -38 24 -23 40 14 83 3 93 -25 12 -32 6 -37
                      -50 -37 -71 0 -89 -12 -89 -61 0 -36 3 -41 35 -55 30 -12 40 -12 75 0 22 7 40
                      10 40 5 0 -5 7 -9 15 -9 24 0 21 160 -3 190 -25 30 -107 39 -140 15z m126
                      -127 c8 -41 -75 -77 -106 -46 -17 17 -15 45 6 57 27 17 96 9 100 -11z"/>
                    </g>
                  </svg>
                </div>
                <div className="font-heading text-2xl font-bold tracking-tight border-l border-white/20 pl-4">
                  Odontologia
                </div>
              </div>
              <p className="text-white/50 max-w-sm mb-10 leading-relaxed font-light text-lg">
                Referência em facetas e lentes em resinas compostas com foco em naturalidade e arte dental.
              </p>
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[#c29a63] text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>A cada sorriso uma história.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href={INSTAGRAM_URL} target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#c29a63] hover:border-[#c29a63] transition-all group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href={FACEBOOK_URL} target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#c29a63] hover:border-[#c29a63] transition-all group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href={`mailto:${EMAIL}`} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#c29a63] hover:border-[#c29a63] transition-all group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="text-[#c29a63] w-6 h-6" />
                <h3 className="font-heading font-bold text-xl uppercase tracking-widest text-[#c29a63]">Contatos</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                   <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#c29a63]" />
                      <span className="text-sm text-white/70 break-all">{EMAIL}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#c29a63]" />
                      <span className="text-sm text-white/70">(64) 98164-4853</span>
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/Dra.+Maria+Laura+%7C+Odontologia/@-16.11585,-50.1477755,17z/data=!4m6!3m5!1s0x935e4b0000000001:0x3b773a4b609deebf!8m2!3d-16.11585!4d-50.1477755!16s%2Fg%2F11vkx_494q" 
                    target="_blank" 
                    className="flex items-center gap-2 text-[#c29a63] font-bold text-xs uppercase tracking-widest hover:text-white transition-all group"
                  >
                    Avalie-nos no Google <ExternalLink className="w-3 h-3 group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm flex flex-col justify-center items-center text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">Localização Estratégica</p>
                  <p className="text-white/70 text-sm leading-tight">Centro de Mossâmedes - GO</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-[10px] uppercase font-bold tracking-[0.3em]">
            <p>© {new Date().getFullYear()} DRA. MARIA LAURA BARBOSA | LUXO & ODONTOLOGIA</p>
            <div className="flex items-center gap-2">
              <span>Desenvolvido por</span>
              <span className="text-[#c29a63] text-xs">Ethos Desenvolvimento de Software</span>
            </div>
          </div>
        </div>
      </footer>
      {/* Service Modal */}
      <ServiceModal 
        service={selectedService} 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
}