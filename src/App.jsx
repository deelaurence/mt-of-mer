import { useState } from 'react'
import './App.css'



import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LANDING from './components/LANDING';
import Paystack from './components/Paystack';
import baseUrl from './data/baseUrl';
import KODETECH from './components/KODETECH';
import PaymentReceipt from './components/PaymentReceipt'
import Alertz from './components/Alertz';
import MixedR from './components/MixedR';
import SingleMessage from './components/SingleMessage'
import SingleArticle from './components/SingleArticle'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader'
import WhoIsFlo from './components/WhoIsFlo';
import Footer from './components/Footer';
import EmailVerifiedPage from './components/Verified';
import GoAndVerify from './components/Verify';
import Ministries from './components/Ministries';
import Playground from './components/Playground';
import ScrollToTop from './components/ScrollToTop';
import LoginComponent from './components/Login';
import RegistrationComponent from './components/Register';
import { useEffect, useRef } from 'react';
import Posts from './components/Posts';
import Give from './components/Give';
import PostsAll from './components/PostsAll';
import ArticlesAll from './components/ArticlesAll';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
function App() {
  // gsap.registerPlugin(S)
  const [currentLocation, setCurrentLocation] = useState('')
  const [imgLoaded, setImageLoaded] = useState(false)
  const [allMessages, setAllMessages] = useState([])
  const [emailOnRegister,setEmailOnRegister]=useState("")
  const [allArticles, setAllArticles] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [localStorageMessages, setLocalStorageMessages] = useState([])
  const pullData = ((data) => {
    //(data);
    setImageLoaded(data)
  })
 
useEffect( ()=>{
  const fetchData= async ()=>{
    try {
      const response = await fetch(`${baseUrl}/paystack/initiate`, {
        method: 'POST',
        credentials:'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount:40000 }),
      });

      if (!response.ok) {
        setIsLoggedIn(false)
        throw new Error('User not logged in');
      }
      const data = await response.json()
      console.log(data)
      // Handle success response
      setIsLoggedIn(true)
      console.log('User logged In');
    } catch (error) {
      // Handle error
      setIsLoggedIn(false)
      console.error('User not logged In');
    }
  }
  fetchData()
},[location,currentLocation])
 //  const baseUrl = 'https://easy-erin-eel-sock.cyclic.app'
  useEffect( ()=>{
  const fetchData =async ()=>{
    const response = await fetch(`${baseUrl}/messages/all`);
    const jsonData = await response.json();
    const response2 = await fetch(`${baseUrl}/articles/all`);
    const jsonData2 = await response2.json();
    setAllMessages(jsonData)
    setAllArticles(jsonData2)
    console.log(jsonData)
    console.log(jsonData2)
    localStorage.setItem("allMessages",JSON.stringify(jsonData))
const getFromLs=JSON.parse(localStorage.getItem("allMessages"))
setLocalStorageMessages(getFromLs)
    //console.log("setData");
  }
  fetchData()

},[currentLocation, location])


return (
    <Router>
      <ScrollToTop />
      {imgLoaded ?
        <div className='dark:bg-lightShade  absolute-parent'>
          <Navbar locationProps={location} setIsLoggedIn={setIsLoggedIn}/>
          <Routes>
            <Route path="/" key={document.location.href} element={<  LANDING allMessages={allMessages} allArticles={allArticles} />} />
            <Route path="/messages" key={document.location.href} element={<PostsAll allMessages={localStorageMessages}/>} />
            <Route path="/login" key={document.location.href} element={<LoginComponent baseUrl={baseUrl} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/verified" key={document.location.href} element={<EmailVerifiedPage />} />
            <Route path="/goverify" key={document.location.href} element={<GoAndVerify emailOnRegister={emailOnRegister}/>} />
            <Route path="/register" key={document.location.href} element={<RegistrationComponent baseUrl={baseUrl} emailOnRegister={emailOnRegister} setEmailOnRegister={setEmailOnRegister}/>} />
            
            <Route path="/give" key={document.location.href} element={<Paystack setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} />
            <Route path="/articles" key={document.location.href} element={<ArticlesAll allArticles={allArticles}/>} />
            <Route path="/paystack" key={document.location.href} element={<Paystack/>}/>
            <Route path="/receipt" key={document.location.href} element={<PaymentReceipt/>}/>
            <Route path="/messages/:id" key={document.location.href} element={<SingleMessage />} />
            <Route path="/articles/:id" key={document.location.href} element={<SingleArticle />} />
            <Route path="/messages/all/:id" key={document.location.href} element={<SingleMessage/>} />
            <Route path="/articles/all/:id" key={document.location.href} element={<SingleArticle/>} />
            {/* <Route path="/about" key={document.location.href} element={<WhoIsFlo />} />
            <Route path="/menu" key={document.location.href} element={<Menu />} />
            <Route locationProps={location} path="/kodetech" key={document.location.href} element={<KODETECH />} />
            <Route locationProps={location} path="/alertz" key={document.location.href} element={<Alertz />} />
            <Route locationProps={location} path="/mr" key={document.location.href} element={<MixedR />} />
            <Route path="/playground" key={document.location.href} element={<Playground />} /> */}
          </Routes>
          < Footer locationProps={location} />
        </div>
        :
        <Preloader pullData={pullData} />
      }
    </Router>
  )
}

export default App
