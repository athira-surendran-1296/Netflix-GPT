import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Error from "./Error";

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path: '/error',
            element: <Error />
        },
    ]);

    useEffect(() => {
        /** This API is provided by firebase and it acts like a event listener,
         * called when auth state changes (sign in / sign out). 
         * We need to execute this only once and hence we have used empty dependency array 
        * */
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL})); 
            } else {
                // User is signed out
                dispatch(removeUser());
            }
            });
    }, []);

    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;