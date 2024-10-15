import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <div>Home</div>
            },
            {
                path: "/about",
                element: <div>about</div>
            },
            {
                path: "/orders",
                element: <div>Orders</div>
            }
        ]
    }
])

export default router;