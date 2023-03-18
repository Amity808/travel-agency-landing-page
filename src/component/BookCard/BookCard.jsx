import React from 'react'

const BookCard = ({imgCard, textCard, paraCard}) => {
  return (
    <div className='flex flex-row w-96 h-36'>
      <div className=' w-12 f-12'>
        <img src={`../../images/${imgCard}`} alt="w-full h-full"  />
      </div>
      <div className='flex justify-start flex-col items-start text-left pl-3'>
        <h4>{textCard}</h4>
        <p>{paraCard}</p>
      </div>
    </div>
  )
}

export default BookCard
