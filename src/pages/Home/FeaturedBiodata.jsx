import { useEffect, useState } from "react";
import BiodataCard from "../shared/BiodataCard/BiodataCard";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";


const FeaturedBiodata = () => {

    const[biodatas, setBiodatas] = useState([])

    useEffect(() => {
        fetch('https://blissful-match-server.vercel.app/featuredBiodata')
        .then(res => res.json())
        .then(data => setBiodatas(data))
    } , [])

    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-4xl font-bold text-pink-400">Featured Profile</h2>
                <p className="text-2xl text-gray-400">Some of Our <span className="font-bold text-pink-400">Premium</span> Member</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    biodatas.map(biodata => <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
                }
            </div>
            <div className="flex justify-center my-5">
                <Link to={'/biodatas'}><Button variant="outlined" className="border-pink-400 text-pink-400">Show More</Button></Link>
            </div>
        </div>
    );
};

export default FeaturedBiodata;