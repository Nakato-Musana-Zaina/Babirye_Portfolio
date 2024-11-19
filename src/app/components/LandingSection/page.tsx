"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../Navbar";
import { BsTools, BsArchive, BsFillShieldLockFill } from "react-icons/bs";
import { FaHammer, FaHardHat, FaSuitcase } from "react-icons/fa";
import Image from "next/image";

interface Icon {
  id: number;
  icon: React.ComponentType<{ size: number }>;
  top: number;
  left: number;
}

export default function LandingSection() {
  const [icons, setIcons] = useState<Icon[]>([]);

  useEffect(() => {
    const newIcons: Icon[] = [
      { id: 1, icon: BsTools, top: 100, left: 100 },
      { id: 2, icon: FaHammer, top: 200, left: 300 },
      { id: 3, icon: FaSuitcase, top: 350, left: 500 },
      { id: 4, icon: FaHardHat, top: 600, left: 650 },
      { id: 5, icon: BsFillShieldLockFill, top: 750, left: 250 },
      { id: 6, icon: BsArchive, top: 850, left: 400 },
    ];
    setIcons(newIcons);
  }, []);

  return (
    <div id="landingpage" className="relative h-screen bg-gray-900 text-white overflow-hidden">
    
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <NavBar />

     
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-12 text-center md:text-left">
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {icons.map((icon) => {
            const IconComponent = icon.icon;
            return (
              <div
                key={icon.id}
                className="absolute text-yellow-300"
                style={{
                  top: `${icon.top}px`,
                  left: `${icon.left}px`,
                  animation: `fadeInOut 4s ease-in-out infinite`,
                  animationDelay: `${icon.id * 0.5}s`,
                }}
              >
                <IconComponent size={48} />
              </div>
            );
          })}
        </div>

        <div className="mb-8 md:mb-0 md:w-1/2 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-yellow-300">
            Babirye Musana
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8 max-w-xl mx-auto md:mx-0">
            Civil Engineer
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="/Resume.pdf"
              download 
              className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 px-8 py-4 md:px-10 md:py-5 font-bold text-lg md:text-xl rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

       
        <div className="w-full md:w-1/3 mt-8 md:mt-0 animate-fadeIn delay-300">
          <div className="p-2 border-4 border-yellow-300">
            <Image
              src="/barbie3.png"
              alt="Profile"
              width={300}
              height={300}
              className="w-full h-auto object-cover mx-auto md:mx-0 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            color: yellow;
          }
          50% {
            opacity: 1;
            color: orange;
          }
          100% {
            opacity: 0;
            color: yellow;
          }
        }
      `}</style>
    </div>
  );
}

















