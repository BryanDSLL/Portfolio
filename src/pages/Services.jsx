import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiChevronDoubleDown, HiCheckCircle, HiClock, HiLightBulb, HiDeviceTablet } from 'react-icons/hi2';
import { FaWhatsapp, FaEnvelope, FaRocket, FaPalette, FaCode, FaMobile } from 'react-icons/fa';
import Eu from '../assets/eu.jpg';
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const maskRefs = useRef([]);
  const arrowRef = useRef(null);
  const mainContainerRef = useRef(null);

  // Estados para o formulário
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [status, setStatus] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "seu_service_id_aqui",   // ← Substitua pelos seus IDs
        "seu_template_id_aqui",
        {
          from_name: form.nome,
          from_email: form.email,
          message: form.mensagem,
        },
        "seu_user_id_aqui"
      )
      .then(() => {
        setStatus("Mensagem enviada com sucesso!");
        setForm({ nome: "", email: "", mensagem: "" });
        setShowForm(false);
      })
      .catch(() => {
        setStatus("Erro ao enviar a mensagem.");
      });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const masks = maskRefs.current;

      // Animação para as seções
      masks.forEach((mask, index) => {
        if (mask) {
          gsap.fromTo(
            mask,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: mask,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
              },
            }
          );
        }
      });

      // Animação da seta
      if (arrowRef.current) {
        gsap.to(arrowRef.current, {
          y: 32,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: 1.2,
        });
      }
    }, mainContainerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={mainContainerRef} className="min-h-[200vh] flex flex-col items-center justify-start text-white text-4xl font-bold overflow-x-hidden">
      {/* Hero Section */}
      <div id="inicio" className="w-full min-h-[100vh] flex flex-col md:flex-row items-center justify-center p-6 gap-8 relative">
        <div className="relative mt-10 z-20 flex justify-center items-center w-full md:w-4/10">
          <img
            src={Eu}
            alt="Bryan Zimbrão - Desenvolvedor"
            className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <div className="relative z-20 flex flex-col justify-center md:justify-baseline items-center md:items-start w-full md:w-6/10 text-center md:text-start">
          <h1 className="text-6xl font-bold mb-4">Transforme sua ideia em realidade digital</h1>
          <h2 className="text-2xl font-normal mb-6 text-gray-300">Desenvolvimento profissional de sites, landing pages e aplicativos</h2>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button 
              onClick={() => scrollToSection('servicos')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Ver Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Falar Comigo
            </button>
          </div>
        </div>
        <span
          ref={arrowRef}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 text-6xl text-white drop-shadow-lg"
          style={{ pointerEvents: 'none' }}
        >
          <HiChevronDoubleDown />
        </span>
      </div>

      {/* Por que escolher meus serviços */}
      <div
        id="vantagens"
        ref={(el) => maskRefs.current.push(el)}
        className="relative z-20 w-full min-h-[80vh] p-6 mt-20"
      >
        <h2 className="text-5xl font-bold text-center mb-16">Por que escolher meus serviços?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="text-center p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition-all duration-300">
            <HiLightBulb className="text-6xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Soluções Criativas</h3>
            <p className="text-lg font-normal text-gray-300">Designs únicos e modernos que destacam sua marca no mercado</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition-all duration-300">
            <HiClock className="text-6xl text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Entrega Rápida</h3>
            <p className="text-lg font-normal text-gray-300">Projetos entregues no prazo acordado, sem comprometer a qualidade</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition-all duration-300">
            <HiDeviceTablet className="text-6xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">100% Responsivo</h3>
            <p className="text-lg font-normal text-gray-300">Funciona perfeitamente em celulares, tablets e computadores</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition-all duration-300">
            <HiCheckCircle className="text-6xl text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Suporte Completo</h3>
            <p className="text-lg font-normal text-gray-300">Acompanhamento e suporte mesmo após a entrega do projeto</p>
          </div>
        </div>
      </div>

      {/* Seção de Serviços */}
      <div
        id="servicos"
        ref={(el) => maskRefs.current.push(el)}
        className="relative z-20 w-full min-h-[100vh] p-6 mt-20"
      >
        <h2 className="text-5xl font-bold text-center mb-16">Meus Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Sites Institucionais */}
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur p-8 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
            <FaCode className="text-5xl text-blue-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Sites Profissionais</h3>
            <p className="text-lg font-normal text-gray-300 mb-6">Sites completos para empresas, profissionais liberais e negócios locais. Inclui:</p>
            <ul className="text-base font-normal text-gray-300 space-y-2">
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Design moderno e profissional</li>
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Otimizado para Google (SEO)</li>
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Formulário de contato</li>
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Integração com redes sociais</li>
            </ul>
            <div className="mt-6 text-center">
              <span className="text-2xl font-bold text-blue-400">A partir de R$ 800</span>
            </div>
          </div>

          {/* Landing Pages */}
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur p-8 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
            <FaPalette className="text-5xl text-purple-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Landing Pages</h3>
            <p className="text-lg font-normal text-gray-300 mb-6">Páginas focadas em conversão para campanhas e vendas. Inclui:</p>
            <ul className="text-base font-normal text-gray-300 space-y-2">
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Design persuasivo</li>
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Otimizada para conversão</li>
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Integração com WhatsApp</li>
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Análise de performance</li>
            </ul>
            <div className="mt-6 text-center">
              <span className="text-2xl font-bold text-purple-400">A partir de R$ 500</span>
            </div>
          </div>

          {/* Aplicativos */}
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur p-8 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
            <FaMobile className="text-5xl text-green-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Aplicativos Web</h3>
            <p className="text-lg font-normal text-gray-300 mb-6">Sistemas e aplicações personalizadas para seu negócio. Inclui:</p>
            <ul className="text-base font-normal text-gray-300 space-y-2">
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Sistema personalizado</li>
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Banco de dados</li>
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Painel administrativo</li>
              <li className="flex items-center"><HiCheckCircle className="text-green-400 mr-2" /> Funciona em qualquer dispositivo</li>
            </ul>
            <div className="mt-6 text-center">
              <span className="text-2xl font-bold text-green-400">Sob consulta</span>
            </div>
          </div>
        </div>
      </div>

      {/* Como funciona */}
      <div
        ref={(el) => maskRefs.current.push(el)}
        className="relative z-20 w-full min-h-[80vh] p-6 mt-20"
      >
        <h2 className="text-5xl font-bold text-center mb-16">Como funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">1</div>
            <h3 className="text-2xl font-bold mb-3">Conversa Inicial</h3>
            <p className="text-lg font-normal text-gray-300">Conversamos sobre sua ideia, objetivos e necessidades</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">2</div>
            <h3 className="text-2xl font-bold mb-3">Proposta</h3>
            <p className="text-lg font-normal text-gray-300">Envio uma proposta detalhada com prazo e investimento</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">3</div>
            <h3 className="text-2xl font-bold mb-3">Desenvolvimento</h3>
            <p className="text-lg font-normal text-gray-300">Desenvolvimento do projeto com atualizações constantes</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">4</div>
            <h3 className="text-2xl font-bold mb-3">Entrega</h3>
            <p className="text-lg font-normal text-gray-300">Entrega do projeto finalizado e suporte pós-entrega</p>
          </div>
        </div>
      </div>

      {/* Seção de Contato */}
      <div
        id="contato"
        ref={(el) => maskRefs.current.push(el)}
        className="relative z-20 w-full min-h-[80vh] p-6 mt-20 mb-20"
      >
        <h2 className="text-5xl font-bold text-center mb-8">Vamos conversar sobre seu projeto?</h2>
        <p className="text-xl font-normal text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Estou aqui para transformar sua ideia em uma solução digital incrível. Entre em contato e vamos discutir como posso ajudar seu negócio a crescer!
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
          <a 
            href="https://wa.me/5521990390610?text=Olá! Gostaria de conversar sobre um projeto" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <FaWhatsapp className="text-xl" />
            Chamar no WhatsApp
          </a>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-base font-medium transition-all duration-300 flex items-center gap-3"
          >
            <FaEnvelope className="text-xl" />
            {showForm ? 'Fechar Formulário' : 'Enviar E-mail'}
          </button>
        </div>

        {/* Formulário de contato */}
        {showForm && (
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Entre em Contato</h3>
                <p className="text-gray-400 text-sm">Preencha o formulário abaixo e retornarei em breve</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Digite seu nome"
                      value={form.nome}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all duration-200 hover:bg-white/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all duration-200 hover:bg-white/10"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea
                    name="mensagem"
                    placeholder="Conte-me sobre seu projeto, suas necessidades e objetivos..."
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all duration-200 hover:bg-white/10 resize-none"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button 
                    type="submit" 
                    className="flex-1 bg-white text-black p-3 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-gray-200 flex items-center justify-center gap-2"
                  >
                    <FaEnvelope className="text-sm" />
                    Enviar Mensagem
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 sm:flex-none bg-transparent border border-white/30 text-white p-3 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-white/10 px-6"
                  >
                    Cancelar
                  </button>
                </div>
                
                {status && (
                  <div className={`text-center p-3 rounded-lg font-medium text-sm ${
                    status.includes('sucesso') 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}>
                    {status}
                  </div>
                )}
              </form>
              
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-gray-400 text-sm mb-4">Ou entre em contato diretamente:</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://wa.me/5521990390610?text=Olá! Gostaria de conversar sobre um projeto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-sm" />
                    WhatsApp
                  </a>
                  <a 
                    href="mailto:bryandaimex@gmail.com" 
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <FaEnvelope className="text-sm" />
                    E-mail Direto
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-base font-normal text-gray-300 mb-4">Resposta garantida em até 24 horas!</p>
          <div className="flex justify-center items-center gap-2 text-yellow-400">
            <FaRocket className="text-lg" />
            <span className="text-base font-medium">Vamos decolar juntos!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;