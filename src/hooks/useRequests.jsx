import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";



const useRequests = () => {
    const axiosSecure = useAxiosSecure();

    const {user} = useAuth()
    

    const{refetch, data : requests = []} = useQuery({
        queryKey: ['requests', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/requests?userEmail=${user?.email}`)
            return res.data;
        }
    })
    return [requests, refetch]
};

export default useRequests;