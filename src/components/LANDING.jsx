import React from 'react'
import { useEffect, useState, useRef } from 'react';
import displayPicture from '../assets/display-picture.gif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import landingData from '../data/landing';
import { useLocation } from 'react-router-dom'
import Next from "../assets/next.png"
import Posts from './Posts';

const LANDING = () => {
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
     gsap.fromTo(column, {
          xPercent:-85,
      },
          {
              xPercent:0,
              duration:30,
              scrollTrigger: {
              trigger: h1,
              // markers:true,
              toggleActions:"play none reverse none",
              start: "top center",
              end:"top 30%"
        }

          })
    gsap.fromTo(hero, {
      yPercent: 40,
      opacity: 0,
      skewX: "9deg",
    },
      {
        skewX: "0deg",
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,

      })
    gsap.fromTo(refs3.current[0], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"
    },
      {
        yPercent: 0,
        skewX: "0deg",
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: refs.current[0],
        }
      })




    gsap.fromTo(refs3.current[1], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: refs.current[0],
        }
      })

    gsap.fromTo(refs3.current[2], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        opacity: 1,
        delay: .8,
        duration: 1,
        scrollTrigger: {
          trigger: refs.current[2],
        }
      })


    gsap.fromTo(refs3.current[3], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        delay: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: refs.current[3],
        }
      })


    gsap.fromTo(refs3.current[4], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"

    },
      {
        yPercent: 0,

        skewX: "0deg",
        opacity: 1,
        delay: 1.2,
        duration: 1,
        scrollTrigger: {
          trigger: refs.current[4],
        }
      })


    gsap.fromTo(refs3.current[5], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        delay: 1.5,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: refs.current[5],
        }
      })


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


  }, [currentLocation])
  return (
    <>
      <section ref={heroRef} className='text-darkShade landing-section h-screen relative  overflow-hidden opacity-0 px-6 sm:px-16 '>
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
      <div ref={h1Ref} className='w-[2500px]  bg-darkShade'>
      <h2 className='px-6 overflow-hidden bg-darkShade font-bold text-[200px] pt-8 pb-2 text-center'>THE WORD <span className='middle text-[180px] '>AND</span> PRAYER.</h2>
      </div>
     <main  className='overflow-x-scroll  md:overflow-hidden bg-darkShade relative -my-1'>
      <section ref={columnRef} className=' w-[200vh] mt-10 md:w-screen px-6 sm:px-16 flex gap-6 [&>*]:text-lightShade [&>*]:w-full md:flex-row [&>*]:h-90 ' >
        {/* <img className='absolute top-0' src="" alt="" /> */}

        {landingData.map((datum, index) => {
          return (
            <Link key={datum.name} to={datum.link}>
              <div
                ref={(element) => refs3.current[index] = element}
                className="mb-8 opacity-0 h-[380px]">
                <img
                  className='h-[80%] rounded-lg object-cover '
                  ref={(element) => refs.current[index] = element}
                  src={datum.image}
                  alt={datum.name} />
                <aside ref={(element) => refs2.current[index] = element} className=' flex flex-col mt-3'>
                  <div className='flex justify-between'>
                    <h3 className='font-bold text-[17px] md:text-base mt-2'>{datum.name}</h3>
                    <p className='text-[11px] font-medium mt-2 md:text-sm'>{datum.year}</p>
                  </div>
                  <p className='text-[12px] mt-1 md:mb-8 md:text-sm'>{datum.details}</p>
                </aside>
              </div>
            </Link>
          )
        })}
      </section>
        </main>
        <Posts/>
    </>
  )
}

export default LANDING
