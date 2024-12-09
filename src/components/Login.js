import { useState } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div>
            <Header />
            <div className="absolute">
                <img className="" src={BG_URL} alt='Logo' />
            </div>
            <form className="absolute p-10 mt-36 bg-black w-3/12 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    { isSignInForm ? 'Sign In' : 'Welcome!'}
                </h1>
                {!isSignInForm && <input 
                    type='text' 
                    placeholder="Full Name" 
                    className="p-2 m-3 w-full bg-gray-700" />}
                <input 
                    type='text' 
                    placeholder="Email Address" 
                    className="p-2 m-3 w-full bg-gray-700" />
                <input 
                    type='password' 
                    placeholder="Password" 
                    className="p-2 m-3 w-full bg-gray-700" />
                <button className="p-3 mt-3 mx-3 bg-red-600 w-full">
                    { isSignInForm ? 'Sign In' : 'Sign Up' }
                </button>
                <p onClick={toggleSignInForm} className="mt-3 mx-3 text-sm cursor-pointer">
                    { isSignInForm ? 'New to Netflix? Sign Up Now': 'Alreay a registerd? Sign In now' }
                </p>
            </form>
        </div>
    )
}

export default Login;