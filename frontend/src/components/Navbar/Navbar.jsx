import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaStore } from "react-icons/fa";

const Navbar = ({cartCount}) => {
  return (
    <div className='flex items-center justify-between px-10 bg-[#4050b5] text-white'>

   
      <div className='py-4 text-2xl font-bold'>
        STACKSTORE FASHION
      </div>

    
      <div className='w-1/2'>
        <div className='relative'>
          <input
            type="text"
            placeholder="Search for a product"
            className="px-10 py-2 w-full bg-[#5c6ac1] rounded-md outline-none"
          />

          <FaSearch className="absolute left-3 top-3 text-white text-sm" />
        </div>
      </div>

      <ul className='flex items-center text-lg gap-10'>

        <li className='underline font-bold'>HOME</li>
        <li>SHOP</li>

     
        <li className='relative cursor-pointer'>

          <FaStore size={28} />

      
          <span className='absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-[1px] rounded-full'>
           2
          </span>

        </li>

      </ul>

    </div>
  )
}

export default Navbar;
