import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo-Branca.png';


export default function Header() {

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-black/40 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/home" className="flex items-center space-x-2">
          <img src={Logo} className="h-10 w-11 hover:text-gray-300 transition-colors duration-200" alt="Logo BZ" />
          <span className="text-l font-semibold text-white">Bryan Zimbrão</span>
        </Link>

        <div className="flex space-x-12">
          <button className="text-white hover:text-gray-300 transition-colors duration-200 font-medium cursor-pointer">
            Sobre mim
          </button>
          <button className="text-white hover:text-gray-300 transition-colors duration-200 font-medium cursor-pointer">
            Tecnologias
          </button>
          <button className="text-white hover:text-gray-300 transition-colors duration-200 font-medium cursor-pointer">
            Projetos
          </button>
        </div>
      </nav>
    </header>
  );
}