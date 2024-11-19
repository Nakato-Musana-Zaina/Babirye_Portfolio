// "use client";

// import React from "react";
// import Image from "next/image";
// import { FaUserAlt } from "react-icons/fa"; 

// export default function PersonalStatement() {
//   return (
//     <section id="personalstatement" className="bg-gray-800 text-white flex flex-col md:flex-row items-center justify-center px-4 md:px-0 mr-8 ml-8 md:mr-20 md:ml-20 py-8">
      
//       <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-8 mb-8 md:mb-0">
//         <div className="w-full max-w-lg relative">
//           <Image
//             src="/babi2.jpg" 
//             alt="Profile"
//             width={500}
//             height={500}
//             className="rounded-lg shadow-lg border-4 border-yellow-300 border-double grayscale" 
//           />
          
//           <div className="absolute inset-0 border-8 border-yellow-400 rounded-lg pointer-events-none bg-gradient-to-b from-transparent to-gray-800"></div>
//         </div>
//       </div>

//       <div className="w-full flex flex-col justify-center mb-8 mt-8 md:mt-0">
//         <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold flex items-center text-center md:text-left fade-in">
//           <FaUserAlt className="mr-2 text-yellow-300" size={40} /> About Me
//         </h2>
//         <p className="text-lg md:text-xl font-light italic text-center md:text-left fade-in">
//           Together, let's innovate and create impactful <br /> solutions for a
//           better tomorrow.
//         </p>

//         <div className="p-4 md:p-8 flex flex-col justify-start">
//           <div className="mb-10">
//             <p className="mt-4 text-lg md:text-xl font-light fade-in">
//               I am a{" "}
//               <span className="font-semibold text-yellow-300">resourceful and inventive</span> individual who aspires to apply my technical know-how and fervor for solving problems to contribute to projects at the leading edge of technology.
//             </p>
//           </div>

//           <div>
//             <p className="text-lg md:text-xl font-light mb-6 fade-in">
//               I have a solid grounding in the principles of{" "}
//               <span className="font-semibold text-yellow-300">civil engineering</span>. My interest and confidence lie in the design, development, and optimization of projects with a focus on not just{" "}
//               <span className="font-semibold text-yellow-300">efficiency and sustainability</span> but also <span className="font-semibold text-yellow-300">user experience</span>. I am a{" "}
//               <span className="font-semibold text-yellow-300">team player</span> who values diversity and open communication, with an unflinching commitment to the success of the group.
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Add fade-in animation */
//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//           }
//           100% {
//             opacity: 1;
//           }
//         }

//         .fade-in {
//           animation: fadeIn 1s ease-in-out;
//         }
//       `}</style>
//     </section>
//   );
// }










"use client";

import React from "react";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa"; 

export default function PersonalStatement() {
  return (
    <section id="personalstatement" className="bg-gray-800 text-white flex flex-col md:flex-row items-center justify-center px-4 md:px-0 mr-8 ml-8 md:mr-20 md:ml-20 py-8">
      
      <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-8 mb-8 md:mb-0">
        <div className="w-full max-w-lg relative">
          <Image
            src="/babi2.jpg" 
            alt="Profile"
            width={500}
            height={500}
            className="rounded-lg shadow-lg border-4 border-yellow-300 border-double grayscale" 
          />
          
          <div className="absolute inset-0 border-8 border-yellow-400 rounded-lg pointer-events-none bg-gradient-to-b from-transparent to-gray-800"></div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center mb-8 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold flex items-center text-center md:text-left fade-in">
          <FaUserAlt className="mr-2 text-yellow-300" size={40} /> About Me
        </h2>
        <p className="text-2xl md:text-xl font-light italic text-center md:text-left fade-in">
          Together, let's innovate and create impactful <br /> solutions for a
          better tomorrow.
        </p>

        <div className="p-4 md:p-8 flex flex-col justify-start">
          <div className="mb-10">
            <p className="mt-4 text-lg md:text-xl font-light fade-in">
              I am a 
              {  } 
              <span className="font-semibold text-yellow-300">resourceful and inventive</span> individual who aspires to apply my technical know-how and fervor for solving problems to contribute to projects at the leading edge of technology.
            </p>
          </div>

          <div>
            <p className="text-lg md:text-xl font-light mb-6 fade-in">
              I have a solid grounding in the principles of{ }
              <span className="font-semibold text-yellow-300">civil engineering</span>. My interest and confidence lie in the design, development, and optimization of projects with a focus on not just{  }
              <span className="font-semibold text-yellow-300">efficiency and sustainability</span> but also <span className="font-semibold text-yellow-300">user experience</span>. I am a{  }
              <span className="font-semibold text-yellow-300">team player</span> who values diversity and open communication, with an unflinching commitment to the success of the group.
            </p>
          </div>
        </div>
      </div>

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
