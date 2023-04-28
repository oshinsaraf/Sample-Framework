import React from "react";
import Link from 'next/link';
import { auth } from '../pages/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react'
import Header from '@/components/header';

export default function Profile() {
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const results = await signInWithPopup(auth, googleAuth);
    const { user } = results;
    const userInfo = {
      name: user.displayName,
      email: user.email
    }
  }
  useEffect(() => {
    console.log(user);
  }, [user])


  const handleClick = () => {
    window.open(user.photoURL, "_blank");
  };
  

  return (
    <>
      <Header />
      <div className="flex items-center justify-between py-4 px-8 min-h-screen bg-black">
        {user && (
          <div className="border border-white text-white shadow-lg rounded-3xl mx-auto p-24 bg-black flex flex-col">
            <img
              className="rounded-full h-24 w-24 mx-auto border cursor-pointer border-white mb-4"
              src={user.photoURL}
              alt="Profile picture"
              onClick={handleClick}
            />
            <p className="mb-2 mx-auto text-3xl font-bold font-mono">Name: <span className="text-xl text-gray-300">{user.displayName}</span></p>
            <p className="mb-2 mx-auto text-3xl font-bold font-mono">Email:<span className="text-xl text-gray-300"> {user.email}</span></p>
          </div>
        )}
      </div>
    </>
  );
}
