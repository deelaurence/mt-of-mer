import React from 'react'
import { Link } from 'react-router-dom'
import warning from "../assets/download.png"
const Popup = ({message,link,setPopupMsg}) => {
  return (
    <section onClick={()=>{if(setPopupMsg){setPopupMsg("")}}} className='w-screen h-screen z-50 fixed top-0 left-0 bg-transluscent'>

    <div className='h-1/2 w-[80%] sm:w-[30%] rounded-lg   shadow-2xl bg-darkShade flex flex-col justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <img src={warning} alt="" />
      <Link to={link} className='text-orange-600 underline font-semibold text-center text-xl py-10 px-6'>{message}</Link>
    </div>
    </section>
  )
}

export default Popup
