import logo from "../../assets/9.png";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Desktop from "./Desktop";

export default function Navbar() {
     const [ screenSize, setScreenSize ] = useState(window.innerWidth);

     useEffect(() => {
          const handleResize = () => setScreenSize(window.innerWidth);
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
     }, []);

     return (
          <nav className="flex justify-between items-center px-4 py-4 h-16 text-white">
               <img src={ logo } alt="Logo" className="object-contain h-full" />
               {/* mobile : desktop menu */ }
               { screenSize < 768 ? <MobileMenu /> : <Desktop /> }
          </nav>
     );
}
