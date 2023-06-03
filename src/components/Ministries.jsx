import React from 'react'
import { useState, useRef } from 'react'
import data from '../data/ministries'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

//imation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Ministries = () => {
const refs3= useRef([])    
const refs= useRef([])    
  useEffect(() => {
    // setCurrentLocation(location)
    
    gsap.fromTo(refs3.current[0], {
      // yPercent: 20,
      opacity: 1,
      filter:'blur(30px)'
      // skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        filter:"blur(0px)",
        delay:.5,
        opacity: 1,
        duration: .5,
        scrollTrigger: {
          trigger: refs.current[0],
        }
      })



    gsap.fromTo(refs3.current[1], {
      // yPercent: 20,
      opacity: 1,
      filter:'blur(30px)'
      // skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        filter:"blur(0px)",
        delay:.5,
        opacity: 1,
        duration: .5,
        scrollTrigger: {
          trigger: refs.current[1],
        }
      })


    gsap.fromTo(refs3.current[2], {
      // yPercent: 20,
      opacity: 1,
      filter:'blur(30px)'
      // skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        filter:"blur(0px)",
        delay:.5,
        opacity: 1,
        duration: .5,
        scrollTrigger: {
          trigger: refs.current[2],
        }
      })



    gsap.fromTo(refs3.current[3], {
      // yPercent: 20,
      opacity: 1,
      filter:'blur(30px)'
      // skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        filter:"blur(0px)",
        delay:.5,
        opacity: 1,
        duration: .5,
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


  }, [location])
    return (
       <>
    {/* display only if allMessages is an array */}
        <h1 className='px-6 sm:px-16 text-5xl -mb-1 font-semibold text-darkShade py-24 bg-lightShade '>GET CONNECTED.</h1>
         <p className='px-6 pt-16 pb-16 -mb-1 font-[aboreto] sm:px-16 text-5xl text-faded bg-lightShade'> Find your place at Mt. of Mercy. </p>
    <main className='pt-12 pb-24 sm:pb-0 px-6  sm:px-16 bg-lightShade text-darkShade flex flex-col sm:flex-row sm:flex-wrap items-center'>
        {data.map((datum, index) => {
          return (
            <Link className={datum.style} key={index} to={`all/${datum._id}`}>
             <div ref={(element) => refs.current[index] = element} className='w-full bg-neutral-700  sm:w-auto'>
                <img ref={(element) => refs3.current[index] = element} className='h-full w-full  sm:w-auto object-cover' src={datum.image} alt="" />
             </div>
             <div className='p-6 [&>*]:my-4'>
                <h3 className=''>{datum.name.toUpperCase()}</h3>
                <p className='text-2xl font-bold text-neutral-900'>{datum.details}</p>
                <p className=''>{datum.link.toUpperCase()} <span className='ml-2'>   ||</span></p>
             </div>
            
            </Link>
          )
        })}
       
      <section className='flex gap-4 [&>*]:cursor-pointer [&>*]:p-[1px]'>

      </section>
    </main>

    </>    )
}

export default Ministries

