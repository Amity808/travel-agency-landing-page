import React from 'react';
import BookCard from '../BookCard/BookCard';
import Greece from '../../images/greece.jpg';
import Leaf from '../../images/leaf.png';
import Map from '../../images/mapicon.png';
import Send from '../../images/send.png';
import Love from '../../images/love.png';
import Build from '../../images/buil.png';
import Mask from '../../images/Mask.png';


const Book = () => {
    const cardData = [
        {
            imgCard: "destination.png",
            textCard: "Choose Destination",
            paraCard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
            
        },
        {
            imgCard: "payment.png",
            textCard: "Make Payment",
            paraCard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        },
        {
            imgCard: "car.png",
            textCard: "Reach Airport on Selected Date",
            paraCard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
        },
    ]
  return (
    <div className='flex mt-32'>
      <div className='flex flex-row mt-32 justify-between'>
      <div className='flex justify-start flex-col items-start '>
        <p className=' text-base font-semibold'>Easy and Fast</p>
        <h1 className=' text-5xl font-bold mt-4 text-left mb-8 text-sky-900/80'>Book your <br />next trip <br />in 3 easy steps</h1>
        <div className='flex flex-row '>
            <div >
                {cardData.map((item, index) => (
                    <BookCard imgCard={item.imgCard} textCard={item.textCard} paraCard={item.paraCard} />
                    ))}
            </div>
        </div>
     </div>
            <div className='bg-gradient-to-r from-indigo-300 w-40 h-40 rounded-lg relative left-2/4 bottom-8 z-0'>

            </div>
            <div className=' shadow-zinc-900 w-96 h-80 flex flex-col justify-start text-left rounded-lg ml-8 '>
                <img src={Greece} alt="greece" className='z-20' />
                <p className=' text-lg font-medium mt-4 mb-4'>Trip To Greece</p>
                <div className='flex flex-row'>
                    <p className=' text-base font-medium'>14-29 June</p>
                    <p className=' text-base font-medium'>by Robbin joseph</p>
                </div>
                <div className='flex flex-row mt-4'>
                    <img src={Leaf} alt="" />
                    <img src={Send} alt="" />
                    <img src={Map} alt="" />
                </div>
                <div className=' flex flex-row justify-between mb-4 mt-4'>
                    <img src={Build} alt="Building" />
                    <p>24 people going</p>
                    
                </div>
                <div className='flex justify-end'>
                     <img src={Love} alt="" />
                </div>
            </div>
      </div>
            <div className=' shadow-2xl w-64 h-32 rounded-lg relative top-80 right-16 mt-4'>
                <div className='flex flex-row justify-start items-start p-4'>
                    <img src={Mask} alt="" />
                    <div className='ml-4 text-left'>
                    <p>Ongoing</p>
                    <p className=' text-base font-medium'>Trip to rome</p>
                    </div>
                </div>
                <p>40% completed</p>
            </div>
    </div>
  )
}

export default Book
