import Link from 'next/link';
import { auth } from '../pages/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react'



const Header = () => {

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

    return (
        <div className="flex items-center justify-between py-4 px-4 sm:px-8 bg-black">
            <Link href='/home' className="flex items-center">
                Airpods
            </Link>
            <div className='flex gap-4'>
                {!user && <Link href='/signin'>
                    <p className=" hover:bg-purple-600 transition duration-1000 text-white py-2 px-4 rounded-lg">
                        Sign In
                    </p>
                </Link>}
                {user && <Link href='/profile'>
                    <p className=" hover:bg-purple-600 transition duration-1000 text-white py-2 px-4 rounded-lg">
                        Profile
                    </p>
                </Link>}
                {user && <Link href='/dashboard'>
                    <p className=" hover:bg-purple-600 transition duration-1000 text-white py-2 px-4 rounded-lg">
                        Dashboard
                    </p>
                </Link>}
                {user && <button onClick={() => auth.signOut()} className='mx-auto py-2 px-4 items-center justify-center flex  hover:bg-purple-600   text-white rounded-lg shadow-lg transition duration-1000 ease-out'>Sign Out</button>}

            </div>

        </div>

    );
};

export default Header;
