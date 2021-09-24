import React from "react";
import { useAuth } from "../../auth/auth-context";

const Profile = () => {
    const { logout } = useAuth();
    return (
        <div>
            <p>Profile</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile;
