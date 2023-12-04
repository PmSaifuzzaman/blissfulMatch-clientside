import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAllBiodatas from "../../hooks/useAllBiodatas";
import { authContext } from "../../providers/AuthProvider";



const CheckOut = () => {

    


    const { id } = useParams();
    console.log(id)
    const { user } = useContext(authContext);
    const { data,  } = useAllBiodatas();
    const myID = data?.find(man => man?.userEmail === user?.email)?.biodataId;
    const needer = data?.find(user => user?.biodataId == id);
    console.log(needer, "neederid")

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const axiosSecureInstance = useAxiosSecure()
    let price = 500;
    const navigate = useNavigate()

    console.log(error)
    console.log(transactionId)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axiosSecureInstance.post("/create-payment-intent", {price})
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            });
    }, []);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log("confirm error");
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)
            }
            const requestContactData = {
                requesterID: myID,
                neededID: id,
                requesterEmail: user?.email,
                name: needer?.name,
                requesterName: user?.displayName,
                status: 'pending',
                time: new Date().toLocaleDateString(),
                trxnID: paymentIntent?.id,
                paidTk: parseInt(500),
                neederEmai: needer?.contactEmail,
                neederMobile: needer?.mobileNumber,
            }

            const res = await axiosSecureInstance.post('/payments', requestContactData)
            if (res.data.acknowledged) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Transaction done",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
                
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${res.data.message}`,
                });
                // reset();
            }
        }
    }



    return (
        <div className='pt-10 min-h-screen'>
            <div>
                <h2 className="text-2xl text-center font-bold text-pink-400">
                    Check Out here
                </h2>
            </div>
            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg ">
                                If You want to cheekout then you need to pay 500TK. If you paid the amound and if admin approved your request then you see your requested contact iformation in your dashboard. If admin want then he/she can cancel your request if your biodata information is fake. If interested then paid and cheekout this page.
                            </p>

                            <div className="mt-8">
                                <a href="" className="text-2xl font-bold text-pink-300">
                                    Any more information contact
                                </a>

                                <address className="mt-2 not-italic text-pink-400">
                                    pmsaifuzzaman@gmail.com
                                </address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <label className='mb-2'>Requested ID</label>
                                    <input
                                        className="w-full rounded-lg border-2 border-pink-400 p-3 text-sm"
                                        placeholder="Requester biodata ID"
                                        // value={id}
                                        // defaultValue={id}
                                        defaultValue={id ? id.toString().charAt(0) : ''}
                                        type="number"
                                        id="name"
                                        disabled
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className='mb-2'>Requester ID</label>
                                        <input
                                            className="w-full rounded-lg border-2 border-pink-400 p-3 text-sm"
                                            placeholder="Your biodata ID"
                                            value={myID}
                                            type="number"
                                            id="email"
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label className='mb-2'>Requester Email</label>
                                        <input
                                            className="w-full rounded-lg border-2 border-pink-400 p-3 text-sm"
                                            placeholder="Email"
                                            value={user?.email}
                                            type="email"
                                            id="phone"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div>
                                    <CardElement
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '16px',
                                                    color: '#0C356A',
                                                    '::placeholder': {
                                                        color: '#0C356A',
                                                    },
                                                },
                                                invalid: {
                                                    color: '#9e2146',
                                                },
                                            },
                                        }}
                                    />
                                </div>

                                <div className="mt-4">
                                    <button disabled={!clientSecret}
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-pink-400 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckOut;