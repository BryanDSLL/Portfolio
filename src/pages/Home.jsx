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
      <div className="w-full min-h-[700px] flex flex-col md:flex-row items-center justify-center p-6 gap-8">
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
            💻 Sou apaixonado por tecnologia e aprendizado contínuo <br />
            Atualmente trabalho como supervisor de suporte e estou em processo de migração <br />
            para a área de desenvolvimento, com foco em consolidar minha carreira na tecnologia.<br />
            Tenho experiência em ambientes técnicos e de suporte, o que me deu uma base sólida <br />
            para entender sistemas e soluções. Agora, sigo em constante evolução, <br />
            buscando oportunidades para aplicar e expandir meus conhecimentos em código!
          </h2>
        </div>
      </div>

      {/* Seção com texto + imagem */}
      <div
        ref={addToRefs}
        className="relative z-20 mask h-[600px] w-full flex flex-wrap md:flex-nowrap items-center justify-center p-6"
      >
        <div className="w-full md:w-2/4 flex items-center justify-center p-4">
          <h2 className="text-base font-normal leading-relaxed">
            💻 Sou apaixonado por tecnologia e aprendizado contínuo <br />
            Atualmente trabalho como supervisor de suporte e estou em processo de migração <br />
            para a área de desenvolvimento, com foco em consolidar minha carreira na tecnologia.<br />
            Tenho experiência em ambientes técnicos e de suporte, o que me deu uma base sólida <br />
            para entender sistemas e soluções. Agora, sigo em constante evolução, <br />
            buscando oportunidades para aplicar e expandir meus conhecimentos em código!
          </h2>
        </div>
        <div className="w-full md:w-2/4 flex items-center justify-start p-4">
          <img
            src={WebDesignImg}
            alt="Descrição"
            className="max-h-64 w-full object-contain"
          />
        </div>
      </div>

      {/* Conteúdo adicional para continuar o scroll */}
      <div className="h-[100vh] w-full flex items-center justify-center bg-black text-white text-6xl">
        <p className="relative z-20">Mais conteúdo aqui ⬇️</p>
      </div>
      <div className="h-[100vh] w-full flex items-center justify-center bg-gray-900 text-white text-6xl">
        <p className="relative z-20">Portfólio / Seção seguinte...</p>
      </div>
    </div>
  );
}

export default Home;
