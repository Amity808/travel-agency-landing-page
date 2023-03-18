import React from 'react'
import telegram from '../../images/telegram.png'
import circleleft from '../../images/circle-left.png'
import circleright from '../../images/circle-right.png'


const Newsletter = () => {
  return (
    <div className=' w-full h-96 bg-slate-400/60 rounded-tl-3xl rounded-r-md rounded-bl-md'>
      <div className=''>
      <img src={telegram} alt="" className='relative bottom-4 float-right left-4 z-10'/>
      <img src={circleright} alt="" className='relative float-right w-52 h-72 left-20' />
      <img src={circleleft} alt="" className='relative w-62 h-60 top-36' />
      </div>
      <div className='relative items-center bottom-40'>
        <div className='relative left-24'>
            <p className=' text-4xl font-semibold text-center items-center'>Subscribe to get information, latest news and other <br />interesting offers about Cobham</p>
        </div>
        <div className='mt-10'>
            <input type="email" name="email" id="" placeholder='Your email' className='text-lg p-3.5 rounded-l-lg bg-white text-black'  />
            <button className=' bg-orange-800 p-3.5 text-lg rounded-r-lg text-white'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
