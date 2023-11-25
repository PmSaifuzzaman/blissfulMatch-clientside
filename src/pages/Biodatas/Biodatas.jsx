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
            <h2 className="my-5">This is biodatas section</h2>
            <div>
                {
                    biodatas.map(biodata => <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
                }
            </div>
            
        </div>
    );
};

export default Biodatas;