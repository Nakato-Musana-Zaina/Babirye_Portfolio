// // components/SkillsList.js
// import {
//     FaDraftingCompass,
//     FaCheckCircle,
//     FaHammer,
//     FaRecycle,
//     FaCalculator,
//     FaTools,
//   } from 'react-icons/fa';
  
//   export default function SkillsList() {
//     const skills = [
//       {
//         icon: <FaDraftingCompass className="text-yellow-300 text-5xl mb-2" />,
//         title: "AutoCAD Familiarity",
//         subtitle: "Drafting & Design Software",
//         text: "Familiarity with AutoCAD, Civil 3D, and structural analysis tools",
//       },
//       {
//         icon: <FaCheckCircle className="text-yellow-300 text-5xl mb-2" />,
//         title: "Project Management",
//         subtitle: "Planning & Coordination",
//         text: "Understanding of project phases, scheduling, documentation, and budgeting",
//       },
//       {
//         icon: <FaHammer className="text-yellow-300 text-5xl mb-2" />,
//         title: "Structural Knowledge",
//         subtitle: "Load Calculations",
//         text: "Knowledge of load calculations and structural integrity",
//       },
//       {
//         icon: <FaTools className="text-yellow-300 text-5xl mb-2" />,
//         title: "Material Science",
//         subtitle: "Construction Materials",
//         text: "Understanding properties and uses of construction material",
//       },
//       {
//         icon: <FaDraftingCompass className="text-yellow-300 text-5xl mb-2" />,
//         title: "Surveying Skills",
//         subtitle: "Topographical Data",
//         text: "Ability to interpret topographical data and use surveying equipment",
//       },
//       {
//         icon: <FaRecycle className="text-yellow-300 text-5xl mb-2" />,
//         title: "Green Practices",
//         subtitle: "Sustainability Awareness",
//         text: "Awareness of green practices and environmental regulations",
//       },
//       {
//         icon: <FaCalculator className="text-yellow-300 text-5xl mb-2" />,
//         title: "Analytical Skills",
//         subtitle: "Problem Solving",
//         text: "Ability to analyze challenges and develop effective solutions",
//       },
//       {
//         icon: <FaCheckCircle className="text-yellow-300 text-5xl mb-2" />,
//         title: "Precision Engineering",
//         subtitle: "Regulatory Compliance",
//         text: "Precision in calculations, designs, and regulatory compliance",
//       },
//       {
//         icon: <FaHammer className="text-yellow-300 text-5xl mb-2" />,
//         title: "Safety Standards",
//         subtitle: "OSHA Regulations",
//         text: "Knowledge of safety standards and OSHA regulations",
//       },
//     ];
  
//     return (
//       <section className="h-screen p-6 flex flex-col justify-center">
//         <h2 className="text-3xl font-bold text-center mb-8 text-yellow-300">Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-gray-700 p-8 rounded-lg shadow-lg hover:bg-gray-600 transition ease-in-out duration-300 transform hover:scale-105 hover:animate-bounce flex flex-col items-center justify-center h-[250px] mb-6"
//             >
//               {skill.icon}
//               <h3 className="text-xl font-semibold text-white mt-4">{skill.title}</h3>
//               <h4 className="text-md font-light text-yellow-300">{skill.subtitle}</h4>
//               <p className="text-lg text-center mt-2 text-white">{skill.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }


"use client"

"use client";

import { useState } from 'react';
import {
  FaDraftingCompass,
  FaCheckCircle,
  FaHammer,
  FaRecycle,
  FaCalculator,
  FaTools,
} from 'react-icons/fa';

export default function SkillsList() {
  const skills = [
    { icon: <FaDraftingCompass className="text-yellow-300 text-6xl mb-3" />, title: "AutoCAD Familiarity", subtitle: "Drafting & Design Software", text: "Familiarity with AutoCAD, Civil 3D, and structural analysis tools" },
    { icon: <FaCheckCircle className="text-yellow-300 text-6xl mb-3" />, title: "Project Management", subtitle: "Planning & Coordination", text: "Understanding of project phases, scheduling, documentation, and budgeting" },
    { icon: <FaHammer className="text-yellow-300 text-6xl mb-3" />, title: "Structural Knowledge", subtitle: "Load Calculations", text: "Knowledge of load calculations and structural integrity" },
    { icon: <FaTools className="text-yellow-300 text-6xl mb-3" />, title: "Material Science", subtitle: "Construction Materials", text: "Understanding properties and uses of construction material" },
    { icon: <FaDraftingCompass className="text-yellow-300 text-6xl mb-3" />, title: "Surveying Skills", subtitle: "Topographical Data", text: "Ability to interpret topographical data and use surveying equipment" },
    { icon: <FaRecycle className="text-yellow-300 text-6xl mb-3" />, title: "Green Practices", subtitle: "Sustainability Awareness", text: "Awareness of green practices and environmental regulations" },
    { icon: <FaCalculator className="text-yellow-300 text-6xl mb-3" />, title: "Analytical Skills", subtitle: "Problem Solving", text: "Ability to analyze challenges and develop effective solutions" },
    { icon: <FaCheckCircle className="text-yellow-300 text-6xl mb-3" />, title: "Precision Engineering", subtitle: "Regulatory Compliance", text: "Precision in calculations, designs, and regulatory compliance" },
    { icon: <FaHammer className="text-yellow-300 text-6xl mb-3" />, title: "Safety Standards", subtitle: "OSHA Regulations", text: "Knowledge of safety standards and OSHA regulations" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - itemsPerPage + skills.length) % skills.length);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % skills.length);
  };

  const visibleSkills = skills.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="h-screen p-8 flex flex-col justify-center">
      <h2 className="text-5xl  font-bold mb-14 flex items-center justify-center gap-4 ">
        <FaTools className="text-6xl" /> Skills
      </h2>
      <div className="relative flex items-center">
        <button onClick={handlePrev} className="absolute left-0 p-4 bg-gray-800 text-white rounded-full text-3xl transform hover:scale-110 transition">
          &#8592;
        </button>
        <div className="grid grid-cols-2 gap-10 mx-auto">
          {visibleSkills.map((skill, index) => (
            <div key={index} className="p-10 rounded-lg shadow-lg border-4 border-yellow-300 hover:bg-gray-600 transition ease-in-out duration-300 transform hover:scale-105 flex flex-col items-center justify-center h-[300px] box-border">
              <div className="p-6 bg-gray-700 rounded-lg">
                {skill.icon}
                <h3 className="text-2xl font-semibold text-white mt-4">{skill.title}</h3>
                <h4 className="text-lg font-light text-yellow-300">{skill.subtitle}</h4>
                <p className="text-lg text-center mt-3 text-white">{skill.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="absolute right-0 p-4 bg-gray-800 text-white rounded-full text-3xl transform hover:scale-110 transition">
          &#8594;
        </button>
      </div>
    </section>
  );
}
