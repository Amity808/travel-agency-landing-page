import React from 'react'
import './header.css'
import play_btn from '../../images/Playbutton.png'
import Header_pc from '../../images/pic_head.png'

const Header = () => {
  return (
    <div className='header__container flex flex-row mt-4'>
      <div className='flex justify-start flex-col text-left'>
        <h5 className='text-red-400 text-lg mt-4'>Best Destinations around the world</h5>
        <h1 className='text-black font-bold text-7xl mt-6 mb-8'>Travel, enjoy <br /> and live a new <br /> and full life</h1>
        <p className='text-sm text-blue-900'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
        <div className='flex flex-row justify-start items-center'>
        <button>Find out more</button>
        <img src={play_btn} alt="Play" className=' w-12 h-12 mt-3' />
        <p>Play Demo</p>
        </div>
      </div>
      <div>
          <img src={Header_pc} alt="long Journey" className='w-full h-full' />
      </div>
    </div>
  )
}

export default Header
