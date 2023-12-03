// import { useContext } from "react";
// import { authContext } from "../providers/AuthProvider";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllBiodatas = () => {
    // const { user, token } = useContext(authContext);
    const axiosSecureInstance = useAxiosSecure()

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['all-biodatas'],
        queryFn: async () => {
            const res = await axiosSecureInstance.get('/users')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useAllBiodatas