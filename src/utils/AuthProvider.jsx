import { createContext, useContext, useEffect, useState } from "react";
import { verify } from "./Authentication/login";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(null)

    const isLogin = async () => {

        //console.log(Cookies.get());

        const veri = await verify()

        if (veri.data.status === 200) {
            return true
        } else {
            return false
        }
    }


    useEffect(() => {
        const checkLogin = async () => {
            const loggedIn = await isLogin()
            setAuthenticated(loggedIn)
        }
        checkLogin()
    }, [])

    return (<AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);