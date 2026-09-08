import AMC from "../assets/7.png";
import amcLogo from "../assets/9.png";
import Divider from "./ui/Divider";
import YellowButton from "./ui/YellowButton";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
     return (
          <footer className="flex flex-col justify-center items-center pt-10">
               <img src={ AMC } alt="AMC Logo" className="w-3/5" />
               <div className="flex justify-evenly items-center w-full mt-10">
                    <YellowButton>Get Tickets</YellowButton>
                    <YellowButton>Order Food</YellowButton>
               </div>
               <Divider>
                    <FaFacebookF className="text-2xl w-10 h-10 p-2 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
                    <FaInstagram className="text-2xl w-10 h-10 p-2 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
                    <FaTwitter className="text-2xl w-10 h-10 p-2 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
                    <FaYoutube className="text-2xl w-10 h-10 p-2 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
               </Divider>
               <div className="w-full bg-neutral-800 p-5 flex justify-between items-center">
                    <div>
                         <h1 className="text-white text-2xl font-bold mb-2">
                              About Us
                         </h1>
                         <ul className="text-white text-lg">
                              <li>Item 1</li>
                              <li>Item 2</li>
                         </ul>
                    </div>
                    <div>
                         <h1 className="text-white text-2xl font-bold mb-2">
                              Movies
                         </h1>
                         <ul className="text-white text-lg">
                              <li>Item 1</li>
                              <li>Item 2</li>
                         </ul>
                    </div>
                    <div>
                         <h1 className="text-white text-2xl font-bold mb-2">
                              Programming
                         </h1>
                         <ul className="text-white text-lg">
                              <li>Item 1</li>
                              <li>Item 2</li>
                         </ul>
                    </div>
                    <div>
                         <h1 className="text-white text-2xl font-bold mb-2">
                              More
                         </h1>
                         <ul className="text-white text-lg">
                              <li>Item 1</li>
                              <li>Item 2</li>
                         </ul>
                    </div>
               </div>
               <div className="w-full flex flex-col justify-center items-center border-t border-neutral-600 py-5 bg-neutral-800 gap-4">
                    <img src={ amcLogo } alt="AMC Logo" className="w-24" />
                    <p className="text-white text-center">
                         &copy; 2026 AMT Theatre Theaters
                    </p>
               </div>
          </footer>
     );
}
