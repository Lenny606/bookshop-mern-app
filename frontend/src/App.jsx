import './App.css'
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App() {

    return (
        <>
            <NavBar/>
            <main className={'min-h-screen max-w-screen px-4 py-6 mx-auto font-primary'}>
                <Outlet/>
            </main>
            <footer>Footer</footer>
        </>
    )
}

export default App
