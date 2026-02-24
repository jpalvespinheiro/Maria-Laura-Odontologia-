import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Smile, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import dentist1 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.38_(1)_1771948728851.jpeg";
import dentist2 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.36_1771948728854.jpeg";
import dentist3 from "@assets/WhatsApp_Image_2026-02-24_at_12.42.35_1771948728854.jpeg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#332b24] overflow-hidden selection:bg-[#d4b98e]/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf8f5]/80 backdrop-blur-md border-b border-[#ebdabe]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-medium tracking-tight text-[#c29a63]">
            Maria Laura <span className="text-[#a88252]">|</span> Odontologia
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a href="#especialidades" className="hover:text-[#c29a63] transition-colors">Especialidades</a>
            <a href="#sobre" className="hover:text-[#c29a63] transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-[#c29a63] transition-colors">Contato</a>
          </div>
          <Button className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full px-6 transition-all duration-300 shadow-md shadow-[#c29a63]/20" data-testid="button-agendar-nav">
            Agendar Consulta
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#ebdabe]/40 to-transparent rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebdabe]/40 text-[#a88252] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>A Arte Natural do Sorriso</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 text-[#29221c]">
              Sofisticação <br/>
              <span className="italic text-[#c29a63]">em cada detalhe</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-[#5c4d40] mb-8 leading-relaxed max-w-lg">
              A Dra. Maria Laura preza pelo equilíbrio visual entre dentes e saúde gengival, 
              utilizando materiais modernos para criar restaurações que imitam perfeitamente a natureza.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full text-base h-14 px-8 shadow-xl shadow-[#c29a63]/20" data-testid="button-agendar-hero">
                Agendar Avaliação
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 border-[#ebdabe] text-[#5c4d40] hover:bg-[#ebdabe]/20" data-testid="button-especialidades-hero">
                Ver Especialidades
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#faf8f5] bg-[#ebdabe] overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="Paciente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#5c4d40]">
                <div className="flex text-[#c29a63]">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="font-medium">+500 pacientes</span> satisfeitos
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src={dentist1} 
                alt="Dra. Maria Laura" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-[#ebdabe]/30"
            >
              <Smile className="w-8 h-8 text-[#c29a63] mb-3" />
              <h3 className="font-serif text-xl font-medium mb-1 text-[#29221c]">Estética Branca & Rosa</h3>
              <p className="text-sm text-[#5c4d40]">Harmonia perfeita entre dentes e saúde gengival.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section id="especialidades" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-medium mb-4 text-[#29221c]">Nossas Especialidades</h2>
            <p className="text-[#5c4d40]">Técnicas modernas e arte natural para transformar seu sorriso.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="group p-8 rounded-3xl bg-[#faf8f5] border border-[#ebdabe]/50 hover:shadow-xl hover:shadow-[#c29a63]/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#c29a63]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 text-[#c29a63]" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-[#29221c]">Mimetismo Dental</h3>
              <p className="text-[#5c4d40] text-sm leading-relaxed mb-6">
                Facetas e lentes de contato em resina composta. Capacidade artística de criar restaurações que imitam a cor, translucidez, brilho e textura dos dentes naturais. Estratificação perfeita para dentes manchados ou fraturados.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-[#5c4d40]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c29a63]" /> Resinas compostas</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c29a63]" /> Fechamento de diastemas</li>
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="group p-8 rounded-3xl bg-[#c29a63] text-white shadow-xl shadow-[#c29a63]/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Clareamento Dental</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Um passo fundamental antes das facetas. Permite alcançar com facilidade uma cor de material mais clara, harmonizando com a tonalidade desejada para o seu novo sorriso.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="group p-8 rounded-3xl bg-[#faf8f5] border border-[#ebdabe]/50 hover:shadow-xl hover:shadow-[#c29a63]/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#c29a63]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smile className="w-7 h-7 text-[#c29a63]" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-[#29221c]">Tratamento Periodontal</h3>
              <p className="text-[#5c4d40] text-sm leading-relaxed mb-6">
                A sofisticação no sorriso vem do equilíbrio. A gengiva saudável contorna os elementos dentais de forma simétrica, garantindo os melhores resultados para suas facetas e lentes de contato.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-[#5c4d40]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c29a63]" /> Saúde Gengival</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c29a63]" /> Simetria</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden aspect-[3/4]"
              >
                <img src={dentist2} alt="Consultório" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden aspect-[3/4] mt-8"
              >
                <img src={dentist3} alt="Atendimento" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#faf8f5] rounded-full flex items-center justify-center p-2 shadow-xl">
              <div className="w-full h-full border border-dashed border-[#c29a63] rounded-full flex items-center justify-center text-center">
                <span className="font-serif italic text-lg text-[#c29a63]">Arte<br/>Natural</span>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-3xl lg:text-4xl font-serif font-medium mb-6 text-[#29221c]">
              Conheça a <br/><span className="text-[#c29a63] italic">Dra. Maria Laura</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[#5c4d40] mb-6 leading-relaxed">
              Jovem, dedicada e apaixonada por transformar vidas através de sorrisos. A Dra. Maria Laura entende que a odontologia moderna vai muito além da estética: é uma verdadeira arte que devolve a confiança.
            </motion.p>
            <motion.p variants={fadeIn} className="text-[#5c4d40] mb-8 leading-relaxed">
              Com foco em mimetismo dental, seu trabalho busca resultados extremamente naturais, respeitando a individualidade de cada paciente e garantindo um tratamento humanizado, do primeiro contato ao resultado final.
            </motion.p>
            
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6 border-y border-[#ebdabe]/50 py-8">
              <div>
                <div className="text-3xl font-serif text-[#c29a63] mb-1">100%</div>
                <div className="text-sm font-medium text-[#29221c]">Personalizado</div>
                <div className="text-xs text-[#5c4d40] mt-1">Cada sorriso é único</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#c29a63] mb-1">Moderno</div>
                <div className="text-sm font-medium text-[#29221c]">Materiais Premium</div>
                <div className="text-xs text-[#5c4d40] mt-1">Alta durabilidade</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Location */}
      <footer id="contato" className="bg-[#29221c] text-[#faf8f5] pt-20 pb-10 px-6 mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="font-serif text-3xl font-medium tracking-tight text-[#c29a63] mb-6">
                Maria Laura <span className="text-[#a88252]">|</span> Odontologia
              </div>
              <p className="text-white/60 max-w-md mb-8">
                Agende sua avaliação e descubra como a arte do mimetismo dental pode transformar sua autoestima com sofisticação e naturalidade.
              </p>
              <Button size="lg" className="bg-[#c29a63] hover:bg-[#a88252] text-white rounded-full text-base h-14 px-8 border-none" data-testid="button-agendar-footer">
                Fale pelo WhatsApp
              </Button>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-2">
                <MapPin className="text-[#c29a63]" /> Nossa Localização
              </h3>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6 backdrop-blur-sm">
                <p className="text-white/80 leading-relaxed">
                  Av. João Ferreira da Cunha, N°: 470<br/>
                  Centro, Mossâmedes - GO<br/>
                  76150-000, Brazil
                </p>
              </div>
              
              {/* Map Placeholder */}
              <div className="w-full h-48 bg-white/10 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-[#c29a63]/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none mix-blend-multiply" />
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.238622159187!2d-50.1477755!3d-16.11585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e4b0000000001%3A0x3b773a4b609deebf!2sDra.%20Maria%20Laura%20%7C%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "grayscale(0.8) contrast(1.2)" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Maria Laura | Odontologia. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#c29a63] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#c29a63] transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}