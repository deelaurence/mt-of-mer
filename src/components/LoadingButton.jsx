import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingButton = () => {
  return (
    <button className="flex gap-2 items-center bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled>
      <span className="flex items-center">
        Wait...
      </span>
        <FaSpinner className="animate-spin origin-center" />
    </button>
  );
};

export default LoadingButton;
