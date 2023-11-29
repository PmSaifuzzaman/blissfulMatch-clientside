import { Button } from "@material-tailwind/react";

import { FaPaypal, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useRequests from "../../../hooks/useRequests";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const Requests = () => {

    const [Requests, refetch] = useRequests()
    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/requests/${id}`)
                .then(res => {
                    console.log(res)
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `Request has been deleted.`,
                            icon: "success"
                        });
                    }
                })
            }
          });
    }

    return (
        <div>
            <h2 className="text-center text-3xl mb-3">My requests : <span className="font-bold text-pink-400">{Requests.length}</span></h2>
            
            <div>
                <table border="1" className="w-full ">
                    <thead className=" bg-blue-gray-200 text-left ">
                        <tr className="">
                            <th className="py-5 pl-5">#</th>
                            <th className="py-5">Name</th>
                            <th className="py-5">Biodata Id</th>
                            <th className="py-5">Mobile</th>
                            <th className="py-5">Email</th>
                            <th className="py-5">Action</th>
                            <th className="py-5 text-center">Pay</th>
                        </tr>
                    </thead>
                    <tbody className="text-left">
                        {
                            Requests.map((request , index) => <tr key={request._id}>
                                <td className="py-5 pl-5 shadow-lg">{index + 1}.</td>
                                <td className="py-5 shadow-lg">{request.Name}</td>
                                <td className="py-5 shadow-lg">{request.BiodataNumber}</td>
                                <td className="py-5 shadow-lg">{request.MobileNumber}</td>
                                <td className="py-5 shadow-lg">{request.ContactEmail}</td>
                                <td className="py-5 shadow-lg"><Button onClick={() => handleDelete(request._id)} className="bg-blue-gray-100 p-3 ml-5 rounded-full text-red-500"><FaTrashAlt /></Button></td>
                                <td className="py-5 shadow-lg"><Button  className="bg-blue-gray-100 p-3 ml-5 rounded-full text-red-500"><FaPaypal /></Button></td>
                                
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Requests;