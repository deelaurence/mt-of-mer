import React from 'react'
import { useLocation } from 'react-router-dom'
import heroImg from '../assets/hero-img.webp'
import threeShoes from '../assets/three-shoes.webp'
import seaWaves from '../assets/sea-waves.webp'
import shot1 from '../assets/shot1.webp'
import shot2 from '../assets/shot2.webp'
import shot3 from '../assets/shot3.webp'
import shot4 from '../assets/shot4.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useRef, useEffect, useState } from 'react'
const WhoIsFlo = () => {
  const location = useLocation()
  const floImgRef = useRef(null)
  const inquisitiveRef = useRef(null)
  const passionateRef = useRef(null)
  const intro1Ref = useRef(null)
  const intro2Ref = useRef(null)
  const intro3Ref = useRef(null)
  const intro4Ref = useRef(null)
  const subtitlesRef = useRef(null)

  const creativeRef = useRef(null)
  const perceptiveRef = useRef(null)
  const threeShoesRef = useRef(null)
  const backgroundRef = useRef(null)

  const curiousRef = useRef(null)
  const detailedRef = useRef(null)
  const seaWavesRef = useRef(null)
  const background2Ref = useRef(null)

  const perceptive = perceptiveRef.current
  const threeShoe = threeShoesRef.current
  const background = backgroundRef.current
  const subtitles = subtitlesRef.current

  const curious = curiousRef.current
  const detailed = detailedRef.current
  const seaWave = seaWavesRef.current
  const background2 = background2Ref.current


  const floImg = floImgRef.current
  const Inquisitive = inquisitiveRef.current
  const passionate = passionateRef.current
  const intro1 = intro1Ref.current
  const intro2 = intro2Ref.current
  const intro3 = intro3Ref.current
  const intro4 = intro4Ref.current

  const shotsRef = useRef(null)
  const shot1Ref = useRef(null)
  const shot2Ref = useRef(null)
  const shot3Ref = useRef(null)
  const shot4Ref = useRef(null)
  const shot = shotsRef.current
  const shot1r = shot1Ref.current
  const shot2r = shot2Ref.current
  const shot3r = shot3Ref.current
  const shot4r = shot4Ref.current
  const handleHover = (e) => {

    return
    if (e.detail === 2) {
      //(e.detail);
      subtitles.style.opacity = "0"
      subtitles.style.top = "30%"
      subtitles.style.transform = "skewX(10deg)"
      e.target.style.transform = "translate(-0%, -0%)"

      e.target.style.top = "0"
      shot2r.style.top = "0"
      shot2r.style.left = "50%"
      shot3r.style.top = "50%"
      shot3r.style.left = "0"
      shot4r.style.bottom = "0"
      shot4r.style.top = "50%"
      shot4r.style.left = "50%"
      shot2r.style.transform = "scale(1)"


      shot2r.style.filter = "brightness(100%)"
      shot3r.style.filter = "brightness(100%)"
      shot4r.style.filter = "brightness(100%)"
      shot3r.style.transform = "scale(1)"
      shot4r.style.transform = "scale(1)"
      // shot4r.style.bottom = "0"
      e.target.style.left = "0"
      // e.target.style.transformOrigin = "left"
      e.target.style.zIndex = "10"
      e.target.style.transition = ".5s ease-out"
      return
    }
    e.target.style.transform = "translate(-50%, -50%) scale(1.5)"
    // e.target.style.width = "0vw"
    // shot2r.style.transform = "rotate(-50deg)"
    e.target.style.top = "50%"
    e.target.style.left = "37%"
    shot2r.style.top = "30%"
    shot2r.style.left = "58%"
    shot2r.style.zIndex = "8"
    shot2r.style.transform = "scale(0.8) "
    shot2r.style.filter = "brightness(20%)"
    shot3r.style.top = "30%"
    shot3r.style.left = "-10%"
    shot3r.style.zIndex = "8"
    shot3r.style.filter = "brightness(20%)"
    shot3r.style.transform = "scale(.65) "
    shot3r.style.transformOrigin = "bottom bottom"
    // shot3r.style.opacity = "0.3"
    shot4r.style.top = "30%"
    shot4r.style.zIndex = "8"
    shot4r.style.left = "90%"
    shot4r.style.transform = "scale(0.5) "
    shot4r.style.zIndex = "6"
    shot4r.style.filter = "brightness(20%)"
    subtitles.innerHTML = "Shot One."

    subtitles.style.transition = "1s"
    subtitles.style.top = "70%"
    subtitles.style.transform = "skewX(0deg)"
    // shot4r.style.opacity = "0.3"
    // shot3r.style.opacity = "0"
    // shot4r.style.opacity = "0"
    e.target.style.transformOrigin = "left left"
    e.target.style.zIndex = "10"
    e.target.style.transition = ".5s ease-out"

  }

  const handleHover2 = (e) => {

    return
    if (e.detail === 2) {

      return
      subtitles.style.opacity = "0"
      subtitles.style.top = "30%"
      subtitles.style.transform = "skewX(0deg)"

      e.target.style.transform = "translate(-0%, -0%)"

      e.target.style.top = "0"
      shot1r.style.top = "0"
      shot3r.style.top = "50%"
      shot3r.style.left = "0"
      shot2r.style.left = "55%"
      shot4r.style.bottom = "0"
      shot4r.style.top = "50%"
      shot4r.style.left = "50%"
      shot1r.style.transform = "scale(1)"
      shot1r.style.left = "0"

      shot1r.style.filter = "brightness(100%)"
      shot3r.style.filter = "brightness(100%)"
      shot4r.style.filter = "brightness(100%)"
      shot3r.style.transform = "scale(1)"
      shot4r.style.transform = "scale(1)"
      // shot4r.style.bottom = "0"
      e.target.style.left = "50%"
      // e.target.style.transformOrigin = "left"
      e.target.style.zIndex = "10"
      e.target.style.transition = ".5s ease-out"
      return
    }
    e.target.style.transform = "translate(-50%, -50%) scale(1.5)"
    // e.target.style.width = "0vw"

    e.target.style.top = "50%"
    e.target.style.left = "37%"

    shot1r.style.top = "30%"
    shot1r.style.left = "-20%"
    shot1r.style.zIndex = "8"
    shot1r.style.transform = "scale(0.4)"
    shot1r.style.filter = "brightness(30%)"
    shot3r.style.top = "30%"
    shot3r.style.zIndex = "8"
    shot3r.style.filter = "brightness(30%)"
    shot3r.style.transform = "scale(.65)"
    // shot3r.style.opacity = "0.3"
    shot4r.style.top = "30%"
    shot4r.style.zIndex = "8"
    shot4r.style.left = "80%"
    shot4r.style.transform = "scale(0.5)"
    shot4r.style.zIndex = "6"
    shot4r.style.filter = "brightness(30%)"
    subtitles.innerHTML = "Shot Two."

    subtitles.style.transition = "1s"
    subtitles.style.top = "40%"
    // shot4r.style.opacity = "0.3"
    // shot3r.style.opacity = "0"
    // shot4r.style.opacity = "0"
    e.target.style.transformOrigin = "left left"
    e.target.style.zIndex = "10"
    e.target.style.transition = ".5s ease-out"

  }

  const handleHover3 = (e) => {

    return
    if (e.detail === 2) {

      return
      subtitles.style.opacity = "0"
      subtitles.style.top = "30%"
      subtitles.style.transform = "skewX(0deg)"

      // shot1r.target.style.transform = "translate(-0%, -0%)"

      e.target.style.bottom = "0"
      shot2r.style.top = "0"
      shot1r.style.top = "0%"
      shot1r.style.left = "0%"
      shot4r.style.bottom = "0"
      shot4r.style.top = "50%"
      shot4r.style.left = "50%"
      shot2r.style.transform = "scale(1)"

      shot2r.style.filter = "brightness(100%)"
      shot1r.style.filter = "brightness(100%)"
      shot4r.style.filter = "brightness(100%)"
      shot1r.style.transform = "scale(1)"
      shot4r.style.transform = "scale(1)"
      // shot4r.style.bottom = "0"
      e.target.style.left = "0%"
      e.target.style.transform = "scale(1)"
      // e.target.style.transformOrigin = "left"
      e.target.style.zIndex = "10"
      e.target.style.transition = ".5s ease-out"
      return
    }
    e.target.style.transform = "translate(-50%, -50%) scale(1.5)"
    // e.target.style.width = "0vw"

    e.target.style.top = "50%"
    e.target.style.left = "37%"

    shot2r.style.top = "30%"
    shot2r.style.zIndex = "8"
    shot2r.style.transform = "scale(0.8)"
    shot2r.style.filter = "brightness(30%)"
    shot1r.style.top = "30%"
    shot1r.style.zIndex = "8"
    shot1r.style.filter = "brightness(30%)"
    shot1r.style.transform = "scale(.65)"
    // shot3r.style.opacity = "0.3"
    shot4r.style.top = "30%"
    shot4r.style.zIndex = "8"
    shot4r.style.left = "80%"
    shot4r.style.transform = "scale(0.5)"
    shot4r.style.zIndex = "6"
    shot4r.style.filter = "brightness(30%)"
    subtitles.innerHTML = "Shot Three."

    subtitles.style.transition = "1s"
    subtitles.style.top = "40%"
    // shot4r.style.opacity = "0.3"
    // shot3r.style.opacity = "0"
    // shot4r.style.opacity = "0"
    e.target.style.transformOrigin = "left left"
    e.target.style.zIndex = "10"
    e.target.style.transition = ".5s ease-out"

  }
  const handleLeave3 = (e) => {

  }
  const handleHover4 = (e) => {

    return
    if (e.detail === 2) {
      subtitles.style.opacity = "0"
      subtitles.style.top = "30%"
      subtitles.style.transform = "skewX(0deg)"

      e.target.style.transform = "translate(-0%, -0%)"

      e.target.style.bottom = "0"
      shot2r.style.top = "0"
      shot3r.style.top = "50%"
      shot3r.style.left = "0"
      shot1r.style.top = "0"
      shot1r.style.left = "0"
      shot2r.style.transform = "scale(1)"

      shot2r.style.filter = "brightness(100%)"
      shot3r.style.filter = "brightness(100%)"
      shot1r.style.filter = "brightness(100%)"
      shot3r.style.transform = "scale(1)"
      shot1r.style.transform = "scale(1)"
      // shot4r.style.bottom = "0"
      e.target.style.left = "50%"
      // e.target.style.transformOrigin = "left"
      e.target.style.zIndex = "10"
      e.target.style.transition = ".5s ease-out"
      return
    }
    e.target.style.transform = "translate(-50%, -50%) scale(1.5)"
    // e.target.style.width = "0vw"

    e.target.style.top = "50%"
    e.target.style.left = "37%"

    shot2r.style.top = "30%"
    shot2r.style.zIndex = "8"
    shot2r.style.transform = "scale(0.8)"
    shot2r.style.filter = "brightness(30%)"
    shot3r.style.top = "30%"
    shot3r.style.zIndex = "8"
    shot3r.style.filter = "brightness(30%)"
    shot3r.style.transform = "scale(.65)"
    // shot3r.style.opacity = "0.3"
    shot1r.style.top = "30%"
    shot1r.style.zIndex = "8"
    shot1r.style.left = "80%"
    shot1r.style.transform = "scale(0.5)"
    shot1r.style.zIndex = "6"
    shot1r.style.filter = "brightness(30%)"
    subtitles.innerHTML = "Shot Four."

    subtitles.style.transition = "1s"
    subtitles.style.top = "40%"
    // shot4r.style.opacity = "0.3"
    // shot3r.style.opacity = "0"
    // shot4r.style.opacity = "0"
    e.target.style.transformOrigin = "left left"
    e.target.style.zIndex = "10"
    e.target.style.transition = ".5s ease-out"

  }
  const handleLeave4 = (e) => {

    return


  }

  const [currentLocation, setCurrentLocation] = useState("")

  useEffect(() => {
    //("run about effect");
    setCurrentLocation(location)
    const creative = creativeRef.current;
    gsap.fromTo(floImg, {
      yPercent: 40,
      opacity: 0,
      skewX: "6deg",

    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        duration: 1,
        delay: 1,
        // scrollTrigger: {
        //   trigger: floImg,
        // }
      })
    gsap.fromTo(Inquisitive, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: Inquisitive,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(passionate, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: passionate,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(intro1, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: intro1,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(intro2, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: intro2,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(intro3, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: intro3,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(intro4, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: intro4,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(threeShoe, {
      yPercent: 40,
      opacity: 0,
      skewX: "6deg",

    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: threeShoe,
        }
      })
    gsap.fromTo(creative, {
      yPercent: 40,
      opacity: 0,
    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        scrollTrigger: {
          trigger: creative,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(perceptive, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        delay: .3,
        // delay: 1,
        scrollTrigger: {
          trigger: perceptive,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(background, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: background,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(seaWave, {
      yPercent: 40,
      opacity: 0,
      skewX: "6deg",

    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: seaWave,
        }
      })
    gsap.fromTo(curious, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: curious,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(detailed, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: detailed,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(background2, {
      yPercent: 40,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: background2,
          start: "bottom bottom"
        }
      })
    gsap.fromTo(shot, {
      yPercent: 20,
      opacity: 0,
      skewY: "6deg",
      // rotate: "20deg"
    },
      {
        yPercent: 0,
        opacity: 1,
        skewY: "0deg",
        rotate: "0deg",
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: shot,
          // markers: true,
          start: "top 70%"
        }
      })
  }, [currentLocation])

  return (
    <main className='px-6 pt-24 md:px-16 tracking-[0.3px]  bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade'>
      <section className='mb-24 flex flex-col gap-20 items-end md:flex-row-reverse overflow-visible'>
        <div ref={floImgRef} className='w-[70%] self-start md:w-[40%]'>
          <img rel="preload" src={heroImg} alt="" />
        </div>
        <div className='mt-7 text-3xl intro-cont [&>*]:overflow-visible md:text-4xl font-medium md:w-[60%]'>
          <h3 ref={inquisitiveRef} className='mb-2'>
            Inquisitive.
          </h3>
          <h3 ref={passionateRef} className='mb-8'>
            Passionate.
          </h3>
          <div className='text-sm intro-cont [&>*]:leading-6 [&>*]:mb-4 overflow-visible font-[400] '>
            <p ref={intro1Ref} className='overflow-visible'>
              Hi! My name is Flourish Ralph and I am a Product Designer
              from Nigeria.
            </p>
            <p ref={intro2Ref} className='overflow-visible'>
              I am constantly inspired by the world around me and driven to create
              meaningful and innovative designs.
            </p>
            <p ref={intro3Ref}>
              My work is characterized by a strong focus on user experience, and I am
              always looking for ways to improve and enhance the way people interact
              with the products I design.
            </p>
            <p className='overflow-visible' ref={intro4Ref}>
              I believe that good design has the power to change the
              world, and I am dedicated to using my skills and talents to
              make a positive impact on the lives of others.
            </p>
          </div>
        </div>
      </section>
      <section className='mb-24 overflow-visible flex flex-col gap-20 items-end md:flex-row'>
        <div ref={threeShoesRef} className='w-[70%] self-end md:w-[90%]'>
          <img src={threeShoes} alt="" />
        </div>
        <div className='mt-7 text-3xl overflow-visible  [&>*]:overflow-visible md:text-4xl md:text-right md:w-[120%] font-medium'>
          <h3 ref={creativeRef} className='mb-2'>
            Creative.
          </h3>
          <h3 ref={perceptiveRef} className='mb-8'>
            Perceptive.
          </h3>
          <div ref={backgroundRef} className='[&>*]:leading-6 text-sm [&>*]:mb-4 overflow-visible font-[400]'>
            <p className='overflow-visible'>
              My background in Nigeria has shaped my perspective and influenced
              my design approach. I am always looking for ways to collaborate with
              people and infuse my work with a sense of cultural identity in order to
              create products that are relevant and meaningful to diverse audiences.
            </p>
          </div>
        </div>
      </section>
      <section className='mb-24 flex overflow-visible flex-col gap-20 items-end md:flex-row-reverse'>
        <div ref={seaWavesRef} className='w-[70%] self-start md:w-[40%]'>
          <img src={seaWaves} alt="" />
        </div>
        <div className='mt-7 text-3xl overflow-visible  [&>*]:overflow-visible md:text-4xl font-medium md:w-[60%]'>
          <h3 ref={curiousRef} className='mb-2'>
            Curious.
          </h3>
          <h3 ref={detailedRef} className='mb-8'>
            Detailed.
          </h3>
          <div className='[&>*]:leading-6 text-sm [&>*]:mb-4 overflow-visible font-[400]'>
            <p ref={background2Ref} className='overflow-visible'>
              Whenever I am out and about, I like taking pictures of the things around
              me, photography feeds my curiosity but it also teaches me to be focused.
              It reminds me to stay grounded and to appreciate the experiences I get to
              have in my environment.
            </p>
          </div>
        </div>
      </section>

      <section ref={shotsRef} className='w-full  overflow-visible'>
        <p draggable="true" className='text-center mb-8'>Some of my shots.</p>
        <div className='[&>*]:w-[48.8%] [&>*]:h-[48.8%] md:[&>*]:w-[48.5%]  shots-cont [&>*]:transition-[1s] relative overflow-visible h-[115vw] md:h-[115vw] flex flex-wrap gap-[2vw]'>
        <div className='top-0'>
          <img draggable="true" onClick={handleHover} ref={shot1Ref} className='h-full' src={shot1} alt="" />
        </div>
        <div className='top-0  right-0'>
         <img onClick={handleHover2} ref={shot2Ref}  src={shot2} alt="" className='h-full' />
        </div> 
        <div className='bottom-0 left-0'>
          <img onClick={handleHover3} ref={shot3Ref}  src={shot3} alt="" className='h-full'/>
        </div>
        <div className='bottom-0  right-0'>
          <img onClick={handleHover4} ref={shot4Ref}  src={shot4} alt="" className='h-full'/>
        </div>
          <p ref={subtitlesRef} className='opacity-0 absolute top-[30%]  left-[30%] z-[11] font-bold text-2xl'>Subtitles</p>
        </div>
      </section>
    </main>
  )
}

export default WhoIsFlo
