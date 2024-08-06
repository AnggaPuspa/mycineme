'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import data from '../data/heroData.json'; 
import Genre from './atoms/Genre';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = data;


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval); 
  }, [items.length]);

  const { image, status, title, genre, description } = items[currentIndex];

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full p-8 bg-gradient-to-b from-black/60 to-black/90 text-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-6">
            <p className="text-xl font-semibold uppercase bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
              #{currentIndex + 1} Populer
            </p>
            <h1 className="text-4xl font-bold mt-2 mb-4">{title}</h1>
            <p className="text-md italic max-w-[70px] break-words">
              {status}
            </p>
            <div className="flex flex-wrap mt-2 mb-4">
              {genre.map((g, index) => (
                <Genre key={index} genre={g} />
              ))}
            </div>
            <p className="text-md mb-4 max-w-[500px] break-words">{description}</p>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300">
                Nonton
              </button>
              <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
