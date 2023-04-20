import React from 'react'
import { useState, useRef } from 'react'
import kodeTechCofee from '../assets/kodetech-mockup.webp'
import kodeTech1 from '../assets/kodetech1.webp'
import kodeTech2 from '../assets/kodetech2.webp'
import kodeTech3 from '../assets/kodetech3.webp'

import userPersona from '../assets/userpersona.webp'
import architecture from '../assets/kodetech-flow1.webp'
import userFlow1 from '../assets/kodetech-flow2.webp'
import userFlow2 from '../assets/kodetech-flow3.webp'
import userFlow3 from '../assets/kodetech-flow4.webp'

import prev from '../assets/prev.png'
import next from '../assets/next.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'


const KODETECH = ({ locationProps }) => {
    const controls = useAnimation();
    const main = document.querySelector('main')
    const [ref, inView] = useInView();
    const parentRef = useRef(null)
    const findingsRef = useRef(null)
    const parent = parentRef.current
    const finding = findingsRef.current
    const articles = document.querySelectorAll("article")
    const span = document.querySelectorAll("span")
    const [location, setLocation] = useState("")
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
            <main ref={parentRef} className="px-6 opacity-0 tracking-[0.4px] md:px-16 pt-20   relative flex flex-col bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade [&>*]:dark:text-darkShade md:min-h-[90vh] md:pb-10">
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
                            KodeTech: <span className='font-medium'> An <br /> E-Commerce Website</span>
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
                            <span className='text-orange-400'>Kodetech</span> is an e-commerce website that
                            was created to help the company expand
                            their brand while allowing them connect
                            with their users and effectively market their
                            tech gadget products. <br />
                            On this platform, users are able to <span className='text-green-300'>easily interact</span> with the website and have an
                            experience that is user-friendly while
                            performing their primary tasks of placing
                            orders.
                        </article>
                    </div>
                    <div
                        className='mt-12 overflow-hidden'>
                        <img
                            className='mt-14'
                            src={kodeTechCofee} alt="" />
                    </div>
                    <div className='text-[1.5rem]  font-[600] mt-[88px]'>
                        <h3 className='mb-5'>
                            The Challenge.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            As a Nigerian-Tech brand, <span className='text-orange-400'>KodeTech</span> is
                            interested in bridging the communication
                            gap through the utilization of technology
                            and technological products, however, they
                            require a <span className='text-green-300'>platform</span> that would allow them
                            connect with their users whilst providing
                            them with top-notch user experience and
                            making sure there is the availability of
                            quality products.
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Research.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To get started, primary research was carried out to understand the <span className='text-purple-300'>pain points</span> of
                            the target users
                            and the main aim of this was to connect with the users and in turn discover a variety of opportunities
                            for the product.
                        </article>
                    </div>
                    <div ref={findingsRef} className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Findings.
                        </h3>
                        <article className='text-[1rem] overflow-1ible leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Target users are inclined to carry out online purchases, however,
                            they complained of certain difficulties
                            which made them restrict their online transactions.
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
                            After understanding the challenges faced by the users and taking into
                            consideration the<span className='text-green-300'> core </span>objective
                            of the brand, goals were crafted to establish major points:
                            <br />
                            <br />

                            <ul className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li>Ensuring<span className='font-medium text-lightShade  dark:text-darkShade'> user-friendliness</span> on the website.</li>
                                <li>Prioritizing<span className='font-medium text-lightShade  dark:text-darkShade'> easy navigation.</span></li>
                                <li>Including a variety of<span className='font-medium text-lightShade  dark:text-darkShade'> payment methods.</span></li>
                                <li>Making sure there are different<span className='font-medium text-lightShade  dark:text-darkShade'> delivery options</span> available.</li>
                                <li>Crafting detailed<span className='font-medium text-lightShade  dark:text-darkShade'> product descriptions.</span></li>
                            </ul>
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Persona.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            In the creation of this product, the
                            target group that was focused on made
                            up the majority of the <span className='text-orange-400'>KodeTech</span> product
                            users. The user base consists of the younger
                            demographic <span className='text-purple-300'>younger
                                demographic</span> which are capable of
                            interacting with the <span className='text-orange-400'>KodeTech</span> platform to
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
                            <span className='text-purple-300'> seamless</span> as a result of the presence of an
                            end-to-end information architecture workflow.
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={architecture}  alt="" />
                    </div>

                    <div>
                        <div className='mt-14 font-semibold text-[1.5rem] mb-6'>
                            <h3>Task Flows.</h3>
                        </div>
                        <div className='flex flex-col gap-8 text-opaque font-medium'>
                            <div>
                                <h5 className='mb-5'>Sign Up/Log In task flow.</h5>
                                <img  src={userFlow1} alt="" />
                            </div>
                            <div>
                                <h5 className='mb-5'>Order/Add to Cart task flow.</h5>
                                <img  src={userFlow2} alt="" />
                            </div>
                            <div>
                                <h5 className='mb-5'>Check Out task flow.</h5>
                                <img  src={userFlow3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Screens.
                        </h3>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <div><img src={kodeTech1} alt="" /></div>
                        <div><img src={kodeTech2} alt="" /></div>
                        <div><img src={kodeTech3} alt="" /></div>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Have a go!
                        </h3>
                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            View the users' prototype <span className='text-white font-[700]  dark:text-darkShade' >here</span>
                        </p>
                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            View the admin prototype <span className='text-white font-[700]  dark:text-darkShade' >here</span>
                        </p>

                        <p className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Explore live website <span className='text-white font-[700]  dark:text-darkShade' >here</span>
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

export default KODETECH
