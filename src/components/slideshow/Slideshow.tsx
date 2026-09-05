import { movies } from "../../utils/movies";

export default function Slideshow() {
     return (
          <section>
               <img src={ movies[ 0 ].image } alt={ movies[ 0 ].title } className="h-40 w-full aspect-video" />
          </section>
     );
}
