import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Biodatas from "../pages/Biodatas/Biodatas";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BiodataDetails from "../pages/shared/BiodataDetails/BiodataDetails";
import Dashboard from "../layouts/Dashboard";
import Favourites from "../pages/Dashboard/Favourites/Favourites";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "/details/:id",
        element: <BiodataDetails></BiodataDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`) 
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'favourites',
        element: <Favourites></Favourites>
      }
    ]
  }
]);

export default router;