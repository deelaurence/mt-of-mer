import React from 'react'
import { Link } from 'react-router-dom';
import {MdOutlineArrowOutward} from 'react-icons/md'
import {useState} from "react"
const RoundButton = ({link,text}) => {
const [animateMore, setAnimateMore]=useState(false)
  return (
    <Link className='flex justify-center' to={link}>
          <div 
          onMouseEnter={()=>{setAnimateMore(true)}} onMouseLeave={()=>{setAnimateMore(false)}}
          className='relative mb-4 mx-6 w-[160px] h-[160px] cursor-pointer rounded-full border-2 border-lightShade sm:mx-16 p-3 items-center justify-center opacity-80 flex gap-2 '>
            <div className={animateMore?'opacity-0 animate-more  absolute top-1/2 left-1/2 flex items-center -translate-x-1/2 -translate-y-[100%]':'opacity-100 absolute animate-more top-1/2 left-1/2 flex items-center -translate-x-1/2 -translate-y-1/2'}>
            <p className=' text-lightShade font-semibold '>{text}</p>
            <MdOutlineArrowOutward/>
            </div>
            <div className={animateMore?'opacity-100 animate-more  absolute top-1/2 left-1/2 flex items-center -translate-x-1/2 -translate-y-1/2':'opacity-0 absolute animate-more top-1/2 left-1/2 flex items-center -translate-x-1/2 translate-y-1/3 '}>
            <p className=' text-lightShade font-semibold '>{text}</p>
            <MdOutlineArrowOutward/>
            </div>
          </div>
    </Link>
  )
}

export default RoundButton
