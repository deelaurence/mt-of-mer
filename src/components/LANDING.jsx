import React from 'react'
import { useEffect, useState, useRef } from 'react';
import displayPicture from '../assets/display-picture.gif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import landingData from '../data/landing';
import { useLocation } from 'react-router-dom'
import Next from "../assets/next.png"
import Messages from './Messages';
import Ministries from './Ministries';
import Articles from './Articles';
import Paystack from './Paystack';
import { CiStreamOn } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import Give from './Give';
import { Helmet } from 'react-helmet-async';
import DocumentMeta from 'react-document-meta';
import RoundButton from './RoundButton';
import setMetaTags from '../utils/metaTags';
import { updateMeta } from '../utils/dynamicTag';
const LANDING = () => {
  // useEffect(() => {
  //   const meta = {
  //     title: 'Home Page - My Website',
  //     description: 'This is the home page of my awesome website.',
  //     canonical: 'https://www.mywebsite.com/home',
  //     keywords: 'home, webpage, react'
  //   };
  //   setMetaTags(meta);
  // }, []);
  useEffect(() => {
    document.title = 'Welcome to Mount of Mercy| Oke aanu';
    updateMeta('description', 'Welcome to United apostolic church of christ mount of mercy');
  }, []);
  return (
    <>
  
    
    <div className='mb-24'>

    
      <section className='text-lightShade flex items-end  landing-section bg-landing-image bg-cover bg-center md:bg-center-30vh h-screen relative  overflow-hidden  px-6 sm:px-16 '>
        <div className='flex items-center flex-wrap bg-[rgba(30,30,30,.1)] p-6 '>
          <h3 className=' product-designer text-[14px]  font-bold sm:min-w-[60%]  sm:text-4xl  overflow-visible text-white' >JOIN US FOR A PHYSICAL GATHERING</h3>
          <p className='mt-4 w-[90%] sm:w-full  text-sm sm:text-base text-white'>
            We gather physically each sunday at 7:00a and start live streaming at 9:00a GMT+1. We
            would love for you to join us!
          </p>
          <a href='https://maps.app.goo.gl/H6rZDtqEht9vAFxF9' className='mt-4 cursor-pointer text-white items-center gap-2 flex '>
            <p className=' text-white self-center font-semibold'>LOCATE US</p>
            <MdLocationPin className='text-xl'/>
          </a>
        </div>
      </section>
      <p className=' bg-lightShade pl-6 sm:px-16 pt-20 px-6  text-5xl font-semibold'>welCOME.</p>
      <p className='bg-lightShade px-6 pb-32 sm:px-16 pt-20  text-[1.rem]'>
        We are a community of unlikely
        friends following Jesus together. 
        In a divided world filled with tension, 
        <span className='font-medium '> we feel called to create a rare place 
        where relationships are formed that 
        don't make sense according to the world.
        </span> 
        No matter your age or stage in life, 
        we are united in Jesus. 
        It is our hope and prayer that 
        we can help you to Know Christ, 
        Grow together in faith, 
        and Go serve the world.</p>
      
      <Ministries/>
      <Give/>
      <Messages />
      <Articles />
      </div>
    
    </>
  )
}

export default LANDING
