import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {

  return (
    <footer className="text-white py-2 mt-auto w-full shadow-md bg-black/20 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="transform transition-transform hover:scale-110">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="#" className="transform transition-transform hover:scale-110">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="#" className="transform transition-transform hover:scale-110">
            <FaInstagram className="h-5 w-5" />
          </a>
        </div>
        <div className="mt-2 text-center text-gray-300 text-xs">
          <p>&copy; {new Date().getFullYear()} Bryan Zimbrão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
