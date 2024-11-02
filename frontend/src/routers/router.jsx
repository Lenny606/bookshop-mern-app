import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Register from "../components/Register.jsx";
import Login from "../components/Login.jsx";
import {CartPage} from "../pages/cart/CartPage.jsx";
import {CheckoutPage} from "../pages/cart/CeckoutPage.jsx";
import SingleBook from "../pages/home/SingleBook.jsx";
import {PrivateRoute} from "./PrivateRoute.jsx";
import OrdersPage from "../pages/home/OrdersPage.jsx";
import {AdminRoute} from "./AdminRoute.jsx";
import AdminLogin from "../components/AdminLogin.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/orders",
                element: <PrivateRoute><OrdersPage/></PrivateRoute>
            },
            {
                path: "/cart",
                element: <CartPage/>
            },
            {
                path: "/checkout",
                element: <PrivateRoute><CheckoutPage/></PrivateRoute> //protected route
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/books/:id",
                element: <SingleBook/>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLogin />
    },
    {
        path: "/dashboard",
        element: <AdminRoute><div>Dashboard</div></AdminRoute>,
        children: [
            {
                path: "",
                element: <AdminRoute>
                    <div>Dashboard Menu</div>
                </AdminRoute>
            },
            {
                path: "create-book",
                element: <AdminRoute> <div>Create</div>
                </AdminRoute>
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute>
                    <div>Edit</div>
                </AdminRoute>
            },
            {
                path: "manage-books",
                element: <AdminRoute>
                    <div>Manage</div>
                </AdminRoute>
            }
        ]
    }
])

export default router;