import React from 'react';

const HandDrawnUnderline = () => (
//   <svg   xmlns="http://www.w3.org/2000/svg" version="1.1">
//     <path d="M10 10 C 20 20, 40 20, 50 10 S 90 0, 100 10" stroke="white"  strokeWidth="1" />
//   </svg>

<svg className='h-12 w-12 absolute -bottom-2 -left-4 -z-20' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop id="stop1" stopColor="rgba(200, 10, 99, 1)" offset="0%" />
        <stop id="stop2" stopColor="rgba(210, 20, 55, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      fill="url(#sw-gradient)"
      d="M26.7,-5.4C30.6,3.3,27,17.8,18.6,23.3C10.3,28.8,-2.9,25.4,-13.6,17.8C-24.3,10.3,-32.6,-1.5,-30,-8.6C-27.3,-15.6,-13.7,-18,-1.1,-17.6C11.4,-17.3,22.8,-14.2,26.7,-5.4Z"
      width="100%"
      height="100%"
      transform="translate(50 50)"
      strokeWidth="0"
      style={{ transition: 'all 0.3s ease 0s' }}
    />
  </svg>

);

export default HandDrawnUnderline;
