import showcaseImage from "../../assets/showcase_1.jpg";
import showcaseImage2 from "../../assets/showcase_2.jpg";
import { movies } from "../../utils/movies";

export default function Showcase() {
     return (
          <>
               <div className="flex justify-between items-start bg-linear-to-br from-neutral-800/40 to-neutral-950">
                    <div className="relative w-3/5 flex justify-between items-center">
                         <img src={ showcaseImage } alt="Showcase" className="object-cover" />
                         <div className="bg-linear-to-l from-transparent to-neutral-950 absolute top-0 left-0 h-full w-full"></div>
                    </div>
                    <div className="w-2/5 text-white p-10">
                         <h1 className="text-5xl font-bold my-8 text-center">
                              { movies[ 3 ]?.title }
                         </h1>
                         <h3 className="text-2xl">
                              { movies[ 3 ]?.description }
                         </h3>
                    </div>
               </div >
               <div className="flex justify-between items-start bg-linear-to-tl from-neutral-800/40 to-neutral-950">
                    <div className="w-2/5 text-white p-10">
                         <h1 className="text-5xl font-bold my-8 text-center">
                              { movies[ 4 ]?.title }
                         </h1>
                         <h3 className="text-2xl">
                              { movies[ 4 ]?.description }
                         </h3>
                    </div>
                    <div className="relative w-3/5 flex justify-between items-center">
                         <img src={ showcaseImage2 } alt="Showcase" className="object-cover" />
                         <div className="bg-linear-to-r from-transparent to-neutral-950 absolute top-0 left-0 h-full w-full"></div>
                    </div>
               </div >
          </>
     );
}
