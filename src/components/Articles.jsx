
import React from 'react'
import capitalizeAll from '../utils/capitalizeAll';
import { useEffect, useState, useRef } from 'react';
import displayPicture from '../assets/display-picture.gif'
import { gsap } from 'gsap'
import { randomImgUrls } from '../data/randomUnsplash';
import {MdOutlineArrowOutward} from 'react-icons/md'
import RoundButton from './RoundButton';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Next from "../assets/next.png"
import { useGlobalState } from '../GlobalState';
const Articles = ({inFooter}) => {
  const {state} =useGlobalState()
  const allArticles=state.allArticles
  let sliced;
  let i;
  if(inFooter){
    i=4
  }else{
    i=0
  }
  if(allArticles){
    sliced=allArticles.slice(i,i+4)
  }

  const location = useLocation()
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
      return `${dayStr}.${monthStr}.${yearStr}`
    }
  }

  return (
    <>
    {/* display only if allArticles is an array */}
    {allArticles[0]&&
    <main className={`${inFooter?'':'bg-lightShade'} flex flex-col items-center`}>
    <section className={`${inFooter?'':'bg-lightShade'} w-full `}>
      <h1 className={`${inFooter?'':'px-6 text-xl sm:px-16'}  pt-24 pb-2  font-semibold   text-neutral-600`}> {inFooter?'Top rated articles':'ARTICLES.'} </h1>
      <p className={`${inFooter?'hidden ':'text-5xl px-6 sm:px-16'} pt-8 pb-16 font-[aboreto]   text-faded`}> Lifestyle, Christainity, Health. </p>
        <div className={ `${inFooter?'':'sm:px-16 px-6'}  flex  flex-col sm:flex-row flex-wrap sm:[&>*]:w-1/2 `}>
        {sliced.map((datum, index) => {
          return (
            <Link className='flex  post-shadow mb-8   flex-col' key={index} to={`articles/${datum._id}`}>
              <div
                ref={(element) => refs3.current[index] = element}
                className={`${inFooter?"sm:p-4":"sm:p-4 w-[100%]"} h-[450px] `}> 
                <img
                  className='h-[70%]  w-full  object-cover '
                  ref={(element) => refs.current[index] = element}
                  src={datum.image[0]}
                  alt={datum.name} />
                <aside ref={(element) => refs2.current[index] = element} className='max-w-[calc(100vw-3rem)] sm:max-w-[calc(100vw-12rem)]  mb-12 flex flex-col mt-3'>
                  <div className='flex justify-between '>
                    <h3
                    className='font-semibold  text-[17px] sm:text-base mt-2 pr-4 max-w-[70%]'>{datum.title.toUpperCase()}</h3>
                    <p className='text-[14px] text-faded font-semibold mt-2 sm:text-sm max-w-full'>{formatDate(datum.day)}</p>
                  </div>
                  <p className='text-[11px] text-faded font-medium mt-2 pb-12 sm:text-sm max-w-full'>{capitalizeAll(datum.writer.substring(0,30))}</p>
                </aside>
              </div>
            </Link>
          )
        })}
        </div>          
        {!inFooter&&<RoundButton text="MORE" link="/articles"/>}
      </section>
    </main>
}
    </>
  )
}

export default Articles
