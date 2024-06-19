import React from 'react';
import { Link } from 'react-router-dom';
import { TfiWrite } from 'react-icons/tfi';
import { FiUsers } from 'react-icons/fi';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { MdOutlineLightbulb } from 'react-icons/md';
import { FaMoneyCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import oldTypewriter from '../../assets/old_typewriter.png';
import paperBg from '../../assets/paper-bg1.jpg';
import { useGlobalState } from '../../GlobalState';
import AdminLoginComponent from './AdminLogin';
import { FaTag } from 'react-icons/fa';
import { RiUser4Line } from "react-icons/ri";

const Dashboard = () => {
  const adminName = sessionStorage.getItem('admin_name');
  const { adminLogout,state } = useGlobalState();
  const buttonData = [
    { to: '/users', icon: FiUsers, text: 'View All Users', color: '#007ea7' },
    { to: '/add-article', icon: TfiWrite, text: 'Create Article', color: '#586288' },
    { to: '/add-message', icon: MdOutlineLightbulb, text: 'Create Message', color: '#586288' },
    { to: '/payment-tag', icon: FaTag, text: 'Payments Tags', color: '#586288' },
    { to: '/payments', icon: FaMoneyCheck, text: 'Get All Payments', color: '#586288' },
    { to: '/authors', icon: RiUser4Line, text: 'Authors', color: '#586288' },
    { to: '/', icon: RiLogoutCircleFill, text: 'Go back home', color: '#586288' },
  ];

  return (
    <>
      {adminName ? (
        <div className="min-h-screen p-6 pt-32 md:p-16 md:pt-44">
          <div className='justify-between flex-col-reverse items-center md:flex-row flex'>
            <img className='relative z-20 md:max-w-[50vw]' src={oldTypewriter} alt="" />
            <h1 className="text-[20vw] md:text-[10vw] text-center leading-[17vw] md:leading-[7vw] -mb-8 font-semibold text-gray-600 md:max-w-[50vw]">
              Hello {adminName.split(' ')[0]}.
            </h1>
          </div>
          <div 
            // style={{ backgroundImage: `url(${paperBg})` }}
            className="mb-64 mt-14 rounded-lg p-6 md:p-16">
            <div className="flex justify-between items-center mb-6">
              <button onClick={adminLogout} className="flex items-center gap-2 p-2 text-red-500 shadow-md rounded-full hover:bg-red-600">
                <RiLogoutCircleFill className="text-xl" />
                <span>Logout</span>
              </button>
              <div className='flex flex-col items-end'>
                <p className='text-gray-600 text-right font-semibold md:text-2xl relative z-[0]'>
                  What do you wanna do today?
                </p>
              </div>
            </div>
            <div className="text-gray-700 flex mt-16 flex-col gap-6 flex-wrap  md:flex-row [&>*]:w-full ">
              {buttonData.map((button, index) => (
                <Link key={index} to={button.to} className="w-full  flex  ">
                  <button
                    className={`flex flex-col  bg-orange-200 p-4`}
                    style={{ color: button.color }}>
                    <button.icon className="text-4xl mb-2" />
                    <span className='text-left border-b-2 border-b-darkShade text-[15vw]  md:text-[10vw]  leading-[12vw] md:leading-[7vw] -mb-6 md:mb-0 font-bold text-gray-600 ' >{button.text}</span>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <AdminLoginComponent />
      )}
    </>
  );
};

export default Dashboard;
