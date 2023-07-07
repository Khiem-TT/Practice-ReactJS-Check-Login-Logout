import {useState} from 'react'
import './App.css'
import Home from "./components/Home.jsx";

function App(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogIn = () => {
        setIsLoggedIn(true);
    }
    const handleLogOut = () => {
        setIsLoggedIn(false);
    }
    if (isLoggedIn) return <Home onLogOut={handleLogOut}/>
    return (
        <div>
            <h1>Please log in</h1>
            <button onClick={handleLogIn}>Log in</button>
        </div>
    )
}

export default App
