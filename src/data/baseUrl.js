const getBaseUrl = () => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return "http://localhost:4000";
    } else {
      return "https://uacc-api.onrender.com";
    }
  };
  
  const baseUrl = getBaseUrl();
  export default baseUrl;
  