import React, { useState, useRef } from 'react';
import LoadingButton from './LoadingButton';
import { FcGoogle } from 'react-icons/fc';

import axios from 'axios';
import {Link,redirect,useNavigate} from 'react-router-dom'
import baseUrl from '../data/baseUrl';
import Popup from './Popup';
const RegistrationComponent = ({emailOnRegister, setEmailOnRegister,setIsLoggedIn}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [surname, setSurname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [passwordPrompt, setPasswordPrompt]=useState("")
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState(false);
  const [popupMsg, setPopupMsg]= useState('')
    const [isLoading, setIsLoading]=useState(false)

const passwordDom=document.getElementById("password")
 const responseGoogle = async (response) => {
    try {
      const { tokenId } = response;
      // Send the tokenId to your server for verification
      console.log(response)
      const res = await axios.post('/auth/google', { tokenId });
      console.log(res.data);
      // Handle the response from the server
    } catch (error) {
      console.error(error);
    }
  };

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
const handleSubmit =async (e) => {
  e.preventDefault();
  setEmailOnRegister(email)
    console.log(password!==confirmPassword)
    if(!validatePassword){
      setPasswordPrompt("Password is too short")
      console.log("incorrect")
      return 
    }
    if(password!==confirmPassword){
      setPasswordPrompt("Passwords does not match")
      console.log("incorrect")
      return 
    }
    
    setIsLoading(true) 
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other required headers here
      },
      body: JSON.stringify(
        {
            name:`${surname} ${firstname}`,
            email:email,
            password:password,
        }
      ),
    };
     try {
  const response = await fetch(`${baseUrl}/auth/register`, requestOptions);
  const data = await response.json();
  console.log('Post request successful:', data);
  if(response.status>201){
   
    setIsLoading(false)
  setPopupMsg(data.message)
    
  }
  if(response.status==201){
    console.log("redirecting")
    return navigate("/goverify")
  }
  // Handle response data as needed
} catch (error) {
  console.error('Error making post request:', error);
  // Handle error as needed
}
    // Perform Registration logic here
    console.log('Registration form submitted');
  };

  return (
    <div className="mt-32  flex flex-col justify-center items-center min-h-screen  bg-darkShade">
      <form
        className="bg-white relative overflow-visible shadow-md w-[85%]  sm:max-w-[40%] rounded px-8  pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {popupMsg&&<Popup message={popupMsg} link="/login"/>}
        <div className='bg-lightShade absolute h-24 w-[70%] -mt-2 mb-12 rounded-br-xl text-darkShade'>
            <h3 className='text-3xl font-semibold my-12 text-center'>Registration.</h3>
        </div>
        <div className="mt-28 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
            Surname
          </label>
          <input
            className="shadow border-b-1 border-b-neutral-200 bg-transparent appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="surname"
            type="text"
            required={true}
            placeholder="Enter your surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
            First Name
          </label>
          <input
            className="shadow border-b-1 border-b-neutral-200 bg-transparent appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="text"
            required={true}
            placeholder="Enter your firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className=" mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow border-b-1 border-b-neutral-200 bg-transparent appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            required={true}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label 
          className={passwordPrompt?"block text-red-700 text-sm font-semibold mb-2":"block text-gray-700 text-sm font-bold mb-2"} 
          htmlFor="password">
           {passwordPrompt?passwordPrompt:"Password"}
          </label>
          <input
            className="shadow border-b-1 border-b-neutral-200 bg-transparent appearance-none border rounded w-full py-2 px-1  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            onFocus={() => setPasswordPrompt(false)}
            required={true}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if(password.length>5){
                setValidatePassword(true)
                setPasswordPrompt("")
              }
              else{
                setPasswordPrompt("Password is too short")
                setValidatePassword(false)
              }
            }}
          />
          {/* <p>{validatePassword?"":"Password too short"}</p> */}
        </div>

        <div className="mb-6">
        
          <label 
          className={passwordPrompt?"block text-red-700 text-sm font-semibold mb-2":"block text-gray-700 text-sm font-bold mb-2"} 
          htmlFor="confirmPassword">
           {passwordPrompt?passwordPrompt:"Confirm password"}
          </label>
          <input
            className="shadow border-b-1 border-b-neutral-200 bg-transparent appearance-none border rounded w-full py-2 px-1  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            required={true}
            onFocus={() => setPasswordPrompt(false)}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          {isLoading?<LoadingButton/>:<button
            className="bg-orange-500 min-w-[40%] hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>}
          <Link to="/login"
            className="ml-4 underline text-center border-b-1 border-b-blue-400 text-orange-400 max-w-[80%] text-sm font-semibold py-2  rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Already registered? &nbsp; Login
          </Link>
          
        </div>
      <div className=''>
          <div className='self-center justify-self-center py-2 my-4 relative text-center'>
              <p className='bg-neutral-300 w-full h-[1px] absolute top-1/2'></p>
              <p className='z-10 relative text-neutral-400 w-10 mx-auto bg-white'>OR</p>
      </div>

      <button onClick={handleGoogleAuth} className="bg-white self-center shadow-md mb-2 justify-self-center mx-auto flex border items-center justify-center gap-4  text-gray-500 font-semibold py-2 px-4 rounded">
      <FcGoogle /> Sign in with Google
    </button>
    </div>
      </form>
      
    </div>
  );
};

export default RegistrationComponent;
