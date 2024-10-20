import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Register from "../components/Register.jsx";
import Login from "../components/Login.jsx";
import {CartPage} from "../pages/cart/CartPage.jsx";
import {CheckoutPage} from "../pages/cart/CeckoutPage.jsx";
import SingleBook from "../pages/home/SingleBook.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/orders",
                element: <div>Orders</div>
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/checkout",
                element: <CheckoutPage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/books/:id",
                element: <SingleBook />
            }
        ]
    }
])

export default router;