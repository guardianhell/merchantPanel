import React from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import CurrencyForm from "./Pages/Currency";
import MerchantPage from "./Pages/MerchantRegistration";
import MerchantBankPage from "./Pages/MerchantBank";




const router = createBrowserRouter([

  {
    element: <Home />,
    path: "/"
  },
  {
    element: <SignIn />,
    path: "/login"
  },
  {
    element: <CurrencyForm/>,
    path: "/currency"
  },
  {
    element: <MerchantPage/>,
    path: "/merchant"
  },
  {
    element:<MerchantBankPage/>,
    path: "/merchant/bank"
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode >,
)