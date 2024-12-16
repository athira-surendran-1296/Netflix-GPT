import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/store/slices/userSlice";
import { toggleGptSearchView } from "../utils/store/slices/gptSlice";
import { setLanguage } from "../utils/store/slices/appConfigSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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

    const handleGptSearchClick = () => {
        // Toggle GPT Search
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(setLanguage(e.target.value));
    };

    return(
        <div className="bg-black md:bg-transparent w-full absolute px-4 md:px-8 py-0 md:py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <div>
                <img className="h-full w-44" src={LOGO} alt="logo" />
            </div>
            {user && <div className="flex justify-end md:justify-between w-full">
                <button className="md:border border-white bg-black text-white p-0 md:p-1 md:px-4 m-2 my-4 rounded-md" onClick={handleGptSearchClick}>
                    { showGptSearch ? 'Home' : 'GPT Search' }
                </button>
                <div className="flex gap-2 p-3">
                    {showGptSearch && <select className="bg-black text-white  p-1 m-2 rounded-md" onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map(language => 
                            <option key={language.id} value={language.id}>{language.name}</option>)}
                    </select>}
                    <img className="hidden md:block w-12 rounded-md" src={user?.photoURL} alt="logo" />
                    <button className="md:border border-white bg-black text-white p-0 md:p-1 md:px-4 m-2 rounded-md" onClick={handleSignout}>
                        Sign Out
                    </button>
                </div>
            </div>}
        </div>
    )
}

export default Header;