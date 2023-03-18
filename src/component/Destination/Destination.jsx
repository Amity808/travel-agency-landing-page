import React from 'react'
import TraveLCard from '../TraveLCard/TraveLCard';


const travelData = [
    {
        imgUrl: "italy.png",
        text: "Rome, Italty",
        price: "$5,42k",
        date: "10 Days Trip"
    },
    {
        imgUrl: "uk.jpg",
        text: "London, UK",
        price: "$4.2k",
        date: "12 Days Trip"
    },
    {
        imgUrl: "europe.png",
        text: "Full Europe",
        price: "$15k",
        date: "28 Days Trip"
    },
]
const Destination = () => {
    
  return (
    <div>
      <div className=' mt-12'>
        <p className=' text-base font-semibold text-sky-900/50 mb-6'>Top Selling</p>
        <h1 className=' text-5xl font-bold'>Top Destinations</h1>
      </div>
      <div className='flex flex-row justify-between mt-8'>
        {travelData.map((item, index) => (
            <TraveLCard imgUrlTag={item.imgUrl} text={item.text} price={item.price} date={item.date} key={item.imgUrl + index}/>
        ))}
      </div>
    </div>
  )
}

export default Destination
