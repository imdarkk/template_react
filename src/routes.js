import React from "react";
import { Switch, Route } from "react-router-dom";

// Screens
import Login from "./assets/screens/Login";
import Profile from "./assets/screens/Profile";
import NotFound from "./assets/screens/404";

const UnprotectedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

const ProtectedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export {UnprotectedRoutes, ProtectedRoutes};
