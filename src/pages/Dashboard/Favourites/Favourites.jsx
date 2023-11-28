import { Button } from "@material-tailwind/react";
import useFavourites from "../../../hooks/useFavourites";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import FavouriteTable from "./FavouriteTable";


const Favourites = () => {

    const [Favourites, refetch] = useFavourites()
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
                axiosSecure.delete(`/favourites/${id}`)
                .then(res => {
                    console.log(res)
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `Favourite has been deleted.`,
                            icon: "success"
                        });
                    }
                })
            }
          });
    }

    return (
        <div>
            <h2 className="text-center text-3xl mb-3">My favourites : <span className="font-bold text-pink-400">{Favourites.length}</span></h2>
            
            <div>
                <table border="1" className="w-full ">
                    <thead className=" bg-blue-gray-200 text-left ">
                        <tr className="">
                            <th className="py-5 pl-5">#</th>
                            <th className="py-5">Name</th>
                            <th className="py-5">Biodata Id</th>
                            <th className="py-5">Permanent Address</th>
                            <th className="py-5">Occupation</th>
                            <th className="py-5">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-left">
                        {
                            Favourites.map((favourite , index) => <tr key={favourite._id}>
                                <td className="py-5 pl-5 shadow-lg">{index + 1}.</td>
                                <td className="py-5 shadow-lg">{favourite.Name}</td>
                                <td className="py-5 shadow-lg">{favourite.BiodataNumber}</td>
                                <td className="py-5 shadow-lg">{favourite.PermanentDivisionName}</td>
                                <td className="py-5 shadow-lg">{favourite.Occupation}</td>
                                <td className="py-5 shadow-lg"><Button onClick={() => handleDelete(favourite._id)} className="bg-blue-gray-100 p-3 ml-5 rounded-full text-red-500"><FaTrashAlt /></Button></td>
                                
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Favourites;