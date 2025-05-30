import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="animated-gradient-bg size-full flex flex-col items-center justify-center text-white text-4xl font-bold">

      <div className="h-[400px] w-full flex items-center justify-center p-6">
        <h2 className="text-8xl mb-2">Welcome!</h2>
      </div>

      <div className="h-[300px] w-full flex items-center justify-center p-6">
        <h2 className="text-8xl mb-2">↓</h2>
      </div>

      <div className="h-[400px] w-full flex items-center justify-center p-6">
        <h2 className="text-8xl mb-2">Welcome!</h2>
      </div>

    </div>
  );
}

export default Home;


