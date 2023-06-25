import React from 'react';
import { AiOutlineRocket } from "react-icons/ai";


const TraveLCard = ({ imgUrlTag, text, price, date}) => {
  return (
    <div className='flex flex-col w-80 h-80 items-center max-sm:justify-center max-sm:items-center'>
      <div className='w-80 h-70 max-sm:w-60'>
        <img src={`../../images/${imgUrlTag}`} alt=""className='w-full h-full -mb-6' />
      </div>
        <div className='flex flex-row -mt-16'>
          <p className=' mr-12'>{text}</p>
          <p>{price}</p>
        </div>
        <div className='flex flex-row mt-6'>
          <AiOutlineRocket size={20} className=' items-center' />
          <p className='ml-2'>{date}</p>
        </div>
      
    </div>
  )
}

export default TraveLCard
