import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import Popup from './Popup';
import baseUrl from '../data/baseUrl';
import LoadingButton from './LoadingButton';
import { useLocation } from 'react-router-dom';
import { useGlobalState } from '../GlobalState';
import { LuEye, LuEyeOff } from "react-icons/lu";
const LoginComponent = ({setIsLoggedIn, isIOS}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoading, setIsLoading]=useState(false)
const [popupMsg, setPopupMsg]= useState('')
const [showPassword, setShowPassword]=useState(false)
const [keepLoggedIn, setKeepLoggedIn]=useState(false)


const navigate = useNavigate()

//GOOGLE AUTH LOGIN
const {state,dispatch,bindClientToBrowser,loginGlobally} = useGlobalState()
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
    console.log(data)
    window.location.replace(data.message)
  }
} catch (error) {
  console.error('Error making post request:', error);
}
    console.log('Login form submitted');
}


const location = useLocation()
const queryParams = new URLSearchParams(location.search);
const token = queryParams.get('token');
const emailFromGoogle = queryParams.get('email');
const nameFromGoogle = queryParams.get('name');



if(token){

  bindClientToBrowser({
    type:'local',
    token,
    name:nameFromGoogle,
    email:emailFromGoogle,
    loginType:'Google'
  }) 

  loginGlobally()
  // window.history.replaceState({}, document.title, window.location.pathname);
  
}

    




//EMAIL LOGIN  
const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(keepLoggedIn)
    setIsLoading(true)


    const requestOptions = {
      method: 'POST',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
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
  if(response.status>201){
    setPopupMsg(data.message)
    if(data.message=='Your password is incorrect'){
      dispatch({type:'SET_UNAUTHENTICATED_USER_EMAIL',payload:email})
    }
    console.log(state)
    setIsLoading(false)
  }
  if(response.status<202 ){
    const {token,name,email} = data


      bindClientToBrowser({
        type:'session',token,name,email,loginType:'Email'
      })

      if(keepLoggedIn){
        bindClientToBrowser({
          type:'local',token,name,email,loginType:'Email'
        }) 
      }
      loginGlobally()
      setIsLoading(false)
    
      
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




  const handleForgotPassword = async () => {
    
    setIsLoading(true) 
    const requestOptions = {
      method: 'POST',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
            email:state.unauthenticatedUserEmail,
        }
      ),
    };
  try {
  const response = await fetch(`${baseUrl}/auth/forgot-password`, requestOptions);
  const data = await response.json();
  if(response.status>201){
    setPopupMsg(data.message)
    setIsLoading(false)
  }
  else{
    sessionStorage.clear('popupMsg')
    navigate("/forgot-password")
  }
  // Handle response data as needed
} catch (error) {
  console.error('Error making post request:', error);
  // Handle error as needed
}
    // Perform Login logic here
    console.log('Login form submitted');
};


//Retain popup message accross rerenders
if(popupMsg){
  sessionStorage.setItem('popupMsg',popupMsg)
}    
const retainedPopupMsg=sessionStorage.getItem('popupMsg')  

  return (
    <div className="flex justify-center py-32 items-center min-h-screen  bg-lightShade">
      <form
        className="bg-white relative overflow-visible shadow-md w-[85%] sm:max-w-[40%] rounded px-8  pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {popupMsg&&<Popup message={popupMsg} setPopupMsg={setPopupMsg}  link={popupMsg=="Email not registered, Sign up"?"/register":"/login"}/>}
        <div className='bg-darkShade shadow-sm absolute h-24 w-[70%] -mt-2 mb-12 rounded-br-xl text-lightShade'>
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
        <div className="  relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password 

          </label>
          <div
          onClick={()=>{setShowPassword(!showPassword)}}
          className='absolute cursor-pointer h-2 w-2 right-4 bottom-[40%]'>

            {!showPassword?<LuEye/>:<LuEyeOff/>}
          </div>
          <input
            className="shadow border-b-1 border-b-neutral-200 bg-transparent appearance-none border rounded w-full py-2 px-1  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            required={true}
            type={showPassword?"text":"password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-6 flex justify-item items-center text-darkShade'>
          <input 
          type='checkbox'
          value={keepLoggedIn}
          className="self-start p-0 w-auto justify-start  border"
          name="" 
          onChange={(e) => setKeepLoggedIn(!keepLoggedIn)}
          id="keepLoggedIn" />  
          <label className=' text-gray-600' htmlFor="keepLoggedIn">Keep me logged In</label>
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
        {retainedPopupMsg=='Your password is incorrect'&&<div
          onClick={()=>{dispatch({
            type:"SET_UNAUTHENTICATED_USER_EMAIL",
            payload:email
          })
          handleForgotPassword()
        }} 
          className='w-full  my-4 py-3 '>
          <Link 
            className=" px-6 w-full bg-gray-600 text-gray-200  text-center  text-sm font-semibold py-2  rounded focus:outline-none focus:shadow-outline"
            type="submit"
            >
            Forgot your password?
          </Link>
          </div>}
          
          <div className=''>
          <div className='self-center justify-self-center py-2 my-4 relative text-center'>
              <p className='bg-neutral-200 w-full h-[1px] absolute top-1/2'></p>
              <p className='z-[0] relative text-neutral-400 w-10 mx-auto bg-white'>OR</p>
      </div>
      <button onClick={handleGoogleAuth} className="bg-white self-center shadow-md justify-self-center mx-auto flex border items-center justify-center gap-4 mb-2 text-gray-500 font-semibold py-2 px-4 rounded">
      <FcGoogle /> Log in with Google
    </button>
    </div>
      </form>
    </div>
  );
};

export default LoginComponent;
