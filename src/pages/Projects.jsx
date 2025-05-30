import { useState } from 'react';
import { Link } from 'react-router-dom';
import WebDesignImg from '../assets/Logo-Branca.PNG';

function Projects() {
  return (
    <>
    
    <div className="bg-slate-800 h-[400px] w-full flex items-center justify-center p-6">
      <div className="flex w-full max-w-6xl">
        <div className="w-1/4 flex items-center justify-center">
          <img
            src={WebDesignImg}
            alt="Descrição"
            className="max-h-64 object-contain"
          />
        </div>

        <div className="w-3/4 text-white flex flex-col justify-center px-6">
          <h2 className="text-3xl font-bold mb-2">Web Design</h2>
          <p className="text-sm leading-relaxed">Texto falando sobre web design!!! </p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Projects;
