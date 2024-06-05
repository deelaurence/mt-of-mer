import React from 'react';
import {Link} from "react-router-dom"
import emailIcon from '../assets/mail-icon.png';
import { useGlobalState } from '../GlobalState';
const GoAndVerify = () => {
  const {state}=useGlobalState()
  console.log(state)
  const email = state.unauthenticatedUserEmail
  return (
    <div className="py-44 flex flex-col items-center justify-center bg-lightShade ">
      <div className="relative overflow-visible flex flex-col justify-center items-center bg-white p-8 shadow-md rounded-md max-w-[80%]">
      <h1 className='py-12 text-5xl font-semibold text-darkShade'>Check your Email</h1>
        <img className="w-1/2 md:w-1/3" src={emailIcon} alt="" />
        <p className="text-gray-700 self-center text-lg mb-2 text-center ">
          An Email has been sent to you. Follow the Instructions to verify your identity.
        </p>
        <p className="text-gray-700 self-center text-lg mb-6 text-center ">
          Didn't get the mail? confirm you entered the right email  <span className='font-semibold'> {email} </span>
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
