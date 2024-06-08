import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {TfiWrite} from 'react-icons/tfi'
import {FiUsers} from 'react-icons/fi'
import { FaUsers, FaPen, FaEnvelope, FaMoneyBillWave, FaSignOutAlt, FaMoneyCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup';
import oldTypewriter from '../../assets/old_typewriter.png'
import { useGlobalState } from '../../GlobalState';
import AdminLoginComponent from './AdminLogin';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { MdOutlineLightbulb } from 'react-icons/md';
import paperBg from '../../assets/paper-bg.jpg'

const Dashboard = () => {
    const adminName = sessionStorage.getItem('admin_name');  // Example admin name, you can replace this with dynamic data if available
    const navigate = useNavigate()
    
    const {adminLogout} = useGlobalState()    
    return (
        <>
        {adminName?
            <div 
            
            className="min-h-screen  p-6 pt-32  md:p-16 md:pt-44">
            
            <div className=' justify-between flex-col-reverse   md:flex-row flex '>
                <img className='relative z-20' src={oldTypewriter} alt="" />
                <h1 className="text-[20vw] text-center leading-[17vw] -mb-8 font-semibold text-gray-600 md:max-w-[50vw]">Hello {adminName.split(' ')[0]}.</h1>
            </div>
            <div 
            style={{backgroundImage:`url(${paperBg})`}}
            className=" mb-64 mt-14 shadow-md rounded-lg p-6 md:p-16">
                <div className="flex justify-between items-center mb-6">
                    <button onClick={adminLogout} className="flex items-center gap-2 p-2  text-red-500 shadow-md rounded-full hover:text-white hover:bg-red-600">
                        <RiLogoutCircleFill className="text-xl" />
                        <span>Logout</span>
                    </button>
                    <div className='flex flex-col items-end'>
                        <p className='text-gray-600 text-right font-semibold md:text-2xl relative z-10'>What do you wanna do today?</p>
                        {/* <p className='text-gray-500 text-right font-semibold text-sm'>Write something &mdash; nice!</p> */}
                    </div>
                </div>
                <div className="flex mt-16 flex-col gap-6  flex-wrap  items-center justify-center md:flex-row  [&>*]:h-64 [&>*]:w-full md:[&>*]:w-64">
                    <Link to="/users" className="w-full md:w-64">
                        <button className="flex flex-col items-center justify-center md:w-full md:h-full w-[70vw] h-[70vw] p-4 bg-[#007ea7] text-white shadow-xl rounded-full">
                            <FiUsers className="text-4xl mb-2" />
                            <span>View All Users</span>
                        </button>
                    </Link>
                    <Link to="/add-article" className="w-full md:w-64">
                        <button className="flex flex-col items-center justify-center md:w-full md:h-full w-[70vw] h-[70vw] p-4 bg-[#586288] text-white shadow-xl rounded-full ">
                            <TfiWrite className="text-4xl mb-2" />
                            <span>Create Article</span>
                        </button>
                    </Link>
                    <Link to="/add-message" className="w-full md:w-64">
                        <button className="flex flex-col items-center justify-center md:w-full md:h-full w-[70vw] h-[70vw] p-4 bg-[#92b1b6] text-white shadow-xl rounded-full ">
                            <MdOutlineLightbulb className="text-4xl mb-2" />
                            <span>Create Message</span>
                        </button>
                    </Link>
                    <Link to="/payments" className="w-full md:w-64">
                        <button className="flex flex-col items-center justify-center md:w-full md:h-full w-[70vw] h-[70vw] p-4 bg-[#990f02] text-white shadow-xl rounded-full ">
                            <FaMoneyCheck className="text-4xl mb-2" />
                            <span>Get All Payments</span>
                        </button>
                    </Link>
                    <Link to="/payments" className="w-full md:w-64">
                        <button className="flex flex-col items-center justify-center md:w-full md:h-full w-[70vw] h-[70vw] p-4 bg-[#7a4988] text-white shadow-xl rounded-full">
                            <RiLogoutCircleFill className="text-4xl mb-2" />
                            <span>Go back home</span>
                        </button>
                    </Link>
                </div>
            </div>
            </div>:
        <AdminLoginComponent/>
        }
       </>
    );
};

export default Dashboard;
