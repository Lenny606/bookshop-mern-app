import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        component: <App/>,
    }
])

export default router;