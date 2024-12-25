import React from 'react';
import TypingAnimation from './TypingAnimation';

export default function Hero() {
  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
        <video 
          className="w-full h-full object-cover opacity-60"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://player.vimeo.com/external/475602530.sd.mp4?s=8447b2f1bb5b9a3b7f5eeb7c697f4c2a4f7ec9c3&profile_id=164" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-7xl md:text-8xl font-medium text-white mb-6 font-serif tracking-tight">
          Biryummi
        </h1>
        <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-2xl font-light tracking-wide">
          Elevating Indian cuisine to an art form.
        </p>
        <div className="text-lg text-gray-300 font-light tracking-widest mb-4">
          LAUNCHING SOON
        </div>
        <TypingAnimation />
      </div>
    </div>
  );
}