import { createUserWithEmailAndPassword as _createUserWithEmailAndPassword, signInWithEmailAndPassword as _signInWithEmailAndPassword, signOut as _signOut } from "firebase/auth";

export default function useFirebaseAuth() {
  // ...
  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email, password) =>
    _signInWithEmailAndPassword(auth, email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    _createUserWithEmailAndPassword(auth, email, password);

  const signOut = () =>
    _signOut(auth).then(clear);

  const onAuthStateChanged = (cb) => {
      return _onAuthStateChanged(auth, cb);
  };

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
