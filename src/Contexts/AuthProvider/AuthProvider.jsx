import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Register User Auth
  const registerUser = ( email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login User Auth
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Update Profile
  const updateProfileData = (profile) => {
    return updateProfile(auth.currentUser, profile);
  }

  //signOut User Auth
  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  //Pass the auth Data
  const authInfo = { registerUser, signInUser, logOutUser, user, updateProfileData };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
