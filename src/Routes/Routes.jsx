import {
    createBrowserRouter,
} from "react-router";

import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Blogs from "../pages/Blogs/Blogs";
import LawyersDetails from "../pages/LawyersDetails/LawyersDetails";
import MyBookings from "../pages/MyBookings/MyBookings";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "blogs",
                loader: () => fetch("blogsData.json"),
                Component: Blogs
            },
            {
                path:"lawyerDetails/:Id",
                loader: () => fetch("/lawyersData.json"),
                Component: LawyersDetails
            },
            {
                path:"my-bookings",
                loader: () => fetch("/lawyersData.json"),
                Component: MyBookings
            },
            {
                path: "*",
                Component: Error,
            }
        ]
    },
]);

export default router;