import { Route, Routes } from "react-router"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/details/Details"
import CreateGame from "./components/createGame/CreateGame"
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import { useState } from "react"
import Logout from "./components/logout/Logout"
import EditGame from "./components/editGame/editGame"
import request from "./utils/request"
import UserContext from "./components/contexts/UserContext"

function App() {
    const [user, setUser] = useState(null);

    const registerHandler = async (email, password) => {
        const newUser = { email, password };

        // todo register api call
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        const result = await response.json()

        console.log(result);
        
        // login user after registration
        setUser(newUser);
    }

    const loginHandler = (email, password) => {
        if (!user) {
            throw new Error('Invalid email or password');
        }

        setUser(user);
    }
    const logoutHandler = () => {
        setUser(null);
    }

    const userContextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        registerHandler,
        loginHandler,
        logoutHandler,
    }

    return (
        <UserContext.Provider value={userContextValues}>
            <Header user={user} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalog />} />
                <Route path="/games/:gameId/details" element={<Details user={user} />} />
                <Route path="/games/:gameId/edit" element={<EditGame />} />
                <Route path="/games/create" element={<CreateGame />} />
                <Route path="/register" element={<Register onRegister={registerHandler} />} />
                <Route path="/login" element={<Login onLogin={loginHandler} />} />
                <Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
            </Routes>

            <Footer />

        </UserContext.Provider>
    )
}

export default App
