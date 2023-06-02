import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import Popup from './Popup';
import baseUrl from '../data/baseUrl';
import LoadingButton from './LoadingButton';
const LoginComponent = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading]=useState(false)
const [popupMsg, setPopupMsg]= useState('')

console.log(setIsLoggedIn)
const navigate = useNavigate()
const handleGoogleAuth= async ()=>{
    try {
      const requestOptions = {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        // Add any other required headers here
      }}
  const response = await fetch(`${baseUrl}/login/federated/google`);
  const data = await response.json();
  console.log('Post request successful:', data);
  if(response.status>201){
    setPopupMsg(data.message)
    setIsLoading(false)
  }
  if(response.status<202){
    console.log("redirecting")
    setIsLoading(false)
    // setIsLoggedIn(true)
    window.location.replace(data.message)
  }
  // Handle response data as needed
} catch (error) {
  console.error('Error making post request:', error);
  // Handle error as needed
}
    // Perform Login logic here
    console.log('Login form submitted');
  

  }
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const requestOptions = {
      method: 'POST',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',

        // Add any other required headers here
      },
      body: JSON.stringify(
        {
            email:email,
            password:password,
        }
      ),
    };
         try {
  const response = await fetch(`${baseUrl}/auth/login`, requestOptions);
  const data = await response.json();
  console.log('Post request successful:', data);
  if(response.status>201){
    setPopupMsg(data.message)
    setIsLoading(false)
  }
  if(response.status<202){
    console.log("redirecting")
    setIsLoading(false)
    setIsLoggedIn(true)
    navigate("/give")
  }
  // Handle response data as needed
} catch (error) {
  console.error('Error making post request:', error);
  // Handle error as needed
}
    // Perform Login logic here
    console.log('Login form submitted');
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-darkShade">
      <form
        className="bg-white relative overflow-visible shadow-md w-[85%] sm:max-w-[40%] rounded px-8  pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {popupMsg&&<Popup message={popupMsg} setPopupMsg={setPopupMsg}  link="/login"/>}
        <div className='bg-lightShade shadow-sm absolute h-24 w-[70%] -mt-2 mb-12 rounded-br-xl text-darkShade'>
            <h3 className='text-3xl font-semibold my-12 text-center'>Login.</h3>
        </div>
        <div className="mt-28 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow border-b-1 border-b-neutral-200 bg-transparent appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            required={true}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow border-b-1 border-b-neutral-200 bg-transparent appearance-none border rounded w-full py-2 px-1  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            required={true}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          {isLoading?<LoadingButton/>:<button
            className="bg-orange-500 min-w-[40%] hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>}
          <Link to="/register"
            className="underline border-b-1 border-b-orange-400 text-orange-400 max-w-[80%] text-sm font-semibold py-2  rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            New User? &nbsp; Register
          </Link>
        </div>
          <div className='my-8'>
      <button onClick={handleGoogleAuth} className="bg-white self-center shadow-lg justify-self-center mx-auto flex border items-center justify-center gap-4 mb-16 text-gray-500 font-semibold py-2 px-4 rounded">
      <FcGoogle /> Log in with Google
    </button>
    </div>
      </form>
    </div>
  );
};

export default LoginComponent;
