import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useFavourites = () => {
    const axiosSecure = useAxiosSecure();
    const{data : favourites = []} = useQuery({
        queryKey: ['favourites'],
        queryFn: async () => {
            const res = await axiosSecure.get('/favourites')
            return res.data;
        }
    })
    return [favourites]
};

export default useFavourites;