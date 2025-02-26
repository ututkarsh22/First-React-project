import React, { useState } from 'react';
import dalhousie from '../assets/gettyimages-514086385-612x612.jpg'
import goldenTemple from '../assets/photo-1583821017783-4333717df070.avif'
import shimla from '../assets/istockphoto-1224392597-612x612.webp'


export default function Next(){

    const options = [
        "Agra", "Ahmedabad", "Alleppey", "Aurangabad", 
  "Bangalore", "Bhopal", "Bhuj", "Bikaner", 
  "Chandigarh", "Chennai", "Coimbatore", "Cochin", 
  "Delhi", "Darjeeling", "Dharamsala", "Dhanbad", 
  "Erode", "Ernakulam", "Esplanade", 
  "Faridabad", "Fatehpur Sikri", "Fort Kochi", 
  "Goa", "Gurgaon", "Gulmarg", "Gangtok", 
  "Hyderabad", "Haridwar", "Hampi", "Himachal Pradesh", 
  "Indore", "Imphal", "Itanagar", 
  "Jaipur", "Jodhpur", "Jaisalmer", "Jammu", 
  "Kolkata", "Kochi", "Kumarakom", "Kullu", 
  "Leh", "Lucknow", "Lonavala", "Ludhiana", 
  "Mumbai", "Manali", "Mysore", "Madurai", 
  "New Delhi", "Nainital", "Nasik", "Nagpur", 
  "Ooty", "Orchha", "Ongole", 
  "Pune", "Pondicherry", "Pushkar", "Port Blair", 
  "Qutub Minar (Delhi)", 
  "Rishikesh", "Rajasthan", "Rajkot", "Rameswaram", 
  "Shimla", "Srinagar", "Surat", "Somnath", 
  "Tirupati", "Taj Mahal (Agra)", "Tiruvannamalai", "Tawang", 
  "Udaipur", "Udhampur", "Uttarakhand", "Unjha", 
  "Varanasi", "Vadodara", "Vijayawada", "Varkala", 
  "Wayanad", "Wagah Border", "Warangal", 
  "Yelagiri", "Yamunotri", 
  "Ziro"
      ];
    
      const [query, setQuery] = useState('');
      const [filteredOptions, setFilteredOptions] = useState([]);
    
      const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        if (value === '') {
          setFilteredOptions([]);
        } else {
          const filtered = options.filter((option) =>
            option.toLowerCase().includes(value.toLowerCase())
          );
          setFilteredOptions(filtered);
        }
      };
    
      const handleOptionSelect = (option) => {
        setQuery(option);
        setFilteredOptions([]);
      };
    
    return(
        <>
        <section className="h-[130vh] w-full flex items-center flex-col pt-20">
            <h1 className=" mt-8 text-6xl font-mono">Destinations</h1>
            <input  type="text"
        value={query}
        onChange={handleChange}
        className="w-[80vw] h-12 mt-12 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-black p-5 rounded-xl text-slate-800 "
        placeholder="Search destination..."  />
            {filteredOptions.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto z-10 transition-all transform opacity-100 scale-100 duration-200 ease-in-out">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
        )}
        <div className='flex p-13 flex-col items-center mt-[150px] space-x-10'>
            <h1 className=' text-6xl '>Our Guiders Are All There</h1>
        <div className='w-full h-[23vw] mt-12 grid grid-cols-3 gap-3'>
        <img src={dalhousie} className='bg-blue-500 w-[25vw] h-[40vh] rounded-xl mt-8 hover:h-[43vh] hover:w-[27vw] hover:ease-out hover:transition-all hover:duration-700 hover:ease-in-out'/>
        <img src={goldenTemple} className='bg-blue-500 w-[25vw] h-[40vh]  rounded-xl mt-8 hover:h-[43vh] hover:w-[27vw] hover:ease-out hover:transition-all hover:duration-700 hover:ease-in-out'/>
        <img src={shimla} className='bg-blue-500 w-[25vw] h-[40vh] rounded-xl mt-8 hover:h-[43vh] hover:w-[27vw]  hover:transition-all hover:duration-700 hover:ease-in-out'/>
        
        </div>
        </div>
        </section>
        </>
    )
}