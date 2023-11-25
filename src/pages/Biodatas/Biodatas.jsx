import { useEffect, useState } from "react";
import Navigationbar from "../../components/Navbar/Navbar";
import BiodataCard from "../shared/BiodataCard/BiodataCard";

import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";


const Biodatas = () => {

    const [biodatas, setBiodatas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/biodatas")
            .then(res => res.json())
            .then(data => setBiodatas(data))
    }, [])

    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);


    return (
        <div>
            <Navigationbar></Navigationbar>
            <div>
                <React.Fragment>
                    <div className="flex justify-center">
                        <Button onClick={openDrawer} variant="outlined" className="border-pink-400 text-pink-400 mb-5">Filter Profile</Button>
                    </div>
                    <Drawer open={open} onClose={closeDrawer} className="p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray">
                                Material Tailwind
                            </Typography>
                            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </IconButton>
                        </div>
                        <Typography color="gray" className="mb-8 pr-4 font-normal">
                            Material Tailwind features multiple React and HTML components, all
                            written with Tailwind CSS classes and Material Design guidelines.
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="sm" variant="outlined">
                                Documentation
                            </Button>
                            <Button size="sm">Get Started</Button>
                        </div>
                    </Drawer>
                </React.Fragment>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    biodatas.map(biodata => <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
                }
            </div>

        </div>
    );
};

export default Biodatas;