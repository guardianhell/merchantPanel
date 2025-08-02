import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider"
import { useEffect, useState } from "react";
import { verify } from "./Authentication/login";



// const ProtectedRoutes = () => {

//     const location = useLocation()

//     const [isAuthenticated, setIsAuthenticated] = useState(null)

//     const isLogin = async () => {
//         const veri = await verify()
//         if (veri.data.status === 200) {
//             console.log("VALID");

//             setIsAuthenticated(true)
//             return true
//         } else {
//             return false
//         }
//     }


//     useEffect(async () => {
//         isLogin()
//     }, [location.pathname])

//     console.log(isAuthenticated);


//     return isAuthenticated ? <Outlet /> :
//         <Navigate to="/login" replace />
// }


const ProtectedRoutes = () => {

    const { authenticated } = useAuth()


    if (authenticated === null) {
        return <div>Checking auth...</div>; // atau spinner
    }

    return authenticated ? <Outlet /> : <Navigate to="/login" replace />;

}



export default ProtectedRoutes