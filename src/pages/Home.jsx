import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">Bem-vindo à Home</h1>
      <p>Este é o conteúdo da página inicial.</p>
    </div>
  )
}

export default Home
