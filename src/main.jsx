import React from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import CurrencyForm from "./Pages/Currency";
import MerchantPage from "./Pages/MerchantRegistration";
import MerchantBankPage from "./Pages/MerchantBank";
import PaymentGatewayRegistration from "./Pages/PaymentGateway";
import RegisterPaymentGatewayChannel from "./Pages/PaymentGatewayChannel";
import RegisterPaymentChannel from "./Pages/PaymentChannel";
import AddMerchantPaymentChannel from "./Pages/MerchantPaymentChannel";
import MerchantList from "./Pages/MerchantList";
import CurrencyList from "./Pages/CurrencyList";
import MerchantDetail from "./Pages/MerchantDetail";
import PaymentChannelList from "./Pages/PaymentChannelList";
import PaymentGatewayChannelList from "./Pages/PaymentGatewayChannelList";
import StatementPage from "./Pages/Statement";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import WithdrawalRequest from "./Pages/Withdrawal";
import { verify } from "./utils/Authentication/login";

const isLogin = async () => {
  const veri = await verify()

  if (veri.data.status === 200) {
    return true
  } else {
    return false
  }


}



const router = createBrowserRouter([
  {
    element: <SignIn />,
    path: "/login"
  },


  {
    element: <ProtectedRoutes isAuthenticated={await isLogin()} />,
    children:
      [
        {
          element: <Home />,
          path: "/"
        },
        {
          element: <CurrencyForm />,
          path: "/currency"
        },
        {
          element: <CurrencyList />,
          path: "/currency/list"
        },
        {
          element: <MerchantPage />,
          path: "/merchant"
        },
        {
          element: <MerchantBankPage />,
          path: "/merchant/bank"
        },



        {
          element: <PaymentGatewayRegistration />,
          path: "/pg"
        },
        {
          element: <RegisterPaymentGatewayChannel />,
          path: "/pg/channel"
        },
        {
          element: <PaymentGatewayChannelList />,
          path: "/pg/channel/list"
        },
        {
          element: <RegisterPaymentChannel />,
          path: "/psp"
        },
        {
          element: <PaymentChannelList />,
          path: "/psp/list"
        },
        {
          element: <MerchantList />,
          path: "/merchant/list"
        },
        {
          element: <MerchantDetail />,
          path: "/merchant/detail"
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
          element: <AddMerchantPaymentChannel />,
          path: "/merchant/payment-channel"
        }
      ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode >,
)