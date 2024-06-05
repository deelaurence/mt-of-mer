import { Link, useLocation } from 'react-router-dom'
import baseUrl from '../data/baseUrl'
import React from 'react'
import HandDrawnUnderline from './HandDrawn'
import Menu from './Menu'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGlobalState } from '../GlobalState'

const Navbar = () => {
  const location = useLocation()
  const [scrollDirection, setScrollDirection] = useState("up");
  const [showGreeting, setShowGreeting]=useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [adminCreating, setAdminCreating] = useState(false)
  const {state,logoutGlobally,dispatch} = useGlobalState()

  let greetName
  if(state.clientData.userData){
     greetName = state.clientData.userData.singleName
     if(state.isAdminLoggedIn){
      greetName='Admin'
     }
  }

  
useEffect(()=>{
  if(sessionStorage.getItem('admin_token')){
    dispatch({ type: 'SET_IS_ADMIN_LOGGED_IN', payload: true });
  }
},[])
  



// hide and show menu and navbar on scroll
  useEffect(() => {
   
   if(location.pathname=='/add-article'||location.pathname=='/add-message'){
    setAdminCreating(true)
    setScrollDirection('up')
    return
   }
   setAdminCreating(false)
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos,location]);




  


//blend menu bar dynamically
  let blendBar = document.querySelector('.blend-bar')


  //hide menu on mobile
  const [menu, setMenu] = useState(false)
  const hideMenu = () => {
    setMenu(false)
    setShowGreeting(true)
    setTimeout(() => {
      blendBar.style.mixBlendMode = "difference"
    }, 1100);
  }


  //show menu on mobile
  const showMenu = () => {
    setShowGreeting(false)
    setTimeout(() => {
      if(blendBar){
        blendBar.style.mixBlendMode = "normal"
      }
    }, 100);
    if (blendBar) {
      setMenu(true)
    }
  }

  return (
    <nav
      className={
        menu ? 
        ( 
          adminCreating?
          "px-6 blend-bar nav z-[1] flex py-5 items-center justify-between w-screen text-darkShade  dark:bg-darkShade dark:text-lightShade sm:px-16  absolute-nav":
          "px-6 blend-bar fixed nav z-[1] flex py-5 items-center justify-between w-screen text-darkShade  dark:bg-darkShade dark:text-lightShade sm:px-16  absolute-nav "
        )
          :
          (
            adminCreating?
            "px-6 blend-bar nav z-[1000] flex py-5 items-center justify-between w-[calc(100vw-.7rem)] text-darkShade dark:bg-darkShade dark:text-lightShade sm:px-16 absolute-nav mix-blend-difference "
          : "px-6 blend-bar fixed nav z-[1000] flex py-5 items-center justify-between w-[calc(100vw-.7rem)] text-darkShade dark:bg-darkShade dark:text-lightShade sm:px-16 absolute-nav mix-blend-difference "
          )
        }
    >
      <div className={scrollDirection=="up"?"flex justify-between items-center w-full duration-[1s] opacity-100":" duration-[1s] opacity-0 -translate-y-[50px] flex justify-between items-center w-full"}>
      
      
      
      {/* Logo*/}

      <Link to="/">
        <div
          className="flex gap-1 blend-bar-child overflow-hidden">
          <h3
            className="self-end flourish text-lightShade w-[100px]  -mb-1 font-[aboreto] font-medium text-xl md:text-4xl md:w-[150px]">Mt. Of Mercy.</h3>
        </div>
      </Link>


        {/* logged in user greeting */}
        
        <div className={showGreeting?'flex items-center relative flex-col opacity-100 duration-[6s]':'opacity-0 flex items-center relative flex-col'}>
          <p className='text-lightShade font-[300] relative opacity-100 duration-[1s] -z-10'>Hello, {greetName ?? (state.isAdminLoggedIn ? 'Admin' : 'Guest')}</p>
          <HandDrawnUnderline />
        </div>

        {/* menu: component */}

        <div className={menu ? 'nav-menu fixed z-[99999] left-0 -top-20  bg-lightShade dark:bg-darkShade dark:text-lightShade sm:hidden' :
        'nav-menu fixed left-0 -top-[1000px]  bg-lightShade dark:bg-darkShade dark:text-lightShade  sm:hidden'}>
          <Menu location={location} menu={menu} hideMenu={hideMenu} />
        </div>

        {/* menu: link */}
        <div className="md:hidden flex  gap-1 ">
          <p onClick={showMenu} className='text-base text-lightShade font-regular show-menu  dark:bg-darkShade dark:text-lightShade' >MENU</p>
        </div>


        {/* navbar links */}

        <div className="hidden md:flex  gap-4 [&>*]:dark:bg-darkShade [&>*]:dark:text-lightShade  ">
              {
                state.navbarData.map((data,index)=>{
                  return(
                    <div key={index} className='relative'>  
                      <p className={true ? 'text-sm font-[400] text-lightShade '
                      :' text-sm font-[400] text-opaque'} ><Link to={data.link}>{data.label}.</Link></p>
                    </div>
                  )
                })

              }
              {state.clientData.token&&
              <div onClick={logoutGlobally} className='relative'>  
                      <p className={true ? 'text-sm font-[400] text-lightShade '
                      :' text-sm font-[400] text-opaque'} ><Link to='/'>Logout</Link></p>
              </div>}     
        </div>
      </div>
    </nav>

  )
}

export default Navbar
