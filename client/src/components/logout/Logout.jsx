import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import UserContext from "../contexts/UserContext";

export default function Logout() {
    const { logoutHandler } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        logoutHandler()
            .then(() => { console.log('logged out') })
            .finally(() => navigate('/'));
    }, [])


    return null;
}
