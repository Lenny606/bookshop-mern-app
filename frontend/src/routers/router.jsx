import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";

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
                element: <div>Cart</div>
            },
            {
                path: "/checkout",
                element: <div>Checkout</div>
            }
        ]
    }
])

export default router;