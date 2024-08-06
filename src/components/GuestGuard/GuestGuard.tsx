
import { useEffect } from 'react';

const GuestGuard:any = ({ children }:any) => {

  useEffect(() => {
    // Check if there is a token in local storage
    const token = localStorage.getItem('userToken');

    // If no token, redirect to login page
    if (token) {
        window.location.href = '/home';
    }
  }, []); // Only run this effect once when the component mounts

  // Render the wrapped components
  return <>{children}</>;
};

export default GuestGuard;
