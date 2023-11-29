
import { FaCarAlt, FaMailBulk, FaPhone } from 'react-icons/fa';
import Navigationbar from '../Navbar/Navbar';

const ContactUs = () => {
    return (
        <div>

            <Navigationbar></Navigationbar>
            <div className="text-center mt-10 ">
                <h2 className="text-7xl flex justify-center items-center pb-4"><FaCarAlt></FaCarAlt></h2>
                <h2 className="font-bold text-3xl">Visit Us</h2>
                <p>121 King Street, Melbourne Victoria 3000 Australia</p>
            </div>
            <div className="text-center mt-10 ">
                <h2 className="text-7xl flex justify-center items-center pb-4"><FaPhone></FaPhone> </h2>
                <h2 className="font-bold text-3xl">Call Us</h2>
                <p>+0123 456 7890 or +0321 456 7890</p>
            </div>
            <div className="text-center mt-10 mb-7 ">
                <h2 className="text-7xl flex justify-center items-center pb-4"><FaMailBulk></FaMailBulk> </h2>
                <h2 className="font-bold text-3xl">Email Us</h2>
                <p>light@studio.com or ligthstudio@gmail.com</p>
            </div>

        </div>
    );
};

export default ContactUs;