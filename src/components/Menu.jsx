import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
const Menu = ({ hideMenu, menu, locationProps,location }) => {
    
    
    const [activeWork, setActiveWork] = useState(true);
    const [activePlayground, setActivePlayground] = useState(false);
    const [activeAbout, setActiveAbout] = useState(false);
    const [activeResume, setActiveResume] = useState(false);

    useEffect(() => {
    //console.log("location changed o");
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
      setActiveAbout(false)
      return
    }
    else {
      setActiveAbout(false)
      setActivePlayground(false)
      setActiveWork(true)
      return
    }
  }, [location])
    const handleActiveWork = () => {
        setActiveWork(true)
        setActivePlayground(false)
        setActiveAbout(false)
        setActiveResume(false)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }
    const handleActivePlayground = () => {
        setActiveWork(false)
        setActivePlayground(true)
        setActiveAbout(false)
        setActiveResume(false)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }
    const handleActiveAbout = () => {
        setActiveWork(false)
        setActivePlayground(false)
        setActiveAbout(true)
        setActiveResume(false)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }
    const handleActiveResume = () => {
        setActiveWork(false)
        setActivePlayground(false)
        setActiveAbout(false)
        setActiveResume(true)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }

    return (
        <>
            <p onClick={hideMenu} className='text-lg tracking-[0.5px] text-lightShade dark:bg-lightShade dark:text-darkShade absolute top-32 right-6 ' >close</p>
            <div className={menu ? ' nav-animate dark:bg-lightShade dark:text-darkShade flex text-lightShade transition-[2s] justify-center w-screen h-[100vh]  mt-20 gap-12 items-center flex-col font-medium text-2xl' :
                'nav1-animate  dark:bg-lightShade dark:text-darkShade  transition-[2s]  flex text-lightShade justify-center w-screen h-[100vh]  mt-20 gap-12 items-center flex-col font-medium text-2xl'}>
                <Link className='relative' to='/'>
                    <div className={activeWork?'bg-white h-[2px] w-full transition-[1.5s] absolute top-[55%]':'bg-white h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
                    <p onClick={handleActiveWork} className={activeWork ? '' : 'text-opaque'}>Work</p>
                </Link>
                <Link className='relative' to="/playground">
                     <div className={activePlayground?'bg-white h-[2px] w-full transition-[1.5s] absolute top-[55%]':'bg-white h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
                    <p onClick={handleActivePlayground} className={activePlayground ? '' : 'text-opaque '}>Playground</p>
                </Link>
                <Link className='relative' to="/about">
                     <div className={activeAbout?'bg-white h-[2px] w-full transition-[1.5s] absolute top-[55%]':'bg-white h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
                    <p onClick={handleActiveAbout} className={activeAbout ? '' : 'text-opaque'} >About</p>
                </Link>
                <Link className='relative' to="/resume">
                     <div className={activeResume?'bg-white h-[2px] w-full transition-[1.5s] absolute top-[55%]':'bg-white h-[2px] w-full translate-x-full transition-[1.5s] absolute top-[55%]'}></div>
                    <p onClick={handleActiveResume} className={activeResume ? '' : 'text-opaque'}>Résumé</p>
                </Link>
            </div>
        </>
    )
}

export default Menu
