import Logo from '../assets/logo-branca.png'; 

export default function Header() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 64,
        behavior: 'smooth'
      });
    }

  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-black/30 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div onClick={() => scrollToSection('inicio')} className="flex items-center space-x-2 cursor-pointer">
          <img src={Logo} className="h-10 w-11 hover:text-gray-300 transition-colors duration-200" alt="Logo BZ" />
          <span className="text-sm md:text-base font-semibold text-white">Bryan Zimbrão</span>
        </div>

        <div className="flex md:flex-row space-x-2 md:space-x-12">
          <button 
            onClick={() => scrollToSection('sobre-mim')} 
            className="text-white hover:text-gray-300 text-xs md:text-base transition-colors duration-200 font-medium cursor-pointer"
          >
            Sobre mim
          </button>
          <button 
            onClick={() => scrollToSection('tecnologias')} 
            className="text-white hover:text-gray-300 text-xs md:text-base transition-colors duration-200 font-medium cursor-pointer"
          >
            Tecnologias
          </button>
          <button 
            onClick={() => scrollToSection('projetos')} 
            className="text-white hover:text-gray-300 text-xs md:text-base transition-colors duration-200 font-medium cursor-pointer"
          >
            Projetos
          </button>
        </div>
      </nav>
    </header>
  );
}