import React from 'react'

const FooterCard = ({title, text, text1, text2}) => {
  return (
    <div className='flex flex-col mt-4 ml-4'> 
      <h1 className=' text-2xl font-bold mb-3 cursor-pointer'>{title}</h1>
      <p className=' text-lg font-medium mb-3 cursor-pointer'>{text}</p>
      <p className='text-lg font-medium mb-3 cursor-pointer'>{text1}</p>
      <p className='text-lg font-medium mb-3 cursor-pointer'>{text2}</p>
    </div>
  )
}

export default FooterCard
