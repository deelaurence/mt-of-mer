import React from 'react'
import { useState, useRef } from 'react'
import kodeTechCofee from '../assets/landing-guild.webp'
import kodeTech1 from '../assets/kodetech1.webp'
import kodeTech2 from '../assets/kodetech2.webp'
import kodeTech3 from '../assets/kodetech3.webp'
import guildLanding from '../assets/landing-guild.webp'
import capitalizeFirst from '../utils/capitalize'
import capitalizeAll from '../utils/capitalizeAll'
import userFlow from '../assets/guild-userflow.webp'
import userPersona from '../assets/guild-userpersona.webp'
import userJourney from '../assets/guild-userjourney.webp'
import screen1 from '../assets/guild-screen1.webp'
import screen2 from '../assets/guild-screen2.webp'
import screen3 from '../assets/guild-screen3.webp'
import screen4 from '../assets/guild-screen4.webp'
import Waiting from './Waiting'
// import userPersona from './images/userpersona.webp'



import prev from '../assets/prev.png'
import next from '../assets/next.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

//imation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {FaWhatsapp} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {RiShareForwardLine} from 'react-icons/ri'
import baseUrl from '../data/baseUrl'

const Guild = ({ locationProps }) => {
    const main = document.querySelector('main')
    const [ref, inView] = useInView();
    const params = useParams()

    const parentRef = useRef(null)
    const findingsRef = useRef(null)
    const parent = parentRef.current
    const finding = findingsRef.current
    const articles = document.querySelectorAll("article")
    const span = document.querySelectorAll("span")

    const [location, setLocation] = useState("")
    const [singleMessage, setSingleMessage] = useState({})
    const [imageOne, setImageOne] = useState(false)
    const [imageTwo, setImageTwo] = useState(false)
    const [socialIcon, setSocialIcon] = useState(false)
    const [messageIsArray, setMessageIsArray] = useState(false)
    const [messageIsArray2, setMessageIsArray2] = useState(false)
    const [messageIsArray3, setMessageIsArray3] = useState(false)
    console.log(window.location.href)
    const portfolio = "deverence.xyz"
    const whatsappLink=`whatsapp://send?text=${window.location.href}`
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
    console.log(facebookLink)
    useEffect(() => {
        setLocation(locationProps)
        //("kodetech effect");
        gsap.fromTo(main, {
            opacity: 0,
        },
            {
                opacity: 1,

                duration: 3,
            })
    }, [location]);
    useEffect( ()=>{
  const fetchData =async ()=>{
    const response = await fetch(`${baseUrl}/messages/${params.id}`);
    // const response = await fetch(`https://easy-erin-eel-sock.cyclic.app/messages/${params.id}`);
    const jsonData = await response.json();
    //console.log(jsonData.allMessages);
    console.log(jsonData)
    jsonData.paragraphOne=jsonData.paragraphOne.split("<br/>");
    
    if(jsonData.paragraphTwo){
        jsonData.paragraphTwo=jsonData.paragraphTwo.split("<br/>");
    }
    if(jsonData.paragraphThree){

        jsonData.paragraphThree=jsonData.paragraphThree.split("<br/>");
    }
    
    setMessageIsArray(true)
    console.log("message is array is "+messageIsArray)
    console.log(jsonData.paragraphOne)
    console.log(jsonData.paragraphTwo)
    console.log(jsonData.paragraphThree)
    if(jsonData.image&&jsonData.image[0]){
        setImageOne(true)
    }
    if(jsonData.image&&jsonData.image[1]){
        setImageTwo(true)
    }
    setSingleMessage(jsonData)
    console.log(jsonData);
  }
  fetchData()

},[location])
    const [popupImg, setPopupImg] = useState('')
    const [pop, setPop] = useState(false)
    const [landscape, setLandscape] = useState(false)
    const handleEnlarge = (e) => {
        // setPopupImg("")
        setLandscape(false)
        setPop(!pop)
        setPopupImg(e.target.src)
    }
    const handleEnlargeLandscape = (e) => {
        // setPopupImg("")
        setLandscape(true)
        setPop(!pop)
        setPopupImg(e.target.src)
    }
    const handleDecrease = (e) => {
        // setPopupImg("")
        setPop(!pop)
    }
    return (
        <>
            <main ref={parentRef} className="opacity-0 px-6 tracking-[0.4px] md:px-16 pt-20   relative flex flex-col bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade [&>*]:dark:text-darkShade md:min-h-[90vh] md:pb-10">
                {/* popup */}
                {/* popup */}
                {/* popup */}
                <div onClick={handleDecrease} className={pop ? "popup fixed bg-[rgba(0,0,0,.95)] top-0 left-0 z-10  h-screen w-screen" : "hidden"}>
                    <img src={popupImg} className={landscape ?
                        'relative  rotate-90 min-w-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        : 'relative top-1/2 left-1/2 max-h-[95%] min-h-[30%] -translate-x-1/2 -translate-y-1/2'} alt="popup" />
                </div>
                {/* popup */}
                {/* popup */}
                {/* popup */}
                <section className='mt-20  relative pb-10'>
                    <div>
                        <h1
                            className="text-[1.8rem] font-semibold md:text-5xl">
                             <span className='font-medium'>{singleMessage.title?capitalizeFirst(singleMessage.title):<Waiting/>}</span>
                             <p className='font-semibold text-[1.1rem] capitalize italic mt-8'> {singleMessage.minister?singleMessage.minister:<Waiting/>}</p>
                        </h1>
                    </div>
                    <div
                        className=' text-[1.1rem] font-[500]  text-lightShade  dark:text-da1hade leading-8 mt-16'>
                        <p className='mb-2'>Summarized By:</p>
                        <p className='font-[600] text-[1.1rem] capitalize text-lightShade '>{singleMessage.author?singleMessage.author:<Waiting/>}</p>
                    </div>
                    <div className='text-[1.1rem] font-[500]  text-lightShade  dark:text-da1hade leading-8 mt-10'>
                        <p className='mb-2'>Length:</p>
                        <p className='font-[600] text-lightShade  dark:text-darkShade italic text-[1.1rem]'>{singleMessage.readMinutes?singleMessage.readMinutes:<Waiting/>}</p>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-16'>
                        <h3 className='mb-5'>
                            {singleMessage.headingOne&& capitalizeFirst(singleMessage.headingOne)}
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  dark:text-darkShade  text-lightShade'>

                                {
                                messageIsArray?singleMessage.paragraphOne.map((paragraph,index)=>{
                                    return(
                                        <>
                                        <p key={index} className='mb-4'>{capitalizeFirst(paragraph)}</p>
                                    </>
                                )
                            }):
                            <Waiting/>}
                        </article>
                    </div>
                     {singleMessage.quoteOne&&<div className='my-16  text-[1.5rem] font-[600]  mt-6'>
                        <article className='pl-2  text-[1.1rem]  text-faded border-l-4 border-l-purple-300 leading-8 font-[400] ml-8 mr-12 sm:mr-16 italic dark:text-darkShade'>
                        <span className='quotes  opacity-50 '></span>{singleMessage.quoteOne}
                        </article>
                    </div>}
                    {imageOne&&<div
                        className='mt-12 overflow-hidden'>
                        <img
                            className='mt-14'
                            src={singleMessage.image[0]} alt="" />
                    </div>}

                    {singleMessage.paragraphTwo&&<div className='text-[1.5rem]  font-[600] mt-[88px]'>
                        <h3 className='mb-5'>
                            {singleMessage.headingTwo&& capitalizeFirst(singleMessage.headingTwo)}
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  dark:text-darkShade  text-lightShade'>

                                {
                                messageIsArray?singleMessage.paragraphTwo.map((paragraph,index)=>{
                                    return(
                                        <>
                                        <p key={index+11} className='mb-4'>{capitalizeFirst(paragraph)}</p>
                                    </>
                                )
                            }):
                            <Waiting/>}
                        </article>
                    </div>}
                   
                     {singleMessage.quoteTwo&&<div className='my-16  text-[1.5rem] font-[600]  mt-6'>
                        <article className='pl-2  text-[1.1rem]  text-faded border-l-4 border-l-purple-300 leading-8 font-[400] ml-8 mr-12 sm:mr-16 italic dark:text-darkShade'>
                        <span className='quotes  opacity-50 '></span>{singleMessage.quoteTwo}
                        </article>
                    </div>}
                    {imageTwo&&<div
                        className='mt-12 overflow-hidden'>
                        <img
                            className='mt-14'
                            src={singleMessage.image[1]} alt="" />
                    </div>}
                    <div ref={findingsRef} className='text-[1.5rem] font-[600] mt-6'>
                       { singleMessage.paragraphThree&&<div>
                           
                       <h3 className='mb-5'>
                            {singleMessage.headingThree&&capitalizeFirst(singleMessage.headingThree||"null")}
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  dark:text-darkShade  text-lightShade'>

                                {
                                messageIsArray?singleMessage.paragraphThree.map((paragraph,index)=>{
                                    return(
                                        <>
                                        <p key={index+22} className='mb-4'>{capitalizeFirst(paragraph)}</p>
                                    </>
                                )
                            }):
                            <Waiting/>}
                        </article>
                    {singleMessage.quoteThree&&<div className='  text-[1.5rem] font-[600]  mt-6'>
                        <article className='pl-2  text-[1.1rem]  text-faded border-l-4 border-l-purple-300 leading-8 font-[400] ml-8 mr-12 sm:mr-16 italic dark:text-darkShade'>
                        <span className='quotes  opacity-50 '></span>{singleMessage.quoteThree}
                        </article>
                    </div>}
                       </div>
                       }   
                      {singleMessage.pointOne&& <h3 className='mb-5 mt-16'>
                            {singleMessage.pointTwo?'Key Points':'Key Point'}
                        </h3>}

                            <ol className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade text-base'>
                                {singleMessage.pointOne&&<li className='font-medium text-lightShade  dark:text-darkShade'>{singleMessage.pointOne}</li>}
                                {singleMessage.pointTwo&&<li className='font-medium text-lightShade  dark:text-darkShade'>{singleMessage.pointTwo}</li>}
                                {singleMessage.pointThree&&<li className='font-medium text-lightShade  dark:text-darkShade'>{singleMessage.pointThree}</li>}
                                {singleMessage.pointFour&&<li className='font-medium text-lightShade  dark:text-darkShade'>{singleMessage.pointFour}</li>}
                                {singleMessage.pointFive&&<li className='font-medium text-lightShade  dark:text-darkShade'>{singleMessage.pointFive}</li>}
                                {singleMessage.pointSix&&<li className='font-medium text-lightShade  dark:text-darkShade'>{singleMessage.pointSix}</li>}
                                {singleMessage.pointSeven&&<li className='font-medium text-lightShade  dark:text-darkShade'>{singleMessage.pointSeven}</li>}
                                {singleMessage.pointEight&&<li className='font-medium text-lightShade  dark:text-darkShade'>{singleMessage.pointEight}</li>}
                                {singleMessage.pointNine&&<li className='font-medium text-lightShade  dark:text-darkShade'>{singleMessage.pointNine}</li>}
                                {singleMessage.pointTen&&<li className='font-medium text-lightShade  dark:text-darkShade'>{singleMessage.pointTen}</li>}
                            </ol>
                    </div>
                   
            </section>
                <div className='flex  cursor-pointer justify-center text-3xl my-16' onClick={()=>{setSocialIcon(!socialIcon)}}>
                <RiShareForwardLine  className=''/> 
                <p className='ml-3 text-xl font-semibold'>Share</p>
                </div>
            {/* <section className='bg-red-300 h-[100px] relative w-full'> */}

                <div 
                onClick={()=>{setSocialIcon(!socialIcon)}}
                className={socialIcon?
                    ' h-[500px] flex flex-col  social-icon justify-center gap-10 mb-8 transition-[5s] absolute -bottom-10 left-0 w-full'
                    :"-bottom-[1000px] flex flex-col h-[500px] social-icon  transition-[5s] justify-center absolute gap-10 mb-8 w-full left-0"}>
                <a href={whatsappLink} className='bg-green-400 cursor-pointer sm:hidden text-white  rounded-[8px] mx-6 flex justify-center gap-2 font-semibold p-2 text-2xl items-center'	data-action="share/whatsapp/share"
		            target="_blank">
                     <FaWhatsapp className={socialIcon?"icon-ws ":"translate-y-12 icon-ws "}/> 
                     <p className={socialIcon?"text-ws ":"translate-y-12 text-ws "}>Whatsapp</p> 
                </a>
                <a href={facebookLink} 
                    target="_blank"
                    className='bg-blue-400 cursor-pointer text-white mx-6 flex rounded-[8px] justify-center gap-2 font-semibold p-2 text-2xl items-center'>
                    <  FaFacebookF className={socialIcon?"icon-fb ":"translate-y-12 icon-fb "} />
                    <p className={socialIcon?"text-fb ":"translate-y-12 text-fb "}>Facebook</p>
                </a>
                </div>
            {/* </section> */}
            </main>

        </>
    )
}

export default Guild

