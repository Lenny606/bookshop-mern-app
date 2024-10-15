import './App.css'
import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
      <nav>NAvBAR</nav>
        <main className={'min-h-screen'}>
            <Outlet/>
        </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
