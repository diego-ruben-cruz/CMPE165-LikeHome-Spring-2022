import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";

const Navigation = createContext();

const NavigationContext = ({ children }) => {
  const[user, setUser] = useState(null);
  const [sealNumber, setSealNumber] = useState(0);
  const[alert, setAlert] = useState({
    open:false,
    message:'',
    type: " success"
  })

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "Users", user.email)
      onSnapshot(
        docRef,  
        (doc) => {
          setSealNumber(doc.data().seals)
          console.log(sealNumber)
        });
    }
    
  },);


  useEffect(() => {
    onAuthStateChanged(auth, user => {
        if(user) setUser(user);
        else setUser(null);
    });
  },);

  return (
    <Navigation.Provider
      value={{
        alert,
        setAlert,
        user,
        setUser,
      }}
    >
      {children}
    </Navigation.Provider>
  );
};

export default NavigationContext;

export const NavigationState = () => {
  return useContext(Navigation);
};