import React from 'react'
import Card from '../Card/Card'
import Satalite from '../../images/stallite.png'
import Airplane from '../../images/airplane.png'
import mic from '../../images/mic.png'
import Setting from '../../images/setting.png'

const Service = () => {
  return (
    <div className=''>
      <div className=''>
        <p className=' text-lg font-semibold text-sky-900'>CATEGORY</p>
        <h1 className=' text-5xl font-bold pt-4 pb-16'>We Offer Best Services</h1>
        <div className='flex flex-row'>
            <Card imgurl={Satalite} title="Calculated Weather" text="Built Wicket longer admire do barton vanity itself do in it." />
            <Card imgurl={Airplane} title="Best Flights" text="Engrossed listening. Park gate sell they west hard for the." />
            <Card imgurl={mic} title="Local Events" text="Barton vanity itself do in it. Preferd to men it engrossed listening. " />
            <Card imgurl={Setting} title="Customization" text="We deliver outsourced aviation services for military customers" />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Service
