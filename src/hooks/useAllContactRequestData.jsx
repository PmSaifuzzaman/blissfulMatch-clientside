import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAllContactRequestData = () => {
    const { user } = useContext(authContext);
    const axiosSecureInstance = useAxiosSecure();
    console.log(user)

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['all-contact-request-for-admin'],
        queryFn: async () => {
            const res = await axiosSecureInstance.get('/contact-request-for-admin')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useAllContactRequestData