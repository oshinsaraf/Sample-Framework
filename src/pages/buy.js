import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useState , useEffect } from "react";
import { firebaseApp } from './firebase';
import { getAuth } from 'firebase/auth';
import Header from "@/components/header";

const Buy = () => {
    const [sellItems, setSellItems] = useState([]);

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
                console.log(sellItemsArray)
            } else {
                setSellItems([]);
            }
        });
    }, []);

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
    

    return (
        <>
            <Header />
            <div className="max-w-2xl mx-auto py-8 text-black rounded-lg shadow-lg">
            
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
                                    <p className="text-sm font-bold text-white">Owner Details:- </p>
                                    <p className="text-sm font-bold text-white">{item.name}</p>
                                    <p className="text-sm font-bold text-white">{item.email}</p>
                                </div>
                                <div className="mt-2 flex justify-between items-center">
                                    <p className="text-sm font-bold text-white">{item.address} </p>
                                    <p className="text-sm font-bold text-white">{item.phone} </p>

                                </div>
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-4 rounded">
                                    Buy
                                </button>
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
