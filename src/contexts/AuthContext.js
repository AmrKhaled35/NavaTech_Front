import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState('');
  const [Email , SetEmail] = useState('');
  const [UserName , SetUserName ] = useState('');
  const Rejester = (First , last)=>{
    const userName = First + last ;
    SetUserName(userName);
  }
  const login = (email) => {
    setIsLoggedIn(true);
    // setUserImage(image);
    SetEmail(email)
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUserImage('');
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn,login, logout , Email  , SetEmail , UserName , SetUserName , Rejester}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
