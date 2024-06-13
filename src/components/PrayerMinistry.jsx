import React from 'react'
import prayerImage from '../assets/pray-lady.webp' // Make sure to replace this with the actual image path



const PrayerMinistry = () => {
  return (
    <>
      <main className='px-6 sm:px-16 -mb-1 text-lightShade py-24 bg-darkShade'>
        <h1 className='text-5xl -mb-1 font-semibold text-lightShade py-24 bg-darkShade'>PRAYER MINISTRY.</h1>
        <img src={prayerImage} alt="Prayer Ministry" />
        <p className='pt-16 pb-16 -mb-1 font-[aboreto] text-5xl text-faded bg-darkShade'>
          Connecting with God's power and mercy through fervent prayer
        </p>

        <p className='text-opaque text-xl leading-8'>
          Our Prayer Ministry is dedicated to fostering a deep and personal connection with God through the power of prayer. We believe in the transformative and healing power of prayer, and we invite everyone to join us in this sacred practice.
        </p>
        <br />
        <p className='text-xl text-opaque leading-8'>
          We gather for prayer every Wednesday from 9 AM to 12 PM, where we intercede for our community, nation, and world. Our Friday night vigils are a powerful time of worship and prayer, starting at 10 PM and going until the early hours of Saturday.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          Every first Saturday of the month, we hold the Power of Mercy Prayer from 7 AM to 10 AM, focusing on God's boundless mercy and grace. This time is set apart for deep reflection, heartfelt prayer, and seeking God's face for breakthroughs and miracles.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          We encourage everyone to join us in these prayer meetings and vigils, as we believe that prayer not only changes situations but transforms hearts and lives. Our team of dedicated prayer warriors is here to support and guide you, fostering an environment of faith, hope, and love.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          Come and experience the power of collective prayer, and let us journey together in faith, lifting up our voices to God and witnessing His amazing work in our midst. Whether you are new to prayer or a seasoned intercessor, you are welcome in our Prayer Ministry.
        </p>
      </main>
    </>
  )
}

export default PrayerMinistry
