import useFavourites from "../../../hooks/useFavourites";
import FavouriteTable from "./FavouriteTable";


const Favourites = () => {

    const[Favourites] = useFavourites()

    return (
        <div>
            <h2>My favourites : {Favourites.length}</h2>
            <div>
                {
                    Favourites.map(favourite => <FavouriteTable key={favourite._id} favourite={favourite}></FavouriteTable>)
                }
            </div>
        </div>
    );
};

export default Favourites;