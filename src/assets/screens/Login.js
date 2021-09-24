import React from "react";
import { useAuth } from "../../auth/auth-context";

const Login = () => {
    const { login } = useAuth();
    return (
        <div>
            <p>Login</p>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;
