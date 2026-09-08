import "./animatedBanner.css";

export default function AnimatedBanner() {
     return (
          <div className="bg-linear-to-tr from-[#FFAA00] to-[#FF7700]">
               <p className="font-bold py-3 flex justify-end items-center text-xl animated-banner overflow-hidden">Order ahead and skip the line!!!</p>
          </div>
     );
}
