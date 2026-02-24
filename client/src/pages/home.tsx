import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Sparkles, Smile, Star, CheckCircle2, ChevronRight, ChevronLeft, Phone, Minus, Plus, X, Menu, Award, Heart, Wind, Coffee, ShieldCheck } from "lucide-react";
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
    fullDesc: "Você já imaginou transformar seu sorriso sem perder a naturalidade?\n\nA Dra. Maria Laura une tecnologia de ponta e sensibilidade artística para criar restaurações que se confundem com dentes naturais. Utilizando técnicas avançadas de estratificação em resina, cada camada é aplicada estrategicamente para reproduzir cor, translucidez, brilho e textura com extrema fidelidade.\n\nO resultado? Um sorriso harmônico, elegante e absolutamente natural — sem aspecto artificial.\n\nAs facetas em resina são ideais para corrigir manchas, fraturas, desalinhamentos leves e diastemas, de forma conservadora e personalizada. Cada detalhe é planejado de acordo com o formato do rosto, proporção dental e expectativa do paciente.\n\nSe o seu sorriso já não representa quem você é hoje, talvez seja o momento de redescobrir sua melhor versão.\n\nAgende sua avaliação e descubra como a estética pode transformar não apenas dentes, mas autoestima e presença.",
    img: specMimetismo,
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Clareamento Dental Estratégico",
    shortDesc: "Você quer dentes mais brancos… ou um sorriso realmente impactante?",
    fullDesc: "Você quer dentes mais brancos… ou um sorriso realmente impactante?\n\nAntes das facetas, existe uma etapa que faz toda a diferença no resultado final: o clareamento estratégico. No é apenas estética — é planejamento inteligente.\n\nAo realizar o clareamento previamente, a Dra. Maria Laura cria a base ideal para alcançar tons mais claros e sofisticados nas facetas, garantindo uma harmonia perfeita entre naturalidade e luminosidade. Isso significa mais liberdade na escolha da cor e um resultado muito mais refinado.\n\nSem essa etapa, o potencial do seu sorriso pode ficar limitado.\nCom ela, o resultado se torna mais claro, mais equilibrado e muito mais impressionante.\n\nSe você busca um sorriso que chame atenção pela elegância — e não pelo exagero — o planejamento começa aqui.\n\nAgende sua avaliação e descubra como cada detalhe pode transformar completamente o seu resultado final.",
    img: specClareamento,
    icon: <Star className="w-6 h-6" />,
    reverse: true
  },
  {
    title: "Saúde Gengival: Estética Branca x Rosa",
    shortDesc: "Você já percebeu que alguns sorrisos são bonitos… mas poucos são realmente sofisticados?",
    fullDesc: "Você já percebeu que alguns sorrisos são bonitos… mas poucos são realmente sofisticados?\n\nO segredo quase sempre está onde ninguém presta atenção: na gengiva.\n\nNão basta ter dentes claros e alinhados se a moldura não está em equilíbrio. A verdadeira harmonia acontece quando a estética branca (dentes) conversa perfeitamente com a estética rosa (gengiva). É essa proporção que transmite naturalidade, juventude e elegância.\n\nA Dra. Maria Laura realiza um planejamento periodontal personalizado para garantir que a gengiva esteja saudável, simétrica e contornando os dentes na medida exata. Quando necessário, pequenos ajustes estratégicos elevam completamente o padrão do resultado final.\n\nSem esse cuidado, o sorriso pode parecer artificial.\nCom ele, o resultado se torna refinado, harmônico e marcante.\n\nSe você busca um sorriso que impressiona pela naturalidade e não pelo exagero, o equilíbrio começa na base.\n\nAgende sua avaliação e descubra como cada detalhe transforma o todo.",
    img: specPeriodontal,
    icon: <Smile className="w-6 h-6" />
  },
  {
    title: "Restaurações de Alta Performance",
    shortDesc: "Você confiaria sua saúde bucal a uma restauração que apenas “quebra o galho”?",
    fullDesc: "Você confiaria sua saúde bucal a uma restauração que apenas “quebra o galho”?\n\nQuando um dente é restaurado da forma correta, você não deve perceber diferença ao sorrir, falar ou mastigar. Ele precisa ter a mesma força, a mesma estética e a mesma naturalidade de um dente saudável.\n\nÉ por isso que utilizamos resinas de última geração e aplicamos o conceito de biomimética — reconstruindo o dente respeitando sua anatomia original, sua resistência e sua função. Cada camada é planejada para devolver não apenas a aparência, mas a performance completa do elemento dental.\n\nO objetivo é simples:\nninguém perceber que houve uma restauração.\n\nMais do que estética, é segurança, durabilidade e saúde a longo prazo.\n\nSe você busca um tratamento que vá além do básico e realmente preserve seu sorriso, a diferença está nos detalhes — e na técnica.\n\nAgende sua avaliação e descubra como uma restauração pode ser invisível aos olhos e poderosa na função.",
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
      className={`group bg-white border ${isOpen ? "border-[#c29a63] shadow-lg shadow-[#c29a63]/5" : "border-[#ebdabe]/50"} rounded-[2rem] overflow-hidden transition-all duration-500`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-7 flex items-center justify-between text-left transition-colors"
      >
        <span className={`text-lg font-heading font-bold transition-colors duration-300 ${isOpen ? "text-[#c29a63]" : "text-[#29221c]"}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-[#c29a63] text-white rotate-180" : "bg-[#faf8f5] text-[#c29a63]"}`}>
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
              <img src={clinicImg} alt="Clínica Dra. Maria Laura" className="rounded-[3rem] shadow-2xl w-full h-full object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-[#c29a63] text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold font-heading">Sinta-se</p>
                <p className="text-lg opacity-90">Em casa</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#ebdabe]/40 text-[#a88252] text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
            >
              Especialidades de Luxo
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-heading font-bold text-[#29221c] mb-6"
            >
              Transformação & <span className="text-[#c29a63]">Estética</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#5c4d40] text-lg font-light max-w-2xl mx-auto"
            >
              Combinamos arte e ciência para criar resultados que são verdadeiras obras-primas de naturalidade.
            </motion.p>
          </div>

          <div className="space-y-32">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${service.reverse ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`relative ${service.reverse ? "lg:order-2" : ""}`}>
                  <div className={`absolute -inset-6 bg-[#c29a63]/5 rounded-[4rem] -z-10 transform ${idx % 2 === 0 ? "rotate-2" : "-rotate-2"}`} />
                  <div className="relative rounded-[3.5rem] overflow-hidden aspect-[4/3] shadow-2xl group cursor-pointer" onClick={() => setSelectedService(service)}>
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                        Ver detalhes
                      </Button>
                    </div>
                  </div>
                </div>

                <div className={service.reverse ? "lg:order-1" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-[#c29a63]/10 flex items-center justify-center text-[#c29a63] mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-heading font-bold text-[#29221c] mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#5c4d40] text-lg font-light leading-relaxed mb-10">
                    {service.shortDesc}
                  </p>
                  <Button
                    onClick={() => setSelectedService(service)}
                    variant="ghost"
                    className="group p-0 h-auto text-[#c29a63] font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-transparent"
                  >
                    Descobrir mais <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl"
              >
                <img src={dentist4} alt="Dra. Maria Laura" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#ebdabe]/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#c29a63]/10 rounded-full blur-3xl -z-10" />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-[#ebdabe]/50 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c29a63]/10 flex items-center justify-center text-[#c29a63]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-[#29221c]">CRO-GO</p>
                    <p className="text-sm text-[#a88252]">25701</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-[2px] w-12 bg-[#c29a63]" />
                <span className="text-[#c29a63] font-bold text-xs uppercase tracking-[0.3em]">Sobre Mim</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] mb-8"
              >
                Dra. Maria Laura
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6 text-[#5c4d40] text-lg font-light leading-relaxed"
              >
                <p>
                  Com um olhar atento aos detalhes e uma paixão pela estética, dedico minha carreira a transformar vidas através do sorriso. Minha abordagem une a <span className="font-semibold text-[#c29a63]">precisão técnica da odontologia moderna</span> com a sensibilidade artística necessária para criar resultados verdadeiramente naturais.
                </p>
                <p>
                  Acredito que cada sorriso é único e merece um planejamento personalizado. No busco apenas a perfeição simétrica, mas o equilíbrio harmônico que respeita a identidade de cada paciente.
                </p>

                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <h4 className="font-bold text-[#29221c] mb-2 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#c29a63]" /> Missão
                    </h4>
                    <p className="text-sm leading-relaxed">Devolver a confiança através de uma estética de excelência.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#29221c] mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#c29a63]" /> Visão
                    </h4>
                    <p className="text-sm leading-relaxed">Ser referência em naturalidade e mimetismo dental.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#29221c] mb-6">O que dizem nossas <span className="text-[#c29a63]">pacientes</span></h2>
            <p className="text-[#5c4d40] text-lg font-light max-w-2xl mx-auto">Experiências reais de quem redescobriu a alegria de sorrir.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-10 rounded-[3rem] shadow-xl shadow-[#c29a63]/5 border border-[#ebdabe]/30 relative group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c29a63] text-[#c29a63]" />
                  ))}
                </div>
                <p className="text-[#5c4d40] font-light leading-relaxed mb-8 italic">"{t.comment}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-[#faf8f5]">
                  <div className="w-12 h-12 rounded-full bg-[#ebdabe]/50 flex items-center justify-center text-[#c29a63] font-bold">
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#29221c] mb-4">Dúvidas Frequentes</h2>
            <p className="text-[#5c4d40] font-light">Tudo o que você precisa saber sobre nossos tratamentos.</p>
          </div>

          <div className="space-y-4">
            <FAQItem
              index={0}
              question="O clareamento dental causa sensibilidade?"
              answer="A sensibilidade é uma preocupação comum, mas com as técnicas modernas e produtos de alta qualidade que utilizamos, conseguimos minimizar drasticamente esse desconforto. Realizamos um protocolo de dessensibilização prévio e ajustamos a concentração do gel de acordo com a resposta de cada paciente."
            />
            <FAQItem
              index={1}
              question="Quanto tempo duram as facetas em resina?"
              answer="Com os cuidados adequados, as facetas em resina de alta performance podem durar de 5 a 10 anos. A longevidade depende da higiene bucal, hábitos alimentares e visitas regulares para polimento e manutenção. É um tratamento conservador que oferece um excelente custo-benefício."
            />
            <FAQItem
              index={2}
              question="O resultado das facetas fica natural?"
              answer="Sim! Esse é o nosso maior diferencial. Utilizamos a técnica de mimetismo dental, onde trabalhamos com diferentes camadas de resina para reproduzir a translucidez, opalescência e textura dos dentes naturais. O objetivo é que ninguém perceba que você realizou um procedimento."
            />
            <FAQItem
              index={3}
              question="É necessário desgastar muito o dente?"
              answer="Trabalhamos com a filosofia da Odontologia Minimamente Invasiva. Na maioria dos casos de facetas em resina, o desgaste é mínimo ou até inexistente, preservando ao máximo a estrutura natural do seu dente."
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#faf8f5] overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-[#29221c] rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#c29a63] via-transparent to-transparent" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
                Pronta para <span className="text-[#c29a63]">transformar</span> sua história?
              </h2>
              <p className="text-white/70 text-xl font-light mb-12 max-w-2xl mx-auto">
                Agende agora sua consulta e descubra o potencial máximo do seu sorriso com quem entende de naturalidade.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full h-20 px-12 text-lg font-bold uppercase tracking-widest shadow-2xl shadow-[#c29a63]/20 flex items-center gap-4 mx-auto group">
                  Começar Transformação
                  <img src={whatsappIcon} alt="" className="w-6 h-6" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-[450px] w-full relative grayscale-[0.5] hover:grayscale-0 transition-all duration-1000">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.123!2d-49.312!3d-16.689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQxJzIwLjQiUyA0OcKwMTgnNDMuMiJX!5e0!3m2!1spt-BR!2sbr"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
      </section>

      <footer className="bg-[#faf8f5] pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[#a88252]/30 shadow-sm bg-white">
                  <img src="/assets/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#29221c]">Dra. Maria Laura</h3>
                  <p className="text-[#a88252] text-sm tracking-widest uppercase">Odontologia de Luxo</p>
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
              <h4 className="text-[#29221c] font-bold uppercase tracking-widest text-xs mb-8">Navegação</h4>
              <ul className="space-y-4">
                {["Início", "Serviços", "Clínica", "Sobre Mim", "Depoimentos"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "")}`} className="text-[#8a7a6e] hover:text-[#c29a63] transition-colors text-sm flex items-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#c29a63] opacity-0 group-hover:opacity-100 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 bg-white/40 backdrop-blur-sm border border-[#ebdabe] rounded-3xl p-8 shadow-sm">
              <h4 className="text-[#29221c] font-bold uppercase tracking-widest text-xs mb-8">Contato Direto</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-3 text-[#8a7a6e] group">
                  <MapPin className="w-5 h-5 text-[#a88252] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Goiânia - GO (Consulte endereço completo via WhatsApp)</span>
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
