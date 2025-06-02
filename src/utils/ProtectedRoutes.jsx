import { useAtom } from "jotai";
import { Outlet, Navigate } from "react-router-dom";
import { isLogin } from "../jotai/atoms";

const ProtectedRoutes = () => {


    const [isUserLogin, setIsLogin] = useAtom(isLogin)

    const user = isUserLogin

    return user ? <Outlet /> : <Navigate to={"/login"} />

}

export default ProtectedRoutes