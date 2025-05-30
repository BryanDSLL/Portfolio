import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WebDesignImg from '../assets/Logo-Branca.PNG';
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
      <div className="h-[400px] flex items-center justify-center p-6">
        <h2 className="text-8xl mb-2">Welcome!</h2>
      </div>

      <div className="h-[200px] w-full flex items-center justify-center p-6">
        <h2 className="text-8xl mb-2">↓</h2>
      </div>

      {/* Seção com vídeo + texto */}
      <div
        ref={addToRefs}
        className="mask w-full h-[80vh] flex flex-wrap md:flex-nowrap items-center justify-center p-6"
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
          <h2 className="text-base leading-relaxed text-sm/8 mb-2">
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
        className="mask h-[600px] w-full flex flex-wrap md:flex-nowrap items-center justify-center p-6"
      >
        <div className="w-full md:w-2/4 flex items-center justify-center p-4">
          <h2 className="text-base leading-relaxed text-sm/8 mb-2">
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
        <p>Mais conteúdo aqui ⬇️</p>
      </div>
      <div className="h-[100vh] w-full flex items-center justify-center bg-gray-900 text-white text-6xl">
        <p>Portfólio / Seção seguinte...</p>
      </div>
    </div>
  );
}

export default Home;
