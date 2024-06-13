import React, { createContext, useReducer, useContext } from 'react';
import baseUrl from './data/baseUrl';
// Create a context
const GlobalStateContext = createContext();

// Define initial state
const initialState = {
    isLoggedIn: false,
    clientData:{},
    isAdminLoggedIn:false,
    baseUrl,
    // baseUrl: 'http://localhost:4000',
    allMessages: [],
    allArticles: [],
    unsplashArticleImages:[],
    unsplashMessageImages:[],
    unauthenticatedUserEmail:'',
    isIOS: /iPhone|iPad|iPod/.test(navigator.userAgent),
    navbarData: [
        { label: 'Home', link: "/" },
        { label: 'Giving', link: '/give' },
        { label: 'Us', link: '/us' },
        { label: 'Church Leadership',subMenu:true, link: '/leadership' },
        { label: 'Contact us/Send us a mail',subMenu:true, link: '/us' },
        { label: 'Articles', link: '/articles' },
        { label: 'Messages', link: '/messages' },
        { label: 'Admin', link: '/dashboard' },
        { label: 'Log in to your admin account',subMenu:true, link: '/admin-login' },
    ]
};

// Define a reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_IS_LOGGED_IN':
            return { ...state, isLoggedIn: action.payload };
        case 'SET_UNAUTHENTICATED_USER_EMAIL':
            return { ...state, unauthenticatedUserEmail: action.payload };
        case 'SET_IS_ADMIN_LOGGED_IN':
            return { ...state, isAdminLoggedIn: action.payload };
        case 'SET_CLIENTDATA':
            return { ...state, clientData: action.payload };    
        case 'SET_ALL_MESSAGES':
            return { ...state, allMessages: action.payload };
        case 'SET_UNSPLASH_MESSAGE_IMAGES':
            return { ...state, unsplashMessageImages: action.payload };
        case 'SET_UNSPLASH_ARTICLES_IMAGES':
            return { ...state, unsplashArticleImages: action.payload };
        case 'SET_ALL_ARTICLES':
            return { ...state, allArticles: action.payload };
        case 'ADMIN_LOGOUT':
            return { ...state, isAdminLoggedIn: false};
        default:
            return state;
    }
};

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const logoutGlobally = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userData');
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        dispatch({ type: 'SET_CLIENTDATA', payload:{}});
        dispatch({ type: 'SET_IS_LOGGED_IN', payload:false });
    };

    const loginGlobally = () => {
        const userToken = sessionStorage.getItem('token')||localStorage.getItem('token')
        const userData = sessionStorage.getItem('userData')||localStorage.getItem('userData')
        const parsedData= JSON.parse(userData)
        parsedData.singleName= parsedData.name.split(' ')[0]
        
        dispatch({ type: 'SET_IS_LOGGED_IN', payload: true });
        dispatch({ type: 'SET_CLIENTDATA', payload:{token:userToken,userData:parsedData}});
    };
    
    const bindClientToBrowser=({
        type,
        token,
        name,
        email,
        loginType
    })=>{
        if(type=='session'){
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('userData',JSON.stringify({name,email}))
            sessionStorage.setItem('login_type', loginType);
        }
        if(type=='local'){
            localStorage.setItem('token', token);
            localStorage.setItem('userData',JSON.stringify({name,email}))
            localStorage.setItem('login_type', loginType);
        }
    }


    const adminLogout = () => {
        sessionStorage.removeItem('admin_token');
        sessionStorage.removeItem('admin_name');
        dispatch({ type: 'ADMIN_LOGOUT' });
    };



    return (
        <GlobalStateContext.Provider value={{ 
         state,
         dispatch, 
         logoutGlobally, 
         adminLogout,
         bindClientToBrowser, 
         loginGlobally }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Create a custom hook to use the global state
export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateProvider");
    }
    return context;
};
