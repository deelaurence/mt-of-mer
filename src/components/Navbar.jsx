import { Link, useLocation } from 'react-router-dom'

import React from 'react'
import Menu from './Menu'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
const Navbar = ({ locationProps }) => {
  const location = useLocation()
  let html = document.querySelector("html")
  let toggle = document.querySelector('.toggle')
  const [activeWork, setActiveWork] = useState(true);
  const [activePlayground, setActivePlayground] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeResume, setActiveResume] = useState(false);
  const [refreshBlendBar, setRefreshBlendBar] = useState(false)
  const [currentLocation, setCurrentLocation] = useState("")
  useEffect(() => {
    //console.log("location changed o");
    setCurrentLocation(location)
    if (locationProps.href.includes('about')) {
      //('about');
      setActiveAbout(true)
      setActiveWork(false)
      setActivePlayground(false)
      return
    }
    if (locationProps.href.includes('playground')) {
      //('playground active');
      setActivePlayground(true)
      setActiveWork(false)
      return
    }
    else {
      setActiveAbout(false)
      setActivePlayground(false)
      setActiveWork(true)
      return
    }
  }, [location])

  const handleActiveAbout = () => {
    setActiveAbout(true)
    setActiveWork(false)
    setActivePlayground(false)
  }
  const handleActivePlayground = () => {
    setActiveAbout(false)
    setActiveWork(false)
    setActivePlayground(true)
  }
  const handleActiveWork = () => {
    setActiveAbout(false)
    setActiveWork(true)
    setActivePlayground(false)
  }

  useEffect(() => {
    let updateNavbar = setTimeout(() => {
      setRefreshBlendBar(true)
    }, 1000);
    return () =>
      clearTimeout(updateNavbar)

  })


  let blendBar = document.querySelector('.blend-bar')
  // //(blendBar);


  // //(locationProps);
  // const handleNightMode = () => {
  //   setNight(!night)
  //   //('niiight');
  // }

  // if (night) {
  //   html.classList.add("dark")
  //   // toggle.src = moon

  // }
  // if (!night) {
  //   html.classList.remove("dark")
  //   // toggle.src = sun
  // }

  const [menu, setMenu] = useState(false)
  // useEffect(() => {
  //   if (blendBar) {

  //     blendBar.style.mixBlendMode = "difference"
  //   }
  // }, [])
  const hideMenu = () => {
    setMenu(false)
    setTimeout(() => {
      blendBar.style.mixBlendMode = "difference"
    }, 1000);
  }

  const showMenu = () => {
    setTimeout(() => {
      blendBar.style.mixBlendMode = "normal"
    }, 100);

    if (blendBar) {
      setMenu(true)
    }
  }

  let test = false;
  return (
    <nav
      className={menu ? "px-6  blend-bar fixed nav z-[1] flex py-5 items-center justify-between w-screen text-lightShade  dark:bg-lightShade dark:text-darkShade sm:px-16 absolute-nav" : "px-6 blend-bar fixed nav z-[1000] flex py-5 items-center justify-between w-screen text-lightShade dark:bg-lightShade dark:text-darkShade sm:px-16  absolute-nav mix-blend-difference"}
    >
      <Link to="/">
        <div
          className="flex gap-1 blend-bar-child overflow-hidden">
          <h3
            onClick={handleActiveWork}
            className="self-end flourish text-darkShade w-[100px]  -mb-1 font-[aboreto] font-medium text-xl md:text-4xl md:w-[150px]">Mt. Of Mercy.</h3>
        </div>
      </Link>
      <div className={menu ? 'nav-menu fixed z-[99999] left-0 -top-20  bg-darkShade dark:bg-lightShade dark:text-darkShade sm:hidden' :
        'nav-menu fixed left-0 -top-[1000px]  bg-darkShade dark:bg-lightShade dark:text-darkShade  sm:hidden'}>
        <Menu locationProps={locationProps} location={location} menu={menu} hideMenu={hideMenu} />
      </div>
      <div className="md:hidden flex  gap-1 self-start ">
        <p onClick={showMenu} className='text-base text-darkShade font-regular show-menu  dark:bg-lightShade dark:text-darkShade' >MENU</p>
      </div>
      <div className="hidden md:flex  gap-4 [&>*]:dark:bg-lightShade [&>*]:dark:text-darkShade self-end ">
        <div className='relative'>
        <div className={activeWork?'bg-white h-[1px] w-full transition-[1.5s] absolute top-[50%]':'bg-white h-[1px] w-full translate-x-full transition-[1.5s] absolute top-[50%]'}></div>
        <p onClick={handleActiveWork} className={activeWork ? 'text-sm font-regular text-lightShade ' : ' text-sm font-regular text-opaque'} ><Link to='/'>Work</Link></p>
        </div>
        <div className='relative'>
        <div className={activePlayground?'bg-white h-[1px] w-full transition-[1.5s] absolute top-[50%]':'bg-white h-[1px] w-full translate-x-full transition-[1.5s] absolute top-[50%]'}></div>
        <p onClick={handleActivePlayground} className={activePlayground ? 'text-sm font-regular text-lightShade ' : ' text-sm font-regular text-opaque'} ><Link to='/playground'>Playground</Link></p>
        </div>
        <div className='relative'>
        <div className={activeAbout?'bg-white h-[1px] w-full transition-[1.5s] absolute top-[50%]':'bg-white h-[1px] w-full translate-x-full transition-[1.5s] absolute top-[50%]'}></div>
        <p onClick={handleActiveAbout} className={activeAbout ? 'text-sm font-regular text-lightShade ' : ' text-sm font-regular text-opaque'} ><Link to='/about'>About</Link></p>
        </div>
        <p className={activeResume ? 'text-sm font-regular text-lightShade ' : ' text-sm font-regular text-opaque'} ><Link to='/resume'>Résumé</Link></p>
      </div>
    </nav>

  )
}

export default Navbar
