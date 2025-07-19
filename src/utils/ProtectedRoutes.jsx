import { useAtom } from "jotai";
import { Outlet, Navigate } from "react-router-dom";
import { currentPage, isLogin } from "../jotai/atoms";

const ProtectedRoutes = ({ isAuthenticated }) => {

    return isAuthenticated ? <Outlet /> :
        <Navigate to="/login" replace />
}

export default ProtectedRoutes