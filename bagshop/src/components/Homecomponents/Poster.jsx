import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function Poster() {
  const h1 = useRef();
  const image = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      h1.current,
      {  y: -100, opacity: 0, },
      {  y: 0, opacity: 1 , duration:1,
         scrollTrigger : {
        trigger:h1.current,
        start:"top 80%",
        end:"top 30%",
        toggleActions:"play none none reverse"

      }
       },
    );
  }, []);

  return (
    <div className="flex items-center flex-col md:flex-row justify-evenly  bg-zinc-100">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center items-center">
        <h1 ref={h1} className="text-xl lg:text-6xl md:text-3xl font-bold">
          Carry style with every step — explore bags that speak elegance.
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <img
          ref={image}
          className="rounded h-auto w-full object-cover"
          src="https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJhZ3N8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
    </div>
  );
}

export default Poster;
