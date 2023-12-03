import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const usePremiumRequest = () => {
    const { user } = useContext(authContext);
    const axiosSecureInstance = useAxiosSecure()
    console.log(user)

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['premium-request'],
        queryFn: async () => {
            const res = await axiosSecureInstance.get('/manage-premium-request')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default usePremiumRequest