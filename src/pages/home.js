import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

import Header from '@/components/header';

export default function FoodieHomePage() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-black">
                <div className="flex flex-col items-center justify-center text-center px-4 py-8 lg:p-0">
                    <h1 className="text-4xl lg:text-5xl text-white font-bold mb-4">
                        Welcome to our Website!
                    </h1>
                    <p className="text-lg lg:text-xl text-white mb-8">
                        Buy or Sell your Airpods Here!
                    </p>
                    <div className="flex justify-center">
                        <Link href="/dashboard">
                            <button className="bg-white text-gray-600 py-3 px-6 rounded-full shadow-lg transition duration-1000 hover:bg-yellow-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300">
                                Buy/sell
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
