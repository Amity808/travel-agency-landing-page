import React from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import Logo from '../../images/Logo.png';
import Decore from '../../images/Decore.png';
import { GoChevronDown } from "react-icons/go";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='flex justify-between p-8'>
      <div className=' flex-1 flex justify-start items-start'>
        <div className=' mr-8'>
          <img src={Logo} alt="Jaboo" className='w-18 h-6'/>
        </div>
      <div className=' lg:flex justify-between pl-20 items-center max-md:hidden max-sm:hidden'>
        <p className='ml-9'><a href="#Desitnations">Desitnations</a></p>
        <p className='ml-9'><a href="#Hotels">Hotels</a></p>
        <p className='ml-9'><a href="#Flights">Flights</a></p>
        <p className='ml-9'><a href="#Bookings">Bookings</a></p>
      </div>
      </div>
      <div className='lg:flex justify-end items-center md:hidden max-md:hidden'>
        <p className='ml-9'><a href="#Login">Login</a></p>
        <button className='ml-9'>Sign up</button>
        <select name="en" id="en" className='ml-9'>
              <option value="en">En</option>
              <option value="fen">Fre</option>
            </select>
      </div>
      <div className='lg:hidden ml-4 relative '>
        {toggleMenu 
        ? <RiCloseLine color='0000' size={27} onClick={() => setToggleMenu(false)} className='relative left-44' /> : <RiMenu3Line color='0000' size={27} onClick={() => setToggleMenu(true)} className=''/>}
        {toggleMenu && (
          <div className='lg:hidden flex p-7 justify-center items-start flex-col'>
            {/* <div className=''> */}
              <p className='ml-9 mt-2'><a href="#Desitnations">Desitnations</a></p>
              <p className='ml-9 mt-2'><a href="#Hotels">Hotels</a></p>
              <p className='ml-9 mt-2'><a href="#Flights">Flights</a></p>
              <p className='ml-9 mt-2'><a href="#Bookings">Bookings</a></p>
              
            {/* </div> */}
            {/* <div className='flex flex-col'> */}
            <p className='ml-9 mt-2'><a href="#Login">Login</a></p>
            <button className='ml-9 mt-2'>Sign up</button>
            <select name="en" id="en" className='ml-9 mt-2'>
              <option value="en">En</option>
              <option value="fen">Fre</option>
            </select>
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
