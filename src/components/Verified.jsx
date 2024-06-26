import React from 'react';
import {Link} from "react-router-dom"
import emailIcon from '../assets/mail-icon.png';

const EmailVerifiedPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center sm:min-h-[80vh] py-44 relative z-[999]  bg-darkShade">
      <div className="relative overflow-visible flex flex-col justify-center items-center bg-lightShade p-8 shadow-md rounded-md  max-w-[80%] sm:max-w-[60%]">
        <div className='  shadow-sm  w-[100%]  mb-6 mt-6 pb-6 -top-2  left-0  '>
            <h3 className='text-2xl font-semibold text-center'>VERIFIED!.</h3>
        </div>
        <img className="w-1/2 sm:w-[20%]" src={emailIcon} alt="" />
        <p className="text-gray-700 self-center text-lg sm:text-base  mb-6 text-center ">
          Your email has been verified successfully.
        </p>
          <Link to="/login" className="text-lightShade opacity-70 rounded-md border-2 p-2 bg-darkShade  sm:self-center mt-4 mb-12">
          Proceed to Login
        </Link>
        
      </div>
    </div>
  );
};

export default EmailVerifiedPage;
