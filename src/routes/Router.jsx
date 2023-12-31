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
import ViewBiodata from "../pages/Dashboard/NormalUser/ViewBiodata/ViewBiodata";
import ApprovedPremium from "../pages/Dashboard/Admin/ApprovedPremium/ApprovedPremium";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard/AdminDashboard";

import Payment from "../pages/Payment/Payment";
import ApprovedContactRequests from "../pages/Dashboard/Admin/ApprovedContactRequsts/ApprovedContactRequests";
import SubmitRatings from "../components/SubmitRatings/SubmitRatings";



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
        path: 'checkOut/:id',
        element: <Payment></Payment>,
        
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><BiodataDetails></BiodataDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://blissful-match-server.vercel.app/details/${params.id}`)
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
        loader: ({ params }) => fetch(`https://blissful-match-server.vercel.app/users/${params.email}`)
      },
      {
        path: 'viewBiodata/:email',
        element: <ViewBiodata></ViewBiodata>,
        loader: ({ params }) => fetch(`https://blissful-match-server.vercel.app/users/viewBiodata/${params.email}`)

      },
      {
        path: 'rate',
        element: <SubmitRatings></SubmitRatings>
      },
      

      // Admin related route
      {
        path: "users",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "approvedPremium",
        element: <ApprovedPremium></ApprovedPremium>
      },
      {
        path:'approve-contact-request',
        element:<ApprovedContactRequests></ApprovedContactRequests>
      },

      {
        path: "adminDashboard",
        element: <AdminDashboard></AdminDashboard>
      }

    ]
  }
]);

export default router;