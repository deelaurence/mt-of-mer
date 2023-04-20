import React from 'react'
import { GiClick } from 'react-icons/gi'
import { useState } from 'react'
const ClickIcon = ({ enlarge }) => {
    const [showIcon, setShowIcon] = useState(true)
    const hideIcon = () => {
        setShowIcon(false)
        enlarge()
    }
    return (
        <div onClick={hideIcon} className={showIcon ? "border border-dashed border-1 border-neutral-600 h-full absolute top-0 w-full bg-[rgba(257,257,257,.03)]" : "hidden"}>
            <div className=' bg-[rgba(257,257,257,0.0)] rounded-full z-10 h-12 w-12 border border-dotted border-neutral-500 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ]'>
                <GiClick className='m-auto mt-3 text-neutral-400 click-icon' />
            </div>
            <p className='text-[8px] absolute top-[60%] left-1/2  w-full text-center -translate-x-1/2 text-neutral-400'>click on any image to enlarge</p>
        </div>
    )
}

export default ClickIcon
