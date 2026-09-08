import AMC from "../assets/7.png";
import YellowButton from "./ui/YellowButton";

export default function Footer() {
     return (
          <footer className="flex flex-col justify-center items-center p-10">
               <img src={ AMC } alt="AMC Logo" className="w-3/5" />
               <div className="flex justify-evenly items-center w-full mt-10">
                    <YellowButton>Get Tickets</YellowButton>
                    <YellowButton>Order Food</YellowButton>
               </div>
          </footer>
     );
}
