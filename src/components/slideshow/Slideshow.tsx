import { useState, useEffect } from "react";
import { movies } from "../../utils/movies";


export default function Slideshow() {
     const [ screenSize, setScreenSize ] = useState(window.innerWidth);

     useEffect(() => {
          const handleResize = () => {
               setScreenSize(window.innerWidth);
          };
          window.addEventListener('resize', handleResize);
          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, []);

     return (
          <section>
               { screenSize > 768 ? <img src={ movies[ 0 ].image } alt={ movies[ 0 ].title } className="w-full" /> :
                    <img src={ movies[ 0 ].imageMobile } alt={ movies[ 0 ].title } className="w-full max-h-screen" /> }
          </section>
     );
}
