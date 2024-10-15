import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        component: <App/>,
        children: [
            {
                path: "/",
                element: <div>Home</div>
            }
        ]
    }
])

export default router;