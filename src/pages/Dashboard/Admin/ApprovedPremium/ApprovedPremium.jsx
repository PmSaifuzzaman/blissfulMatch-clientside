import { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

import { Button } from "@material-tailwind/react";


const ApprovedPremium = () => {
    const[premiumBiodatas, setPremiumBiodatas] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/users/approvedPremium')
        .then(res => res.json())
        .then(data => setPremiumBiodatas(data))
    } , [])


    // Make Premium
    const handleMakePremium = premiumBiodata => {
        useAxiosSecure.patch(`/users/premium/${premiumBiodata._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${premiumBiodata.Name} is an Premium Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div>
            <div>
                <h2 className="text-2xl my-3 text-center">Our Premium Users : <span className="font-bold text-pink-400">{premiumBiodatas?.length}</span></h2>
            </div>
            <div>
                <table border="1" className="w-full ">
                    <thead className=" bg-pink-300 text-left ">
                        <tr className="">
                            <th className="py-5 pl-5">#</th>
                            <th className="py-5">Name</th>
                            <th className="py-5">Email</th>
                            <th className="py-5">Biodata Id</th>
                            <th className="py-5">Make Premium</th>
                            

                        </tr>
                    </thead>
                    <tbody className="text-left">
                        {
                            premiumBiodatas.map((premiumBiodata, index) => <tr key={premiumBiodata._id}>
                                <td className="py-5 pl-5 shadow-lg">{index + 1}.</td>
                                <td className="py-5 shadow-lg">{premiumBiodata.Name}</td>
                                <td className="py-5 shadow-lg">{premiumBiodata.ContactEmail}</td>
                                <td className="py-5 shadow-lg pl-5">{premiumBiodata.BiodataNumber}</td>
                                <td className="py-5 shadow-lg">
                                    {
                                        premiumBiodata.MembershipType === "Premium" ? <FaStar className="text-amber-500 text-2xl ml-5"></FaStar> : <Button onClick={() => handleMakePremium(premiumBiodata)} className="bg-pink-400 ml-3" size="sm">Make premium</Button>
                                    }
                                </td>
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovedPremium;