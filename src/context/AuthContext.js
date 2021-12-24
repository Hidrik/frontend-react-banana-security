import React, {createContext, useState} from 'react';
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const history = useHistory()

    function login() {
        console.log('De gebruiker is ingelogd')
        toggleIsAuth(true)
        history.push('/profile')
    }

    function logout() {
        console.log('De gebruiker is uitgelogd')
        toggleIsAuth(false)
        history.push('/')
    }

    const data = {
        isAuth : isAuth,
        loginFunction : login,
        logoutFunction : logout,
    }

    return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
)}

export default AuthContextProvider;