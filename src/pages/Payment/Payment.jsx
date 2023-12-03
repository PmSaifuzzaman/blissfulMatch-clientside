import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "../../components/CheckOut/CheckOut";




const stripePromise = loadStripe('pk_test_51OJKlmLfiYe7XlEv1qPbK9QIUin1Ivj6LryBFpBEKpiFkIkjsX2jNFWRL3NOFU1WhdJh4iihhZQZIGYcYXHxPt9J00Wmrcmw1L');
console.log(stripePromise)

const Payment = () => {

    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;