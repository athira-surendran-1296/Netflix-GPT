import { useRef, useState } from "react";
import { BG_URL, DEFAULT_USER_AVTAR, DUMMY_PHOTO_URL } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/slices/userSlice";

const Login = () => {
    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMsg, setErrMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef('');

    const handleButtonClick = () => {
        setErrMsg(null);
        // email.current.value and password.current.value will get the values from refs

        /* Validate form data */
        const message = checkValidData(email?.current?.value, password?.current?.value, name?.current?.value);
        if(message !== null) {
            /* Form not valid, show error to the user */
            setErrMsg(message);
            return;
        }

        let authApi;
        if(!isSignInForm) {
            /* Sign Up logic */
            authApi = createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        } else {
            /* Sign In logic */
            authApi = signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        }

        authApi.then((userCredential) => {
            const user = userCredential.user;

            updateProfile(user, {
                displayName: name?.current.value, photoURL: DEFAULT_USER_AVTAR
            }).then(() => {
                // Profile updated!
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            }).catch((error) => {
                // An error occurred
                setErrMsg(error.message);
            });

            
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorCode + ' : ' + errorMessage);
        });
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div>
            <Header />
            <div className="absolute">
                <img className="" src={BG_URL} alt='Logo' />
            </div>
            <form onSubmit={ (e) => e.preventDefault() } 
                className="absolute p-10 flex-col mt-36 bg-black w-3/12 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="mb-7 font-bold text-3xl">
                    { isSignInForm ? 'Sign In' : 'Welcome!'}
                </h1>
                {!isSignInForm && <input ref={name}
                    type='text' 
                    placeholder="Full Name" 
                    className="mb-7 p-2 w-full bg-gray-700 rounded-md" />}
                <input ref={email}
                    type='text' 
                    placeholder="Email Address" 
                    className="mb-7 p-2 w-full bg-gray-700 rounded-md" />
                <input ref={password}
                    type='password' 
                    placeholder="Password" 
                    className="mb-7 p-2 w-full bg-gray-700 rounded-md" />
                <p className="mt-[-14px] mb-4 text-red-600 text-xs">{errMsg}</p>
                <button className="mb-7 p-3 bg-red-600 w-full rounded-md" onClick={handleButtonClick}>
                    { isSignInForm ? 'Sign In' : 'Sign Up' }
                </button>
                <p onClick={toggleSignInForm} className="text-sm cursor-pointer">
                    { isSignInForm ? 'New to Netflix? Sign Up Now': 'Already a registerd? Sign In now' }
                </p>
            </form>
        </div>
    )
}

export default Login;