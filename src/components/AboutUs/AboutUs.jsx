import { FaCheck } from "react-icons/fa";

import Navigationbar from "../Navbar/Navbar";
import { Button } from "@material-tailwind/react";


const AboutUs = () => {
    return (
        <>
        <Navigationbar></Navigationbar>
        <div className="max-w-5xl mx-auto" data-aos="zoom-in-left">
            <h1 className="text-center text-5xl font-bold mt-6">Plan Pricing</h1>
            <p className='text-center text-lg py-2 mb-6'>Choose a best plan for you and your Friends</p>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* card 1 */}
                <div className=" shadow-2xl  rounded-br-3xl">
                    <div className=" bg-pink-400 text-center rounded-tl-3xl">
                        <h2 className=" pt-5 pb-12 text-white text-xl font-semibold">Basic</h2>
                        <p className="pb-14 text-white text-3xl font-bold">$2000</p>
                    </div>
                    <div className="text-center space-y-3 pt-4">
                        <p className='flex items-center justify-center gap-2'><FaCheck />Small and intimate gatherings</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />Up to 50 guests</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />Event planning consultation</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />Basic decorations and setup</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />On-site event coordinator</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button   className="btn bg-pink-400 rounded-r-full rounded-l-full text-white my-6">BUY NOW</Button>
                    </div>
                </div>
                {/* card 2 */}
                <div className=" shadow-2xl  rounded-br-3xl">
                    <div className=" bg-pink-400 text-center rounded-tl-3xl">
                        <h2 className=" pt-5 pb-12 text-white text-xl font-semibold">Silver</h2>
                        <p className="pb-14 text-white text-3xl font-bold">$3999</p>
                    </div>
                    <div className="text-center space-y-3 pt-4">
                        <p className='flex items-center justify-center gap-2'><FaCheck />medium-sized events</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />Up to 100 guests</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />Event planning consultation</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />Entertainment recommendations</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />On-site event coordinator</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button   className="btn bg-pink-400 rounded-r-full rounded-l-full text-white my-6">BUY NOW</Button>
                    </div>
                </div>
                {/* card 3 */}
                <div className=" shadow-2xl  rounded-br-3xl">
                    <div className=" bg-pink-400 text-center rounded-tl-3xl">
                        <h2 className=" pt-5 pb-12 text-white text-xl font-semibold">Premium</h2>
                        <p className="pb-14 text-white text-3xl font-bold">$6999</p>
                    </div>
                    <div className="text-center space-y-3 pt-4">
                        <p className='flex items-center justify-center gap-2'><FaCheck />Perfect for grand and luxurious affairs</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />Up to 500 guests</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />VIP treatment for guests</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />Basic decorations and setup</p>
                        <p className='flex items-center justify-center gap-2'><FaCheck />On-site event coordinator</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button   className="btn bg-pink-400 rounded-r-full rounded-l-full text-white my-6">BUY NOW</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutUs;