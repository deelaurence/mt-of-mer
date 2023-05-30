import React from 'react'
import { useState } from 'react'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {BsCreditCard2Back} from 'react-icons/bs'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import RegistrationComponent from './Register'
import baseUrl from '../data/baseUrl';
import LoginComponent from "./Login"
import {FaCircle} from "react-icons/fa"
import LoadingButtonBlue from './LoadingButtonBlue'
const Paystack = ({isLoggedIn, setIsLoggedIn}) => {
 const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pageOne, setPageOne]=useState(true)
  const [pageTwo, setPageTwo]=useState(false)
  const navigate = useNavigate()
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
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
        body: JSON.stringify({ amount:amount }),
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
    <div className="max-w-md  min-h-[60vh] bg-white flex flex-col items-center justify-center mt-16 mx-auto p-4 text-lightShade  shadow rounded">
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
        <div className="flex items-center justify-center gap-4 mb-4">
          <BsCreditCard2Back/>
          <select
            id="paymentMode"
            onChange={handlePaymentModeChange}
            value={paymentMode}
            required
            className=" border flex [&>*]:w-1/2 border-gray-300 px-6 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <option value="Credit Card">Debit Card</option>
          </select>
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
          <label htmlFor="amount" className="text-lg text-lightShade pb-6 font-medium">
          Amount:
          </label>
          <input
          type="number"
          id="amount"
            value={amount}
            placeholder='Enter Amount'
            onChange={handleAmountChange}
            required
            className="my-2 w-full border-transparent border-b-2 border-b-neutral-400 focus:border-none outline-none shadow-none px-3 py-2 rounded h-10 focus:outline-none bg-darkShade"
            />
        </div>  
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
          <button 
          onClick={()=>{
            setPageOne(true);
            setPageTwo(false)
          }}
          className='flex items-center justify-center my-6 rounded-sm   border-2  gap-2'>
          <IoMdArrowRoundBack className='text-3xl'/>
             <p className='text-xl font-semibold'>Back</p> 
          </button>
      
  
      </form>}
    </div>:
    <LoginComponent setIsLoggedIn={setIsLoggedIn}/>
  }
    </>
)}


  

export default Paystack 
