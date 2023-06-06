import React from 'react'
import { useEffect, useState, useRef } from 'react';
import displayPicture from '../assets/display-picture.gif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import landingData from '../data/landing';
import { useLocation } from 'react-router-dom'
import Next from "../assets/next.png"
import Posts from './Posts';
import Ministries from './Ministries';
import Articles from './Articles';
import Paystack from './Paystack';
import Give from './Give';
import RoundButton from './RoundButton';
const LANDING = ({allMessages,allArticles}) => {
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState("")
  const refs = useRef([])
  const refs2 = useRef([])
  const refs3 = useRef([])
  const heroRef = useRef(null)
  const hero = heroRef.current
  const h1Ref=useRef(null)
  const columnRef=useRef(null)
  
  const h1 = h1Ref.current
  const column = columnRef.current
  useEffect(() => {
    setCurrentLocation(location)
     gsap.fromTo(h1, {
          xPercent:-10,
      },
          {
              xPercent:-75,
              duration:20,
              scrollTrigger: {
              trigger: h1,
              // markers:true,
              toggleActions:"play none reverse none",
              start: "top center",
              end:"top 30%"
        }

          })
    //  gsap.fromTo(column, {
    //       xPercent:-85,
    //   },
    //       {
    //           xPercent:0,
    //           duration:30,
    //           scrollTrigger: {
    //           trigger: h1,
    //           // markers:true,
    //           toggleActions:"play none reverse none",
    //           start: "top center",
    //           end:"top 30%"
    //     }

    //       })
    // gsap.fromTo(hero, {
    //   yPercent: 40,
    //   opacity: 0,
    //   skewX: "9deg",
    // },
    //   {
    //     skewX: "0deg",
    //     yPercent: 0,
    //     opacity: 1,
    //     duration: 1.5,
    //     delay: 1,

    //   })
    // gsap.fromTo(refs3.current[0], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"
    // },
    //   {
    //     yPercent: 0,
    //     skewX: "0deg",
    //     opacity: 1,
    //     duration: 1,
    //     delay: 1,
    //     scrollTrigger: {
    //       trigger: refs.current[0],
    //     }
    //   })




    // gsap.fromTo(refs3.current[1], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"

    // },
    //   {
    //     yPercent: 0,
    //     skewX: "0deg",
    //     opacity: 1,
    //     duration: 1,
    //     delay: 1,
    //     scrollTrigger: {
    //       trigger: refs.current[0],
    //     }
    //   })

    // gsap.fromTo(refs3.current[2], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"

    // },
    //   {
    //     yPercent: 0,
    //     skewX: "0deg",
    //     opacity: 1,
    //     delay: .8,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: refs.current[2],
    //     }
    //   })


    // gsap.fromTo(refs3.current[3], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"

    // },
    //   {
    //     yPercent: 0,
    //     skewX: "0deg",
    //     delay: 1,
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: refs.current[3],
    //     }
    //   })


    // gsap.fromTo(refs3.current[4], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"

    // },
    //   {
    //     yPercent: 0,

    //     skewX: "0deg",
    //     opacity: 1,
    //     delay: 1.2,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: refs.current[4],
    //     }
    //   })


    // gsap.fromTo(refs3.current[5], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"

    // },
    //   {
    //     yPercent: 0,
    //     skewX: "0deg",
    //     delay: 1.5,
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: refs.current[5],
    //     }
      // })


  }, [currentLocation, location])
  useEffect(() => {
    setCurrentLocation(location)
    gsap.fromTo(hero, {
      opacity: 0,
    },
      {
        skewX: "0deg",
        opacity: 1,
        duration: 1,

      })


  }, [location])
  return (
    <>
      <section ref={heroRef} className='text-darkShade landing-section h-screen relative  overflow-hidden  px-6 sm:px-16 '>
        <div className='flex items-center flex-wrap  mt-[70vh]'>
          <h3 className=' product-designer text-[14px]  font-bold sm:min-w-[60%]  sm:text-4xl  overflow-visible text-white' >JOIN US FOR A PHYSICAL GATHERING</h3>
          <p className='mt-4 w-[90%] sm:w-full text-sm sm:text-base text-white'>
            We gather online each sunday at 7:00a and start live streaming at 9:00a GMT+1. We
            would love for you to join us!
          </p>
          <div className='mt-4 gap-2 flex '>
            <p className=' text-white self-center font-semibold'>STREAM</p>
            <img className='h-3 mt-1 self-center ' src={Next} alt="next icon" />
          </div>
        </div>
      </section>
      <p className=' bg-darkShade pl-6 sm:px-16 pt-20 px-6  text-5xl font-semibold'>WELCOME.</p>
      <p className='bg-darkShade px-6 pb-10 sm:px-16 pt-20 text-lg'>
        We are a community of unlikely
        friends following Jesus together. 
        In a divided world filled with tension, 
        we feel called to create a rare place 
        where relationships are formed that 
        don't make sense according to the world. 
        No matter your age or stage in life, 
        we are united in Jesus. 
        It is our hope and prayer that 
        we can help you to Know Christ, 
        Grow together in faith, 
        and Go serve the world.</p>
      <Ministries/>
      <Give/>
      {/* <div ref={h1Ref} className='w-[2500px]  bg-darkShade'>
      <h2 className='px-6 overflow-hidden  bg-darkShade font-bold h-[250px] text-[200px]  pb-2 text-center'>THE WORD <span className='middle text-[180px] '>AND</span> PRAYER.</h2>
      </div> */}
     <main  className='overflow-x-scroll  md:overflow-hidden bg-darkShade relative -my-1'>
      
        </main>
        {/* <Paystack/> */}
        <Posts allMessages={allMessages}/>
        <Articles allArticles = {allArticles} />
    </>
  )
}

export default LANDING
