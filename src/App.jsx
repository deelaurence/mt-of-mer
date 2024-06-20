import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { useGlobalState } from './GlobalState';
import UserList from './components/admin/AllUsers';
import PaymentList from './components/admin/AllPayments';
import ManageAuthors from './components/admin/Authors';
// Import components
import AdminLoginComponent from './components/admin/AdminLogin';
import LANDING from './components/LANDING';
import PostAll from './components/PostsAll';
import PostFormComponent from './components/admin/AddPosts';
import SinglePost from './components/SinglePost';
import Paystack from './components/Paystack';
import PaymentReceipt from './components/PaymentReceipt';



import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import EmailVerifiedPage from './components/Verified';
import GoAndVerify from './components/Verify';
import Ministries from './components/Ministries';
import Playground from './components/Playground';
import ScrollToTop from './components/ScrollToTop';
import LoginComponent from './components/Login';
import RegistrationComponent from './components/Register';
import Messages from './components/Messages';
import Give from './components/Give';

import KidsMinistry from './components/KidsMinistry';
import TeensMinistry from './components/TeensMinistry';
import Dashboard from './components/admin/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import UpdatePasswordComponent from './components/UpdatePassword';
import PrayerMinistry from './components/PrayerMinistry';
import DoorHolders from './components/DoorHolders';
import AboutUs from './components/Us';
import ChurchLeadership from './components/Leadership';
import { randomImgUrls } from './data/randomUnsplash';
import CreatePaymentTag from './components/admin/PaymentTag';

function App() {
  const { state,loginGlobally,dispatch } = useGlobalState();
  const baseUrl= state.baseUrl
 
  useEffect(() => {
      if (sessionStorage.getItem('token')) {
        loginGlobally()
      } 
      else if(localStorage.getItem('token')){
        loginGlobally()
      }
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      //set from local if available storage while awaiting backend
      const tempArticlesData = JSON.parse(localStorage.getItem('articlesData'))
      const tempMessagesData = JSON.parse(localStorage.getItem('messagesData'))
      
      //set to state if list is a valid array
      if(Array.isArray(tempMessagesData)){
        dispatch({ type: 'SET_ALL_MESSAGES', payload: tempMessagesData });
      }
      if(Array.isArray(tempArticlesData)){
        dispatch({ type: 'SET_ALL_ARTICLES', payload: tempArticlesData });
      }
      

      //Make API request
      const response = await fetch(`${baseUrl}/messages/all`);
      let messagesData = await response.json();
      const response2 = await fetch(`${baseUrl}/articles/all`);
      let articlesData = await response2.json();
      const authorsResponse = await fetch(`${baseUrl}/author`);
      let authors=await authorsResponse.json()
      
      
      messagesData=messagesData.filter((post)=>{
        return post.publish!==state.publishMode; 
      })
      articlesData=articlesData.filter((post)=>{
        return post.publish!==state.publishMode; 
      })
      
      //Insert a random image into posts without images
      const replaceEmptyImages = (list)=>{
        list.map((element)=>{
          if(!element.image[0]){
            element.image.push(randomImgUrls())
          }
        })
      }


      replaceEmptyImages(messagesData)
      replaceEmptyImages(articlesData)      
      //set first 30 to localstorage
      //Check if data fetched is an array which signifies being successfull
      if(Array.isArray(messagesData)){
        localStorage.setItem('messagesData',JSON.stringify(messagesData.slice(0,30)))
        dispatch({ type: 'SET_ALL_MESSAGES', payload: messagesData });
      }
      if(Array.isArray(articlesData)){
        localStorage.setItem('articlesData', JSON.stringify(articlesData.slice(0,30)))
        dispatch({ type: 'SET_ALL_ARTICLES', payload: articlesData });
      }
      if(Array.isArray(authors)){
        dispatch({ type: 'SET_ALL_AUTHORS', payload: authors });
      }
      } catch (error) {
        console.log(error)     
      }
    
    };
    fetchData();
  }, [dispatch,state.publishMode]);

  return (
  

    <Router>
      <ScrollToTop />
        <div className={`${state.publishMode?'':''}dark:bg-darkShade absolute-parent`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LANDING />} />
            <Route path="/messages" element={<PostAll postType='message' />} />
            

           
            <Route path="/payment-tag" element={state.isAdminLoggedIn?<CreatePaymentTag />:<AdminLoginComponent/>} />
          
            <Route path="/add-article" element={state.isAdminLoggedIn?<PostFormComponent formType='article' />:<AdminLoginComponent/>} />
            <Route path="/add-message" element={state.isAdminLoggedIn?<PostFormComponent formType='message' />:<AdminLoginComponent/>} />
            <Route path="/admin-login" element={<AdminLoginComponent isIOS={state.isIOS} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={state.isAdminLoggedIn?<UserList/> :<AdminLoginComponent/>} />
            <Route path="/payments" element={state.isAdminLoggedIn?<PaymentList/>:<AdminLoginComponent/>} />
            <Route path="/authors" element={state.isAdminLoggedIn?<ManageAuthors/>:<AdminLoginComponent/>} />


            <Route path="/login" element={<LoginComponent baseUrl={baseUrl} />} />
            <Route path="/forgot-password" element={<GoAndVerify email={state.unauthenticatedUserEmail} />} />
            <Route path="/verified" element={<EmailVerifiedPage />} />
            <Route path="/goverify" element={<GoAndVerify unauthenticatedUserEmail={state.unauthenticatedUserEmail} />} />
            <Route path="/register" element={<RegistrationComponent baseUrl={baseUrl} />} />
            <Route path="/give" element={<Paystack />} />
            <Route path="/reset-password" element={<UpdatePasswordComponent />} />
            <Route path="/articles" element={<PostAll postType='article' />} />
            <Route path="/paystack" element={<Paystack />} />
            <Route path="/receipt" element={<PaymentReceipt />} />
            <Route path="/messages/:id" element={<SinglePost postType='message' />} />
            <Route path="/articles/:id" element={<SinglePost postType='article' />} />
                                    
            
            <Route path="/kids" element={<KidsMinistry />} />
            <Route path="/prayer" element={<PrayerMinistry />} />
            <Route path="/us" element={<AboutUs />} />
            <Route path="/leadership" element={<ChurchLeadership />} />
            <Route path="/teens" element={<TeensMinistry />} />
            <Route path="/door-holders" element={<DoorHolders />} />
          </Routes>
          <Footer />
        </div>
    </Router> 
  );
}

export default App;
