import React from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import StatementPage from "./Pages/Statement";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import WithdrawalRequest from "./Pages/Withdrawal";
import { verify } from "./utils/Authentication/login";
import MerchantAccountDetail from "./Pages/MerchantAccountDetail";
import Cookies from "js-cookie"
import { AuthProvider } from "./utils/AuthProvider";
import DepositHistory from "./Pages/DepositHistory";
import MerchantInformation from "./Pages/MerchantAccountInfo";
import WithdrawalHistory from "./Pages/WithdrawalHistory";



const router = createBrowserRouter([
  {
    element: <SignIn />,
    path: "/login"
  },
  {
    element: <ProtectedRoutes />,
    children:
      [
        {
          element: <Home />,
          path: "/"
        },
        {
          element: <StatementPage />,
          path: "/statement"
        },
        {
          element: <WithdrawalRequest />,
          path: "/wd"
        },
        {
          element: <MerchantAccountDetail />,
          path: "/account"
        },
        {
          element: <DepositHistory />,
          path: "/deposit"
        },
        {
          element: <MerchantInformation />,
          path: "/info"
        },
        {
          element: <WithdrawalHistory />,
          path: "/withdrawal"
        }
      ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode >,
)