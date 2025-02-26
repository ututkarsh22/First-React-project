import box from '../assets/mark-slomkowski-0UnZVzTO0oc-unsplash.jpg'
import React, { useRef } from 'react';
import Downbar from './downbar';
export default function Middle(){

    const downbarRef = useRef(null);
    const scrollToDownbar = () => {
        if (downbarRef.current) {
          downbarRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
    return(
        <>
        <section className="h-[80vh]  bg-no-repeat bg-cover  p-20  ">
        <div className="h-[423px] w-[30vw] bg-yellow-600 m-8 mt-3  rounded-xl absolute backdrop-blur-xl"></div>
        <img className="h-[423px] w-[30vw]  m-8 mt-3  rounded-xl absolute bottom-22 " src={box} alt='box'/>
        <h1 className=" text-[60px] mx-[700px] font-bold text-white font-mono ">
            Welcome
        </h1>
        <pre className="text-[30px] text-black mx-[550px] font-bold ">Tourist Want to Travel Anywhere...</pre>
        <div className="flex mx-[550px]">
        <pre className="text-[50px] text-black font-bold">GuiderPRO</pre> 
        <pre className="text-2xl mx-3 mt-7 italic text-black ">is Here</pre>
        </div>
        <p className="ml-[552px] text-[#bfa516]  mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit rerum quos officiis quaerat aperiam</p>
        <p className="ml-[552px] text-[#bfa516] "> Consequatur, quam esse corrupti voluptates, nulla, molestiae unde nihil expedita eveniet laboriosam necessitatibus suscipit at aperiam?</p>
        <p className="ml-[552px] text-[#bfa516] "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et, voluptatem nihil asperiores maxime perferendis aliquid eveniet.</p>
        <button className="rounded-xl ml-[552px] mt-10 bg-slate-500 w-28 h-10 p-2 text-white shadow-xl shadow-slate- hover:bg-yellow-600 hover:text-black bold transition-all ease-in" onClick={scrollToDownbar}  >Scroll Down</button>
        </section>
       
        </>
    )
}