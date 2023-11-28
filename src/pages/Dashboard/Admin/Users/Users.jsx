import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Button } from "@material-tailwind/react";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";



const Users = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/biodatas', {
                headers : {
                    authorization : `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            
            return res.data;
        }
    })


    const handleMakeAdmin = user => {
        axiosSecure.patch(`/biodatas/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.Name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div >
                <h2 className="text-3xl font-bold mb-3">Total user : <span className="font-bold text-pink-400">{users.length}</span></h2>

            </div>
            <div>
                <table border="1" className="w-full ">
                    <thead className=" bg-pink-300 text-left ">
                        <tr className="">
                            <th className="py-5 pl-5">#</th>
                            <th className="py-5">Name</th>
                            <th className="py-5">Email</th>
                            <th className="py-5">Make Admin</th>
                            <th className="py-5">Make Premium</th>

                        </tr>
                    </thead>
                    <tbody className="text-left">
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td className="py-5 pl-5 shadow-lg">{index + 1}.</td>
                                <td className="py-5 shadow-lg">{user.Name}</td>
                                <td className="py-5 shadow-lg">{user.ContactEmail}</td>
                                <td className="py-5 shadow-lg">
                                    {
                                        user.role === 'admin' ? 'admin' : <Button onClick={() => handleMakeAdmin(user)} className="bg-blue-gray-100 p-3 ml-5 rounded-full text-pink-500 text-lg"><FaUser /></Button>
                                    }
                                    
                                </td>
                                <td className="py-5 shadow-lg"></td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;