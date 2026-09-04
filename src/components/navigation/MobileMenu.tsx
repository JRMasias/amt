import { useState, useEffect } from "react";

export default function MobileMenu() {
     const [ isOpen, setIsOpen ] = useState(false);

     useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
               const mobileMenu = document.getElementById("mobile-menu");
               if (mobileMenu && !mobileMenu.contains(event.target as Node)) {
                    setIsOpen(false);
               }
          };

          document.addEventListener("mousedown", handleClickOutside);
          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
          };
     }, []);

     function handleMenuItemClick() {
          setIsOpen(!isOpen);
     }

     return (
          // create a hamburger menu with 3 lines that opens a menu with the same items as the desktop menu when clicked
          <div className="relative">
               <button onClick={ handleMenuItemClick } className="flex flex-col justify-center items-center gap-2">
                    <span className="block w-8 h-1 bg-white"></span>
                    <span className="block w-8 h-1 bg-white"></span>
                    <span className="block w-8 h-1 bg-white"></span>
               </button>
               { isOpen && (
                    <ul id="mobile-menu" className="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg py-2 z-10">
                         <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
                         <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Movies</li>
                         <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Order</li>
                         <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Contact</li>
                    </ul>
               ) }
          </div>
     );
}
