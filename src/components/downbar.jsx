// import Video from '../assets/2249630-uhd_3840_2160_30fps.mp4'
import Sky from '../assets/3569294-uhd_3840_2160_24fps.mp4'

export default function Downbar() {


  
  return (
    <>
      <section className='flex justify-around  p-12 '>
        <video className=" h-[50vh] rounded-xl relative shadow-slate-700 shadow-xl " autoPlay loop muted>
          <source src={Sky} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
         <div className='w-1/2'>
         <h1 className='text-7xl mb-5'>Explore Your World</h1>
         <h1 className='text-7xl text-white'>Hurry Up</h1>
         <button className='h-[80px] w-[18vw] bg-slate-800 rounded-lg mt-12 text-5xl text-white font-serif' >30% Off </button>
         <h2 className='mt-5 text-2xl italic text-slate-900 font-serif ml-3'>Grab The Offer Now</h2>
         </div>
         </section>
    </>
  )
}