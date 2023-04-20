import React from 'react'
import { useState, useRef } from 'react'
import kodeTechCofee from '../assets/landing-guild.webp'
import kodeTech1 from '../assets/kodetech1.webp'
import kodeTech2 from '../assets/kodetech2.webp'
import kodeTech3 from '../assets/kodetech3.webp'
import guildLanding from '../assets/landing-guild.webp'

import userFlow from '../assets/guild-userflow.webp'
import userPersona from '../assets/guild-userpersona.webp'
import userJourney from '../assets/guild-userjourney.webp'
import screen1 from '../assets/guild-screen1.webp'
import screen2 from '../assets/guild-screen2.webp'
import screen3 from '../assets/guild-screen3.webp'
import screen4 from '../assets/guild-screen4.webp'

// import userPersona from './images/userpersona.webp'



import prev from '../assets/prev.png'
import next from '../assets/next.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'


const Guild = ({ locationProps }) => {
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
                            Guild: <span className='font-medium'> A Web3 Community platform</span>
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
                            Currently, the whole media has been abuzz as a result of the introduction of Web3. Web3 poses as a new web version filled with loads of benefits because of its decentralized nature.
                            <br />
                            <br />
                            <span className='text-red-400'> Web3 </span>communities are decentralized networks that use blockchain technology to enable peer-to-peer (P2P) interactions and exchanges and they are known to offer a range of possibilities for people to engage with each other and with the broader community.
                            <br />
                            <br />
                            Guild serves as a community platform for people who are interested in Web3 or looking to understand more about Web3 operations.
                            <br />
                            <br />
                            This was a team challenge in the Web3 community I belong to on Discord; <span className='text-purple-400'> DesignersDAO.</span>
                            <br />
                            <br />
                            I served as a Product Designer.
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
                            As intriguing as Web3 is, it is still perceived as <span className='text-orange-400'> novel </span> and although this gives it a level of appeal, there is still a lot of intricacy involved. Therefore, there is the need for a space where people interested in Web3 can interact and learn about new opportunities.
                            <br />
                            <br />
                            For this project, the brief was to Design a <span className='text-green-400'> Community </span> platform for <span className='text-red-400'> Web3 </span> that has better UX than Discord.
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            Desk Research.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Since our brief centered around <span className='text-yellow-200'> improving Discord </span> and creating a better <span className='text-purple-300'> UX </span> experience, we carried out research to understand the user interaction with Discord as a <span className='text-red-400'> Web3 </span> community platform.
                            <br />
                            <br />
                            Discord currently serves as a community platform that welcomes people interested in majorly tech and gaming activities, however, the user interaction isn’t as seamless as expected.
                            <br />
                            <br />
                            To get a better understanding about Web3 community platforms asides from Discord, research was carried out to source and identify such platforms (like Slack, element.io, tribe.so, etc.).
                            <br />
                            <br />
                            To get started, primary research was carried out to understand the <span className='text-orange-400'> pain points </span> of the target users and the main aim of this was to connect with the users and in turn discover a variety of opportunities for the product.
                        </article>
                    </div>
                    <div ref={findingsRef} className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Research.
                        </h3>
                        <article className='text-[1rem] overflow-1ible leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            Being a major community platform also concerned with <span className='text-red-400'> Web3 </span>, Discord is seen
                            as a welcome space for numerous interactions and formations of possible communities.
                            However, extensive user research through the carrying out of interviews indicated a
                            variety of flaws in the user experience <span className='text-green-400'> UX </span> of the platform.
                            <br />
                            <br />

                            <span className='block mb-4 mt-4'> Some of the findings:</span>
                            

                            <ul className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'>Discord</span> has a poor onboarding process.</li>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>Navigation around the platform seems to be quite problematic - especially for new users.</li>
                            </ul>

                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            The Solution.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            The pain points of the users were recorded and taken into consideration,
                            this served as the core purpose of the platform;
                            <br />
                            <br />
                            <ul className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li><span className='font-medium text-lightShade  dark:text-darkShade'></span>
                                    Making sure that Guild has a <span className='text-red-300'> good onboarding process </span>whilst also prioritizing
                                    user navigation to be as easy and seamless as possible, with the negation of
                                    any possible confusion factor.
                                </li>
                            </ul>
                            <span className='block mt-4 mb-2'> After ensuring a resolution of the documented complaints
                                about Discord, the following Web3 features were decided on and included to improve
                                the <span className='text-green-400'>UX</span> of the Guild platform:</span>
                            <ul className='[&>*]:overflow-visible overflow-visible ml-4  dark:text-darkShade'>
                                <li>NFT profiles</li>
                                <li>Voting (polls)</li>
                            </ul>
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Journey.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            The user journey was curated with two kinds of users in mind - existing users and new users.
                        </article>
                    </div>
                    <div className='mt-10'>
                        <img src={userJourney} alt="" />
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-5'>
                            User Persona.
                        </h3>
                        <article className='text-[1rem] leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            For this iteration process, the target group in focus was made up of a user base that showed a level of interest in Web3, and had some experience with a community-based platform. The differentiated roles were used to create the user persona.
                        </article>
                    </div>
                    <div className='mt-10'>
                        <img src={userPersona} alt="" />
                    </div>


                    <div>
                        <div className='mt-14 font-semibold text-[1.5rem] mb-6'>
                            <h3>User Flow</h3>
                        </div>
                        <article className='text-[1rem] mb-6 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                            To serve as a guide for our thought process and also ensure seamless user interaction, we came up with the user flow.
                        </article>
                        <div className='flex flex-col gap-8 text-opaque font-medium'>
                            <div>
                                <img src={userFlow} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-20'>
                        <h3 className='mb-6'>
                            Screens.
                        </h3>
                    </div>
                    <article className='text-[1rem] mb-10 leading-8 font-[400]  text-[#fafafab9]  dark:text-darkShade'>
                        With the main purpose of the platform being predominantly
                        user-centric in order to fulfil and maintain seamless
                        human connections, the interface was designed to have

                        <span className='text-red-400'> Web3</span> features whilst staying community-based with the prioritization of seamless interaction and easy navigation.
                    </article>
                    <div className='flex flex-col gap-8'>
                        <div><img src={screen1} alt="" /></div>
                        <div><img src={screen2} alt="" /></div>
                        <div><img src={screen3} alt="" /></div>
                        <div><img src={screen4} alt="" /></div>
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

export default Guild

