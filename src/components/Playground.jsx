import bud1 from '../assets/bud1.webp'
import bud2 from '../assets/bud2.webp'
import bud3 from '../assets/bud3.webp'
import flo1 from '../assets/flo1.webp'
import flo2 from '../assets/flo2.webp'
import flo3 from '../assets/flo3.webp'
import craiglist1 from '../assets/craiglist1.webp'
import craiglist2 from '../assets/craiglist2.webp'
import craiglist3 from '../assets/craiglist3.webp'
import shoptacle1 from '../assets/shoptacle1.webp'
import shoptacle2 from '../assets/shoptacle2.webp'
import shoptacle3 from '../assets/shoptacle3.webp'
import dribbble1 from '../assets/dribbble1.webp'
import dribbble2 from '../assets/dribbble2.webp'
import dribbble3 from '../assets/dribbble3.webp'
import buonnisimo1 from '../assets/buonnisimo1.webp'
import buonnisimo2 from '../assets/buonnisimo2.webp'
import buonnisimo3 from '../assets/buonnisimo3.webp'
import winniamp from '../assets/winniamp.webp'
import casual from '../assets/casual.webp'
import React from 'react';
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
// import {Scroll}
const Playground = () => {
    const playgroundRef = useRef()
    const playgroundInfoRef = useRef()
    const playgroundInfo2Ref = useRef()
    const popupRef = useRef()
    const backTextRef = useRef()
    const backText = backTextRef.current
    const playground = playgroundRef.current
    const playgroundInfo = playgroundInfoRef.current
    const playgroundInfo2 = playgroundInfo2Ref.current
    const popupr = popupRef.current
    let [count, setCount] = useState("")
    const location = useLocation()
    const [popupImg, setPopupImg] = useState('')
    const [pop, setPop] = useState(false)
    const [landscape, setLandscape] = useState(false)
    const html = document.querySelector("html")
    const grids = document.querySelectorAll(".grids")
    // //(grids);
    const playgroundStart = (() => {
        grids.forEach(grid => {
            grid.style.transform = "scale(0.95) rotate(1deg)"
        });
        //('scrolling');
        backText.style.opacity = "1"
        backText.style.transform = " translateY(100px)"
    })
    const playgroundEnd = (() => {
        grids.forEach(grid => {
            backText.style.transform = "translateY(80px) rotate(0deg)"
            grid.style.transform = "scale(1) rotate(0deg)"
        });
        //('stop');
    })
    const handleEnlarge = (e) => {
        //(html);
        // setPopupImg("")
        setLandscape(false)
        setPop(!pop)
        setPopupImg(e.target.src)
        html.classList.add("hidden-overflow")
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
        html.classList.remove("hidden-overflow")
    }

    // setInterval(() => {
    //     setCount(count++)
    //     //(count);
    // }, 5000);
    // setCount(location.pathname)
    useEffect(() => {
        //("run playground effect");
        setCount(location)
        gsap.fromTo(playgroundInfo, {
            // scale: .2,
            // opacity: 0,
            y: -70,
            // transform: "skewY(30deg)"
        },
            {
                opacity: 1,
                delay: 2,
                duration: 1,
                y: 0,
                ease: "Bounce.easeOut",
                // transform: "skewY(0deg)"
            })
        gsap.fromTo(playgroundInfo2, {
            // scale: .2,
            // opacity: 0,
            y: -150,
            // transform: "skewY(30deg)"
        },
            {
                opacity: 1,
                delay: 1.5,
                duration: 1.5,
                y: 0,
                // ease: "Bounce.easeOut",
                // transform: "skewY(0deg)"
            })
        gsap.fromTo(playgroundInfo, {
            // scale: .2,
            // opacity: 1,
            y: 0,

        },
            {
                opacity: 0,
                delay: 4,
                duration: 1.5,
                y: -120,
                x: 0

            })
        gsap.fromTo(playgroundInfo2, {
            // scale: .2,
            opacity: 1,
            // y: 0,

        },
            {
                opacity: 0,
                delay: 4.2,
                duration: 1,
                y: -120,
                x: 0

            })
        gsap.fromTo(playground, {
            // scale: .2,
            opacity: 0,
            filter: "blur(4px)"

        },
            {
                opacity: 1,
                delay: 5,
                duration: 2,
                filter: "blur(0px)",
                // scrollTrigger: {
                //     trigger: refs.current[0],
                //     scrub: "true"
                // }
            })
        gsap.fromTo(playground, {
            scale: .4,
            // opacity: 0,
            y: "-800px",
            // x: "-100px",
            // filter: "blur(8px)"

        },
            {
                scale: 1,
                // opacity: 1,
                delay: 7.5,
                duration: 1,
                y: -300,
                // filter: "blur(0px)",
                ease: "easeOut"

                // scrollTrigger: {
                //     trigger: refs.current[0],
                //     scrub: "true"
                // }
            })
        gsap.fromTo(playground, {
            overflow: "visible",

        },
            {
                overflow: "scroll",
                delay: 10,
            })
        // gsap.fromTo(popupr, {
        //     position: "relative"

        // },
        //     {
        //         position: "fixed",
        //         delay: 15,
        //     })
    }, [count])

    return (
        <>
            <main className=' playground-main mt-20'>

                <section className=' px-6 mt-12 sm:px-16 dark:bg-lightShade dark:text-darkShade overflow-visible text-lightShade'>
                    <h3 ref={playgroundInfoRef} className='opacity-0 text-2xl  font-medium sm:text-4xl  overflow-visible' >
                        Welcome to my playground.
                    </h3>
                    <p ref={playgroundInfo2Ref} className='opacity-0 mt-5 leading-[25px] sm:w-full text-sm sm:text-base '>
                        This is an archive collection of projects I have worked on over time.
                    </p>
                    {/* <p className='mt-3 leading-[25px] sm:w-full text-sm sm:text-base  '>
                        I hope you get to enjoy interacting with my designs here.
                    </p> */}
                </section>
                {/* popup */}
                {/* popup */}
                {/* popup */}
                <div ref={popupRef} onClick={handleDecrease} className={pop ? "popup fixed bg-[rgba(0,0,0,.95)] top-0 left-0 z-[20000]  h-screen w-screen " : " hidden"}>
                    <img src={popupImg} className={landscape ?
                        'relative z-[200] rotate-90 min-w-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        : 'relative z-[200] top-1/2 left-1/2 max-h-[95%] min-h-[30%] -translate-x-1/2 -translate-y-1/2'} alt="popup" />
                </div>
                {/* popup */}
                {/* popup */}
                {/* popup */}
                <section ref={backTextRef} className='z-[0] fixed flex gap-3 top-[30vh] flex-col justify-center items-center w-screen h-[30vh] back-text text-neutral-200 opacity-0 md:opacity-1'>
                    <h3 className='opacity-[.1] font-bold text-3xl text-center'>
                        Archives.
                    </h3>
                    <h3 className='opacity-[.1] font-bold text-3xl text-center'>
                        Designs.
                    </h3>
                    {/* <p className='text-orange-200 opacity-[0.5]'>Swipe to move around</p> */}
                    <p className='opacity-[0.15] '> Touch images to enlarge</p>

                    <h3 className='opacity-[.1]  font-medium text-[10px] text-center'>
                        2022 &mdash; 2023.
                    </h3>
                </section>

                <section ref={playgroundRef} onTouchStart={playgroundStart} onTouchEnd={playgroundEnd} className='opacity-0 overflow-scroll  dark:bg-lightShade dark:text-darkShade py-32  px-6 gap-4  grid-cont  playground-cont  md:overflow-visible [&>*]:overflow-visible mt-10  text-[10px] sm:px-16 justify-between text-lightShade'>
                    <div className='h-72 w-72  grids grid-1 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:h-[75%] flex justify-around h-56 w-64'>
                            <img className='self-start' src={bud1} onClick={handleEnlarge} alt="" />
                            <img className='self-center' src={bud2} onClick={handleEnlarge} alt="" />
                            <img className='self-end' src={bud3} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium '>
                                Bud &mdash; An Online Diary Platform with Interactive AI.
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grids grid-2 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:h-[75%] flex justify-around h-56 w-64'>
                            <img className='self-end' src={flo1} onClick={handleEnlarge} alt="" />
                            <img className='self-center' src={flo2} onClick={handleEnlarge} alt="" />
                            <img className='self-start' src={flo3} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Flo &mdash; An app that gives users praise.
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grids grid-3 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                            <img className='self-end' src={craiglist1} onClick={handleEnlarge} alt="" />
                            <img className='self-center' src={craiglist2} onClick={handleEnlarge} alt="" />
                            <img className='self-start' src={craiglist3} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Craiglist &mdash; An online advertisement website.
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Redesign
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grids grid-4 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground  rounded-lg flex justify-center p-2 [&>*]:h-[60%]  h-56 w-64'>
                            <img className='self-center' src={winniamp} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Winamp &mdash; A desktop media app.
                            </p>
                            <p className='leading-[14px] self-center text-lightShade font-normal border-opaque  border-[1px]  h-5 px-3 rounded-3xl '>
                                Redesign
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grids grid-5 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:w-[40%] flex justify-around h-56 w-64'>
                            <div className='flex flex-col shoptacle-cont  overflow-visible justify-between '>
                                <img className='shoptacle' src={shoptacle1} onClick={handleEnlarge} alt="" />
                                <img className='shoptacle' src={shoptacle3} onClick={handleEnlarge} alt="" />
                            </div>
                            <img className='self-center' src={shoptacle2} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Shoptacle &mdash; A luxury clothing webshop.
                            </p>
                            <p className='leading-[14px] self-center text-lightShade font-normal border-opaque  border-[1px]  h-5 px-3 rounded-3xl '>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grids grid-6 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                            <img className='self-end' src={dribbble1} onClick={handleEnlarge} alt="" />
                            <img className='self-center' src={dribbble2} onClick={handleEnlarge} alt="" />
                            <img className='self-start' src={dribbble3} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Dribbble &mdash; An event exploring app.
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grids grid-7 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground  rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                            <img className='self-start mt-6' src={buonnisimo1} onClick={handleEnlarge} alt="" />
                            <img className='self-center mt-6' src={buonnisimo2} onClick={handleEnlarge} alt="" />
                            <img className='self-start mt-6' src={buonnisimo3} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Buonissimo &mdash; A food recipe app.
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grids grid-8 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                            <img className='self-center' src={casual} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Inspiration from dribbble
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Redesign
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Playground
