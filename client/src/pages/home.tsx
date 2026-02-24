import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Sparkles, Smile, Star, CheckCircle2, ChevronRight, ChevronLeft, Instagram, Phone, Mail, ExternalLink, Award, Heart, Wind, Coffee, ShieldCheck, Plus, Minus, X, Facebook, Menu } from "lucide-react";
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
              <img src={clinicImg} alt="Ambiente da Clínica" className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-[#c29a63] text-white p-8 rounded-3xl shadow-xl hidden sm:block">
                <p className="text-4xl font-heading font-bold">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80">Ambiente Climatizado</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#ebdabe]/40 text-[#a88252] uppercase tracking-[0.3em] mb-6 font-bold text-[10px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nossas Especialidades</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-heading font-bold text-[#29221c] mb-6">
              Excelência em <span className="text-[#c29a63]">Estética Dental</span>.
            </motion.h2>
          </div>

          <div className="grid gap-32">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
              >
                <div className="flex-1 relative group">
                  <div className={`absolute -inset-4 border-2 border-[#c29a63]/10 rounded-[3rem] transition-all duration-500 group-hover:-inset-2 group-hover:border-[#c29a63]/30`} />
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#c29a63]/10 flex items-center justify-center text-[#c29a63]">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-heading font-bold text-[#29221c] leading-tight">{service.title}</h3>
                  <p className="text-xl text-[#5c4d40] font-light leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-[#c29a63] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 group"
                    onClick={() => setSelectedService(service)}
                  >
                    Ver detalhes do tratamento
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#faf8f5]/50 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#c29a63]/10 rounded-full blur-3xl" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-[12px] border-[#faf8f5]">
                  <img src={dentist1} alt="Dra. Maria Laura" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-[#ebdabe]/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-[#c29a63]" />
                    <span className="font-bold text-[#29221c] text-sm">CRO-GO 25701</span>
                  </div>
                  <p className="text-[#5c4d40] text-xs uppercase tracking-widest font-medium">Excelência Comprovada</p>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">Propósito & Arte</span>
                <h2 className="text-4xl lg:text-6xl font-heading font-bold text-[#29221c] mt-4 mb-8">Dra. Maria Laura</h2>
                <div className="space-y-6 text-lg text-[#5c4d40] font-light leading-relaxed">
                  <p>
                    Minha missão vai além de cuidar de dentes. Acredito que a odontologia é uma forma de arte capaz de devolver a confiança e a presença de cada paciente.
                  </p>
                  <p>
                    Com foco total em <span className="font-semibold text-[#c29a63]">Mimetismo Dental e Facetas em Resina</span>, dedico meu olhar artístico para criar sorrisos que não parecem ter sido "feitos", mas que se integram perfeitamente à face, respeitando a anatomia e a naturalidade de cada sorriso.
                  </p>
                  <p>
                    Cada planejamento é único, focado nos mínimos detalhes para que o resultado final seja sofisticado, harmônico e, acima de tudo, autêntico.
                  </p>
                </div>
                
                <div className="pt-10 flex flex-wrap gap-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-heading font-bold text-[#29221c]">5.0</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-[#c29a63] text-[#c29a63]" />)}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#5c4d40] font-bold mt-1">Avaliação Google</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-32 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c]">O que dizem nossos <span className="text-[#c29a63]">pacientes</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#ebdabe]/30 relative group hover:shadow-xl transition-all duration-500"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c29a63] text-[#c29a63]" />
                  ))}
                </div>
                <p className="text-[#5c4d40] font-light leading-relaxed mb-8 italic">"{t.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c29a63]/10 flex items-center justify-center text-[#c29a63] font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-[#29221c]">{t.name}</span>
                </div>
                <Heart className="absolute top-10 right-10 w-8 h-8 text-[#c29a63]/5 group-hover:text-[#c29a63]/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">Transparência</span>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] mt-4">Dúvidas Frequentes</h2>
          </div>
          <div className="space-y-4">
            <FAQItem 
              index={0}
              question="Quanto tempo dura o tratamento com facetas em resina?" 
              answer="A durabilidade das facetas em resina depende diretamente dos cuidados do paciente e da manutenção periódica. Em média, com bons hábitos de higiene e visitas regulares ao dentista, elas podem durar entre 5 a 10 anos, podendo ser renovadas ou reparadas conforme necessário."
            />
            <FAQItem 
              index={1}
              question="As facetas em resina mancham com facilidade?" 
              answer="As resinas modernas de alta performance têm uma excelente estabilidade de cor. No entanto, assim como os dentes naturais, elas podem sofrer leves pigmentações ao longo do tempo se houver consumo excessivo de corantes (café, vinho, tabaco). Realizamos um polimento especializado em consulta de manutenção para devolver o brilho original sempre que necessário."
            />
            <FAQItem 
              index={2}
              question="É necessário desgastar os dentes para fazer o tratamento?" 
              answer="Na grande maioria dos casos, o tratamento com facetas em resina é minimamente invasivo ou até mesmo aditivo (sem desgaste). Nossa prioridade é sempre preservar a estrutura natural do dente, realizando apenas os ajustes necessários para garantir o encaixe perfeito e a naturalidade estética."
            />
            <FAQItem 
              index={3}
              question="O procedimento causa dor ou sensibilidade?" 
              answer="O tratamento é indolor. Como trabalhamos de forma conservadora na estrutura dental, a maioria dos pacientes não relata sensibilidade durante ou após o procedimento. Quando necessário, utilizamos técnicas de conforto para garantir uma experiência totalmente tranquila."
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#c29a63] rounded-[4rem] p-12 lg:p-24 overflow-hidden relative shadow-2xl shadow-[#c29a63]/20">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-1/4" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white space-y-8">
                <h2 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">Pronta para redescobrir sua melhor versão?</h2>
                <p className="text-xl text-white/80 font-light leading-relaxed">
                  Não deixe para depois o sorriso que você pode ter hoje. Agende sua avaliação e vamos planejar juntos o sorriso dos seus sonhos.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-white text-[#c29a63] hover:bg-[#faf8f5] rounded-full h-16 px-10 font-bold uppercase tracking-widest shadow-xl flex items-center gap-3">
                      Agendar Avaliação
                      <img src={whatsappIcon} alt="" className="w-6 h-6" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="relative rounded-[3rem] overflow-hidden aspect-square border-8 border-white/20">
                  <img src={dentist2} alt="Dra. Maria Laura" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#faf8f5] pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-1 py-4 mb-8">
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#a88252]/30 shadow-sm flex-shrink-0 bg-white">
                  <img src="/assets/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-start -space-y-1">
                  <span className="text-lg font-normal tracking-tighter text-[#5c4d40] leading-none antialiased">
                    Dra. Maria Laura
                  </span>
                  <span className="text-base font-normal tracking-tighter text-[#a88252] antialiased">
                    Odontologia
                  </span>
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
              <h4 className="font-heading font-bold text-[#29221c] uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c29a63]" />
                Navegação
              </h4>
              <ul className="space-y-4">
                <li><a href="#especialidades" className="text-[#8a7a6e] hover:text-[#c29a63] transition-colors text-sm flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-[#c29a63] opacity-0 group-hover:opacity-100 transition-all" />
                  Serviços
                </a></li>
                <li><a href="#clinica" className="text-[#8a7a6e] hover:text-[#c29a63] transition-colors text-sm flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-[#c29a63] opacity-0 group-hover:opacity-100 transition-all" />
                  Clínica
                </a></li>
                <li><a href="#sobre" className="text-[#8a7a6e] hover:text-[#c29a63] transition-colors text-sm flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-[#c29a63] opacity-0 group-hover:opacity-100 transition-all" />
                  Sobre Mim
                </a></li>
                <li><a href="#depoimentos" className="text-[#8a7a6e] hover:text-[#c29a63] transition-colors text-sm flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-[#c29a63] opacity-0 group-hover:opacity-100 transition-all" />
                  Depoimentos
                </a></li>
              </ul>
            </div>

            <div className="bg-white/40 backdrop-blur-sm border border-[#ebdabe] rounded-3xl p-8 shadow-sm">
              <h4 className="font-heading font-bold text-[#29221c] uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c29a63]" />
                Contato
              </h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-3 text-[#8a7a6e]">
                  <MapPin className="w-5 h-5 text-[#a88252] shrink-0" />
                  <span className="text-sm">Rua João de Araújo, 485<br />Ed. Millenium - sala 405<br />Quirinópolis-GO</span>
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

          <div className="w-full h-[400px] rounded-[3rem] overflow-hidden border border-[#ebdabe] shadow-lg mb-20 bg-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.880461875323!2d-50.4501338!3d-18.4435887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940866989495146d%3A0xc49666c8b438595b!2sR.%20Jo%C3%A3o%20de%20Ara%C3%BAjo%2C%20485%20-%20Centro%2C%20Quirin%C3%B3polis%20-%20GO%2C%2075860-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="pt-10 border-t border-[#ebdabe]/50 flex flex-col md:flex-row items-center justify-between gap-4 text-[#8a7a6e]/40 text-[10px] uppercase font-bold tracking-[0.3em]">
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
