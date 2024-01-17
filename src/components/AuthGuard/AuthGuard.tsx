// components/AuthWrapper.js

import { useEffect } from 'react';
// import { useRouter } from 'next/router';

const AuthWrapper:any = ({ children }:any) => {

  useEffect(() => {
    // Check if there is a token in local storage
    const token = localStorage.getItem('userToken');

    // If no token, redirect to login page
    if (!token) {
        window.location.href = '/sign-in';
    }
  }, []); // Only run this effect once when the component mounts

  // Render the wrapped components
  return <>{children}</>;
};

export default AuthWrapper;
