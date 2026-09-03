import logo from "../../assets/9.png";

export default function Navbar() {

     return (
          <nav className="flex justify-between items-center px-4 py-4 h-16 text-white">
               <img src={ logo } alt="Logo" className="object-contain h-full" />
               {/* mobile : desktop menu */ }
          </nav>
     );
}
