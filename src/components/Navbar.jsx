import logos from '../assets/GuiderPro-removebg-preview.png'
import search from '../assets/search-svgrepo-com.svg'
import React from 'react'
import './Navbar.css'

let Nav = () =>(
    

    <>
        <section className="w-full h-[60vh]  bg-[url('assets/man-conquered-a-high-mountain-motivation-free-image.webp')] bg-cover bg-no-repeat relative rounded-sx ">
        <nav className="h-[10vh]  flex justify-between">
            <div className='h-[100%] w-1/4  flex items-center justify-between '>
                <img src={logos} alt="logo" className='h-36 mt-3'/>
                
            </div>
            <div className='h-[100%]  w-3/4 flex justify-between items-center'>
            <div className='flex items-center'>
            <ul className="flex w-[40vw] font-bold justify-evenly items-center gap-10">
                    <li><a href="/">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Guides</a></li>
                    <li><a href="">ContactUs</a></li>  
                </ul>
                <img src={search} alt="search" className='h-8 mr-3'/>
                </div>
                <div className='flex justify-around items-center mr-3 h-[70%] w-40 text-white'>
                    <button className='bg-red-600 w-[40%] p-1 rounded-lg font-bold'>
                    Guider
                    </button>
                    <button className='bg-red-500 w-[40%] p-1 rounded-lg font-bold'>
                    Tourist
                    </button>
                </div>
            </div>
          
        </nav>

        </section>

    </>
)

export default Nav