import Swal from "sweetalert2";
import useAllContactRequestData from "../../../hooks/useAllContactRequestData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";




const Requests = () => {

    const { data, refetch, isLoading } = useAllContactRequestData();
    const axiosSecureInstance = useAxiosSecure();
    // console.log(data[0].status);
    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be a premium member!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, request for it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecureInstance.delete(`/delete-requested-contact?id=${id}`)
                    .then(res => {
                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Request Deleted!",
                                text: "Successfully requested delete!.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    } 

    return (
        <div>
            <h2 className="text-center text-3xl mb-3">My requests : <span className="font-bold text-pink-400">{data.length}</span></h2>
            
            <div className="overflow-x-auto lg:px-10">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-base">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className='bg-gray-100'>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Needed Biodata ID
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Status
                            </th>
                            
                            {/* <th className="px-4 py-2">Action</th> */}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            data?.map((user, index) =>
                                <tr key={index} className='text-start capitalize'>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {user?.name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {user?.neededID}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {user?.status}
                                    </td>
                                    {
                                        user?.status === 'pending' ?
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                *****
                                            </td> :
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                {user?.neederMobile}
                                            </td>
                                    }
                                    
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <button onClick={() => handleDelete(user?._id)} className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Requests;