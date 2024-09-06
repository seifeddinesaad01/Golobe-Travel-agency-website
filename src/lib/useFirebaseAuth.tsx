 "use client"
import { useState, useEffect } from 'react'
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword as _createUserWithEmailAndPassword, signInWithEmailAndPassword as _signInWithEmailAndPassword, signOut as _signOut } from "firebase/auth";

import {
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";

const formatAuthUser = (user: any) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setLoading(false)
      return;
    }

    setLoading(true)

    let formattedUser: any = formatAuthUser(authState);

    setAuthUser(formattedUser);

    setLoading(false);

  };
  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email: any, password: any) =>
    _signInWithEmailAndPassword(auth, email, password);

  const createUserWithEmailAndPassword = (email: any, password: any) =>
    _createUserWithEmailAndPassword(auth, email, password);

  const signOut = () =>
    _signOut(auth).then(clear);

  const onAuthStateChanged = (cb: any) => {
    return _onAuthStateChanged(auth, cb);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
  };
}


