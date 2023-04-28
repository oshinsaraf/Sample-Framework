import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

import Header from '@/components/header';

export default function FoodieHomePage() {

    return (
        <>
            <Head>
                <title>Delivro - Home</title>
            </Head>
            <Header />
            <div
                className="flex flex-col items-center justify-center min-h-screen"
            >
                <div className='flex flex-col items-center justify-center min-h-screen bg-black '>
                    <h1
                        className="text-5xl text-white mx-auto font-bold mb-8"
                    >
                        Welcome to Deliviro!
                    </h1>
                    <p
                        className="text-xl text-white text-center mb-8"
                    >
                        Order delicious meals from your favorite restaurants and have them delivered right to your doorstep. Browse through our menu to find the perfect meal for you.
                    </p>
                    <div
                        className="flex justify-center"
                    >
                        <Link href='/order'>
                            <button
                                className="bg-white text-gray-600 py-3 px-6 rounded-full shadow-lg transition duration-1000 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300"
                            >
                                View Menu
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
