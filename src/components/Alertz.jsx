import React from 'react'
import { useState, useRef } from 'react'
import alertzMockup from '../assets/landing-alertz.webp'
import kodeTechCofee from '../assets/kodetech-mockup.webp'
import kodeTech1 from '../assets/kodetech1.webp'
import kodeTech2 from '../assets/kodetech2.webp'
import kodeTech3 from '../assets/kodetech3.webp'
import response1 from '../assets/alertz-response1.webp'
import response2 from '../assets/alertz-response2.webp'
import empathy from '../assets/alertz-empathy.webp'


import userPersona from '../assets/alertz-persona.webp'
import userFlow from '../assets/alertz-userflow.webp'
import screen from '../assets/alertz-screen.jpg'

import prev from '../assets/prev.png'
import next from '../assets/next.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

//imation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'


const Alertz = ({ locationProps }) => {
    const main = document.querySelector('main')
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const parentRef = useRef(null)
    const findingsRef = useRef(null)
    const parent = parentRef.current
    const finding = findingsRef.current
    const articles = document.querySelectorAll("article")
    const span = document.querySelectorAll("span")
    const [location, setLocation] = useState("")
    // useEffect(() => {
    //     setLocation(locationProps)
    //     //("kodetech effect");
    //     gsap.fromTo(parent, {
    //         background: "#212121",
    //         color: "#fafafa"
    //     },
    //         {
    //             // background: "#d9dddc",
    //             background: "#212121",
    //             // color: "#212121",
    //             color: "rgb(100,100,100)",
    //             duration: 1,
    //             scrollTrigger: {
    //                 trigger: finding,
    //                 toggleActions: "play reverse play reverse"
    //                 // scrub: true
    //             }
    //         })
    //     gsap.fromTo(articles, {
    //         background: "#212121",
    //         color: "#fafafab9"

    //     },
    //         {
    //             // background: "#d9dddc",
    //             background: "#212121",
    //             // color: "#212121",
    //             color: "rgb(100,100,100)",
    //             duration: 1,
    //             scrollTrigger: {
    //                 // scrub: true,
    //                 trigger: finding,
    //                 toggleActions: "play reverse play reverse"
    //             }

    //         })
    //     gsap.fromTo(span, {
    //         background: "#212121",
    //         color: "#fafafa"


    //     },
    //         {
    //             // background: "#d9dddc",
    //             background: "#212121",
    //             // color: "#212121",
    //             color: "white",
    //             duration: 1,
    //             scrollTrigger: {
    //                 // scrub: true,
    //                 toggleActions: "play reverse play reverse",
    //                 trigger: finding
    //             }
    //         })
    //     // gsap.fromTo(articles, {
    //     //     y: 30,
    //     //     // opacity: 0

    //     // },
    //     //     {
    //     //         y: 0,
    //     //         // opacity: 1,
    //     //         scrollTrigger: {
    //     //             duration: 2,
    //     //             // scrub: true,
    //     //             trigger: articles,
    //     //             toggleActions: "play reverse play reverse"
    //     //         }

    //     //     })
    // }, [location]);
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
                            Alertz: <span className='font-medium'> A <br />Crime Alert app</span>
                        </h1>
                    </div>
                    <div
                        className=' text-[1.1rem] font-[500]  text-[#fafafab9]  dark:text-da1hade leading-8 mt-16'>
                        <p className='mb-2'>Role:</p>
                        <p className='font-[600] text-[1.1rem] text-lightShade '>Product Designer</p>
                    </div>
                    <div className='text-[1.1rem] font-[500]  text-[#fafafab9]  dark:text-da1hade leading-8 mt-10'>
                        <p className='mb-2'>Length:</p>
                        <p className='font-[600] text-white  dark:text-darkShade text-[1.1rem]'>3 weeks</p>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-16'>
                        <h3 className='mb-5'>
                            Overview
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  dark:text-darkShade  text-[#fafafab9]'>
                            Alertz is a <span className='text-red-200'>mobile </span>application that notifies users of crime alerts within their close proximity with a feature of allowing the users send help to the person in need (who created the emergency report) by dialing an emergency contact number.<br />
                            This project was designed by a team of talented designers: <a className='text-purple-300' href="https://www.linkedin.com/in/jenny-anthony-48721a185">Obiekea Jennifer</a> and <a href="https://www.linkedin.com/in/flourish-ralph-469162203" className='text-orange-200'>myself.</a> <br />
                            I served as a Product Designer.
                        </article>
                    </div>
                    <div
                        className='mt-12 overflow-hidden'>
                        <img
                            className='mt-14'
                            src={alertzMockup} alt="" />
                    </div>
                    <div className='text-[1.5rem]  font-[600] mt-[88px]'>
                        <h3 className='mb-5'>
                            The Challenge.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            <span className='text-red-300'>Crime</span> is a phenomenon that is now largely
                            being recognized as a social vice that occurs
                            naturally  and at any given point. This in
                            itself is an issue, but a greater problem
                            is an <span className='text-blue-200' >information gap.</span> <br />
                            How do people know when and where a crime has taken place?<br />
                            If they are aware, then, <span className='text-pink-300'>what can they do</span> about it?
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Research.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To get started, we identified our target users and sought them out in order to carry out a survey. This helped us to understand the challenges they have faced in relation to the problem (pain points) and to gain insight into their thought processes as regards a solution.
                        </article>
                        <p className='text-[1rem] leading-8 font-[400] mt-8  text-red-200'>Here is some data from their responses:</p>
                    </div>
                    <div className='mt-10'>
                        <img src={response1} alt="" />
                    </div>
                    <div className='mt-10'>
                        <img src={response2} alt="" />
                    </div>
                    <div ref={findingsRef} className='text-[1.5rem] hidden font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Findings.
                        </h3>
                        <article className='text-[1rem] overflow-1ible leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Target users are inclined to carry out online purchases, however, they complained of certain difficulties
                            which made them restrict their online transactions.
                            <br />
                            <br />

                            <span className='block mt-4 mb-2'> These difficulties were in the form of:</span>
                            <br />

                            <ul className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Complex</span> website interfaces.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Limited</span> payment methods.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Constrained</span> delivery options.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>A lack</span> of proper product descriptions.</li>
                            </ul>

                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            The Solution.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To <span className='text-red-200'>bridge</span> the information gap and ensure the users have the
                            opportunity <span className='text-purple-200'>to act</span> according to whatever information
                            they get about criminal activity at any given time, we came up with these solutions:
                            <br />
                            <br />

                            <ul className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li>Have a feature where the users can <span className='font-medium text-lightShade'> have an overview of emergency reports </span> daily for a constant inflow of information.</li>
                                <li>Create a feature where users can  <span className='font-medium text-lightShade'> create their own emergency reports if they are in danger </span> and need help.</li>
                                <li>Include a map feature where <span className='text-lightShade font-medium'> users can search for locations </span> in order to see emergency reports that have been made per location at a particular time.</li>
                                {/* <li>Making sure there are different<span className='font-medium text-lightShade  dark:text-darkShade'> delivery options</span> available.</li> */}
                                <li>Place <span className='text-lightShade font-medium'> an emergency contact number that users can reach out to for help </span> (for other users who have made emergency reports or for themselves).</li>
                            </ul>
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Empathy Map.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To better understand the <span className='text-orange-200' >pain points</span> of our users, we extracted information from the survey responses.
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={empathy}  alt="" />
                    </div>

                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Persona.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            After curating the empathy map, we were able to create the user persona.
                        </article>
                    </div>
                    <div className='mt-10'>
                        <img src={userPersona} alt="" />
                    </div>
                    <article className='text-[1rem] mt-10 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                        After this, the information architecture and
                        task flows were designed.
                    </article>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Flow.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            We came up with a user flow to serve as a <span className='text-red-200'>guide</span>  for our thought process and also
                            to make the <span className='text-blue-300'>user interaction</span> as seamless as possible.
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={userFlow}  alt="" />
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Screens.
                        </h3>

                    </div>
                    <div className='mt-16'>
                        <img src={screen}  alt="" />
                    </div>


                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Have a go!
                        </h3>
                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Pitch Deck <span className='text-white font-[700]  dark:text-darkShade' >here</span>
                        </p>
                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            View the prototype <span className='text-white font-[700]  dark:text-darkShade' >here</span>
                        </p>

                    </div>

                    <div className='mt-20 text-lightShade  dark:text-darkShade'>
                        <p className='mb-4'>Owari da.</p>
                        <p className=''>Arigato. <span className='text-base'>😊</span> </p>
                    </div>
                    <div className='flex gap-2 items-center mt-20 '>
                        <img className='h-3 rotate-[180deg] ml-6' src={next} alt="" srcSet="" />
                        <p className='text-[1rem] leading-8 font-[500] -ml-4 text-[#fafafa]  dark:text-darkShade'>
                            Previous
                        </p>
                    </div>
                    <div className='flex gap-2 items-center justify-end '>
                        <p className='text1rem] leading-8 font-[500]   '>
                            Next
                        </p>
                        <img className='h-3' src={next} alt="" srcSet="" />
                    </div>
                </section>
            </main>

        </>
    )
}

export default Alertz
