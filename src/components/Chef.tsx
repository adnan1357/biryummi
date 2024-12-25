import React from 'react';

export default function Chef() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="h-[500px] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80")'
            }}
          />
          <div>
            <h2 className="text-4xl font-serif mb-6">Meet Our Master Chef</h2>
            <p className="text-gray-600 mb-6">
              With over two decades of experience in traditional Indian cuisine, our head chef brings 
              authentic flavors and techniques passed down through generations. Trained in the finest 
              culinary institutions and having worked in prestigious establishments across India, 
              they ensure every dish meets the highest standards of quality and taste.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">20+</span>
                <span className="text-gray-700">Years of Experience</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">50+</span>
                <span className="text-gray-700">Signature Recipes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}