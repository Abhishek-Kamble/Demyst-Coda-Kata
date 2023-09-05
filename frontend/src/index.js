import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";
import Outcome from "./components/Outcome/Outcome";
import Error from "./components/Error/Error";

const user = await JSON.parse(localStorage.getItem("profile"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/balance-sheet",
        element: <BalanceSheet />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: user ? <Dashboard /> : <Navigate to="/sign-in" />,
      },
      {
        path: "/outcome",
        element: user ? <Outcome /> : <Navigate to="/sign-in" />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
