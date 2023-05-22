import { useLocation } from 'react-router-dom'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Footer = ({ locationProps }) => {
  gsap.registerPlugin(ScrollTrigger)
  const footerLineRef = useRef(null)
  const contactRef = useRef(null)
  const gotProjectRef = useRef(null)
  const connectRef = useRef(null)
  const footerLine = footerLineRef.current
  const contact = contactRef.current
  const gotProject = gotProjectRef.current
  const connect = connectRef.current
  const location = useLocation()
  const [currentLocation, useCurrentLocation] = useState('')


  // useEffect(() => {
  //   useCurrentLocation(locationProps)
  //   //("footer use effect");
  //   gsap.fromTo(footerLine, {
  //     width: 0,
  //   }, {
  //     width: "100%",
  //     duration: 1.5,
  //     scrollTrigger: {
  //       trigger: footerLine
  //     }


  //   })
  //   gsap.fromTo(gotProject, {
  //     yPercent: -100,
  //     opacity: 0
  //   }, {
  //     yPercent: 0,
  //     opacity: 1,
  //     duration: 1.5,
  //     delay: 1,
  //     ease: "Bounce.easeOut",
  //     scrollTrigger: {
  //       trigger: footerLine
  //     }


  //   })
  //   gsap.fromTo(contact, {
  //     yPercent: -100,
  //     opacity: 0
  //   }, {
  //     yPercent: 0,
  //     opacity: 1,
  //     duration: 1.5,
  //     delay: 1.2,
  //     // ease: "Bounce.easeOut",
  //     scrollTrigger: {
  //       trigger: footerLine
  //     }


  //   })
  //   gsap.fromTo(connect, {
  //     yPercent: -100,
  //     opacity: 0
  //   }, {
  //     yPercent: 0,
  //     opacity: 1,
  //     duration: 1.5,
  //     delay: 1.5,
  //     // ease: "Bounce.easeOut",
  //     scrollTrigger: {
  //       trigger: footerLine
  //     }


  //   })

  // }, [currentLocation, location])
  return (
    <footer
      className="tracking-[0.5px]  pt-24 pb-24 px-6 sm:px-16 bg-lightShade text-white dark:bg-lightShade dark:text-darkShade"
    >
      <div className='mt-14 overflow-visible'>
        <h3 ref={gotProjectRef} className='text-2xl font-[aboreto] text-opaque overflow-visible '>
          UNITED APOSTOLIC CHURCH OF CHRIST.
        </h3>
        <section className='md:flex md:justify-between'>
          <div ref={contactRef}>
            <p className='text-opaque mt-12 md:mt-24 mb-3'>
              MT. OF MERCY
            </p>
            <div className='flex flex-col'>

            <a className='font-medium' href="mailto:">Us</a>
            <a className='font-medium' href="mailto:">Church Leadership</a>
            <a className='font-medium' href="mailto:">Give</a>
            <a className='font-medium' href="mailto:">Prayer Requests</a>
            </div>
          </div>
          <div ref={connectRef}>
            <p className='text-opaque mt-12 md:mt-24 mb-3'>
              LOCATIONS.
            </p>
            <div className='flex flex-col'>

            <a className='font-medium' href="mailto:">Ilula Quaters</a>
            <a className='font-medium' href="mailto:">Oda Town</a>
            <a className='font-medium' href="mailto:">Ijare</a>
            </div>
          </div>
          <div ref={footerLineRef} className='bg-opaque my-14 dark:bg-darkShade h-[1px] w-full'>
      </div>
      <div className='text-opaque' >
            
            <div className='flex flex-col items-center text-sm '>

            <p className='font-medium' >&copy; 2023 &mdash; UACC, Mountain Of Mercy</p>
            <p className='font-medium' >Privacy Policy</p>
            <p className='font-medium' >Terms and Condition</p>
            <a className='font-medium' >Facebook</a>
            <a className='font-medium' >Send us a mail</a>
            </div>
          </div>
        </section>

      </div>

    </footer>

  )
}

export default Footer
