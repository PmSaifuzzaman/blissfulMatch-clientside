import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";

import { FaDashcube, FaEdit, FaEye, FaHeart, FaHome, FaPersonBooth, FaSign, FaSignOutAlt, FaUser, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;

    return (
        <div className="lg:max-w-7xl lg:mx-auto flex">
            <div className="basis-1/5 h-screen bg-pink-300 my-5">
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
                                <NavLink>
                                    <ListItem>
                                        <ListItemPrefix><FaDashcube></FaDashcube></ListItemPrefix>
                                        Admin Dashboard
                                    </ListItem>
                                </NavLink>
                                <NavLink to={'/dashboard/users'}>
                                    <ListItem>
                                        <ListItemPrefix><FaUser></FaUser></ListItemPrefix>
                                        Manage user
                                    </ListItem>
                                </NavLink>
                                <NavLink>
                                    <ListItem>
                                        <ListItemPrefix><FaSign></FaSign></ListItemPrefix>
                                        Approved Premium
                                    </ListItem>
                                </NavLink>
                                <NavLink  >
                                    <ListItem>
                                        <ListItemPrefix><FaHeart></FaHeart></ListItemPrefix>
                                        Approved Contact requests
                                    </ListItem>
                                </NavLink>
                                <NavLink>
                                    <ListItem>
                                        <ListItemPrefix><FaSignOutAlt></FaSignOutAlt></ListItemPrefix>
                                        Log out
                                    </ListItem>
                                </NavLink>
                            </>
                            :
                            <>
                                <NavLink>
                                    <ListItem>
                                        <ListItemPrefix><FaEdit></FaEdit></ListItemPrefix>
                                        Edit biodata
                                    </ListItem>
                                </NavLink>
                                <NavLink>
                                    <ListItem>
                                        <ListItemPrefix><FaEye></FaEye></ListItemPrefix>
                                        View Biodata
                                    </ListItem>
                                </NavLink>
                                <NavLink>
                                    <ListItem>
                                        <ListItemPrefix><FaPersonBooth></FaPersonBooth></ListItemPrefix>
                                        My Contact Requests
                                    </ListItem>
                                </NavLink>
                                <NavLink to="/dashboard/favourites" activeClassName="active-link">
                                    <ListItem>
                                        <ListItemPrefix><FaHeart></FaHeart></ListItemPrefix>
                                        Favourites Biodata
                                    </ListItem>
                                </NavLink>
                                <NavLink>
                                    <ListItem>
                                        <ListItemPrefix><FaSignOutAlt></FaSignOutAlt></ListItemPrefix>
                                        Log out
                                    </ListItem>
                                </NavLink>
                            </>
                    }

                </List>
            </div>
            <div className="flex-1 m-10 p-10">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;