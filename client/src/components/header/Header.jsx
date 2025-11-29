import { Link } from "react-router";

export default function Header() {
    
    return (
        <header>
            <nav>
                <Link className="home" to="/"> <img src="./images/logo.png" alt="logo" /> </Link>
                <Link to="/games">Catalog</Link>
                <div id="user">
                    <Link to="/games/create">Add Game</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>

    );
}
