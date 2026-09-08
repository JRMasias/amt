import clsx from "clsx";
import { movies } from "../../utils/movies";

export default function Showcase() {
     return (
          <>
               { movies.filter(movie => movie.showcaseImage).map((movie) => (
                    <div className="flex justify-between items-start bg-linear-to-br from-neutral-800/40 to-neutral-950">
                         <div className={ clsx("relative w-3/5 flex justify-between items-center", movie.id % 2 === 0 ? "order-first" : "order-last") }>
                              <img src={ movie.showcaseImage } alt="Showcase" />
                              <div className="bg-linear-to-l from-transparent to-neutral-950 absolute top-0 left-0 h-full w-full"></div>
                         </div>
                         <div className="w-2/5 text-white p-10">
                              <h1 className="text-5xl font-bold my-8 text-center">
                                   { movie.title }
                              </h1>
                              <h3 className="text-2xl">
                                   { movie.description }
                              </h3>
                         </div>
                    </div >
               )) }
          </>
     );
}
