import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WebDesignImg from '../assets/Logo-Branca.PNG';
import Eu from '../assets/eu.jpg';
import MeuVideo from '../assets/contagem2.mp4';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const maskRefs = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const masks = maskRefs.current;

    // Animação da primeira seção (entrada com zoom)
    if (masks[0]) {
      gsap.fromTo(
        masks[0],
        { scale: 4, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: masks[0],
            start: 'top 70%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );
    }

    // Animação da segunda seção (texto + imagem)
    if (masks[1]) {
      const [textDiv, imgDiv] = masks[1].children;

      gsap.fromTo(
        textDiv,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: masks[1],
            start: 'top 70%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        imgDiv,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: masks[1],
            start: 'top 70%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !maskRefs.current.includes(el)) {
      maskRefs.current.push(el);
    }
  };

  return (
    <div className="animated-gradient-bg min-h-[200vh] flex flex-col items-center justify-start text-white text-4xl font-bold overflow-x-hidden">
      <div className="w-full min-h-[650px] flex flex-col md:flex-row items-center justify-center p-6 gap-8 relative">
        {/* Foto à esquerda */}
        <div className="relative z-20 flex justify-center items-center w-full md:w-1/3">
          <img
            src={Eu}
            alt="Minha foto"
            className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        {/* Texto à direita */}
        <div className="relative z-20 flex flex-col justify-center items-start w-full md:w-2/3 text-left">
          <h2 className="text-6xl font-bold mb-4">Bem vindo!</h2>
          <p className="text-xl font-normal leading-relaxed">
            Olá! Meu nome é Bryan Zimbrão, sou apaixonado por tecnologia e aprendizado contínuo.<br />
            Atuo como supervisor de suporte técnico e estou em transição para a área de desenvolvimento de software.<br />
            Tenho sólida experiência em ambientes técnicos, o que me proporcionou visão sistêmica, raciocínio lógico e foco na resolução de problemas.<br />
            Possuo conhecimentos em SQL, Delphi, JavaScript, React e Python, além de familiaridade com bancos de dados e boas práticas de desenvolvimento.<br />
            Busco oportunidades para aplicar meus conhecimentos, crescer como desenvolvedor e contribuir com soluções eficientes e inovadoras.<br />
          </p>
        </div>
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-4xl animate-bounce">⬇️</span>
      </div>


      {/* Seção com vídeo + texto */}
      <div
        ref={addToRefs}
        className="relative z-20 mask w-full h-[80vh] flex flex-wrap md:flex-nowrap items-center justify-center p-6"
      >
        <div className="w-full md:w-2/4 flex items-center justify-center">
          <video
            ref={videoRef}
            src={MeuVideo}
            className="max-h-80 w-full object-contain"
            muted
            playsInline
            autoPlay
            loop
          />
        </div>
        <div className="w-full md:w-2/4 flex items-center justify-start p-4">
          <h2 className="text-base font-normal leading-relaxed">
            Sou comprometido com metas, prazos e entregas de qualidade. Ao longo da minha jornada, <br /> 
            desenvolvi disciplina, foco e a vontade constante de aprender e evoluir. <br />  <br />
            Estou em busca de oportunidades que me desafiem e me permitam aplicar e expandir meus conhecimentos na prática. <br />
            Este portfólio é uma amostra do meu empenho, criatividade e das habilidades técnicas que venho desenvolvendo <br /> 
            com dedicação. Aqui, coloco à prova parte do que aprendi em projetos reais e estudos contínuos. <br />  <br />
            Acredito que o aprendizado é um processo constante, e estou pronto para contribuir, crescer e fazer a diferença. <br /> 
            Espero que goste!
          </h2>
        </div>
      </div>

      {/* Seção com texto + imagem */}
      <div
        ref={addToRefs}
        className="relative z-20 mask h-[600px] w-full flex flex-wrap md:flex-nowrap p-6"
      >
        <div className="w-full md:w-2/4 ml-8 flex items-center justify-center p-4">
          <h2 className="text-base font-normal leading-relaxed">
            Acredito que cada projeto representa uma chance real de aprendizado, crescimento e superação de limites.<br /> 
            Mais do que executar tarefas, busco entender o contexto, o objetivo final e o impacto que aquela entrega pode gerar.<br /> 
            Para mim, um bom resultado vai além de cumprir prazos — ele precisa ter propósito, agregar valor e resolver problemas<br /> 
            de forma eficiente e inteligente.<br />
            Tenho verdadeira curiosidade em entender o “porquê” por trás de cada desafio. Isso me permite pensar de forma estratégica,<br /> 
            propor melhorias e encontrar soluções criativas que realmente façam a diferença.<br /> 
            Cada etapa de um projeto é uma oportunidade para evoluir, aplicar novos conhecimentos<br /> 
            e sair da zona de conforto com responsabilidade e consciência profissional.<br />
          </h2>
        </div>
        <div className="w-full md:w-2/4 flex items-center justify-center p-4">
          <img
            src={WebDesignImg}
            alt="Descrição"
            className="max-h-64 w-full object-contain"
          />
        </div>
      </div>
      

      <div className="h-[100vh] w-full flex flex-col items-center justify-center bg-black text-white px-4">
        <h2 className="text-5xl font-bold mb-12 text-center w-full">Tecnologias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
          {/* Coluna 1 */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-16 h-16 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_16px_#61dafb]"
              />
              <span className="mt-2 text-2xl">React</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt="Tailwind"
                className="w-16 h-16 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_16px_#38bdf8]"
              />
              <span className="mt-2 text-2xl">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/gsap.svg"
                alt="GSAP"
                className="w-16 h-16 bg-white rounded p-2 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_16px_#88ce02]"
              />
              <span className="mt-2 text-2xl">GSAP</span>
            </div>
          </div>
          {/* Coluna 2 */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-16 h-16 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_16px_#f7df1e]"
              />
              <span className="mt-2 text-2xl">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                className="w-16 h-16 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_16px_#3776ab]"
              />
              <span className="mt-2 text-2xl">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-16 h-16 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_16px_#e34c26]"
              />
              <span className="mt-2 text-2xl">HTML5</span>
            </div>
          </div>
          {/* Coluna 3 */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                className="w-16 h-16 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_16px_#264de4]"
              />
              <span className="mt-2 text-2xl">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="w-16 h-16 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_16px_#f34f29]"
              />
              <span className="mt-2 text-2xl">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
                className="w-16 h-16 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_16px_#00758f]"
              />
              <span className="mt-2 text-2xl">MySQL</span>
            </div>
          </div>
        </div>
      </div>


      <div className="h-[100vh] w-full flex items-center justify-center bg-gray-900 text-white text-6xl">
        <p className="relative z-20">Portfólio / Seção seguinte...</p>
      </div>
    </div>
  );
}

export default Home;
