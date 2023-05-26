import React from 'react';
import {Link} from "react-router-dom"
import emailIcon from '../assets/mail-icon.png';

const GoAndVerify = ({emailOnRegister}) => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-darkShade">
      <div className="relative overflow-visible flex flex-col justify-center items-center bg-white p-8 shadow-md rounded-md max-w-[80%]">
        <div className='  shadow-sm  w-[100%]  mb-6 mt-6 -top-2  left-0  '>
            <h3 className='text-2xl font-semibold text-center'>VERIFY!.</h3>
        </div>
        <img className="w-1/2" src={emailIcon} alt="" />
        <p className="text-gray-700 self-center text-lg mb-6 text-center ">
          An Email has been sent to you. Follow the Instructions to verify your identity.
        </p>
        <p className="text-gray-700 self-center text-lg mb-6 text-center ">
          Didn't get the mail? confirm you entered the right email  <span className='font-semibold'> {emailOnRegister} </span>
          and check your spam
        </p>
          {/* <Link to="/login" className="text-orange-500   sm:self-center mt-4 mb-12">
          Login
        </Link>
         */}
      </div>
    </div>
  );
};

export default GoAndVerify;
