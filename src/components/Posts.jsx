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

const Posts = ({allMessages}) => {
  console.log(allMessages)
  let sliced;
  if(allMessages){
    sliced=allMessages.slice(0,4)
  }
  const location = useLocation()
  console.log(sliced)
  const [currentLocation, setCurrentLocation] = useState("")
  const [data, setData] =useState([])
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
      console.log(dayStr,monthStr,yearStr)
      return `${dayStr}.${monthStr}.${yearStr}`
    }
  }

  // useEffect(() => {
  //   setCurrentLocation(location)
  //    gsap.fromTo(h1, {
  //         xPercent:-10,
  //     },
  //         {
  //             xPercent:-75,
  //             duration:20,
  //             scrollTrigger: {
  //             trigger: h1,
  //             // markers:true,
  //             toggleActions:"play none reverse none",
  //             start: "top center",
  //             end:"top 30%"
  //       }

  //         })
    
  //   gsap.fromTo(refs3.current[0], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"
  //   },
  //     {
  //       yPercent: 0,
  //       skewX: "0deg",
  //       opacity: 1,
  //       duration: 1,
  //       delay: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[0],
  //       }
  //     })




  //   gsap.fromTo(refs3.current[1], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"

  //   },
  //     {
  //       yPercent: 0,
  //       skewX: "0deg",
  //       opacity: 1,
  //       duration: 1,
  //       delay: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[0],
  //       }
  //     })

  //   gsap.fromTo(refs3.current[2], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"

  //   },
  //     {
  //       yPercent: 0,
  //       skewX: "0deg",
  //       opacity: 1,
  //       delay: .8,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[2],
  //       }
  //     })


  //   gsap.fromTo(refs3.current[3], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"

  //   },
  //     {
  //       yPercent: 0,
  //       skewX: "0deg",
  //       delay: 1,
  //       opacity: 1,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[3],
  //       }
  //     })


  //   gsap.fromTo(refs3.current[4], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"

  //   },
  //     {
  //       yPercent: 0,

  //       skewX: "0deg",
  //       opacity: 1,
  //       delay: 1.2,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[4],
  //       }
  //     })


  //   gsap.fromTo(refs3.current[5], {
  //     yPercent: 20,
  //     opacity: 0,
  //     skewX: "4deg"

  //   },
  //     {
  //       yPercent: 0,
  //       skewX: "0deg",
  //       delay: 1.5,
  //       opacity: 1,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: refs.current[5],
  //       }
  //     })


  // }, [currentLocation, location])
  return (
    <>
    {/* display only if allMessages is an array */}
    {allMessages[0]&&
    <main className='bg-darkShade flex flex-col items-center'>
    <section className='w-full  bg-darkShade'>
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
                  {/* <div className='flex justify-between'>
                    <h3 className='font-semibold  text-[17px] sm:text-base mt-2'>{datum.title.toUpperCase()}</h3>
                    <p className='text-[14px] text-faded font-semibold mt-2 sm:text-sm'>{formatDate(datum.day)}</p>
                  </div>
                    <p className='text-[11px] text-faded font-medium mt-2 sm:text-sm'>{capitalizeAll(datum.minister)}</p> */}
                </aside>
                <section className={animateCard?
                      'h-32 flex flex-col  w-2/3 p-4 post-tag text-[.9rem] font-semibold  bg-yellowBg absolute left-6 bottom-24'
                      :'post-tag flex flex-col  w-2/3 p-4 text-[.9rem] font-semibold  bg-yellowBg absolute left-6 bottom-24'}>
                <div className='flex justify-between'>
                    <h3 className='font-semibold font-[aboreto] text-[12px] max-w-[70%] mt-2'>{datum.title.toUpperCase()}</h3>
                    <p className='text-[12px] text-faded font-semibold mt-2 '>{formatDate(datum.day)}</p>
                  </div>
                    <p className='h-5 w-5 border-2 self-end justify-self-end border-b-6 border-t-0 border-r-0 bg-orange-400 rounded-full rounded-r-full rounded-tl-full border-yellow-900  flex  justify-center items-center'><span className='h-[2px] w-[2px] block rounded-full bg-green-900' ></span></p>
                    <p className='text-[11px] text-faded font-medium mt-2 sm:text-sm'>{capitalizeAll(datum.minister)}</p>
                
                    {/* <div className=' px-2 flex justify-between'>
                    <h3 className='  w-3/4 font-[aboreto]'>
                      {datum.minister}
                    </h3>
                    </div>
                    <p className='mx-2 mt-4 mb-2 h-[1px] w-1/3 bg-lightShade'>First series</p>
                    <p className='px-2 text-xs font-medium '>First series</p> */}
                </section>
              </div>
            </Link>
          )
        })}
        </div>
         {/* <Link  className='flex justify-center' to='/messages'>
          <div 
          onMouseEnter={()=>{setAnimateMore(true)}} onMouseLeave={()=>{setAnimateMore(false)}}
          className='relative mb-4 mx-6 w-[160px] h-[160px] cursor-pointer rounded-full border-2 border-lightShade sm:mx-16 p-3 items-center justify-center opacity-80 flex gap-2 '>
            <div className={animateMore?'opacity-0 animate-more  absolute top-1/2 left-1/2 flex items-center -translate-x-1/2 -translate-y-[100%]':'opacity-100 absolute animate-more top-1/2 left-1/2 flex items-center -translate-x-1/2 -translate-y-1/2'}>
            <p className=' text-lightShade font-semibold '>MORE</p>
            <MdOutlineArrowOutward/>
            </div>
            <div className={animateMore?'opacity-100 animate-more  absolute top-1/2 left-1/2 flex items-center -translate-x-1/2 -translate-y-1/2':'opacity-0 absolute animate-more top-1/2 left-1/2 flex items-center -translate-x-1/2 translate-y-1/3 '}>
            <p className=' text-lightShade font-semibold '>MORE</p>
            <MdOutlineArrowOutward/>
            </div>
          </div>
          </Link> */}
          <RoundButton text="MORE" link="/messages"/>
      </section>
    </main>
}
    </>
  )
}

export default Posts
