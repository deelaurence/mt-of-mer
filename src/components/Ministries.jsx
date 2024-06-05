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
 
    return (
       <>
       
    {/* display only if allMessages is an array */}
        <h1 className='px-6 sm:px-16 text-5xl -mb-1 font-semibold text-lightShade py-24 bg-darkShade '>GET CONNECTED.</h1>
         <p className='px-6 pt-16 pb-16 -mb-1 font-[aboreto] sm:px-16 text-5xl text-faded bg-darkShade'> Find your place at Mt. of Mercy. </p>
    <main className='pt-12 pb-24 sm:pb-0 px-6  sm:px-16 bg-darkShade text-lightShade flex flex-col sm:flex-row sm:flex-wrap items-center'>
        {data.map((datum, index) => {
          return (    
            <Link className={datum.style} key={index} to={datum.link}>
            {datum&&<div ref={(element) => refs.current[index] = element} className='w-full min-h-[150px] -mt-2 bg-neutral-700  sm:w-auto'>
                <img ref={(element) => refs3.current[index] = element} className='h-full w-full  sm:w-auto object-cover' src={datum.image} alt="" />
             </div>
              }
             <div className='p-6 [&>*]:my-4'>
                <h3 className=''>{datum.name.toUpperCase()}</h3>
                <p className='text-2xl font-bold '>{datum.details}</p>
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

