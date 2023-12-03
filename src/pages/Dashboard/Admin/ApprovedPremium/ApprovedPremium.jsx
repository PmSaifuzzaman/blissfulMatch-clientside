import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import usePremiumRequest from "../../../../hooks/usePremiumRequest";



const ApprovePremium = () => {

    

    const { data, refetch, isLoading } = usePremiumRequest();
    console.log(data)
    const axiosSecureInstance = useAxiosSecure();

    // console.log(data?.premiumRequestStatus)

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleApprovePremium = async (user) => {
        const res = await axiosSecureInstance.patch(`/approve-premium?id=${user._id}`)
        if (res.data.acknowledged) {
            Swal.fire({
                title: "Good job!",
                text: "Your approve this premium membership!",
                icon: "success"
            });
            refetch();
        }
    }


    return (
        <div>
            <div>
                Approved Premium
            </div>
            <div className='pb-10'>
                <div className="overflow-x-auto lg:px-10">
                    <table className="min-w-full divide-y-2 divide-gray-200 text-lg">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr className=''>
                                <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                    Biodata ID
                                </th>
                                <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                    Name
                                </th>
                                <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                    Email
                                </th>
                                <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                    Staus
                                </th>
                                <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {
                                data?.map((user, index) =>
                                    <tr key={index} className='text-start'>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            {user?._id}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.name}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.email}</td>
                                        {
                                            user?.premiumRequestStatus === "approved" ?
                                                <td className="whitespace-nowrap px-4 py-2 text-yellow-500">Premium</td> :
                                                <td className="whitespace-nowrap px-4 py-2 text-red-500">Pending</td>
                                        }
                                        {
                                            user?.premiumRequestStatus === 'approved' ?
                                                <td className="whitespace-nowrap px-4 py-2">
                                                    <button disabled className="inline-block rounded text-yellow-500 px-4 py-2 text-lg font-medium">
                                                        Approved
                                                    </button>
                                                </td> :
                                                <td className="whitespace-nowrap px-4 py-2">
                                                    <button onClick={() => handleApprovePremium(user)} className="inline-block rounded bg-indigo-600 px-4 py-2 text-lg font-medium text-white hover:bg-indigo-700">
                                                        Approve
                                                    </button>
                                                </td>
                                        }
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ApprovePremium