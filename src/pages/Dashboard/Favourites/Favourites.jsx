import useFavourites from "../../../hooks/useFavourites";
import { FaTrashAlt } from "react-icons/fa";
// import FavouriteTable from "./FavouriteTable";


const Favourites = () => {

    const [Favourites] = useFavourites()

    return (
        <div>
            <h2>My favourites : {Favourites.length}</h2>
            {/* <div>
                {
                    Favourites.map(favourite => <FavouriteTable key={favourite._id} favourite={favourite}></FavouriteTable>)
                }
            </div> */}
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
                                <td className="py-5 shadow-lg">{index + 1}</td>
                                <td className="py-5 shadow-lg">{favourite.Name}</td>
                                <td className="py-5 shadow-lg">{favourite.BiodataNumber}</td>
                                <td className="py-5 shadow-lg">{favourite.PermanentDivisionName}</td>
                                <td className="py-5 shadow-lg">{favourite.Occupation}</td>
                                <td className="py-5 shadow-lg"><FaTrashAlt /></td>
                                
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Favourites;