import React from 'react'
import RoundButton from './RoundButton'
const Give = () => {
  return (
<>
<div>
      <p className=' bg-darkShade pl-6 sm:px-16 pt-20 px-6  text-5xl font-semibold'>GIVE.</p>
      <p className='bg-darkShade px-6 pb-10 sm:px-16 pt-20 text-lg'>
        Partner with us in building God's 
        kingdom by faithfully giving your tithes. 
        Your generous contributions help support the ministry,
        reach the lost, and make a lasting impact in our community.
        Join us in honoring God with your financial 
        resources and experience the joy of being a cheerful giver. 
        Together, let's sow seeds of faith and obedience,
        knowing that every tithe you give plays a
        vital role in transforming lives and bringing hope to those in need.</p>
    </div>
    <RoundButton text="GIVE" link="/give"/>
</>
  )
}

export default Give
