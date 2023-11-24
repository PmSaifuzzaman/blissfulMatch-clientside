import {  FaFemale, FaHeart, FaMale, FaPeopleArrows,  } from "react-icons/fa";

const SuccessCounter = () => {
    return (
        <>
            <div className="text-center my-10">
                <h2 className="text-4xl font-bold text-pink-400">Success Counter</h2>
                <p className="text-2xl">Love Stories Blossoming</p>
            </div>
            <div className="mb-10 grid grid-cols-4 divide-x-2 divide-current border-current border-t-2 border-b-2 bg-pink-50 ">
                <div className="text-center space-y-2 py-10">
                    <FaHeart className="mx-auto text-3xl  text-pink-400 rounded-r-md"></FaHeart>
                    <h2 className="text-3xl font-bold">2k</h2>
                    <p className="text-xl font-bold">COUPLES PARED</p>
                </div>
                <div className="text-center py-10 space-y-2">
                    <FaPeopleArrows className="mx-auto text-3xl  text-pink-400 rounded-r-md"></FaPeopleArrows>
                    <h2 className="text-3xl font-bold">4000+</h2>
                    <p className="text-xl font-bold">REGISTRATION</p>
                </div>
                <div className="text-center space-y-2 py-10">
                    <FaMale className="mx-auto text-3xl  text-pink-400 rounded-r-md"></FaMale>
                    <h2 className="text-3xl font-bold">1600+</h2>
                    <p className="text-xl font-bold">MENS</p>
                </div>
                <div className="text-center space-y-2 py-10">
                    <FaFemale className="mx-auto text-3xl  text-pink-400 rounded-r-md"></FaFemale>
                    <h2 className="text-3xl font-bold">2000+</h2>
                    <p className="text-xl font-bold">WOMENS</p>
                </div>
            </div>
        </>
    );
};

export default SuccessCounter;