import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Sparkles, Smile, Star, CheckCircle2, ChevronRight, ChevronLeft, Plus, Minus } from "lucide-react";
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
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 bg-[#c29a63] rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold italic shadow-lg shadow-[#c29a63]/20">ML</div>
             <div className="font-serif text-xl font-medium tracking-tight text-[#29221c]">
              Maria Laura <span className="text-[#c29a63]">Odontologia</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
            <a href="#especialidades" className="hover:text-[#c29a63] transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-[#c29a63] transition-colors">A Dra.</a>
            <a href="#faq" className="hover:text-[#c29a63] transition-colors">Dúvidas</a>
            <a href="#contato" className="hover:text-[#c29a63] transition-colors">Contato</a>
          </div>
          <Button className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full px-6 transition-all duration-300 shadow-md shadow-[#c29a63]/20 font-medium" data-testid="button-agendar-nav">
            Agendar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="z-10"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebdabe]/40 text-[#a88252] text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Odontologia de Alta Performance</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 text-[#29221c]">
              A arte de criar <br/>
              <span className="italic text-[#c29a63]">sorrisos reais</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-[#5c4d40] mb-8 leading-relaxed max-w-lg font-light">
              Especialista em mimetismo dental e estética avançada. Transformamos sorrisos com técnicas que preservam a naturalidade e a saúde de cada paciente.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full text-base h-14 px-10 shadow-xl shadow-[#c29a63]/20 font-semibold" data-testid="button-agendar-hero">
                Falar no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="relative group">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl bg-[#ebdabe]/20">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlide}
                  src={dentistPhotos[currentSlide]} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
              <button onClick={prevSlide} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-6 flex gap-1.5 z-20">
              {dentistPhotos.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-[#c29a63]" : "w-2 bg-white/40"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties - High Professional Context */}
      <section id="especialidades" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6 text-[#29221c]">Excelência Clínica</h2>
            <p className="text-[#5c4d40] text-lg font-light leading-relaxed">
              Utilizamos as tecnologias mais avançadas do mercado para garantir que cada procedimento seja indolor, preciso e com estética superior.
            </p>
          </div>

          <div className="grid gap-24">
            {/* Spec 1 - Mimetismo */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={specMimetismo} alt="Mimetismo Dental" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-[#c29a63] shadow-sm uppercase tracking-tighter">Caso Real</div>
              </motion.div>
              <div className="lg:pl-8">
                <div className="w-12 h-12 rounded-xl bg-[#c29a63]/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-[#c29a63]" />
                </div>
                <h3 className="text-3xl font-serif font-medium mb-6 text-[#29221c]">Mimetismo Dental & Facetas em Resina</h3>
                <p className="text-[#5c4d40] leading-relaxed mb-6 font-light">
                  A técnica do mimetismo dental utiliza resinas compostas de altíssima fidelidade para reproduzir as nuances de translucidez, opalescência e textura dos dentes naturais. Diferente das facetas tradicionais, aqui focamos na <strong>estratificação artística</strong> — camada por camada — para que a restauração se torne imperceptível.
                </p>
                <ul className="space-y-4 text-[#5c4d40]">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#c29a63] shrink-0" /> <span><strong>Arte Natural:</strong> Materiais que imitam o esmalte humano.</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#c29a63] shrink-0" /> <span><strong>Correção Funcional:</strong> Ideal para diastemas, dentes desalinhados ou fraturados.</span></li>
                </ul>
              </div>
            </div>

            {/* Spec 2 - Clareamento */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 lg:pr-8">
                <div className="w-12 h-12 rounded-xl bg-[#c29a63]/10 flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-[#c29a63]" />
                </div>
                <h3 className="text-3xl font-serif font-medium mb-6 text-[#29221c]">Clareamento Dental Personalizado</h3>
                <p className="text-[#5c4d40] leading-relaxed mb-6 font-light">
                  O clareamento é a base para qualquer reabilitação estética. Realizamos protocolos controlados que removem pigmentos profundos sem agredir o esmalte. O objetivo é harmonizar a tonalidade antes da aplicação de lentes, permitindo que o resultado final seja mais luminoso e vibrante.
                </p>
                <div className="flex gap-8 border-t border-[#ebdabe]/50 pt-6 mt-6">
                  <div>
                    <div className="text-2xl font-serif text-[#c29a63]">Seguro</div>
                    <div className="text-xs uppercase font-bold text-[#5c4d40]/60">Sem Sensibilidade</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif text-[#c29a63]">Rápido</div>
                    <div className="text-xs uppercase font-bold text-[#5c4d40]/60">Resultados Visíveis</div>
                  </div>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={specClareamento} alt="Clareamento Dental" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Spec 3 - Periodontal */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={specPeriodontal} alt="Tratamento Periodontal" className="w-full h-full object-cover" />
              </motion.div>
              <div className="lg:pl-8">
                <div className="w-12 h-12 rounded-xl bg-[#c29a63]/10 flex items-center justify-center mb-6">
                  <Smile className="w-6 h-6 text-[#c29a63]" />
                </div>
                <h3 className="text-3xl font-serif font-medium mb-6 text-[#29221c]">Estética Rosa: Saúde Periodontal</h3>
                <p className="text-[#5c4d40] leading-relaxed mb-6 font-light">
                  Um sorriso perfeito depende do equilíbrio entre a "estética branca" (dentes) e a "estética rosa" (gengiva). Tratamos a saúde gengival de forma individualizada para garantir que o contorno dos dentes seja simétrico e saudável. Uma gengiva contornada e firme é o que dá sofisticação real ao sorriso.
                </p>
                <ul className="space-y-4 text-[#5c4d40]">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#c29a63] shrink-0" /> <span><strong>Simetria Gengival:</strong> Alinhamento perfeito dos tecidos moles.</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#c29a63] shrink-0" /> <span><strong>Longevidade:</strong> Saúde periodontal é a base para facetas duradouras.</span></li>
                </ul>
              </div>
            </div>

            {/* Spec 4 - Restauração */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 lg:pr-8">
                <div className="w-12 h-12 rounded-xl bg-[#c29a63]/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-[#c29a63]" />
                </div>
                <h3 className="text-3xl font-serif font-medium mb-6 text-[#29221c]">Restaurações Funcionais e Invisíveis</h3>
                <p className="text-[#5c4d40] leading-relaxed mb-6 font-light">
                  A restauração moderna vai além de tapar uma cavidade. Utilizamos resinas biomiméticas que se fundem ao dente original, restaurando a força e a função mastigatória sem deixar vestígios visíveis. É a odontologia preventiva unida à estética absoluta.
                </p>
                <div className="p-6 bg-[#faf8f5] rounded-2xl border border-[#ebdabe]/50">
                   <p className="text-sm italic text-[#5c4d40]">"Trabalho focado na preservação máxima da estrutura dental sadia."</p>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={specRestauracao} alt="Restauração Simples" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6 text-[#29221c]">Dúvidas Frequentes</h2>
            <p className="text-[#5c4d40] font-light">As respostas para as principais questões sobre nossos tratamentos.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-[#ebdabe]/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="text-[#29221c] font-medium hover:no-underline py-6">
                Quanto tempo duram as facetas em resina?
              </AccordionTrigger>
              <AccordionContent className="text-[#5c4d40] font-light leading-relaxed pb-6">
                Com bons cuidados de higiene e revisões periódicas, as facetas em resina composta podem durar de 5 a 10 anos. A técnica de estratificação utilizada pela Dra. Maria Laura garante maior estabilidade de cor e brilho ao longo do tempo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-[#ebdabe]/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="text-[#29221c] font-medium hover:no-underline py-6">
                O clareamento dental causa sensibilidade permanente?
              </AccordionTrigger>
              <AccordionContent className="text-[#5c4d40] font-light leading-relaxed pb-6">
                Não. A sensibilidade é um efeito colateral temporário que ocorre durante o tratamento em alguns pacientes. Utilizamos géis dessensibilizantes de última geração e protocolos personalizados para minimizar qualquer desconforto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-[#ebdabe]/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="text-[#29221c] font-medium hover:no-underline py-6">
                É necessário desgastar o dente para colocar lentes de contato?
              </AccordionTrigger>
              <AccordionContent className="text-[#5c4d40] font-light leading-relaxed pb-6">
                A Dra. Maria Laura preza pela odontologia minimamente invasiva. Em muitos casos de mimetismo dental com resina, o desgaste é nulo ou extremamente reduzido, preservando quase toda a estrutura natural do dente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-[#ebdabe]/50 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="text-[#29221c] font-medium hover:no-underline py-6">
                Por que tratar a gengiva antes da estética?
              </AccordionTrigger>
              <AccordionContent className="text-[#5c4d40] font-light leading-relaxed pb-6">
                Sem uma base saudável, qualquer tratamento estético está fadado ao fracasso. Uma gengiva inflamada pode sangrar, mudar de posição e prejudicar a adesão das facetas, além de comprometer a harmonia visual do sorriso.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl border-8 border-[#faf8f5]">
               <img src={dentist2} alt="Dra. Maria Laura" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#c29a63] rounded-full flex items-center justify-center p-4 shadow-2xl border-4 border-white hidden md:flex">
                <div className="text-center text-white">
                  <div className="font-serif text-3xl font-bold italic">Arte</div>
                  <div className="text-xs uppercase font-bold tracking-widest mt-1">em Odontologia</div>
                </div>
             </div>
          </div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-8 text-[#29221c]">
              O Compromisso com o <br/><span className="text-[#c29a63] italic">Seu Bem-Estar</span>
            </h2>
            <p className="text-[#5c4d40] mb-6 leading-relaxed font-light text-lg">
              A Dra. Maria Laura Barbosa acredita que cada paciente é único. Sua abordagem combina o vigor da juventude com o rigor técnico de materiais modernos.
            </p>
            <p className="text-[#5c4d40] mb-8 leading-relaxed font-light">
              Localizada no coração de Mossâmedes, sua clínica foi projetada para oferecer uma experiência premium, onde a tecnologia e o conforto se encontram. Aqui, cada detalhe é planejado para que você se sinta seguro e acolhido.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-[#ebdabe]/50 pt-8">
              <div>
                <div className="text-3xl font-serif text-[#c29a63] mb-1">Humanizada</div>
                <div className="text-xs uppercase font-bold text-[#5c4d40]/60">Atendimento Dedicado</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#c29a63] mb-1">Científica</div>
                <div className="text-xs uppercase font-bold text-[#5c4d40]/60">Protocolos Modernos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#29221c] text-[#faf8f5] pt-20 pb-10 px-6 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#c29a63] rounded-xl flex items-center justify-center text-white font-serif text-2xl font-bold italic">ML</div>
                <div className="font-serif text-2xl font-medium tracking-tight text-[#c29a63]">
                  Maria Laura <span className="text-white/40">|</span> Odontologia
                </div>
              </div>
              <p className="text-white/50 max-w-sm mb-8 leading-relaxed font-light">
                Transformando sorrisos e devolvendo a autoestima com a delicadeza e a técnica que você merece.
              </p>
              <div className="space-y-4">
                <a href="https://wa.me/5564981644853" target="_blank" className="flex items-center gap-3 text-white hover:text-[#c29a63] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><CheckCircle2 className="w-5 h-5" /></div>
                  <span className="font-medium">+55 64 98164-4853</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-8 flex items-center gap-3">
                <MapPin className="text-[#c29a63]" /> Nossa Localização
              </h3>
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 mb-8 backdrop-blur-sm">
                <p className="text-white/70 leading-relaxed font-light">
                  Av. João Ferreira da Cunha, N°: 470<br/>
                  Centro, Mossâmedes - GO<br/>
                  76150-000, Brazil
                </p>
              </div>
              
              <div className="w-full h-56 bg-white/5 rounded-[2rem] overflow-hidden relative border border-white/10 grayscale contrast-125">
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
          
          <div className="border-t border-white/10 pt-10 text-center text-white/30 text-xs tracking-widest uppercase">
            <p>© {new Date().getFullYear()} Dra. Maria Laura Barbosa | Cirurgiã Dentista</p>
          </div>
        </div>
      </footer>
    </div>
  );
}