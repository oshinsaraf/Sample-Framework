import React from "react";
import Header from "@/components/header";
import Link from "next/link";
import { useState } from "react";
import { auth } from '../pages/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react'


export default function Dashboard() {

  return (
    <>
      <Header />
      <div className="bg-black font-xl gap-5 md:gap-20 mx-auto min-h-screen flex flex-col md:flex-row items-center text-white justify-center font-bold font-mono text-5xl md:text-7xl"
        style={{
          backgroundImage: `url('/1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: '40%',
        }}
      >
        <Link href="/buy" passHref>
          <p className="block text-center font-bold md:inline-block md:text-left md:mr-10 md:mb-0 mb-5 text-white border border-yellow-500 text-4xl md:text-5xl p-20 hover:bg-yellow-500 shadow-sm rounded-sm hover:text-white transition duration-500 uppercase tracking-widest">
            Buy
          </p>
        </Link>
        <Link href="/sell" passHref>
          <p className="block text-center font-bold md:inline-block md:text-left md:mr-10 md:mb-0 mb-5 text-white border border-yellow-500 text-4xl md:text-5xl p-20 hover:bg-yellow-500 shadow-sm rounded-sm hover:text-white transition duration-500 uppercase tracking-widest">
            Sell
          </p>
        </Link>
      </div>
    </>
  );
}
