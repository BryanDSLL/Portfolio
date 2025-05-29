import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-2 mt-auto w-full">
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
        <div className="mt-2 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Bryan Zimbrão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
