import React from 'react'
import { RiLogoutCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <Link to='/dashboard' className=' flex gap-2 items-center font-semibold text-gray-500 mb-12'>
    <RiLogoutCircleFill/>
    GO BACK TO DASHBOARD.
    </Link>
  )
}

export default BackButton