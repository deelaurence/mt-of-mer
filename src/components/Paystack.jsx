import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { BsCreditCard2Back } from 'react-icons/bs';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { RiStackFill } from "react-icons/ri";
import { SiMastercard } from 'react-icons/si';
import { RiVisaLine } from 'react-icons/ri';
import { MdOutlinePayment } from 'react-icons/md';
import { GiCheckMark } from 'react-icons/gi';
import { GrSecure } from "react-icons/gr";
import { MdArrowBackIos } from "react-icons/md";
import { RiSecurePaymentFill } from 'react-icons/ri';
import { PiContactlessPaymentDuotone } from "react-icons/pi";
import { SiFampay } from "react-icons/si";
// import { TbPaywall } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import RegistrationComponent from './Register';
import baseUrl from '../data/baseUrl';
import LoginComponent from "./Login";
import { FaCircle } from "react-icons/fa";
import LoadingButtonBlue from './LoadingButtonBlue';
import { useLocation } from 'react-router-dom';
import { useGlobalState } from '../GlobalState';

const Paystack = () => {
  const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageOne, setPageOne] = useState(true);
  const [pageTwo, setPageTwo] = useState(false);
  const navigate = useNavigate();
  const { state } = useGlobalState();
  const isLoggedIn = state.isLoggedIn;

  const token = sessionStorage.getItem('admin_token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  // Fetch tags on component mount
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`${baseUrl}/admin/payment-tags`, {
          method: 'GET',
          headers
        });
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };
    fetchTags();
  }, []);

  //WHEN IOS DEVICE REDIRECTS TO RENDER LOGIN BECAUSE COOKIES IS NOT SET
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get('token');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };

  const handleSubmitOne = async (event) => {
    event.preventDefault();
    setPageOne(false);
    setPageTwo(true);
  };

  const handleSubmitTwo = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/paystack/initiate`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${state.clientData.token}`
        },
        body: JSON.stringify({ amount, description }),
      });

      if (!response.ok) {
        setIsLoading(false);
        throw new Error('Request failed');
      }
      const data = await response.json();
      setIsLoading(false);
      window.location.replace(data.redirect);
    } catch (error) {
      console.error('Payment request failed:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="py-32">
          <div className='bg-white max-w-md min-h-[60vh] mx-6 sm:mx-auto flex flex-col pt-12 pb-24 p-4 px-8 text-darkShade shadow rounded'>
            <div className={pageOne ? 'flex self-center items-center mt-4 gap-2 mb-10 text-xs' : 'flex mt-4 items-center gap-2 self-center mb-10 text-xs'}>
              <FaCircle className={pageOne ? "text-blue-400 page-one " : " page-one text-[8px] text-blue-200"} />
              <FaCircle className={pageTwo ? "text-blue-400 page-one " : "text-[8px] page-one text-blue-200"} />
            </div>
            <h1 className="text-3xl font-bold opacity-75 mb-4">{pageOne ? "Payment Options" : "Amount to pay"}</h1>
            <h3 className="mb-4">
              {pageOne ?
                "Select how you would like to pay" :
                "How much do you want to pay"}
            </h3>
            {pageOne ?
              <form onSubmit={handleSubmitOne}>
                <div className="flex items-center gap-2 mb-4">
                  <RiStackFill className='text-lg mt-[4px] opacity-75' />
                  <select
                    id="paymentMode"
                    onChange={handlePaymentModeChange}
                    value={paymentMode}
                    required
                    className="flex [&>*]:w-1/2 py-2 rounded focus:outline-none "
                  >
                    <option className='bg-transparent' value="Paystack">Paystack</option>
                  </select>
                </div>
                <div className="mb-4">
                  <h3 className="opacity-80 mb-4">
                    Choose What you are paying for
                  </h3>
                  <label htmlFor="description" className="text-lg text-neutral-500 mx-0 pb-6 font-semibold">
                    Description:
                  </label>
                  <select
                    id="description"
                    onChange={handleDescriptionChange}
                    value={description}
                    required
                    className="w-full border-transparent border-b-2 border-b-neutral-300 outline-none shadow-none px-3 py-2 h-10 focus:outline-none bg-neutral-200"
                  >
                    <option value={tags[0]} disabled>Select a tag...</option>
                    {tags.map(tag => (
                      <option key={tag._id} value={tag.tag}>{tag.tag}</option>
                    ))}
                  </select>
                </div>
                {isLoading ? <LoadingButtonBlue /> :
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-500 mb-10 text-white font-medium py-2 rounded hover:bg-blue-600 focus:outline-none"
                  >
                    {isLoading ? 'Processing...' : 'Next'}
                  </button>
                }
              </form> :
              <form className='flex flex-col' onSubmit={handleSubmitTwo}>
                <div className="">
                  <label htmlFor="amount" className="text-lg ml-0 text-neutral-500 pb-6 font-semibold">
                    Amount:
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    placeholder='Enter Amount'
                    onChange={handleAmountChange}
                    required
                    className="mt-2 w-full border-transparent border-b-2 border-b-neutral-300 outline-none shadow-none px-3 py-2 h-10 focus:outline-none bg-neutral-200"
                  />
                </div>
                <div className='flex gap-3 justify-between flex-row-reverse items-center'>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-1/2 bg-blue-500 h-10 flex justify-center gap-4 items-center text-white font-medium py-2 rounded hover:bg-blue-600 focus:outline-none"
                  >
                    {isLoading ? 'Processing...' : 'Submit'}
                    <GiCheckMark />
                  </button>
                  <button
                    onClick={() => {
                      setPageOne(true);
                      setPageTwo(false);
                    }}
                    className='flex w-1/2 bg-orange-400 text-white py-1 h-10 px-5 items-center justify-center my-6 rounded-md gap-2'
                  >
                    <MdArrowBackIos className='text-base' />
                    <p className='text-[18px] pb-[2px]'>Back</p>
                  </button>
                </div>
                <div className='flex text-xl border-t-[1px] border-t-neutral-200 text-neutral-300 mt-12 pt-2 justify-center gap-2'>
                  <MdOutlinePayment className='text-red-100' />
                  <RiVisaLine className='text-blue-300' />
                  <SiMastercard className='text-orange-200' />
                  <GrSecure className='text-neutral-600 opacity-30' />
                  <SiFampay className='text-gray-200' />
                  <PiContactlessPaymentDuotone className='text-purple-300' />
                  <RiSecurePaymentFill className='text-xl' />
                </div>
                <div className='text-center py-4 text-sm opacity-40'>
                  payment process secured by <a className='text-blue-600 underline' href="https://paystack.com">paystack.com</a>
                </div>
              </form>}
          </div>
        </div>
      ) : (
        <LoginComponent />
      )}
    </>
  );
};

export default Paystack;
