import { createBrowserRouter } from "react-router-dom";
// import Home from "../components/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./components/home";
import ProtectedRoute from "./components/home/ProtectedRoute/ProtectedRoute";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
