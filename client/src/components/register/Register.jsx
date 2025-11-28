import { useNavigate } from "react-router";

export default function Register({
    onRegister,
}) {

    const navigate = useNavigate();
    // get form data
    // post request to server

    const registerSubmit = (e) => {        
        const email = e.get('email');
        const password = e.get('password')
        const confirmPassword = e.get('confirm-password');

        if (!email || !password) {
            return alert('Email and password are required!');
        }
        if (password !== confirmPassword) {
            alert("Passwords don't match")
        }
        
        try {
            onRegister(email, password);
            navigate('/');
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <>
            <section id="register-page" className="content auth">
                <form id="register" action={registerSubmit}>
                    <div className="container">
                        <div className="brand-logo"></div>
                        <h1>Register</h1>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" />

                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password" placeholder="Password" />

                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder="Repeat Password" />

                        <input className="btn submit" type="submit" value="Register" />
                    </div>
                </form>
            </section>
        </>
    );
}
