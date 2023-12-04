import Swal from "sweetalert2";
import useAllContactRequestData from "../../../../hooks/useAllContactRequestData";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const ApprovedContactRequests = () => {

    const { data, refetch } = useAllContactRequestData();
    const axiosSecureInstance = useAxiosSecure();

    const handleApprove = async (id) => {
        const res = await axiosSecureInstance.patch(`/approve-contact-request?id=${id}`)
        if (res.data.acknowledged) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Contact request accepted",
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
        }
    }


    return (
        <div>
            <div>
                <h2 className="text-3xl text-center my-5 font-bold text-pink-400">Approve requests</h2>
            </div>
            <div className="overflow-x-auto lg:px-10">
                <table className="min-w-full divide-y-2 divide-gray-200text-lg">
                    <thead className="ltr:text-left rtl:text-right bg-pink-300">
                        <tr className=''>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                #
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Requester Name
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Requester Email
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Biodata ID
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Action
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            data?.map((user, index) =>
                                <tr key={index} className='text-start capitalize'>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {index+1}.
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {user?.Name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {user?.requesterEmail}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {user?._id}
                                    </td>
                                    {
                                        user?.status === 'pending' ?
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <button onClick={() => handleApprove(user?._id)} className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                                    Approve Request
                                                </button>
                                            </td> :
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <button disabled className="inline-block rounded bg-yellow-500 px-4 py-2 text-lg font-medium">
                                                    Approved
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
    );
};

export default ApprovedContactRequests;