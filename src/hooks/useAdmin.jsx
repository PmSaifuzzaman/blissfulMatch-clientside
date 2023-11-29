import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;




// import { useMemo } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { Spinner } from '@material-tailwind/react';
// import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';

// const useAdmin = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     const queryKey = useMemo(() => [user?.email, 'isAdmin'], [user?.email]);

//     const { data: isAdmin, isPending: isAdminLoading, error } = useQuery({
//         queryKey,
//         queryFn: async () => {
//             try {
//                 const res = await axiosSecure.get(`/users/admin/${user.email}`);
//                 console.log(res.data);
//                 return res.data?.admin;
//             } catch (error) {
//                 console.error('Error fetching admin status:', error);
//                 // Handle error state here
//                 return false; // Set a default value when there's an error
//             }
//         }
//     });

//     if (isAdminLoading) {
//         // Render loading state
//         return <Spinner></Spinner>;
//     }

//     return { isAdmin, error };
// };

// export default useAdmin;

