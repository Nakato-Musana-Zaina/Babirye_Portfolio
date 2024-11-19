"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes, FaHome, FaTools, FaUser, FaEnvelope } from "react-icons/fa";

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden flex flex-col justify-center items-center space-y-1 z-50"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      {isOpen ? (
        <FaTimes className="w-6 h-6 text-yellow-300" />
      ) : (
        <FaBars className="w-6 h-6 text-yellow-300" />
      )}
    </button>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-70 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-8xl">
        <div className="flex items-center">
          <h1 className="text-yellow-300 font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide">
            Babirye<span className="text-yellow-300">.</span>
          </h1>
        </div>

        <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

        <nav className="hidden md:flex items-center gap-20 text-sm sm:text-base md:text-lg text-white">
          {[
            { href: "/#landingpage", label: "Home", icon: <FaHome className="w-5 h-5" /> },
            { href: "/#skills", label: "Skills", icon: <FaTools className="w-5 h-5" /> },
            { href: "/#personalstatement", label: "Personal Statement", icon: <FaUser className="w-5 h-5" /> },
            { href: "/#contacts", label: "Contacts", icon: <FaEnvelope className="w-5 h-5" /> },
          ].map(({ href, label, icon }, index) => (
            <Link
              key={index}
              href={href}
              className={`flex items-center gap-2 transition-all duration-300 ${
                isActive(href)
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-300"
              }`}
            >
              {icon} {label}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <>
          <div
            id="overlay"
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleOverlayClick}
          />
          <nav
            id="mobile-menu"
            className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-90 z-50 space-y-6 text-white"
          >
            {[
              { href: "/#landingpage", label: "Home", icon: <FaHome className="w-5 h-5" /> },
              { href: "/#skills", label: "Skills", icon: <FaTools className="w-5 h-5" /> },
              { href: "/#personalstatement", label: "Personal Statement", icon: <FaUser className="w-5 h-5" /> },
              { href: "/#contacts", label: "Contacts", icon: <FaEnvelope className="w-5 h-5" /> },
            ].map(({ href, label, icon }, index) => (
              <Link
                key={index}
                href={href}
                className={`flex items-center gap-2 text-lg sm:text-xl py-2 transition-all duration-300 ${
                  isActive(href)
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`}
                onClick={handleLinkClick}
              >
                {icon} {label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;





// "use client";

// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";

// interface HamburgerMenuProps {
//   isOpen: boolean;
//   toggleMenu: () => void;
// }

// const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
//   return (
//     <button
//       onClick={toggleMenu}
//       className="md:hidden flex flex-col justify-center items-center space-y-1 z-50"
//       aria-expanded={isOpen}
//       aria-controls="mobile-menu"
//     >
//       {isOpen ? (
//         <FaTimes className="w-6 h-6 text-yellow-300" />
//       ) : (
//         <FaBars className="w-6 h-6 text-yellow-300" />
//       )}
//     </button>
//   );
// };

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const isActive = (href: string) => pathname === href;

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

//   const handleOverlayClick = () => {
//     setMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-70 shadow-lg">
//       <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-7xl">
       
//         <div className="flex items-center">
//           <h1 className="text-yellow-300 font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide">
//             Babirye<span className="text-yellow-300">.</span>
//           </h1>
//         </div>

       
//         <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

        
//         <nav className="hidden md:flex items-center gap-8 text-sm sm:text-base md:text-lg text-white">
//           {[
//             { href: "/#landingpage", label: "Home" },
//             { href: "/#skills", label: "Skills" },
//             { href: "/#personalstatement", label: "Personal Statement" },
//             { href: "/#contacts", label: "Contacts" },
//           ].map(({ href, label }, index) => (
//             <Link
//               key={index}
//               href={href}
//               className={`transition-all duration-300 ${
//                 isActive(href)
//                   ? "text-yellow-300 font-bold"
//                   : "hover:text-yellow-300"
//               }`}
//             >
//               {label}
//             </Link>
//           ))}
//         </nav>
//       </div>

      
//       {menuOpen && (
//         <>
          
//           <div
//             id="overlay"
//             className="fixed inset-0 bg-black bg-opacity-50 z-40"
//             onClick={handleOverlayClick}
//           />
         
//           <nav
//             id="mobile-menu"
//             className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-90 z-50 space-y-6 text-white"
//           >
//             {[
//               { href: "/#landingpage", label: "Home" },
//               { href: "/#skills", label: "Skills" },
//               { href: "/#personalstatement", label: "Personal Statement" },
//               { href: "/#contacts", label: "Contacts" },
//             ].map(({ href, label }, index) => (
//               <Link
//                 key={index}
//                 href={href}
//                 className={`text-lg sm:text-xl py-2 transition-all duration-300 ${
//                   isActive(href)
//                     ? "text-yellow-300 font-bold"
//                     : "hover:text-yellow-300"
//                 }`}
//                 onClick={handleLinkClick}
//               >
//                 {label}
//               </Link>
//             ))}
//           </nav>
//         </>
//       )}
//     </header>
//   );
// };

// export default Navbar;
