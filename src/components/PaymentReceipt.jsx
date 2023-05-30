import React from 'react';
import {useLocation} from 'react-router-dom'
const PaymentReceipt = ({ name, amountPaid, paymentDescription }) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search);
    const amount = params.get('amount');
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
    <div className="bg-gray-900 py-32 text-white  shadow-xl px-6 sm:px-16">
      <div className="flex flex-col gap-8  justify-between mb-8">
        <div className="flex  items-center">
          
          <div>
            <h2 className="text-3xl font-bold">Payment Receipts</h2>
            <p className="text-lg">Thank you for your payment</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-400">Reference: {reference}</p>
          <p className="text-sm text-gray-400">Date: {formattedDate}</p>
          <p className="text-sm text-gray-400">Time: {formattedTime}</p>
        </div>
      </div>
      <hr className="border border-gray-800 mb-8" />
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2">Payer Details</h3>
          <p className="text-gray-400 mb-4">{name}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Payment Details</h3>
          
          <p className="text-gray-400 mb-2">Amount Paid: <span className='text-xl font font-semibold'> ₦ {amount}</span></p>
          <p className="text-gray-400">Payment Description: {description}</p>
        </div>
      </div>
      <hr className="border border-gray-800 mt-8 mb-6" />
      <p className="text-gray-400 text-sm">
        If you have any questions or need further assistance, please contact our support team at
        support@example.com.
      </p>
    </div>
  );
};

export default PaymentReceipt;
