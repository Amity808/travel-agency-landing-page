import React from 'react'

const Card = ({imgurl, title, text}) => {
  return (
    <div className='flex flex-col w-80 h-90 justify-center items-center mr-2'>
      <img src={imgurl} alt="" className=' w-20 h-30 flex-1' />
      <h4 className=' text-blue-800 text-xl'>{title}</h4>
      <p className='text-blue-900 text-base'>{text}</p>
    </div>
  )
}

export default Card
