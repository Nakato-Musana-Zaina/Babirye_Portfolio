// components/PersonalStatement.js
"use client"

import React from 'react';
import Image from 'next/image';
import { FaUserAlt } from 'react-icons/fa'; // Importing icon from react-icons

export default function PersonalStatement() {
  return (
    <section className=" bg-gray-800 text-white flex flex-col md:flex-row items-center justify-center px-4 md:px-0 mr-20 ml-20 ">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mr-20 flex justify-center md:justify-end pr-8">
        <div className="w-full max-w-lg relative">
          <Image
            src="/profile.jpg" // Replace with your image path
            alt="Profile"
            width={500}
            height={500}
            className="rounded-lg shadow-lg border-4 border-yellow-300 border-double" // Inner border
          />
          {/* Outer border with fade-out effect */}
          <div className="absolute inset-0 border-8 border-yellow-400 rounded-lg pointer-events-none bg-gradient-to-b from-transparent to-gray-800"></div>
        </div>
      </div>

      <div className="w-full  justify-center mb-8 mt-8"> {/* Added margin top for spacing */}
        <h2 className="text-3xl mr-10 md:text-4xl lg:text-6xl font-bold flex items-center fade-in"> {/* Responsive text size with fade-in class */}
          <FaUserAlt className="mr-2 md:mr-4 text-yellow-300" size={40} /> {/* Adjusted icon size */}
          About Me
        </h2>
        <p className="text-lg font-light italic fade-in"> {/* Adjusted text size with fade-in class */}
            Together, let's innovate and create impactful <br/>solutions for a better tomorrow.
          </p>
      </div>

      <div>

        
      </div>

      {/* Text Section */}
      <div className="p-4 md:p-8 flex flex-col justify-start">
        {/* Heading Section */}
       
        <div className="mb-10 mr-6"> {/* Increased margin bottom */}
          <p className="mt-4 text-lg md:text-xl font-light fade-in"> {/* Adjusted text size with fade-in class */}
            I am a <span className="font-semibold text-yellow-300">resourceful and inventive</span> individual who aspires to apply my technical know-how and
            fervor for solving problems to contribute to projects at the leading edge of technology.
          </p>
        </div>
        
        <div>
          <p className="text-lg md:text-xl font-light mb-6 fade-in"> {/* Adjusted text size with fade-in class */}
            I have a solid grounding in the principles of <span className="font-semibold text-yellow-300">civil engineering</span>. My interest
            and confidence lie in the design, development, and optimization of projects with a focus on not just <span className="font-semibold text-yellow-300">efficiency and
            sustainability</span> but also <span className="font-semibold text-yellow-300">user experience</span>. I am a <span className="font-semibold text-yellow-300">team player</span> who values
            diversity and open communication, with an unflinching commitment to the success of the group.
          </p>
         
        </div>
      </div>

      {/* Custom Styles for Animation */}
      <style jsx>{`
        /* Add fade-in animation */
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </section>
  );
}