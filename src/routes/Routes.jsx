import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authencation/Login";
import Register from "../pages/Authencation/Register";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import ErrorPage from "../pages/ErrorPage";
import MyBookings from "../pages/MyBookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/rooms`)
            },
            {
                path: '/rooms',
                element: <PrivateRoute><Rooms /></PrivateRoute>,
            },
            {
                path: '/my-bookings',
                element: <PrivateRoute><MyBookings /></PrivateRoute>,
            },
            {
                path: '/room/:id',
                element: <RoomDetails />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/room/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;