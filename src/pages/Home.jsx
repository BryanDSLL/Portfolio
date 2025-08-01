import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Eu from '../assets/eu.jpg';
import DentalCare from '../assets/DentalCare.mp4';
import ProjectCard from '../components/ProjectCard';

import { HiChevronDoubleDown } from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const maskRefs = useRef([]);
  const videoRef = useRef(null);

  const arrowRef = useRef(null);
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

    // Animação vertical suave e constante para a seta
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        y: 32,
        scale: 1.15,
        opacity: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 1.2,
      });
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !maskRefs.current.includes(el)) {
      maskRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-[200vh] flex flex-col items-center justify-start text-white text-4xl font-bold overflow-x-hidden">
      <div id="inicio" className="w-full min-h-[650px] flex flex-col md:flex-row items-center justify-center p-6 gap-8 relative">
        {/* Foto à esquerda */}
        <div className="relative z-20 flex justify-center items-center w-full md:w-4/10">
          <img
            src={Eu}
            alt="Minha foto"
            className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        {/* Texto à direita */}
        <div className="relative z-20 flex flex-col justify-baseline items-start w-full md:w-6/10 text-left">
          <h2 className="text-6xl font-bold">Bryan Zimbrão</h2>
          <h3 className="text-xl font-bold ml-1 mb-4">Desenvolvedor Full-Stack</h3>
        </div>
        <span
          ref={arrowRef}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-6xl text-white drop-shadow-lg"
          style={{ pointerEvents: 'none' }}
        >
          <HiChevronDoubleDown />
        </span>
      </div>


      {/* Seção com vídeo + texto */}
      <div
        id="sobre-mim"
        ref={addToRefs}
        className="relative z-20 mask w-full h-[75vh] mt-10 flex flex-wrap md:flex-nowrap items-center justify-center p-6"
      >
        <div className="mt-15 ml-2 w-full md:w-2/4 flex items-center justify-center">
          <video
            ref={videoRef}
            src={DentalCare}
            className="max-h-90 w-full object-cover"
            muted
            playsInline
            autoPlay
            loop
          />
        </div>
        <div className="w-full md:w-2/4 flex flex-col justify-start p-15">
          <h2 className="text-5xl font-bold mb-12 text-center w-full">Front-End</h2>
            <p className="text-lg mt-5 font-normal leading-relaxed">
              Tenho experiência sólida em desenvolvimento front-end, criando aplicações responsivas para web, desktop e mobile.<br /><br />
              Utilizo tecnologias como React, NodeJs, NextJs, Tailwind, GSAP, SQL e Delphi para entregar interfaces modernas, dinâmicas e de alta performance.<br /><br />
              Sou especialista em implementar animações envolventes e design moderno, sempre buscando a melhor experiência para o usuário.<br />
              Meu foco é unir tecnologia e criatividade para construir soluções visuais impactantes e funcionais.
            </p>
        </div>
      </div>

      {/* Seção com texto + imagem */}
      <div
        ref={addToRefs}
        className="relative z-20 mask h-[75vh] w-full flex flex-wrap md:flex-nowrap p-6"
      >
        <div className="w-full md:w-3/4 flex flex-col justify-center p-15">
          <h2 className="text-5xl font-bold mb-12 text-center w-full">Back-End</h2>
            <p className="text-lg mt-5 font-normal leading-relaxed">
                Tenho experiência sólida em desenvolvimento back-end, criando APIs e serviços para aplicações web e mobile.<br /><br />
                Utilizo tecnologias como NodeJs, Express, SQL e NoSQL para construir soluções escaláveis e de alta performance.<br /><br />
                Sou especialista em implementar arquiteturas robustas e seguras, sempre buscando a melhor experiência para o usuário.<br />
                Meu foco é unir tecnologia e criatividade para construir soluções visuais impactantes e funcionais.
              </p>
        </div>
        <div className="w-full md:w-2/4 flex items-center justify-center p-4 relative min-h-[260px]">
          {/* PostgreSQL (centro) */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-20 h-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] drop-shadow-lg z-10" />
          {/* NodeJS (cima esquerda) */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" className="w-16 h-16 absolute left-[32%] top-[28%] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] drop-shadow-lg" />
          {/* ExpressJS (cima direita) */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="ExpressJS" className="w-16 h-16 absolute right-[32%] top-[28%] translate-x-1/2 -translate-y-1/2 rotate-[12deg] drop-shadow-lg bg-white p-2 rounded-full" />
          {/* JavaScript (esquerda centro) */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-14 h-14 absolute left-[26%] top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] drop-shadow-lg bg-white p-1 rounded border-2 border-yellow-400" />
          {/* TypeScript (direita centro) */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-14 h-14 absolute right-[26%] top-1/2 translate-x-1/2 -translate-y-1/2 rotate-[8deg] drop-shadow-lg bg-white p-1 rounded border-2 border-blue-400" />
          {/* MySQL (baixo esquerda) */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-16 h-16 absolute left-[34%] bottom-[24%] -translate-x-1/2 translate-y-1/2 rotate-[8deg] drop-shadow-lg" />
          {/* Postman (baixo direita) */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="w-16 h-16 absolute right-[34%] bottom-[24%] translate-x-1/2 translate-y-1/2 rotate-[-14deg] drop-shadow-lg bg-white p-2 rounded-full opacity-90" />
        </div>
      </div>
      

      <div id="tecnologias" className="h-[100vh] w-full flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-5xl font-bold mb-12 text-center w-full">Principais tecnologias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
          {/* Coluna 1 */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#61dafb]"
                />
                <span className="mt-2 text-2xl">React</span>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#e34c26]"
                />
                <span className="mt-2 text-2xl">HTML5</span>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <img
                  src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
                  alt="Tailwind"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#38bdf8]"
                />
                <span className="mt-2 text-2xl">Tailwind CSS</span>
              </a>
            </div>
          </div>
          {/* Coluna 2 */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#f7df1e]"
                />
                <span className="mt-2 text-2xl">JavaScript</span>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#3178c6] bg-white p-1 rounded border-2 border-blue-400"
                />
                <span className="mt-2 text-2xl">TypeScript</span>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="NodeJS"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#539e43]"
                />
                <span className="mt-2 text-2xl">NodeJS</span>
              </a>
            </div>
          </div>
          {/* Coluna 3 */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <a href="https://gsap.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <img
                  src="https://svgstack.com/media/img/gsap-logo-dNe6788698.webp"
                  alt="GSAP"
                  className="w-16 h-16 scale-[1.25] transition-transform duration-300 group-hover:scale-[1.35]"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(81%) sepia(41%) saturate(749%) hue-rotate(54deg) brightness(102%) contrast(101%)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(41%) saturate(749%) hue-rotate(54deg) brightness(102%) contrast(101%) drop-shadow(0 0 16px #88ce02)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(41%) saturate(749%) hue-rotate(54deg) brightness(102%) contrast(101%)'}
                />
                <span className="mt-2 text-2xl">GSAP</span>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  alt="PostgreSQL"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#336791]"
                />
                <span className="mt-2 text-2xl">PostgreSQL</span>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#00758f]"
                />
                <span className="mt-2 text-2xl">MySQL</span>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div id="projetos" className="min-h-[100vh] w-full flex flex-col items-center justify-start py-20 text-white">
        <h2 className="text-5xl font-bold mb-16">Projetos</h2>
        
        {/* Dados dos projetos */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Projeto 1 - DentalCare */}
            <ProjectCard 
              title="DentalCare"
              description="Sistema de agendamento para clínica odontológica com interface moderna e responsiva."
              video="/src/assets/DentalCare.mp4"
              technologies={["React", "Tailwind CSS", "JavaScript", "Node.js"]}
              githubLink="https://github.com/BryanDSLL/DentalCare"
              demoLink="#"
            />

            {/* Projeto 2 - Em breve */}
            <ProjectCard 
              title="Em breve"
              description="Novo projeto em desenvolvimento."
              image="https://via.placeholder.com/400x225/1a1a2e/ffffff?text=Em+Breve"
              technologies={["HTML", "CSS", "JavaScript"]}
              githubLink="#"
              demoLink="#"
            />

            {/* Projeto 3 - Em breve */}
            <ProjectCard 
              title="Em breve"
              description="Novo projeto em desenvolvimento."
              image="https://via.placeholder.com/400x225/1a1a2e/ffffff?text=Em+Breve"
              technologies={["HTML", "CSS", "JavaScript"]}
              githubLink="#"
              demoLink="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
