import { useEffect, useState } from "react";
import Navigationbar from "../../components/Navbar/Navbar";
import BiodataCard from "../shared/BiodataCard/BiodataCard";


const Biodatas = () => {

    const[biodatas, setBiodatas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/biodatas")
        .then(res => res.json())
        .then(data => setBiodatas(data))
    }, [])

    return (
        <div>
            <Navigationbar></Navigationbar>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    biodatas.map(biodata => <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
                }
            </div>
            
        </div>
    );
};

export default Biodatas;