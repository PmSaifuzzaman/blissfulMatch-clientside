import { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";





const ViewBiodata = () => {
    const [biodata, setBiodata] = useState([])

    const axiosSecure = useAxiosSecure();

    const { user } = useAuth()
    const email = user.email

    const { ProfileImage, Biodata, Occupation, Age, PermanentDivisionName, FathersName, MothersName, Name, DateOfBirth, Height, Weight, Race, PresentDivisionName, ExpectedPartnerAge, ExpectedPartnerHeight, ExpectedPartnerWeight, ContactEmail, MobileNumber } = biodata;

    useEffect(() => {
        fetch(`http://localhost:5000/users/viewBiodata/${email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setBiodata(data)
            });
    }, [email]);

    const requestedData = {
        biodataId: user?.biodataId,
        name: user?.name,
        email: email
    }

    // requests for premium
    const requestPremium = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be a premium member!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, request for it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/premium-request', requestedData)
                    .then(res => {
                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Request Send!",
                                text: "Successfully requested for premium membership!.",
                                icon: "success"
                            });
                        }

                    })
            }
        });
    }






    return (
        <div>
            <div>
                <h2 className="text-2xl text-center font-bold my-3">View Biodata: <span className="text-pink-400">{email}</span></h2>
            </div>
            <div className="">
                <Card className="">
                    <CardHeader shadow={false} floated={false}>
                        <img
                            src={ProfileImage}
                            alt="card-image"
                            className="w-52 rounded-full"
                        />
                    </CardHeader>
                    <CardBody>
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
                        <div>
                            <Typography color="blue-gray" className="font-medium">
                                Contact Email : <span className="font-bold">{ContactEmail}</span>
                            </Typography>
                        </div>
                        <div>
                            <Typography color="blue-gray" className="font-medium">
                                Mobile : <span className="font-bold">{MobileNumber}</span>
                            </Typography>
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <Typography color="blue-gray" className="font-medium">
                                    Mobile : <span className="font-bold">{MobileNumber}</span>
                                </Typography>
                            </div>
                            <div>
                                <Typography className="font-medium">
                                    <Button onClick={requestPremium} className="bg-pink-400"> Make Biodata Premium</Button>
                                </Typography>
                            </div>
                        </div>

                    </CardBody>

                </Card>
            </div>
        </div>
    );
};

export default ViewBiodata;