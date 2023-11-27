import { Collapse } from '@material-tailwind/react';
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Badge,
} from "@material-tailwind/react";
import React, { useContext } from "react";

import logo from "../../assets/images/logo/logo-1.gif"
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { FaCartArrowDown } from "react-icons/fa";
import useFavourites from '../../hooks/useFavourites';



const Navigationbar = () => {

    const [openNav, setOpenNav] = React.useState(false);

    const[favourites] = useFavourites();

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    // Access Context api
    const { logOut, user } = useContext(authContext);

    const email = user ? user.email : null;
    console.log(email)

    const auth = getAuth()

    // Log out messege
    const handleLogOut = () => {
        logOut(auth)
            .then(() => {
                toast('Log out Successfully')
            })
            .catch(() => {
                toast('Cannot log out')
            })
    }


    const navList = (
        <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="pink"
                className="p-1 font-normal"
            >
                <NavLink to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-pink-400 underline font-medium" : ""
                    }>
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="pink"
                className="p-1 font-normal"
            >
                <NavLink to="/biodatas"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-pink-400 underline font-medium" : ""
                    }>
                    Biodatas
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="pink"
                className="p-1 font-normal"
            >
                <NavLink to="/aboutUs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-pink-400 underline font-medium" : ""
                    }>
                    About Us
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="pink"
                className="p-1 font-normal"
            >
                <NavLink to="/contactUs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-pink-400 underline font-medium" : ""
                    }>
                    Contact Us
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="pink"
                className="p-1 font-normal"
            >
                <NavLink>
                    <Badge content={favourites.length}>
                        <Button className="p-3 rounded-full bg-blue-gray-50"><FaCartArrowDown className="text-2xl text-pink-400"></FaCartArrowDown></Button>
                    </Badge>
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <div className=" ">
            <Navbar className="  top-0 z-10 backdrop-blur-none shadow-none  max-w-7xl mx-auto bg-transparent border-none rounded-none px-4 py-2 lg:px-8">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <img className="w-24" src={logo} alt="" />
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>


                        {
                            user ? <Button onClick={handleLogOut}
                                color="pink"
                                size="sm"
                                className="hidden lg:inline-block">LogOut</Button>
                                :
                                <Link to={'/login'}>
                                    <Button
                                        size="sm"
                                        className="hidden lg:inline-block bg-pink-400"
                                    >
                                        <span>Sign in</span>
                                    </Button>
                                </Link>
                        }




                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>

                <Collapse open={openNav}>
                    {navList}
                    {
                        user ? <Button onClick={handleLogOut}
                            fullWidth color="pink" size="sm" className="">LogOut</Button> :

                            <Link to={"/login"}>
                                <Button fullWidth color="pink" size="sm" className="">
                                    <span>Sign in</span>
                                </Button>
                            </Link>
                    }
                </Collapse>

            </Navbar>
        </div>
    );
};

export default Navigationbar;