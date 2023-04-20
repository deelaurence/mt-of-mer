import React from 'react'
import { useState, useRef } from 'react'
import vrMockup from '../assets/landing-vr.webp'
import mrUserflow from '../assets/mr-userflow.jpg'
import mrScreen1 from '../assets/mr-screen1.webp'
import mrScreen2 from '../assets/mr-screen2.webp'
import mrScreen3 from '../assets/mr-screen3.webp'
import mrScreen4 from '../assets/mr-screen4.webp'


import vrGif from "../assets/headset.webp"

import next from '../assets/next.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'


const MixedR = ({ locationProps }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const parentRef = useRef(null)
    const findingsRef = useRef(null)
    const parent = parentRef.current
    const finding = findingsRef.current
    const articles = document.querySelectorAll("article")
    const span = document.querySelectorAll("span")
    const [location, setLocation] = useState("")
    const oculus = document.querySelector('.headset')
    const solution = document.querySelector('.solution')
    const overview = document.querySelector('.overview')
    const main = document.querySelector('main')
    const touchStart = () => {
        //("start");
        // oculus.style.transform = "rotateY(0deg) translateY(5px)"
        oculus.style.transform = "scale(1.1)"
        // oculus.style.zIndex = "0"
        // // gsap.to(oculus, {
        //     yPercent: -10,
        //     duration: 2,
        //     rotateY: "0deg",
        //     // delay: 2,
        //     opacity: 1,
        //     zIndex: 1000,
        //     // repeat: -1,
        //     // yoyo: true,
        // })
    }
    const touchEnd = () => {
        //("end");
        oculus.style.transform = "scale(1) "
        // // oculus.style.opacity = ".1"
        // oculus.style.zIndex = "0"
        // gsap.to(oculus, {
        //     yPercent: 0,
        //     duration: 1,
        //     rotateY: "20deg",
        //     // delay: 2,
        //     opacity: .1,
        //     zIndex: 0,
        //     // repeat: -1,
        //     // yoyo: true,
        // })
    }
    useEffect(() => {
        setLocation(locationProps)
        //("kodetech effect");
        //(oculus);
        gsap.fromTo(main, {
            opacity: 0,
        },
            {
                opacity: 1,

                duration: 3,
            })

        gsap.to(oculus, {
            yPercent: 20,
            duration: 2,
            // rotate: "60deg",
            // delay: 2,
            opacity: .05,
            // zIndex: 10,

            scrollTrigger: {
                trigger: overview,
                scrub: true,
                start: "bottom bottom",
                end: "=+10px"
            }
            // repeat: -1,
            // yoyo: true,
        })
        gsap.to(oculus, {
            yPercent: 0,
            duration: 2,
            rotate: "60deg",
            // delay: 2,
            opacity: .05,
            // zIndex: 10,

            scrollTrigger: {
                trigger: overview,
                scrub: true,
                start: "bottom top",
                // end: "top top/",
                // markers: true
            }
            // repeat: -1,
            // yoyo: true,
        })
        gsap.to(oculus, {
            yPercent: 0,
            duration: 1,
            rotate: "60deg",
            // delay: 2,
            opacity: 1,
            zIndex: 10,

            scrollTrigger: {
                trigger: solution,
                scrub: 2,
                start: "bottom bottom",
                end: "+=10px"
            }
            // repeat: -1,
            // yoyo: true,
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
                <section className='headset overflow-hidden opacity-[.07]  fixed'>
                    <img className='' src={vrGif} alt="" />
                </section>
                <section onTouchEnd={touchEnd} onTouchStart={touchStart} className=' mt-20 relative pb-10'>
                    <div>
                        <h1
                            className="text-[1.8rem] font-semibold md:text-5xl">
                            <span className='font-medium'>A <span>Mixed Reality</span> application for Healthcare</span>
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
                    <div className='overview text-[1.5rem] font-[600] mt-16'>
                        <h3 className='mb-5'>
                            Overview
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  dark:text-darkShade  text-[#fafafab9]'>
                            <span className="text-orange-200">Mixed Reality</span> <span className='text-purple-400'>MR</span>  is an immersive
                            technology that combines
                            the real-world environment with augmented reality
                            <span className='text-red-400'> AR</span> and virtual reality <span className='text-blue-400'> VR</span> and
                            this is fueled by 3D information.

                            <br />
                            <br />
                            For <span className='text-purple-400'>MR</span> to function,
                            it produces an environment where physical and digital
                            objects can co-exist and interact in real time.
                            This makes it a hybrid distinctive of <span className='text-red-400'> AR</span> & VR
                            because while <span className='text-red-400'> AR</span> solely displays
                            a layer of digital elements on top of the
                            real world, <span className='text-purple-400'>MR </span>
                            offers real-world integration and actual
                            interaction with virtual elements.
                            <br />
                            <br />
                            Presently, the concept of <span className="text-orange-200">Mixed Reality</span> applications is regarded as novel, however, there is no denying the fact that there still remain inconceivable possibilities associated with the application of <span className="text-orange-200">mixed reality</span> in healthcare.
                            <br />
                            <br />
                            Infusing the use of <span className="text-orange-200">Mixed Reality</span> as a technique can help in the generation of personalized 3D models for every patient and this can help the medical personnel visualize the internal anatomy of the patient in a fully immersive and interactive environment.
                            <br />
                            <br />
                            The possibility of this paves the way for realistic activities to be carried out, such as preoperative simulations which can be used to determine optimal procedures pertaining to patients’ prognosis and to predict the final surgical outcomes of the patients involved.
                            <br />
                            <br />
                            With the implementation of this product, there will be increased patient engagement using holographic patient consultation, the option of remote expert consultation, and the possibility for training simulations.

                        </article>
                    </div>
                    <div
                        className='mt-12 overflow-hidden'>
                        <img
                            className='mt-14'
                            src={vrMockup} alt="" />
                    </div>
                    <div className='text-[1.5rem]  font-[600] mt-[88px]'>
                        <h3 className='mb-5'>
                            The Challenge.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Although the healthcare system is seen to be such an integral and crucial aspect of human wellbeing, it is greatly flawed in the process of providing proper medical services to people who need them, especially in emergency situations.
                            <br />
                            <br />
                            This flaw, although manageable in the previous years keeps increasing to new highs everyday and the surge level is likely not to reduce anytime soon and this is largely due to the recovery from the COVID-19 pandemic as the healthcare industry since the year 2020 has undergone a lot of transformation.
                            <br />
                            <br />
                            As a result of this, patient experience with healthcare keeps dwindling and this reduces the retention level of patients who are likely to keep using healthcare services.
                        </article>
                        <p className='text-[1rem] leading-8 font-[400]  mt-8  text-red-200'>Factors that affect patient experience negatively include:</p>
                        <ul className='text-[1rem] font-[400] text-[#fafafab9] mt-6 [&>*]:overflow-visible overflow-visible  ml-4 dark:text-darkShade'>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span> A lack of personalized interaction with medical personnel.</li>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>Loss of patients’ data and records when they switch insurance plans or healthcare services.</li>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>Lack of price transparency as regards patients’ testing and therapy.</li>
                            {/* <li><span className='font-medium text-lightShade  dark:text-darkShade'>A lack</span> of proper product descriptions.</li> */}
                        </ul>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Research.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To get things started, I carried out secondary research to understand the challenges individuals have pertaining to the healthcare system.
                        </article>
                        <p className='text-[1rem] leading-8 font-[400]  mt-8  text-red-200'>I discovered the following:</p>
                        <ul className='text-[1rem] font-[400] text-[#fafafab9] mt-6 [&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>Healthcare is not readily accessible to cater to the needs of everyone.</li>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>Healthcare is now largely data-dependent but technology is not being properly implemented.</li>
                            <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>There is a communication gap between medical personnel and patients.</li>
                            {/* <li><span className='font-medium text-lightShade  dark:text-darkShade'>A lack</span> of proper product descriptions.</li> */}
                        </ul>
                    </div>
                    {/* <div ref={findingsRef} className=' text-[1.5rem] font-[600] mt-20'>
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
                            <br />

                            <ul className=' [&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Complex</span> website interfaces.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Limited</span> payment methods.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Constrained</span> delivery options.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>A lack</span> of proper product descriptions.</li>
                            </ul>

                        </article>
                    </div> */}
                    <div className=' text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            The Solution.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Although still being engaged with, interacting with <span className="text-orange-200">Mixed Reality</span> can help to improve the general health status across the world and this is largely due to the fact that <span className="text-orange-200">mixed reality</span> helps with visualization and with visualization comes better implementation.
                            <br />
                            <br />
                            When it comes to being implemented in the surgical field, MR wearable devices such as the Microsoft HoloLens can be used in combination with new emerging imaging technologies.
                            <br />
                            <br />
                            The use of this kind of immersive technology ensures that the medical personnel has access to spatial localization of anatomical structures which helps to improve mental precision, simplifying preoperative planning.
                            <br />
                            <br />
                            As a <span className="text-orange-200">Mixed Reality</span> application, this product intends to serve as an instrumental tool that bridges the interrelationship gap between medical personnel and their patients. <br />
                            As a <span className="text-orange-200">Mixed Reality</span> application, this product intends to serve as an instrumental tool that bridges the interrelationship gap between medical personnel and their patients. <br />
                            <br />
                            <br />

                            {/* <ul className=' [&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li>Ensuring<span className='font-medium text-lightShade  dark:text-darkShade'> user-friendliness</span> on the website.</li>
                                <li>Priortizing<span className='font-medium text-lightShade  dark:text-darkShade'> easy navigation.</span></li>
                                <li>Including a variety of<span className='font-medium text-lightShade  dark:text-darkShade'> payment methods.</span></li>
                                <li>Making sure there are different<span className='font-medium text-lightShade  dark:text-darkShade'> delivery options</span> available.</li>
                                <li>Crafting detailed<span className='font-medium text-lightShade  dark:text-darkShade'> product descriptions.</span></li>
                            </ul> */}
                        </article>
                    </div>
                    {/* <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Persona.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            In the creation of this product, the
                            target group that was focused on made
                            up the majority of the KodeTech product
                            users. The user base consists of the younger
                            demographic which are capable of
                            interacting with the KodeTech platform to
                            conduct online transactions. As a result,
                            the user profiles were pooled and merged
                            to form a single user persona.
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
                            Information Architecture.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            For a product such as this, it was imperative
                            that every action taken by the users would be
                            seamless as a result of the presence of an
                            end-to-end information architecture workflow.
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={architecture} onClick={handleEnlargeLandscape} alt="" />
                    </div> */}

                    <div>
                        <div className='mt-14 font-semibold text-[1.5rem] mb-6'>
                            <h3>User Flow.</h3>
                        </div>
                        <article className='text-[1rem] mb-8 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            I came up with a User Flow to serve as a guide for my thought process and to make the user interaction a seamless one.
                            <br />
                            <br />
                            For optimal product interaction, the user would need to wear a pair of HoloLens glasses.</article>
                        <img src={mrUserflow} alt="" />


                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Screens.
                        </h3>
                    </div>
                    <div className='solution flex flex-col gap-12'>
                        <div><img src={mrScreen1} alt="" /></div>
                        <div><img src={mrScreen2} alt="" /></div>
                        <div><img src={mrScreen3} alt="" /></div>
                        <div><img src={mrScreen4} alt="" /></div>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Have a go!
                        </h3>
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

export default MixedR
