import React from 'react';
import FooterCard from '../FooterCard/FooterCard';
import facebook from '../../images/face.png'
import insta from '../../images/insta.png'
import twitter from '../../images/twitter.png'
import GooglePlay from '../../images/GooglePlay.png'
import Playstore from '../../images/PlayStore.png'


const Footer = () => {
  return (
    <div className=''>
      <div className=' flex flex-row mt-10'>
      <div className='flex justify-center flex-col'>
        <h1 className=' text-5xl font-medium'>Jadoo.</h1>
        <p className=' text-sm font-normal mt-6'>Book your trip in minute, get full Control for much longer.</p>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <FooterCard title="Company" text="About"  text1="Careers" text2="Mobile"  />
        <FooterCard title="Contact" text="Help/FAQ"  text1="Press" text2="Affilates"  />
        <FooterCard title="More" text="Airlinefees"  text1="Airline" text2="Low fare tips"  />
      </div>
      <div className='flex flex-col justify-center items-start ml-20'>
        <div className=' flex flex-row'>
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
        </div>
        <p>Discover our app</p>
        <div className='flex flex-row'>
            <img src={GooglePlay} alt="" />
            <img src={Playstore} alt="" />
        </div>
      </div>
      </div>
      <div>
        <p>Amity808 @ 2023 </p>
      </div>
      
    </div>
  )
}

export default Footer
