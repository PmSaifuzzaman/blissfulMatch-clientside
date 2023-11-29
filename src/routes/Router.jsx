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
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Requests from "../pages/Dashboard/Requests/Requests";
import EditBiodata from "../pages/Dashboard/NormalUser/EditBiodata/EditBiodata";
import ContactUs from "../components/ContactUs/ContactUs";
import AboutUs from "../components/AboutUs/AboutUs";



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
        element: <PrivateRoute><Biodatas></Biodatas></PrivateRoute>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
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
        element: <PrivateRoute><BiodataDetails></BiodataDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`) 
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'favourites',
        element: <Favourites></Favourites>
      },
      {
        path: 'requests',
        element: <Requests></Requests>
      },
      {
        path: 'editBiodata/:email',
        element: <EditBiodata></EditBiodata>,
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params.email}`)
      },

      // Admin related route
      {
        path: "users",
        element: <ManageUsers></ManageUsers>
      }
      
    ]
  }
]);

export default router;