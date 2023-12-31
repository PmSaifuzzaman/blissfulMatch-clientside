import { Button, List, ListItem, ListItemPrefix, Spinner } from "@material-tailwind/react";

import { FaDashcube, FaDraftingCompass, FaEdit, FaEye, FaHeart, FaHome, FaPersonBooth, FaSign, FaSignOutAlt, FaUsers, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";




const Dashboard = () => {

    const { user, logOut } = useAuth()
    const email = user.email

    const [isAdmin, isAdminLoading] = useAdmin();

    if (isAdminLoading) {
        // Handle loading state...
        return <div>Loading... <Spinner></Spinner></div>;
    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast('Log out Successfully')
            })
            .catch(() => {
                toast('Cannot log out')
            })
    }

    return (
        <div className="lg:max-w-7xl lg:mx-auto flex">
            <div className="basis-1/5 h-full bg-pink-300 ">
                <List className="menu p-4 space-y-4">
                    <NavLink to={"/"}>
                        <ListItem>
                            <ListItemPrefix><FaHome></FaHome></ListItemPrefix>
                            Home
                        </ListItem>
                    </NavLink>
                    {
                        isAdmin ?
                            <>
                                <NavLink to={'/dashboard/adminDashboard'}>
                                    <ListItem>
                                        <ListItemPrefix><FaDashcube></FaDashcube></ListItemPrefix>
                                        Admin Dashboard
                                    </ListItem>
                                </NavLink>
                                <NavLink to={'/dashboard/users'}>
                                    <ListItem>
                                        <ListItemPrefix><FaUsers></FaUsers></ListItemPrefix>
                                        Manage user
                                    </ListItem>
                                </NavLink>
                                <NavLink to={'/dashboard/approvedPremium'}>
                                    <ListItem>
                                        <ListItemPrefix><FaSign></FaSign></ListItemPrefix>
                                        Approved Premium
                                    </ListItem>
                                </NavLink>
                                <NavLink to={'/dashboard/approve-contact-request'}>
                                    <ListItem>
                                        <ListItemPrefix><FaHeart></FaHeart></ListItemPrefix>
                                        Approved Contact requests
                                    </ListItem>
                                </NavLink>
                                <Button className="bg-transparent" onClick={handleLogOut}>
                                    <ListItem>
                                        <ListItemPrefix><FaSignOutAlt></FaSignOutAlt></ListItemPrefix>
                                        Log out
                                    </ListItem>
                                </Button>
                            </>
                            :
                            <>
                                <NavLink to={`/dashboard/editBiodata/${email}`}>
                                    <ListItem>
                                        <ListItemPrefix><FaEdit></FaEdit></ListItemPrefix>
                                        Edit biodata
                                    </ListItem>
                                </NavLink>
                                <NavLink to={`/dashboard/viewBiodata/${email}`}>
                                    <ListItem>
                                        <ListItemPrefix><FaEye></FaEye></ListItemPrefix>
                                        View Biodata
                                    </ListItem>
                                </NavLink>
                                <NavLink to="/dashboard/requests">
                                    <ListItem >
                                        <ListItemPrefix><FaPersonBooth></FaPersonBooth></ListItemPrefix>
                                        My Contact Requests
                                    </ListItem>
                                </NavLink>
                                <NavLink to="/dashboard/favourites">
                                    <ListItem>
                                        <ListItemPrefix><FaHeart></FaHeart></ListItemPrefix>
                                        Favourites Biodata
                                    </ListItem>
                                </NavLink>
                                <NavLink to="/dashboard/rate">
                                    <ListItem>
                                        <ListItemPrefix><FaDraftingCompass></FaDraftingCompass></ListItemPrefix>
                                        Success Story
                                    </ListItem>
                                </NavLink>

                                <Button className="bg-transparent" onClick={handleLogOut}>
                                    <ListItem>
                                        <ListItemPrefix><FaSignOutAlt></FaSignOutAlt></ListItemPrefix>
                                        Log out
                                    </ListItem>
                                </Button>
                            </>
                    }

                </List>
            </div>
            <div className="flex-1 mx-5 p-5">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;