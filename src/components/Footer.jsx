import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full h-20 z-50 shadow-md bg-black/30 backdrop-blur py-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="transform transition-transform hover:scale-110">
            <FaGithub className="h-6 w-6 text-white" />
          </a>
          <a href="#" className="transform transition-transform hover:scale-110">
            <FaLinkedin className="h-6 w-6 text-white" />
          </a>
          <a href="#" className="transform transition-transform hover:scale-110">
            <FaInstagram className="h-6 w-6 text-white" />
          </a>
        </div>
        <div className="mt-2 text-center text-gray-300 text-xs">
          <p>&copy; {new Date().getFullYear()} Bryan Zimbrão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
