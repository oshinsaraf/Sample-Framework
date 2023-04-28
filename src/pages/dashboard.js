import React from "react";
import Header from "@/components/header";
import Link from "next/link";

export default function Dashboard() {
    return (
        <><Header /><div className="bg-black font-xl  mx-auto min-h-screen flex items-center justify-center font-bold font-mono text-7xl">


            <Link href='/buy' className=" w-1/3 p-20 border mx-auto flex justify-center items-center border-white shadow-md">
                Buy
            </Link>


            <Link href='/Sell' className=" w-1/3 p-20  flex justify-center items-center border border mx-auto border-white shadow-md">
                Sell
            </Link>


        </div></>
    )
}