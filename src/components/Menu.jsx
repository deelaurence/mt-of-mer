import React from 'react'
import baseUrl from '../data/baseUrl';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import { HashRouter as useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useGlobalState } from '../GlobalState';
const Menu = ({ hideMenu, menu}) => {
    const {state,logoutGlobally}=useGlobalState()
    const locationProps=useLocation()


    return (
        <>
            <p onClick={hideMenu} className='text-lg tracking-[0.5px] text-lightShade dark:bg-darkShade dark:text-lightShade absolute top-32 right-6 ' >close</p>
            <div onClick={hideMenu} className={menu ? ' nav-animate dark:bg-darkShade dark:text-lightShade flex text-lightShade transition-[2s] justify-center w-screen h-[100vh]  mt-20 gap-12 items-center flex-col font-medium text-2xl' :
                'nav1-animate  dark:bg-darkShade dark:text-lightShade  transition-[2s]  flex text-darkShade justify-center w-screen h-[100vh]  mt-20 gap-12 items-center flex-col font-medium text-2xl'}>
              
              {
                // delete logout data from the array
                state.navbarData.map((data,index)=>{
                    return(
                        <Link key={index} className='relative' to={data.link}>
                            <p className={true ? '' : 'text-opaque'}>{data.label}</p>
                        </Link>
                    )
                })
              }
              {/* manually include logout data here */}
                
                
                {state.isLoggedIn&&<Link className='relative' to='/'>
                    <p onClick={logoutGlobally}  className={true ? '' : 'text-opaque'}>Logout</p>
                </Link>}
            </div>
        </>
    )
}
export default Menu
