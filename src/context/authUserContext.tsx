"use client"
import { createContext, useContext } from 'react'
import useFirebaseAuth from '../lib/useFirebaseAuth';

const authUserContext = createContext<any>({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async () => { },
  createUserWithEmailAndPassword: async () => { },
  signOut: async () => { }

});

export function AuthUserProvider({ children }: any) {
  const auth = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
