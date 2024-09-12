// components/AuthWrapper.js

import { useAuth } from '@/context/authUserContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// import { useRouter } from 'next/router';

const AuthWrapper: any = ({ children }: any) => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authUser)
      router.push('/')
  }, [authUser])

  // Render the wrapped components
  return <>{loading ? <p>Loading</p> : { children }}

  </>;
};

export default AuthWrapper;
