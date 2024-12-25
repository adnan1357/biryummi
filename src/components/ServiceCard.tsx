import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-2xl mb-8">
        <div 
          className="h-[400px] bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <h3 className="text-2xl font-medium mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}