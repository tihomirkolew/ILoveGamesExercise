import { Route, Routes } from "react-router"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/details/Details"
import CreateGame from "./components/createGame/CreateGame"
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout"
import EditGame from "./components/editGame/editGame"
import UserContext from "./components/contexts/UserContext"
import { useContext } from "react"

function App() {
    const { user } = useContext(UserContext);
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalog />} />
                <Route path="/games/:gameId/details" element={<Details user={user} />} />
                <Route path="/games/:gameId/edit" element={<EditGame />} />
                <Route path="/games/create" element={<CreateGame />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>

            <Footer />

        </>
    )
}

export default App
