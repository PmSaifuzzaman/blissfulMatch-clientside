import { useEffect, useState } from "react";
import Navigationbar from "../../components/Navbar/Navbar";
import BiodataCard from "../shared/BiodataCard/BiodataCard";



import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button, IconButton } from "@material-tailwind/react";


const Biodatas = () => {

    const itemsPerPage = 9;


    const [currentPage, setCurrentPage] = useState(1);

    const [biodatas, setBiodatas] = useState([]);

    const [filter, setFilter] = useState({
        Biodata: null,
        PermanentDivisionName: null,
        minAge: null,
        maxAge: null,
    });

    const fetchBiodatas = () => {
        const { Biodata, PermanentDivisionName, minAge, maxAge } = filter;
        const url = `http://localhost:5000/biodatas?biodata=${Biodata || ""}&division=${PermanentDivisionName || ""}&minAge=${minAge || ""}&maxAge=${maxAge || ""}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setBiodatas(data));
    };


    useEffect(() => {
        fetchBiodatas();
    }, [filter]);

    // Filter event handlers
    const handleBiodataFilterChange = (event) => {
        setFilter({ ...filter, Biodata: event.target.value });
    };

    const handleDivisionFilterChange = (event) => {
        setFilter({ ...filter, PermanentDivisionName: event.target.value });
    };

    const handleMinAgeFilterChange = (event) => {
        setFilter({ ...filter, minAge: event.target.value });
    };

    const handleMaxAgeFilterChange = (event) => {
        setFilter({ ...filter, maxAge: event.target.value });
    };

    const handleFilterSubmit = (event) => {
        event.preventDefault();
        fetchBiodatas();
    };

    // useEffect(() => {

    //  const url = `http://localhost:5000/biodatas`;
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => setBiodatas(data))
    // }, [])

    



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



    return (
        <div>
            <Navigationbar></Navigationbar>

            <div className="flex">
                <div className="basis-1/4">
                    <div className="space-y-2 px-5">
                        <div className='w-full lg:px-0'>
                            <h1 className='text-base text-pink-400'>Filter by Biodata Type</h1>
                            <select
                               onChange={handleBiodataFilterChange}
                                className="mt-1.5 w-full text-lg px-2 py-3 rounded-lg border-black border-2 text-gray-700 sm:text-sm"
                            >
                                <option disabled className='text-lg' value="gender">Filter by Biodata Type</option>
                                <option className='text-lg' value="male">Male</option>
                                <option className='text-lg' value="female">Female</option>
                            </select>
                        </div>
                        <div className='w-full text-lg lg:px-0'>
                            <h1 className='text-base text-pink-400'>Filter by division</h1>
                            <select
                                onChange={handleDivisionFilterChange}
                                
                                className="mt-1.5 w-full px-2 py-3 rounded-lg border-black border-2 text-gray-700 sm:text-sm"
                            >
                                <option disabled className='text-lg' value="default">Filter by Division</option>
                                <option className='text-lg' value="dhaka">Dhaka</option>
                                <option className='text-lg' value="rajshahi">Rajshahi</option>
                                <option className='text-lg' value="chattagram">Chittagone</option>
                                <option className='text-lg' value="barisal">Barisal</option>
                                <option className='text-lg' value="sylet">Sylet</option>
                                <option className='text-lg' value="rangpur">Rangpur</option>
                                <option className='text-lg' value="khulna">Khulna</option>
                                <option className='text-lg' value="mymensingh">Mymensingh</option>
                            </select>
                        </div>
                        <details
                            className="overflow-hidden rounded border-black border-2"
                        >
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                                <span className="text-base font-medium"> Age </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                                <div className="border-t border-gray-200 p-4">
                                    <form className='' >
                                        <div className="flex justify-between flex-col gap-4">
                                            <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600">Min age</span>
                                                <input
                                                     onChange={handleMinAgeFilterChange}
                                                    type="number"
                                                    name="lowAge"
                                                    placeholder="From"

                                                    className="w-full text-lg rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                />
                                            </label>

                                            <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600">Max age</span>
                                                <input
                                                    onChange={handleMaxAgeFilterChange}
                                                    type="number"
                                                    name="highAge"
                                                    placeholder="To"
                                                    
                                                    className="w-full rounded-md text-lg border-gray-200 shadow-sm sm:text-sm"
                                                />
                                            </label>
                                            <button type='submit' onClick={handleFilterSubmit} className='bg-pink-500 rounded-md p-1'>Filter</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>

                <div className=" basis-3/4 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {
                        getPageData().map((biodata) => (<BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>))
                    }

                    {/* {
                            biodatas.map(biodata => <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
                        } */
                    }
                </div>
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