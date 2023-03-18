import React from 'react';
import Profile from '../../images/profile_img.png'

const Testimonial = () => {
  return (
    <div className='flex flex-row justify-between'>
      <div className=' text-left'>
        <p className=' text-lg font-semibold text-blue-900/40'>Testimonial</p>
        <h1 className=' text-6xl font-bold text-blue-900/50 mt-6'>What people say <br /> about Us.</h1>
        <div className=' w-4 h-4 text-blue-900/40'>

        </div>
      </div>
      <div className='flex flex-col justify-center text-center'>
        <div className='flex flex-row max-w-sm'>
            <img src={Profile} alt=""className=' w-10 h-10 mr-6' />
            <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
        </div>
        <p className=' mt-6 ml-12'>Mike taylor</p>
        <p className=' mt-6 ml-12'>Lahore, Pakistan</p>
      </div>
    </div>
  )
}

export default Testimonial
