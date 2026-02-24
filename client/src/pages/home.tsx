import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import whatsappIcon from "@assets/icons8-whatsapp-32_1771954618804.png";
import clinicImg from "@assets/dentista-em-lagoa-santa-scaled_1771954238429.jpg";
import logoImg from "@assets/WhatsApp_Image_2026-02-24_at_14.00.46_1771955133778.jpeg";

import newLogoImg from "@assets/A8d309b8f7da943c18b43dc818515f3d0u_1771961817737.png";
import headerLogo from "@assets/A13e010558ea842d4b0a5b233ca435ec72_(1)_1771965528021.png";

const WHATSAPP_URL = "https://wa.me/5564981644853?text=Olá,%20Dra.%20Maria%20Laura!%20Gostaria%20de%20conhecer%20os%20serviços%20e%20agendar%20uma%20avaliação.";
const INSTAGRAM_URL = "https://www.instagram.com/dra.marialauraodontologia/";
const FACEBOOK_URL = "https://www.facebook.com/people/Maria-Laura-Odontologia/61588240837741/?mibextid=wwXIfr&rdid=MSE1H9VaSlgYIUwR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18Nqeg93hG%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio";
const EMAIL = "dramarialaurabarbosacunhaesilv@gmail.com";

const SERVICES = [
  {
    title: "Lentes de Resina",
    description: "Transforme seu sorriso com agilidade e naturalidade. As lentes de resina corrigem imperfeições de cor e forma, proporcionando resultados incríveis em poucas sessões.",
    details: "As lentes de resina são uma solução estética moderna para quem busca harmonia no sorriso. São indicadas para corrigir dentes levemente tortos, espaços entre os dentes (diastemas) ou manchas. O procedimento é minimamente invasivo e permite um controle total da cor e formato final.",
    features: ["Aplicação direta", "Correção estética imediata", "Altamente reparável", "Custo-benefício excelente"]
  },
  {
    title: "Clareamento Dental",
    description: "Recupere o brilho natural dos seus dentes. Oferecemos técnicas seguras e eficazes para remover manchas e devolver a luminosidade ao seu sorriso.",
    details: "Utilizamos as melhores tecnologias para clareamento em consultório e caseiro supervisionado. O processo remove pigmentos profundos de café, vinho e tempo, garantindo dentes mais brancos sem comprometer a saúde do esmalte dentário.",
    features: ["Técnica a laser", "Gel clareador premium", "Baixa sensibilidade", "Resultados duradouros"]
  },
  {
    title: "Tratamento de Canal",
    description: "Cuidado especializado para salvar seu dente e aliviar dores. Procedimento preciso e indolor com tecnologia de ponta para sua tranquilidade.",
    details: "A endodontia moderna permite tratamentos muito mais rápidos e confortáveis. Focamos na preservação do elemento dental, tratando inflamações e infecções internas com precisão microscópica.",
    features: ["Endodontia mecanizada", "Alívio imediato da dor", "Preservação dental", "Conforto absoluto"]
  },
  {
    title: "Restaurações Estéticas",
    description: "Reparos invisíveis que devolvem a função e beleza aos dentes danificados por cáries ou fraturas, utilizando materiais que imitam a dentição natural.",
    details: "Substituímos restaurações antigas e tratamos cáries com resinas compostas de alta qualidade. O resultado é um dente com aparência natural, força e durabilidade restauradas.",
    features: ["Resinas biomiméticas", "Acabamento polido", "Alta durabilidade", "Mimetismo de cor"]
  }
];

const TESTIMONIALS = [
  {
    name: "Ana Beatriz",
    text: "O atendimento da Dra. Maria Laura é excepcional. Fiz minhas lentes de resina e o resultado ficou super natural. Recomendo muito!",
    role: "Paciente de Estética"
  },
  {
    name: "Ricardo Oliveira",
    text: "Excelente profissional. Explica tudo com muita clareza e o consultório é muito moderno e confortável. Nota dez!",
    role: "Paciente Regular"
  },
  {
    name: "Patrícia Mendes",
    text: "Sempre tive medo de dentista, mas com a Dra. Maria Laura me senti super segura. Fiz clareamento e amei o resultado!",
    role: "Paciente de Clareamento"
  }
];

const FAQ_ITEMS = [
  {
    question: "Quanto tempo dura o clareamento dental?",
    answer: "A durabilidade depende muito dos hábitos alimentares do paciente. Em média, os resultados duram de 1 a 2 anos, mas podem ser prolongados com boa higiene e evitando excesso de corantes."
  },
  {
    question: "Lentes de resina desgastam o dente?",
    answer: "Na maioria dos casos, o desgaste é mínimo ou inexistente. As lentes de resina são uma técnica aditiva, onde a resina é aplicada sobre o dente natural."
  },
  {
    question: "O tratamento de canal dói?",
    answer: "Não. Com as técnicas modernas de anestesia e tecnologia mecanizada, o procedimento é muito confortável e focado justamente no alívio da dor pré-existente."
  },
  {
    question: "Como agendar uma consulta?",
    answer: "Você pode agendar diretamente pelo WhatsApp clicando no botão fixo aqui no site ou pelos links na seção de contato."
  }
];

export default function Home() {
  const [activeModal, setActiveModal] = useState<typeof SERVICES[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#332b24] overflow-hidden selection:bg-[#d4b98e]/30 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-sm h-20' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-16 w-auto flex items-center justify-center">
              <img 
                src={headerLogo} 
                alt="Dra. Maria Laura Logo" 
                className="h-full w-auto object-contain py-2" 
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(67%) sepia(18%) saturate(917%) hue-rotate(352deg) brightness(87%) contrast(83%)' 
                }} 
              />
            </div>
          </div>
          
          <div className="hidden md:flex gap-8 text-[11px] font-normal tracking-[0.15em] uppercase text-[#5c4d40]">
            <a href="#services" className="hover:text-[#c29a63] transition-colors">Serviços</a>
            <a href="#about" className="hover:text-[#c29a63] transition-colors">Sobre</a>
            <a href="#clinic" className="hover:text-[#c29a63] transition-colors">Clínica</a>
            <a href="#faq" className="hover:text-[#c29a63] transition-colors">Dúvidas</a>
            <a href="#contact" className="hover:text-[#c29a63] transition-colors">Contato</a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#c29a63]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#faf8f5] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center text-sm font-medium tracking-widest uppercase text-[#5c4d40]">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
              <a href="#clinic" onClick={() => setMobileMenuOpen(false)}>Clínica</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Dúvidas</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contato</a>
              <div className="pt-6 border-t border-[#ebdabe]">
                <a 
                  href={WHATSAPP_URL}
                  className="bg-[#c29a63] text-white py-4 px-8 rounded-full inline-block w-full"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#ebdabe]/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#d4b98e]/10 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-[#ebdabe]/40 text-[#c29a63] text-[10px] font-bold tracking-[0.2em] uppercase rounded-full"
              >
                Bem-vinda ao seu novo sorriso
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight">
                Estética <span className="italic font-serif block text-[#c29a63] mt-2">de excelência.</span>
              </h1>
              <p className="text-lg text-[#5c4d40]/80 leading-relaxed max-w-lg font-light">
                Tratamentos personalizados com tecnologia de ponta para transformar sua saúde bucal e autoestima.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={WHATSAPP_URL}
                className="group relative bg-[#c29a63] text-white px-10 py-5 rounded-full text-xs font-bold tracking-widest uppercase overflow-hidden transition-all hover:pr-12"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Agendar Consulta <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a 
                href="#services"
                className="px-10 py-5 rounded-full text-xs font-bold tracking-widest uppercase border border-[#c29a63]/20 hover:bg-[#c29a63]/5 transition-colors"
              >
                Conhecer Serviços
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-[#ebdabe] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#c29a63]" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-[#c29a63] text-[#c29a63]" />
                  ))}
                </div>
                <p className="text-[10px] text-[#5c4d40]/60 uppercase tracking-widest font-medium">Excelência em cada detalhe</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative group">
              <img 
                src={logoImg} 
                alt="Dra. Maria Laura" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#332b24]/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c29a63] flex items-center justify-center text-white">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Registro Profissional</p>
                    <p className="text-white/70 text-xs uppercase tracking-widest">CRO-GO 25701</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -top-6 -right-6 md:right-[-40px] p-6 bg-white rounded-2xl shadow-xl space-y-2 hidden sm:block border border-[#ebdabe]/30">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#c29a63]">Disponível para agenda</p>
              </div>
              <p className="text-sm font-serif italic text-[#5c4d40]">Transformando vidas através do sorriso.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-white/50 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c29a63]">Especialidades</h2>
            <h3 className="text-4xl md:text-5xl font-light">Cuidado especializado</h3>
            <div className="w-24 h-px bg-[#c29a63] mx-auto mt-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 bg-white rounded-[32px] border border-[#ebdabe]/30 shadow-sm hover:shadow-xl hover:border-[#c29a63]/20 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-[#ebdabe]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-[#c29a63]" />
                </div>
                <h4 className="text-xl font-medium mb-4">{service.title}</h4>
                <p className="text-sm text-[#5c4d40]/70 leading-relaxed font-light mb-8">
                  {service.description}
                </p>
                <button 
                  onClick={() => setActiveModal(service)}
                  className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#c29a63] hover:gap-4 transition-all"
                >
                  Ver Detalhes <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-[#332b24]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] overflow-hidden shadow-2xl"
            >
              <div className="p-12 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c29a63]">Especialidade</span>
                    <h3 className="text-3xl font-light">{activeModal.title}</h3>
                  </div>
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="p-2 hover:bg-[#faf8f5] rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-lg text-[#5c4d40]/80 leading-relaxed font-light">
                  {activeModal.details}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {activeModal.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-[#faf8f5] rounded-2xl border border-[#ebdabe]/30">
                      <div className="w-2 h-2 rounded-full bg-[#c29a63]" />
                      <span className="text-sm font-medium text-[#5c4d40]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a 
                    href={WHATSAPP_URL}
                    className="block w-full bg-[#c29a63] text-white text-center py-5 rounded-2xl text-xs font-bold tracking-widest uppercase hover:bg-[#b08952] transition-colors shadow-lg shadow-[#c29a63]/20"
                  >
                    Agendar Avaliação
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section id="about" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src={logoImg} 
                alt="Dra. Maria Laura" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#ebdabe] rounded-full -z-10 blur-3xl opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c29a63]">Dra. Maria Laura</h2>
              <h3 className="text-4xl md:text-5xl font-light leading-tight">Ciência e humanização em cada sorriso</h3>
            </div>
            
            <div className="space-y-6 text-[#5c4d40]/80 leading-relaxed font-light">
              <p>
                Graduada em Odontologia, dedico minha carreira a transformar a vida de meus pacientes através de tratamentos modernos e um olhar humanizado.
              </p>
              <p>
                Meu consultório foi planejado para oferecer uma experiência diferenciada, onde o conforto e a segurança são prioridades. Utilizo as tecnologias mais avançadas do mercado para garantir precisão e resultados excepcionais em cada procedimento.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-light text-[#c29a63]">CRO-GO</div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5c4d40]/60">25701</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light text-[#c29a63]">Odonto</div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5c4d40]/60">Especializada</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clinic Photos Section */}
      <section id="clinic" className="py-32 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c29a63]">Nosso Espaço</h2>
            <h3 className="text-4xl md:text-5xl font-light">Ambiente acolhedor</h3>
          </div>

          <div className="grid md:grid-cols-12 gap-6 h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 rounded-[40px] overflow-hidden relative group"
            >
              <img src={clinicImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Consultório" />
              <div className="absolute inset-0 bg-[#332b24]/10 group-hover:bg-transparent transition-colors" />
            </motion.div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[32px] overflow-hidden relative group"
              >
                <img src={logoImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Recepção" />
                <div className="absolute inset-0 bg-[#332b24]/10 group-hover:bg-transparent transition-colors" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-[32px] overflow-hidden relative group"
              >
                <img src={clinicImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Equipamentos" />
                <div className="absolute inset-0 bg-[#332b24]/10 group-hover:bg-transparent transition-colors" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c29a63]">Depoimentos</h2>
            <h3 className="text-4xl md:text-5xl font-light leading-tight">O que dizem os pacientes</h3>
            <p className="text-[#5c4d40]/70 font-light">Confira os relatos de quem já transformou seu sorriso conosco.</p>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-white rounded-[32px] shadow-sm border border-[#ebdabe]/30 space-y-6"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-[#c29a63] text-[#c29a63]" />
                  ))}
                </div>
                <p className="text-[#5c4d40] font-light leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-medium text-[#332b24]">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#c29a63] font-bold">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 bg-white/50">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c29a63]">FAQ</h2>
            <h3 className="text-4xl font-light">Dúvidas Frequentes</h3>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div 
                key={idx}
                className="border border-[#ebdabe]/50 rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#faf8f5] transition-colors"
                >
                  <span className="font-medium text-[#332b24]">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#c29a63] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-[#5c4d40]/80 font-light leading-relaxed border-t border-[#ebdabe]/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#332b24] rounded-[60px] overflow-hidden p-12 md:p-24 text-center space-y-10">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c29a63]/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c29a63]/10 blur-[100px] rounded-full" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl text-white font-light leading-tight">
                Pronta para sorrir <span className="italic font-serif text-[#c29a63]">com confiança?</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto font-light text-lg">
                Agende sua avaliação agora mesmo e descubra como podemos realçar o melhor da sua beleza.
              </p>
            </div>

            <div className="relative z-10">
              <a 
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-4 bg-[#c29a63] text-white px-12 py-6 rounded-full text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform shadow-2xl shadow-[#c29a63]/20"
              >
                Agendar via WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section & Footer */}
      <footer id="contact" className="pt-32 pb-12 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <div className="h-16 w-auto">
              <img 
                src={headerLogo} 
                alt="Dra. Maria Laura Logo" 
                className="h-full w-auto object-contain" 
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(67%) sepia(18%) saturate(917%) hue-rotate(352deg) brightness(87%) contrast(83%)' 
                }} 
              />
            </div>
            <p className="text-[#5c4d40]/70 font-light italic text-lg font-serif">"A cada sorriso uma história."</p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_URL} className="w-12 h-12 rounded-full border border-[#ebdabe] flex items-center justify-center text-[#c29a63] hover:bg-[#c29a63] hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={FACEBOOK_URL} className="w-12 h-12 rounded-full border border-[#ebdabe] flex items-center justify-center text-[#c29a63] hover:bg-[#c29a63] hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c29a63]">Links Rápidos</h4>
            <ul className="space-y-4 text-sm font-medium text-[#5c4d40]">
              <li><a href="#services" className="hover:text-[#c29a63] transition-colors">Nossos Serviços</a></li>
              <li><a href="#about" className="hover:text-[#c29a63] transition-colors">Sobre Dra. Maria Laura</a></li>
              <li><a href="#clinic" className="hover:text-[#c29a63] transition-colors">Nossa Clínica</a></li>
              <li><a href="#faq" className="hover:text-[#c29a63] transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c29a63]">Localização e Contato</h4>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-[#c29a63] shrink-0" />
                <p className="text-sm text-[#5c4d40]/80 leading-relaxed font-light">
                  Rua Major Joaquim de Castro, 100 - Sala 03 - Setor Central, Cristalina - GO, 73850-000
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-[#c29a63] shrink-0" />
                <p className="text-sm text-[#5c4d40]/80 leading-relaxed font-light">+55 (64) 98164-4853</p>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-[#c29a63] shrink-0" />
                <p className="text-sm text-[#5c4d40]/80 leading-relaxed font-light break-all">{EMAIL}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto h-[450px] rounded-[40px] overflow-hidden shadow-2xl mb-20 border border-[#ebdabe]/30">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.234141444144!2d-47.6152778!3d-16.7652778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359616aeec6edef%3A0x20afcf6660666066!2sDra.%20Maria%20Laura%20-%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1719655000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="max-w-7xl mx-auto pt-12 border-t border-[#ebdabe]/30 text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5c4d40]/40">
            &copy; 2026 Dra. Maria Laura | Odontologia. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_URL}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
        <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 relative z-10 brightness-0 invert" />
        <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <p className="text-xs font-bold text-[#332b24] tracking-wider uppercase">Falar com a Dra.</p>
        </div>
      </motion.a>
    </div>
  );
}
