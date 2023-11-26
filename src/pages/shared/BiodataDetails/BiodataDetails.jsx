import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import { useLoaderData } from "react-router-dom";
import Navigationbar from "../../../components/Navbar/Navbar";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import BiodataCard from "../BiodataCard/BiodataCard";


const BiodataDetails = () => {

    const [biodatas, setBiodatas] = useState([]);

    const singleBiodata = useLoaderData()

    const { ProfileImage, Biodata, Occupation, BiodataNumber, Age, PermanentDivisionName, FathersName, MothersName, Name, DateOfBirth, Height, Weight, Race, PresentDivisionName, ExpectedPartnerAge, ExpectedPartnerHeight, ExpectedPartnerWeight } = singleBiodata;

    useEffect(() => {
        fetch("http://localhost:5000/biodatas")
            .then(res => res.json())
            .then(data => setBiodatas(data))
    }, [])

    return (
        <div>
            <Navigationbar></Navigationbar>
            <div className="flex flex-row gap-5">
                <div className="basis-3/5 ">
                    <Card className="">
                        <CardHeader shadow={false} floated={false} className="h-96">
                            <img
                                src={ProfileImage}
                                alt="card-image"
                                className="h-full w-full object-contain"
                            />
                        </CardHeader>
                        <CardBody>
                            <div>
                                <Typography color="blue-gray" className="font-medium">
                                    Id : <span className="font-bold">{BiodataNumber}</span>
                                </Typography>
                            </div>
                            <div>
                                <Typography color="blue-gray" className="font-medium">
                                    Name : <span className="font-bold">{Name}</span>
                                </Typography>
                            </div>
                            <div>
                                <Typography color="blue-gray" className="font-medium my-2">
                                    <span className="font-bold text-pink-400">{Biodata}</span>
                                </Typography>

                            </div>
                            <div className=" flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                    Date of Birth : <span className="font-bold">{DateOfBirth}</span>
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    Age : <span className="bg-pink-200 p-1 rounded-full text-black font-bold">{Age}</span>
                                </Typography>
                            </div>
                            <div className=" flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                    Height : <span className="font-bold ">{Height}</span>
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    Weight : <span className=" text-black font-bold">{Weight}</span>
                                </Typography>
                            </div>
                            <div>
                                <Typography color="blue-gray" className="font-medium">
                                    Fathers Name : <span className="font-bold">{FathersName}</span>
                                </Typography>
                            </div>
                            <div>
                                <Typography color="blue-gray" className="font-medium">
                                    Mothers Name : <span className="font-bold">{MothersName}</span>
                                </Typography>
                            </div>
                            <div>
                                <Typography color="blue-gray" className="font-medium">
                                    Race : <span className="font-bold">{Race}</span>
                                </Typography>
                            </div>
                            <Typography
                                color="gray"
                                className=""
                            >
                                Occupation : <span className="bg-pink-200 p-1 rounded-full text-white">{Occupation}</span>
                            </Typography>
                            <div>
                                <Typography color="blue-gray" className="font-medium">
                                    Permanent Address : <span className="font-bold">{PermanentDivisionName}</span>
                                </Typography>
                            </div>
                            <div>
                                <Typography color="blue-gray" className="font-medium">
                                    Present Address : <span className="font-bold">{PresentDivisionName}</span>
                                </Typography>
                            </div>
                            <div className=" flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                    Expected Partner Height : <span className="font-bold ">{ExpectedPartnerHeight}</span>
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    Expected Weight : <span className=" text-black font-bold">{ExpectedPartnerWeight}</span>
                                </Typography>
                            </div>
                            <div>
                                <Typography color="blue-gray" className="font-medium">
                                    Partner Expected Age : <span className="font-bold bg-pink-300  rounded-full px-1">{ExpectedPartnerAge}</span>
                                </Typography>
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <div className="flex justify-between">
                            <Button
                                ripple={false}
                                
                                className="bg-pink-400 text-2xl px-3 text-white shadow-none rounded-full hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            >
                                <FaHeart></FaHeart>
                            </Button>
                            <Button
                                ripple={false}
                                
                                className="bg-pink-400 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            >
                                Request
                            </Button>
                            </div>
                            
                        </CardFooter>
                    </Card>
                </div>
                {/* related profile section */}
                <div className="basis-2/5 ">
                    <div>
                        <h2 className="text-2xl font-bold">Related Profiles</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                        {
                            biodatas.map(biodata => <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BiodataDetails;