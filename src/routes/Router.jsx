import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Biodatas from "../pages/Biodatas/Biodatas";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/biodatas",
          element: <Biodatas></Biodatas>
        },
        {
          path: "/login",
          element: <Login></Login>
      },
      {
          path: "/register",
          element: <Register></Register>
      }
      ],
    },
  ]);

export default router;