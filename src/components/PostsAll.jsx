import React from 'react'
import { useEffect, useState, useRef } from 'react';
import displayPicture from '../assets/display-picture.gif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import landingData from '../data/posts';
//console.log(landingData)
import { useLocation } from 'react-router-dom'
import Next from "../assets/next.png"

const PostsAll = ({allMessages}) => {
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState("")
  const [data, setData] =useState([])
  const [sliced, setSliced] =useState(allMessages.slice(0,10))
  const [currentPage, setCurrentPage] =useState(1)
  const refs = useRef([])
  const refs2 = useRef([])
  const refs3 = useRef([])
  const heroRef = useRef(null)
  const hero = heroRef.current
  const h1Ref=useRef(null)
  const columnRef=useRef(null)
  
  const changePage=(e)=>{
    console.log(e.target.innerHTML)
    const pageStartCalc=Number(e.target.innerHTML)-1
   const pageStart=pageStartCalc*10
   setCurrentPage(Number(e.target.innerHTML))
    const pageEndCalc=Number(e.target.innerHTML)
    const pageEnd=pageEndCalc*10
    console.log(pageStart,pageEnd)
      setSliced(allMessages.slice(pageStart, pageEnd))
    }
    useEffect(()=>{
    const firstPage=setTimeout(() => {
       setSliced(allMessages.slice(0,10))
   
    console.log("timeout")
  }, 5000);
  if(sliced.length>0){
     
     clearTimeout(firstPage)
     console.log("clearing timeout")
    }
  console.log("use effect")
})
  const h1 = h1Ref.current
  const column = columnRef.current
  console.log(sliced)
  console.log(allMessages)
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
//   useEffect(() => {
//     setCurrentLocation(location)
//      gsap.fromTo(h1, {
//           xPercent:-10,
//       },
//           {
//               xPercent:-75,
//               duration:20,
//               scrollTrigger: {
//               trigger: h1,
//               // markers:true,
//               toggleActions:"play none reverse none",
//               start: "top center",
//               end:"top 30%"
//         }

//           })
    
//     gsap.fromTo(refs3.current[0], {
//       yPercent: 20,
//       opacity: 0,
//       skewX: "4deg"
//     },
//       {
//         yPercent: 0,
//         skewX: "0deg",
//         opacity: 1,
//         duration: 1,
//         delay: 1,
//         scrollTrigger: {
//           trigger: refs.current[0],
//         }
//       })




//     gsap.fromTo(refs3.current[1], {
//       yPercent: 20,
//       opacity: 0,
//       skewX: "4deg"

//     },
//       {
//         yPercent: 0,
//         skewX: "0deg",
//         opacity: 1,
//         duration: 1,
//         delay: 1,
//         scrollTrigger: {
//           trigger: refs.current[0],
//         }
//       })

//     gsap.fromTo(refs3.current[2], {
//       yPercent: 20,
//       opacity: 0,
//       skewX: "4deg"

//     },
//       {
//         yPercent: 0,
//         skewX: "0deg",
//         opacity: 1,
//         delay: .8,
//         duration: 1,
//         scrollTrigger: {
//           trigger: refs.current[2],
//         }
//       })


//     gsap.fromTo(refs3.current[3], {
//       yPercent: 20,
//       opacity: 0,
//       skewX: "4deg"

//     },
//       {
//         yPercent: 0,
//         skewX: "0deg",
//         delay: 1,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: refs.current[3],
//         }
//       })


//     gsap.fromTo(refs3.current[4], {
//       yPercent: 20,
//       opacity: 0,
//       skewX: "4deg"

//     },
//       {
//         yPercent: 0,

//         skewX: "0deg",
//         opacity: 1,
//         delay: 1.2,
//         duration: 1,
//         scrollTrigger: {
//           trigger: refs.current[4],
//         }
//       })


//     gsap.fromTo(refs3.current[5], {
//       yPercent: 20,
//       opacity: 0,
//       skewX: "4deg"

//     },
//       {
//         yPercent: 0,
//         skewX: "0deg",
//         delay: 1.5,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: refs.current[5],
//         }
//       })


//   }, [currentLocation, location])
  return (
    <>
    {/* display only if allMessages is an array */}
    {allMessages[0]&&
    <main className='pt-12 bg-darkShade flex flex-col items-center'>
    <section className='bg-darkShade'>
      <h1 className=' py-14 font-bold text-center text-5xl'> MESSAGES </h1>
      <div className=' flex flex-col md:flex-row md:flex-wrap'>
        {sliced.map((datum, index) => {
          return (
            <Link className='flex md:w-[50%] md:h-[350px] px-6 justify-center items-center sm:my-8' key={index} to={`all/${datum._id}`}>
              <div
                ref={(element) => refs3.current[index] = element}
                className="mb-8  w-[100%] md:w-[90%]">
                <div className='h-[300px]'>
                <img
                  className='h-full w-full object-cover'
                  ref={(element) => refs.current[index] = element}
                  src={datum.image[0]||"https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJpYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"}
                  alt={datum.name} />
                </div>
                <aside ref={(element) => refs2.current[index] = element} className=' flex flex-col mt-3'>
                  <div className='flex justify-between'>
                    <h3 className='font-semibold text-[17px] md:text-base mt-2'>{datum.title.toUpperCase()}</h3>
                    <p className='text-[11px]  font-medium mt-2 md:text-sm'>{datum.minister}</p>
                  </div>
                  <p className='text-[14px] text-faded font-semibold mt-4 md:mb-8 md:text-sm'>{formatDate(datum.day)}</p>
                </aside>
              </div>
            </Link>
          )
        })}
        </div>
      </section>
      <section className='flex gap-4 [&>*]:cursor-pointer [&>*]:p-[1px]'>

      {allMessages.length>0&&<div className={currentPage==1?"font-bold":"italic opacity-[.85]"} onClick={changePage}>1</div>}
      {allMessages.length>10&&<div className={currentPage==2?"font-bold":"italic opacity-[.85]"} onClick={changePage} >2</div>}
      {allMessages.length>20&&<div className={currentPage==3?"font-bold":"italic opacity-[.85]"} onClick={changePage} >3</div>}
      {allMessages.length>30&&<div className={currentPage==4?"font-bold":"italic opacity-[.85]"} onClick={changePage} >4</div>}
      {allMessages.length>40&&<div className={currentPage==5?"font-bold":"italic opacity-[.85]"} onClick={changePage} >5</div>}
      {allMessages.length>50&&<div className={currentPage==6?"font-bold":"italic opacity-[.85]"} onClick={changePage} >6</div>}
      {allMessages.length>60&&<div className={currentPage==7?"font-bold":"italic opacity-[.85]"} onClick={changePage} >7</div>}
      {allMessages.length>70&&<div className={currentPage==8?"font-bold":"italic opacity-[.85]"} onClick={changePage} >8</div>}
      {allMessages.length>80&&<div className={currentPage==9?"font-bold":"italic opacity-[.85]"} onClick={changePage} >9</div>}
      {allMessages.length>90&&<div className={currentPage==10?"font-bold":"italic opacity-[.85]"} onClick={changePage} >10</div>}
      {allMessages.length>100&&<div className={currentPage==11?"font-bold":"italic opacity-[.85]"} onClick={changePage} >11</div>}
      {allMessages.length>110&&<div className={currentPage==12?"font-bold":"italic opacity-[.85]"} onClick={changePage} >12</div>}
      </section>
    </main>
}
    </>
  )
}

export default PostsAll
