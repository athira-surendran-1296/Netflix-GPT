import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";

const Body = () => {

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

    return(
        <div className="bg-black">
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;