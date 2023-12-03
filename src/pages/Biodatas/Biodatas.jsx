import { useEffect, useState } from "react";
import Navigationbar from "../../components/Navbar/Navbar";
import BiodataCard from "../shared/BiodataCard/BiodataCard";



import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    Select,
    Option,
} from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Biodatas = () => {
    const itemsPerPage = 9;

    // const [filterGender, setFilterGender] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);

    const [biodatas, setBiodatas] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/biodatas`)
            .then(res => res.json())
            .then(data => setBiodatas(data))
    }, [])

    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    // For pagination
    const getItemProps = (index) => ({
        variant: "text",
        color: "gray",
        onClick: () => goToPage(index),
        className: currentPage === index ? "bg-pink-400 text-white" : "",
    });

    const maxPageCount = Math.ceil(biodatas.length / itemsPerPage);

    const getPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return biodatas.slice(startIndex, endIndex);
    };

    const next = () => {
        if (currentPage < maxPageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    // For filter
    // const handleGenderFilter = (gender) => {
    //     setFilterGender(gender);
    //     setCurrentPage(1);
    // };
    // const filteredBiodatas = filterGender
    //     ? biodatas.filter((biodata) => biodata.Biodata === filterGender)
    //     : biodatas;



    return (
        <div>
            <Navigationbar></Navigationbar>
            <div>
                <React.Fragment>
                    <div className="flex justify-center my-5">
                        <Button onClick={openDrawer} variant="outlined" className="border-pink-400 text-pink-400">Filter Profile</Button>
                    </div>
                    <Drawer open={open} onClose={closeDrawer} className="p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray">
                                Biodata Filter By
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
                            <Select label="Filter by age range" >
                                <Option value="20-25">20-25</Option>
                                <Option value="25-30">25-30</Option>
                                <Option value="30-35">30-35</Option>
                                <Option value="35-40">35-40</Option>
                                <Option value="40-45">40-45</Option>
                            </Select>
                        </Typography>
                        <Typography color="gray" className="mb-8 pr-4 font-normal">
                            <Select
                                label="Filter by type"
                                // value={filterGender || ""}
                                // onChange={(e) => handleGenderFilter(e.target.value)}
                                // placeholder="All"
                                >
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                            </Select>
                        </Typography>
                        <Typography color="gray" className="mb-8 pr-4 font-normal">
                            <Select label="Filter by Division" >
                                <Option value="Dhaka">Dhaka</Option>
                                <Option value="Chittagong">Chittagong</Option>
                                <Option value="Khulna">Khulna</Option>
                                <Option value="Rajshahi">Rajshahi</Option>
                                <Option value="Barisal">Barisal</Option>
                                <Option value="Sylhet">Sylhet</Option>
                                <Option value="Rangpur">Rangpur</Option>
                                <Option value="Mymensing">Mymensing</Option>
                            </Select>
                        </Typography>
                    </Drawer>
                </React.Fragment>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    getPageData().map((biodata) => (<BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>))
                }

                {/* {
                    biodatas.map(biodata => <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
                } */}
            </div>
            {/*For pagination  */}
            <div className="flex items-center justify-center gap-4 my-5">
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={prev}
                    disabled={currentPage === 1}
                >
                    <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
                </Button>
                <div className="flex items-center gap-2">
                    {[...Array(maxPageCount).keys()].map((page) => (
                        <IconButton
                            key={page}
                            {...getItemProps(page + 1)}
                            onClick={() => goToPage(page + 1)}
                        >
                            {page + 1}
                        </IconButton>
                    ))}
                </div>
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={next}
                    disabled={currentPage === maxPageCount}
                >
                    Next <FaArrowRight strokeWidth={2} className="h-4 w-4" />
                </Button>
            </div>

        </div>
    );
};

export default Biodatas;