import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";



const Users = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/biodatas');
            return res.data;
        }
    })
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
                            users.map((user , index) => <tr key={user._id}>
                                <td className="py-5 pl-5 shadow-lg">{index + 1}.</td>
                                <td className="py-5 shadow-lg">{user.Name}</td>
                                <td className="py-5 shadow-lg">{user.BiodataNumber}</td>
                                <td className="py-5 shadow-lg">{user.PermanentDivisionName}</td>
                                <td className="py-5 shadow-lg">{user.Occupation}</td>
                                
                                
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;