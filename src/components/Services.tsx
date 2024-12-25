import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Corporate Events",
    description: "Elevate your corporate gatherings with meticulously crafted culinary experiences.",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80"
  },
  {
    title: "Private Dining",
    description: "Intimate gatherings transformed through exceptional flavors and presentation.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80"
  }
];

export default function Services() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-center mb-24 tracking-tight">Services</h2>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}