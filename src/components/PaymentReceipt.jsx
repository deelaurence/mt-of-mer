import React from 'react';
import {useLocation} from 'react-router-dom'
const PaymentReceipt = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search);
    const amount = params.get('amount');
    const name = params.get('name');
    const description = params.get('description');
    const reference = params.get('reference');
    console.log(amount)
    const currentDate = new Date();

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
};

const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

const formattedTime = `${hours}:${minutes}:${seconds}`;


  return (
    <div className="bg-gray-900 py-32 mb-24 mx-4 mt-24 text-white  shadow-xl px-6 sm:px-16">
      <div className="flex flex-col gap-8  justify-between mb-8">
        <div className="flex  items-center">
          
          <div>
            <h2 className="text-3xl font-bold">Payment Receipts</h2>
            <p className="text-lg">Thank you for your payment</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Reference: <span className='text-gray-400 font-semibold'> {reference}</span> </p>
          <p className="text-sm text-gray-500">Date:<span className='text-gray-400 font-semibold'>{formattedDate}</span> </p>
          <p className="text-sm text-gray-500">Time: <span className='text-gray-400 font-semibold'>{formattedTime}</span> </p>
        </div>
      </div>
      <hr className="border border-gray-800 mb-8" />
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">Payer Details</h3>
          <p className="text-gray-400 mb-4">{name}</p>
        </div>
        <div className='border border-gray-600 p-2'>
          <h3 className="text-lg font-semibold border-gray-700 p-1 rounded  border-b mb-4">Payment Details</h3>
          
          <p className="text-gray-500 mb-2">Amount Paid: <span className='text-xl text-gray-400 font font-semibold'> ₦ {amount}</span></p>
          <p className="text-gray-500">Description: <span className='font-semibold text-gray-400'> {description}</span></p>
        </div>
      </div>
      <hr className="border border-gray-800 mt-8 mb-6" />
      <p className="text-gray-500 text-sm">
        If you have any questions or need further assistance, please contact our support team at
        support@example.com.
      </p>
    </div>
  );
};

export default PaymentReceipt;
