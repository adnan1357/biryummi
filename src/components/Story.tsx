import React from 'react';

export default function Story() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-medium mb-8 tracking-tight">Crafted with precision</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Every dish is a testament to our commitment to excellence. Using time-honored techniques 
              and the finest ingredients, we create experiences that engage all the senses.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our approach combines traditional Indian culinary artistry with modern presentation, 
              delivering an unforgettable dining experience.
            </p>
          </div>
          <div 
            className="h-[600px] bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80")'
            }}
          />
        </div>
      </div>
    </section>
  );
}