import React from 'react'
import { useState } from 'react'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {BsCreditCard2Back} from 'react-icons/bs'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {SiMastercard} from 'react-icons/si'
import {RiVisaLine} from 'react-icons/ri'
import {MdOutlinePayment} from 'react-icons/md'
import {GiCheckMark} from 'react-icons/gi'
import {RiSecurePaymentFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import RegistrationComponent from './Register'
import baseUrl from '../data/baseUrl';
import LoginComponent from "./Login"
import {FaCircle} from "react-icons/fa"
import LoadingButtonBlue from './LoadingButtonBlue'
const Paystack = ({isLoggedIn, setIsLoggedIn}) => {
 const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pageOne, setPageOne]=useState(true)
  const [pageTwo, setPageTwo]=useState(false)
  const navigate = useNavigate()
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
    setPageOne(false)
    setPageTwo(true)  
    
  }
  const handleSubmitTwo = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(`${baseUrl}/paystack/initiate`, {
        method: 'POST',
        credentials:'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, description }),
      });

      if (!response.ok) {
        setIsLoading(false)
        throw new Error('Request failed');
      }
      const data = await response.json()
      console.log(data)
      setIsLoading(false)
      window.location.replace(data.redirect)
      // Handle success response
      console.log('Payment request successful');
    } catch (error) {
      // Handle error
      console.error('Payment request failed:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

 

return  (
  <>{isLoggedIn?
    <div className="max-w-md min-h-[60vh] bg-white mx-6 mt-24 sm:mx-auto flex flex-col  my-16  p-4 px-8 text-lightShade  shadow rounded">
      <div className={pageOne?'flex self-center items-center mt-4 gap-2 mb-10 text-xs':'flex mt-4 items-center gap-2 self-center mb-10 text-xs'}>
      <FaCircle className={pageOne?"text-blue-400 page-one ":" page-one text-[8px] text-blue-200"}/>
      <FaCircle className={pageTwo?"text-blue-400 page-one ":"text-[8px] page-one  text-blue-200"}/>
      </div>
      <h1 className="text-3xl font-bold opacity-75   mb-4">{pageOne?"Payment Options":"Amount to pay"}</h1>
      <h3 className="  mb-4">
        {pageOne? 
        "Select how you would like to pay":
        "How much do you want to pay"}
      </h3>
      {pageOne?
      <form onSubmit={handleSubmitOne}>
        <div className="flex items-center gap-4 mb-4">
          <BsCreditCard2Back className='text-lg mt-[4px] opacity-75'/>
          <select
            id="paymentMode"
            onChange={handlePaymentModeChange}
            value={paymentMode}
            required
            className="flex [&>*]:w-1/2 py-2 rounded focus:outline-none "
            >
            
            <option className='bg-transparent' value="Debit Card">Debit Card</option>
          </select>
        </div>
        <div className="mb-4">
          <h3 className="opacity-80 mb-4">
        What are you paying for
      </h3>
          <label htmlFor="description" className="text-lg text-neutral-500 mx-0 pb-6 font-semibold">
          Description:
          </label>
          <input
          type="text"
          id="description"
            value={description}
            placeholder='e.g June tithe...'
            onChange={handleDescriptionChange}
            required
            className="my-2 w-full border-transparent border-b-2 border-b-neutral-300 focus:border-b-neutral-400  outline-none shadow-none px-3 py-2  h-10 focus:outline-none bg-neutral-200"
            />
        </div>  
        {
        isLoading?<LoadingButtonBlue/> :
        <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 mb-10 text-white font-medium py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          {isLoading ? 'Processing...' : 'Next'}
        </button>
        }
          
      </form>:
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
            className="mt-2 w-full border-transparent border-b-2 border-b-neutral-300 focus:border-b-neutral-400  outline-none shadow-none px-3 py-2  h-10 focus:outline-none bg-neutral-200"
            />
        </div>  
        <div className='flex gap-3 justify-between flex-row-reverse items-center'>

        <button
          type="submit"
          disabled={isLoading}
          className="w-1/2 bg-blue-500 h-10 flex justify-center gap-4 items-center text-white font-medium py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
          {isLoading ? 'Processing...' : 'Submit'}
          <GiCheckMark/>
        </button>
          <button 
          onClick={()=>{
            setPageOne(true);
            setPageTwo(false)
          }}
          className='flex text-neutral-400 border-[1px] border-neutral-400 py-2 h-10 px-5 items-center justify-center my-6 rounded-md  gap-2'>
          <IoMdArrowRoundBack className='text-2xl  '/>
             <p className='text-[18px]  font-semibold'>Back</p> 
          </button>
        </div>

 <div className='flex text-4xl border-t-[1px] border-t-neutral-200 text-neutral-200 mt-12 pt-1 justify-around'>
<RiVisaLine />  
<MdOutlinePayment/>
<SiMastercard/>
<RiSecurePaymentFill className='text-3xl'/>
  </div>     
      </form>}
    </div>:
    <LoginComponent setIsLoggedIn={setIsLoggedIn}/>
  }
    </>
)}


  

export default Paystack 
