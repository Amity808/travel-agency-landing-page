import React from 'react'
import Airplane from '../../images/axon.png'
import Jest from '../../images/jetstar.png'
import Expedia from '../../images/expedia.png'
import qantus from '../../images/qantus.png'
import ait from '../../images/ait.png'

const Logo = () => {
  return (
    <div className='flex flex-row justify-between h-40 items-center mt-6'>
      <img src={Airplane} alt="" className=' w-24 h-26 hover:shadow-2xl' />
      <img src={Jest} alt="" className='w-24 h-26 hover:shadow-2xl' />
      <img src={Expedia} alt="" className='w-28 mt-8 h-30 hover:shadow-2xl' />
      <img src={qantus} alt="" className=' w-16 h-20 hover:shadow-2xl' />
      <img src={ait} alt="" className='w-24 h-20 hover:shadow-2xl' />
    </div>
  )
}

export default Logo
