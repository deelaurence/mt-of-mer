import React from 'react'
import capitalizeAll from '../utils/capitalizeAll';
import { useEffect, useState, useRef } from 'react';
import displayPicture from '../assets/display-picture.gif'
import { gsap } from 'gsap'
import {MdOutlineArrowOutward} from 'react-icons/md'
import RoundButton from './RoundButton';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
//console.log(landingData)
import { useLocation } from 'react-router-dom'
import Next from "../assets/next.png"

const Articles = ({allArticles}) => {
  console.log(allArticles)
  console.log("rendering")
  let sliced;
  if(allArticles){
    sliced=allArticles.slice(0,4)
  }
  const location = useLocation()
  console.log(sliced)
  const [currentLocation, setCurrentLocation] = useState("")
  const [data, setData] =useState([])
  const [animateMore,setAnimateMore]=useState(false)
  const refs = useRef([])
  const refs2 = useRef([])
  const refs3 = useRef([])
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
    {/* display only if allArticles is an array */}
    {allArticles[0]&&
    <main className='bg-darkShade flex flex-col items-center'>
    <section className='w-full  bg-darkShade'>
      <h1 className='px-6 pt-24 pb-2  font-semibold sm:px-16 text-xl text-neutral-600'> ARTICLES. </h1>
      <p className='px-6 pt-8 pb-16 font-[aboreto] sm:px-16 text-5xl text-faded'> Lifestyle, Christainity, Health. </p>
        <div className='flex px-6  sm:px-16 flex-col sm:flex-row border flex-wrap  sm:[&>*]:w-1/2 '>
        {sliced.map((datum, index) => {
          return (
            <Link className='flex  post-shadow mb-2  flex-col' key={index} to={`articles/${datum._id}`}>
              <div
                ref={(element) => refs3.current[index] = element}
                className="mb-2 h-[350px] w-[100%]  sm:p-4 ">
                
                <img
                  className='h-[70%]  w-full  object-cover '
                  ref={(element) => refs.current[index] = element}
                  src={datum.image[0]||"https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJpYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"}
                  alt={datum.name} />
                <aside ref={(element) => refs2.current[index] = element} className=' flex flex-col mt-3'>
                  <div className='flex justify-between'>
                    <h3 className='font-semibold  text-[17px] sm:text-base mt-2'>{datum.title.toUpperCase()}</h3>
                    <p className='text-[14px] text-faded font-semibold mt-2 sm:text-sm'>{formatDate(datum.day)}</p>
                  </div>
                    <p className='text-[11px] text-faded font-medium mt-2 sm:text-sm'>{capitalizeAll(datum.writer)}</p>
                </aside>
              </div>
            </Link>
          )
        })}
        </div>
          
          <RoundButton text="MORE" link="/articles"/>
      </section>
    </main>
}
    </>
  )
}

export default Articles
