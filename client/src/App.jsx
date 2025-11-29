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
import UserContext from "./components/contexts/UserContext"
import useRequest from "./hooks/useRequest"

function App() {
    const [user, setUser] = useState(null);
    const { request } = useRequest();

    const registerHandler = async (email, password) => {
        const newUser = { email, password };

        // todo register api call
        const result = await request('/users/register', 'POST', newUser);

        console.log(result);

        // login user after registration
        setUser(result);
    }

    const loginHandler = async (email, password) => {
        const result = await request('/users/login', 'POST', {email, password})
        console.log(result);
        
        setUser(result);
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
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
            </Routes>

            <Footer />

        </UserContext.Provider>
    )
}

export default App
