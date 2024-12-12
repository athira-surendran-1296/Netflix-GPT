import { DEFAULT_USER_LOGO, LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/store/slices/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        /** This API is provided by firebase and it acts like a event listener,
         * called when auth state changes (sign in / sign out). 
         * We need to execute this only once and hence we have used empty dependency array.
         * 
         * This onAuthStateChanged should be placed in a place where that component will 
         * be always present through out our app, hence this logic is moved to header
         * 
         * Header will be there in all screens.
         * 
         * onAuthStateChanged returns a function that needs to be called to unsubscribe it
         * we can call it in the return fn of our use effect where we do clean up
        * */
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                navigate('/browse');
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/') 
            }
        });

        // Clean up
        return () => {
            unsubscribe();
        }
    }, []);


    const handleSignout = () => {
        signOut(auth).then(() => {
            /* Sign-out successful */

        }).catch((error) => {
            /* An error happened */
            navigate('/error');
        });
    };

    return(
        <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <div>
                <img className="w-44" src={LOGO} alt="logo" />
            </div>
            {user && <div className="flex gap-2 p-3">
                <img className="w-12 rounded-md" src={user?.photoURL} alt="logo" />
                <button className="border border-white bg-black text-white p-1 px-4 m-2 rounded-md" onClick={handleSignout}>
                    Sign Out
                </button>
            </div>}
        </div>
    )
}

export default Header;