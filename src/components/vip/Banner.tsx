import vip from "../../assets/8.png";

export default function Banner() {
     return (
          <div className="flex justify-evenly items-center p-30">
               <button type="button" className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer w-80">
                    <img src={ vip } alt="VIP Banner" />
                    <p className="w-full py-3 bg-linear-to-l from-blue-700 to-blue-600 rounded-md text-white text-lg font-bold flex justify-center items-center">Become A VIP Member</p>
               </button>
               <div className="text-3xl text-center font-medium mt-4">
                    <div className="text-white">

                         <p>
                              Want to skip the line?
                         </p>
                         <p>
                              Want free movies?<br />
                         </p>
                    </div>
                    <p className="text-[#FFAA00] font-bold text-4xl mt-4">
                         Become a VIP member today!
                    </p>
               </div>
          </div>
     );
}
