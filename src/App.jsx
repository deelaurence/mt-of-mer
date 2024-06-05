import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useGlobalState } from './GlobalState';

// Import components
import ArticleForm from './components/admin/AddArticle';
import AdminLoginComponent from './components/admin/AdminLogin';
import MessageForm from './components/admin/AddMessage';
import LANDING from './components/LANDING';
import Paystack from './components/Paystack';
import PaymentReceipt from './components/PaymentReceipt';
import SingleMessage from './components/SingleMessage';
import SingleArticle from './components/SingleArticle';
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
import MessagesAll from './components/MessagesAll';
import ArticlesAll from './components/ArticlesAll';
import KidsMinistry from './components/KidsMinistry';
import TeensMinistry from './components/TeensMinistry';
import Dashboard from './components/admin/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import UpdatePasswordComponent from './components/UpdatePassword';

function App() {
  const { state,loginGlobally,dispatch } = useGlobalState();
  const baseUrl= state.baseUrl
 
  useEffect(() => {
      if (sessionStorage.getItem('token')) {
        console.log("User is logged in");
        loginGlobally()
      } 
      else if(localStorage.getItem('token')){
        console.log("User permanently logged in");
        loginGlobally()
      }
      else {
        console.log("User is logged out")
        dispatch({ type: 'SET_IS_LOGGED_IN', payload: false });
      }
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}/messages/all`);
      const messagesData = await response.json();
      const response2 = await fetch(`${baseUrl}/articles/all`);
      const articlesData = await response2.json();
      
      //Check if data fetched is an array which signifies being successfull
      if(Array.isArray(messagesData)){
        dispatch({ type: 'SET_ALL_MESSAGES', payload: messagesData });
      }
      if(Array.isArray(articlesData)){
        dispatch({ type: 'SET_ALL_ARTICLES', payload: articlesData });
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <Router>
      <ScrollToTop />
        <div className='dark:bg-darkShade absolute-parent'>
          <Navbar />
          <Routes>
            <Route path="/" element={<LANDING />} />
            <Route path="/messages" element={<MessagesAll />} />
            <Route path="/add-article" element={<ArticleForm />} />
            <Route path="/add-message" element={<MessageForm />} />
            <Route path="/admin-login" element={<AdminLoginComponent isIOS={state.isIOS} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginComponent baseUrl={baseUrl} />} />
            <Route path="/forgot-password" element={<GoAndVerify email={state.unauthenticatedUserEmail} />} />
            <Route path="/verified" element={<EmailVerifiedPage />} />
            <Route path="/goverify" element={<GoAndVerify unauthenticatedUserEmail={state.unauthenticatedUserEmail} />} />
            <Route path="/register" element={<RegistrationComponent baseUrl={baseUrl} />} />
            <Route path="/give" element={<Paystack />} />
            <Route path="/reset-password" element={<UpdatePasswordComponent />} />
            <Route path="/articles" element={<ArticlesAll />} />
            <Route path="/paystack" element={<Paystack />} />
            <Route path="/receipt" element={<PaymentReceipt />} />
            <Route path="/messages/:id" element={<SingleMessage />} />
            <Route path="/messages/all/:id" element={<SingleMessage />} />
            <Route path="/articles/:id" element={<SingleArticle />} />
            <Route path="/articles/all/:id" element={<SingleArticle />} />
            <Route path="/kids" element={<KidsMinistry />} />
            <Route path="/teens" element={<TeensMinistry />} />
          </Routes>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
