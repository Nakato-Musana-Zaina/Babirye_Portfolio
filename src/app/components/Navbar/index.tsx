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
//         <FaTimes className="w-6 h-6 text-gray-800" />
//       ) : (
//         <FaBars className="w-6 h-6 text-gray-800" />
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
//     <header className="flex flex-col md:flex-row justify-between items-center p-4 mx-auto max-w-9xl bg-gray-50 relative">
//       <div className="flex items-center justify-between w-full">
//         <div className="flex items-center ml-4 md:ml-12 mr-10">
//           <img
//             src="/images/shawazilogo.png"
//             alt="logo"
//             className="h-16 md:h-24 lg:h-32"
//           />
//         </div>

//         <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
//       </div>

//       {/* Desktop Menu */}
//       <nav
//         className={`hidden md:flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 mr-16`}
//       >
//         {[
//           { href: "/#landingpage", label: "Home" },
//           { href: "/#skills", label: "Skills" },
//           { href: "/#personalstatement", label: "Personal Statement" },
//           { href: "/#contacts", label: "Contacts" },
//         ].map(({ href, label }, index) => (
//           <Link
//             key={index}
//             href={href}
//             className={`flex items-center gap-2 ${
//               isActive(href)
//                 ? "font-bold text-yellow-500"
//                 : "hover:text-yellow-500"
//             }`}
//             onClick={handleLinkClick}
//           >
//             {label}
//           </Link>
//         ))}
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <>
//           <div
//             id="overlay"
//             className="fixed inset-0 bg-gray-800 opacity-70 z-40"
//             onClick={handleOverlayClick}
//           />
//           <nav
//             id="mobile-menu"
//             className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-gray-50 bg-opacity-90 z-50 p-4 space-y-2 text-gray-800"
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
//                 className={`flex items-center gap-2 text-base sm:text-lg md:text-xl py-2 ${
//                   isActive(href)
//                     ? "font-bold text-yellow-500"
//                     : "hover:text-yellow-500"
//                 }`}
//                 onClick={handleLinkClick}
//               >
//                 {label}
//               </Link>
//             ))}
//           </nav>
//           <div className="fixed top-4 right-8 mt-5 z-50">
//             <HamburgerMenu isOpen={true} toggleMenu={toggleMenu} />
//           </div>
//         </>
//       )}
//     </header>
//   );
// };

// export default Navbar;




"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

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
      <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-7xl">
       
        <div className="flex items-center">
          <h1 className="text-yellow-300 font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide">
            Babirye<span className="text-yellow-300">.</span>
          </h1>
        </div>

       
        <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

        
        <nav className="hidden md:flex items-center gap-8 text-sm sm:text-base md:text-lg text-white">
          {[
            { href: "/#landingpage", label: "Home" },
            { href: "/#skills", label: "Skills" },
            { href: "/#personalstatement", label: "Personal Statement" },
            { href: "/#contacts", label: "Contacts" },
          ].map(({ href, label }, index) => (
            <Link
              key={index}
              href={href}
              className={`transition-all duration-300 ${
                isActive(href)
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-300"
              }`}
            >
              {label}
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
              { href: "/#landingpage", label: "Home" },
              { href: "/#skills", label: "Skills" },
              { href: "/#personalstatement", label: "Personal Statement" },
              { href: "/#contacts", label: "Contacts" },
            ].map(({ href, label }, index) => (
              <Link
                key={index}
                href={href}
                className={`text-lg sm:text-xl py-2 transition-all duration-300 ${
                  isActive(href)
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`}
                onClick={handleLinkClick}
              >
                {label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;
