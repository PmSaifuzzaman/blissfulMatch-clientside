import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useFavourites = () => {
    const axiosSecure = useAxiosSecure();

    const {user} = useAuth()
    

    const{refetch, data : favourites = []} = useQuery({
        queryKey: ['favourites', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/favourites?userEmail=${user?.email}`)
            return res.data;
        }
    })
    return [favourites, refetch]
};

export default useFavourites;