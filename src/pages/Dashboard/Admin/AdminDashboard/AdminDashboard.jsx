import { useState } from "react";
import { useEffect } from "react";


const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })

    }, [])

    const maleUsersCount = users.filter(user => user.Biodata === "Male").length;
    const femaleUsersCount = users.filter(user => user.Biodata === "Female").length;

    return (
        <div >
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-center text-pink-400">Analytics</h2>
            </div>

            <div className="flex justify-around">
                <div className="px-10 py-6 bg-pink-100 rounded-md">
                    <h2 className="text-2xl font-bold">All users: {users.length}</h2>
                </div>
                <div className="px-10 py-6 bg-pink-100 rounded-md">
                    <h2 className="text-2xl font-bold">Male Count: {maleUsersCount} </h2>
                </div>
                <div className="px-10 py-6 bg-pink-100 rounded-md">
                    <h2 className="text-2xl font-bold">Female Count: {femaleUsersCount} </h2>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;