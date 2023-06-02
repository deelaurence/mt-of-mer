import React from 'react'
import { useState } from 'react'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {BsCreditCard2Back} from 'react-icons/bs'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {SiMastercard} from 'react-icons/si'
import {RiVisaLine} from 'react-icons/ri'
import {MdPayments} from 'react-icons/md'
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
    <div className="max-w-md   min-h-[60vh] bg-white mx-6 sm:mx-auto flex flex-col items-center justify-center my-16  p-4 text-lightShade  shadow rounded">
      <div className={pageOne?'flex  mt-28 gap-2 mb-10 text-xs':'flex mt-28 gap-2 mb-10 text-xs'}>
      <FaCircle className={pageOne?"text-blue-400 page-one transition-[1s]":"transition-[1s] page-one text-[8px] text-blue-300"}/>
      <FaCircle className={pageTwo?"text-blue-400 page-one transition-[1s]":"text-[8px] page-one transition-[1s] text-blue-300"}/>
      </div>
      <h1 className="text-3xl font-semibold mb-4">{pageOne?"Payment Options":"Amount to pay"}</h1>
      <h3 className="text-xl  mb-4">
        {pageOne? 
        "Select how you would like to pay":
        "How much do you want to pay"}
      </h3>
      {pageOne?
      <form onSubmit={handleSubmitOne}>
        <div className="flex items-center  justify-center gap-4 mb-4">
          <BsCreditCard2Back/>
          <select
            id="paymentMode"
            onChange={handlePaymentModeChange}
            value={paymentMode}
            required
            className="flex [&>*]:w-1/2  px-6 py-2 rounded focus:outline-none "
            >
            
            <option className='bg-transparent' value="Debit Card">Debit Card</option>
          </select>
        </div>
        <div className="mb-4">
          <h3 className=" mb-4">
        What are you paying for
      </h3>
          <label htmlFor="description" className="text-lg text-neutral-500 pb-6 font-semibold">
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
        className="w-full bg-blue-500 mb-32 text-white font-medium py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          {isLoading ? 'Processing...' : 'Next'}
        </button>
        }
          
      </form>:
      <form className='flex flex-col' onSubmit={handleSubmitTwo}>
        <div className="mb-4">
          <label htmlFor="amount" className="text-lg text-neutral-500 pb-6 font-semibold">
          Amount:
          </label>
          <input
          type="number"
          id="amount"
            value={amount}
            placeholder='Enter Amount'
            onChange={handleAmountChange}
            required
            className="my-2 w-full border-transparent border-b-2 border-b-neutral-300 focus:border-b-neutral-400  outline-none shadow-none px-3 py-2  h-10 focus:outline-none bg-neutral-200"
            />
        </div>  
        <div className='flex gap-3 justify-between flex-row-reverse items-center'>

        <button
          type="submit"
          disabled={isLoading}
          className="w-1/2 bg-blue-500 flex justify-center gap-4 items-center text-white font-medium py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
          {isLoading ? 'Processing...' : 'Submit'}
          <GiCheckMark/>
        </button>
          <button 
          onClick={()=>{
            setPageOne(true);
            setPageTwo(false)
          }}
          className='flex text-neutral-400  items-center justify-center my-6 rounded-sm   gap-2'>
          <IoMdArrowRoundBack className='text-2xl ml-3'/>
             <p className='text-[18px]  font-semibold'>Back</p> 
          </button>
        </div>

 <div className='flex text-3xl text-gray-500 my-4 justify-around'>
<RiVisaLine/>  
<MdPayments/>
<SiMastercard/>
<RiSecurePaymentFill className='text-2xl'/>
  </div>     
      </form>}
    </div>:
    <LoginComponent setIsLoggedIn={setIsLoggedIn}/>
  }
    </>
)}


  

export default Paystack 
