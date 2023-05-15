import { createBrowserRouter } from "react-router-dom";
import { Login, Home } from "../pages";

export const router = createBrowserRouter([
  //todo memo render
  {
    path: "/",
    element: "Signup",
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
