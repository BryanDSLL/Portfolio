import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/Logo-Branca.png';


export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/home';

if (isHome) return null;

  const handleBack = () => {
    if (location.pathname === '/home') {
      return; 
    }
    navigate(-1);
  };

  return (
    <header className="bg-slate-950 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/home" className="flex items-center space-x-2">
          <img src={Logo} className="h-10 w-11 hover:text-gray-300 transition-colors duration-200" alt="Logo BZ" />
          <span className="text-l font-semibold text-white">Bryan Zimbrão</span>
        </Link>
        
        {location.pathname !== '/login' && (
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <span className="text-sm font-medium">Voltar</span>
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
        )}
      </nav>
    </header>
  );
}