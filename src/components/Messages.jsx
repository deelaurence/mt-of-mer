import React from 'react'
import capitalizeAll from '../utils/capitalizeAll';
import { useEffect, useState, useRef } from 'react';
import displayPicture from '../assets/display-picture.gif'
import { gsap } from 'gsap'
import {MdOutlineArrowOutward} from 'react-icons/md'
import {CgShapeHalfCircle} from 'react-icons/cg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import landingData from '../data/posts';
//console.log(landingData)
import { useLocation } from 'react-router-dom'
import Next from "../assets/next.png"
import RoundButton from './RoundButton';
import { useGlobalState } from '../GlobalState';
import { MdDateRange } from "react-icons/md";
import Loader from './SvgLoader';
const Messages = () => {
  const {state} =useGlobalState()
  const allMessages = state.allMessages
  let sliced;
  if(allMessages){
    sliced=allMessages.slice(0,4)
  }
  
  const [animateCard, setAnimateCard]= useState(false)
  const refs = useRef([])
  const refs2 = useRef([])
  const refs3 = useRef([])
  const [animateMore, setAnimateMore]=useState(false)
  const heroRef = useRef(null)
  const hero = heroRef.current
  const h1Ref=useRef(null)
  const columnRef=useRef(null)
  
  const h1 = h1Ref.current
  const column = columnRef.current
  const formatDate = (day)=>{
    if(day){
      let formatted=day.replace(/\-/g,'.')
      let yearStr = formatted.slice(2,4)
      let monthStr = formatted.slice(5,7)
      let dayStr=formatted.slice(8,10)
      return `${dayStr}.${monthStr}.${yearStr}`
    }
  }
  return (
    <>
    {/* display only if allMessages is an array with at least a member*/}
    {allMessages[0]&&
    <main className='bg-lightShade flex flex-col items-center'>
    <section className='w-full  bg-lightShade'>
      <h1 className='px-6 pt-24 pb-2  font-semibold sm:px-16 text-xl text-neutral-600'> MESSAGES. </h1>
      <p className='px-6 pt-8 pb-16 font-[aboreto] sm:px-16 text-5xl text-faded'> Recent messages and teachings from UACC, Mount Of Mercy. </p>
        <div className='flex px-6  sm:px-16 flex-col sm:flex-row border flex-wrap  sm:[&>*]:w-1/2 '>
        {sliced.map((datum, index) => {
          return (
            <Link onMouseEnter={()=>{setAnimateCard(false)}} onMouseLeave={()=>{setAnimateCard(false)}} className='flex  post-shadow mb-2  flex-col' key={index} to={`messages/${datum._id}`}>
              <div
                ref={(element) => refs3.current[index] = element}
                className="mb-2 h-[350px] w-[100%] sm:p-4 relative">
                
                <img
                  className='h-[70%]  w-full  object-cover '
                  ref={(element) => refs.current[index] = element}
                  src={datum.image[0]||"https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJpYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"}
                  alt={datum.name} />
                <aside ref={(element) => refs2.current[index] = element} className=' flex flex-col mt-3'>
                </aside>
                <section className='post-tag flex flex-col  w-2/3 p-4 text-[.9rem] font-semibold  bg-[rgba(56,56,66,.8)] absolute left-6 bottom-24'>
                <div className='flex justify-between'>
                    <h3 className='font-semibold font-[aboreto] text-[12px] max-w-[70%] mt-2 text-white'>{datum.title.toUpperCase()}</h3>
                    <p className='text-[12px] text-faded font-semibold mt-2 '>{formatDate(datum.day)}</p>
                  </div>
                    <p className='h-5 w-5 border-2 self-end justify-self-end border-b-6 border-t-0 border-r-0 text-white rounded-full rounded-r-full rounded-tl-full border-yellow-900  flex  justify-center items-center'>
                      <MdDateRange/>
                    </p>
                    <p className='text-[11px] text-lightShade font-medium mt-2 sm:text-sm'>{capitalizeAll(datum.minister)}</p>
                </section>
              </div>
            </Link>
          )
        })}
        </div>
      
          <RoundButton text="MORE" link="/messages"/>
      </section>
    </main>
}
    </>
  )
}

export default Messages
