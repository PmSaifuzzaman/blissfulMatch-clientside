import {List, ListItem, ListItemPrefix } from "@material-tailwind/react";

import { FaEdit, FaEye, FaHeart, FaPersonBooth, FaSignOutAlt, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="lg:max-w-7xl lg:mx-auto flex">
            <div className="basis-1/5 h-screen bg-pink-300 my-5">
                <List className="menu p-4 space-y-4">
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
                    <NavLink to="/dashboard/favourites">
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
                </List>
            </div>
            <div className="flex-1 ">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;