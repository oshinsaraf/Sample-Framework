import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useState, useEffect } from "react";
import { firebaseApp } from './firebase';
import { getAuth } from 'firebase/auth';
import { auth } from '../pages/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from "@/components/header";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


const Buy = () => {
    const [sellItems, setSellItems] = useState([]);
    const [filterAsc, setFilterAsc] = useState(true);

    useEffect(() => {
        const db = getDatabase();
        const sellItemsRef = ref(db, 'users');

        onValue(sellItemsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const users = Object.values(data);
                const sellItemsArray = [];

                users.forEach(user => {
                    const sellItems = user.sellItems;
                    if (sellItems) {
                        Object.values(sellItems).forEach(item => {
                            sellItemsArray.push(item);
                        });
                    }
                });

                setSellItems(sellItemsArray);
            } else {
                setSellItems([]);
            }
        });
    }, []);

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


    const handleDelete = (cartItemKey) => {
        const db = getDatabase(firebaseApp);
        const auth = getAuth(firebaseApp);
        const user = auth.currentUser;
        if (!user) {
            // User not authenticated
            return;
        }
        const cartItemRef = ref(db, `users/${user.uid}/sellItems/${cartItemKey}`);

        // Remove the item from the database
        remove(cartItemRef);

        // Remove the item from the sellItems array in the component state
        const updatedSellItems = sellItems.filter((item) => item.cartItemKey !== cartItemKey);
        setSellItems(updatedSellItems);
    };

    const handleFilter = () => {
        const sortedSellItems = sellItems.slice().sort((a, b) => {
            if (filterAsc) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        setSellItems(sortedSellItems);
        setFilterAsc(!filterAsc);
    };

    if (!user) {

        return (
            <div className="min-h-screen bg-black font-bold text-yellow-500 text-7xl flex items-center justify-center ">
                Please Login Before Accessing this page

            </div>
        );
    }
    

    return (
        <>
            <Header />
            <div className="max-w-2xl mx-auto py-8 text-black rounded-lg shadow-lg">
                <div className="flex justify-end">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={handleFilter}>
                        {filterAsc ? "Sort by Price (Low to High)" : "Sort by Price (High to Low)"}
                    </button>
                </div>

                {sellItems.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {sellItems.map((item) => (
                            <div key={item.id} className="py-4">
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-bold text-white">{item.title}</h2>
                                    <p className="text-lg font-bold text-right text-yellow-500">{item.price} Rs</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                <div className="mt-2 flex justify-between items-center">
                                    <p className="text-sm font-bold text-white">{item.name}</p>
                                    <p className="text-sm font-bold text-white">{item.email}</p>
                                </div>
                                <div className="mt-2 flex justify-between items-center">
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-4 rounded"
                                        onClick={() => handleBuy(item)}
                                    >
                                        Buy
                                    </button>
                                    <p className="text-sm font-bold text-white">{item.price} Rs</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>No items available for sale</p>
                )}
            </div>

        </>
    );
};

export default Buy;