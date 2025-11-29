import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../contexts/UserContext";

export default function Logout() {
    const { logoutHandler } = useContext(UserContext);
    const navigate = useNavigate();

    logoutHandler()
        .then(() => { console.log('logged out') })
        .catch(alert('Problem with logout'))
        .finally(() => navigate('/'));

    return null;
}
