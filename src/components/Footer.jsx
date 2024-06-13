import { useLocation } from 'react-router-dom'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import Articles from './Articles'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Logo from './Logo'
import { footerLinks } from '../data/footer'
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

  return (
    <footer
      className=" tracking-[0.5px]  pt-24 pb-24 px-6 sm:px-16 bg-darkShade text-white dark:bg-darkShade dark:text-lightShade"
    >
      <div className='mt-14  overflow-visible'>
        <h3 ref={gotProjectRef} className='text-2xl font-[aboreto] text-opaque overflow-visible '>
          UNITED APOSTOLIC CHURCH OF CHRIST.
        </h3>
        <div className='pt-2 opacity-60'>
          <Logo/>
        </div>
        <Articles inFooter={true}/>
        <section className='md:flex  md:justify-between'>
          <div className='text-opaque font-semibold w-64 text-2xl mt-12 md:mt-24 mb-3'>
            We can do all this through <span className='italic mr-1'> Christ. </span> who gives us strength. 
            <p className='text-sm opacity-80'>Phil &mdash; 4:13</p>
          </div>
          
          <div ref={contactRef}>
            <p className='text-opaque mt-12 md:mt-24 mb-3'>
              MT. OF MERCY
            </p>
            
            <div className='flex flex-col '>
            {footerLinks.map((_link,index)=>{
              return(                
                  <Link to={_link.link} key={index} className='font-medium' >{_link.label}</Link>
              )

            })


            }

            {/* <Link to='/leadership' className='font-medium'>Church Leadership</Link>
            <Link to='/' className='font-medium' >Give</Link>
            <Link className='font-medium'>Prayer Requests</Link> */}
            </div>
          </div>
          <div ref={connectRef}>
            <p className='text-opaque mt-12 md:mt-24 mb-3'>
              LOCATIONS.
            </p>
            <div className='flex flex-col'>
            <a className='font-medium' href="mailto:uaccmountofmercy@gmail.com">Ilula Quaters</a>
            <a className='font-medium' href="mailto:uaccmountofmercy@gmail.com">Oda Town</a>
            <a className='font-medium' href="mailto:uaccmountofmercy@gmail.com">Ijare</a>
            </div>
          </div>
      
      <div>

     
      </div>
        </section>

      </div>
      <div ref={footerLineRef} className='bg-opaque my-14 dark:bg-lightShade h-[1px] w-full'>
      </div>
      <div className='text-opaque' >
            
            <div className='flex flex-col items-center text-sm '>

            <p className='font-medium' >&copy; 2023 &mdash; UACC, Mountain Of Mercy</p>
         
            </div>
          </div>
    </footer>

  )
}

export default Footer
