import register from "../../assets/images/icon/ring.png"
import findMatch from "../../assets/images/icon/couple.png"
import interest from "../../assets/images/icon/interest-removebg-preview.png"
import profile from "../../assets/images/icon/profile_connect.png"
import meetUp from "../../assets/images/icon/meetup.png"
import marriage from "../../assets/images/icon/merrage.png"





const WorkWay = () => {


    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-2xl">Moments</h2>
                <h2 className="text-4xl font-bold">How it works</h2>

            </div>
            {/* How it works container */}
            {/* row 1 */}
            <div className="flex items-center justify-center divide-x-4 divide-current max-w-md mx-auto mb-5">
                <div className="w-full mr-10">
                    <img className="w-40 " src={register} alt="" />
                </div>
                <div className="pl-10 w-full space-y-3">
                    <h2 className="text-2xl">Register</h2>
                    <p className="text-pink-400 ">TIMING: 7:00 PM</p>
                    <p className="text-justify">Embark on the journey of a lifetime with BlissfulMatch, where the magic of love begins. Register today to create your profile, share your story, and unlock the doors to a world of meaningful connections.</p>
                </div>
            </div>
            {/* row 2 */}
            <div className="flex flex-row-reverse items-center justify-center divide-x-reverse divide-x-4 divide-current max-w-md mx-auto mb-5">
                <div className=" w-full">
                    <img className="w-40 pl-10" src={findMatch} alt="" />
                </div>
                <div className="pr-10 w-full space-y-3">
                    <h2 className="text-2xl">Find your Match</h2>
                    <p className="text-pink-400 ">TIMING: 7:00 PM</p>
                    <p className="text-justify">Discover a world of possibilities as you embark on the journey to find your perfect match.</p>
                </div>
            </div>
            {/* row 3 */}
            <div className="flex items-center justify-center divide-x-4 divide-current max-w-md mx-auto mb-5">
                <div className="w-full mr-10">
                    <img className="w-40 " src={interest} alt="" />
                </div>
                <div className="pl-10 w-full space-y-3">
                    <h2 className="text-2xl">Send Interest</h2>
                    <p className="text-pink-400 ">TIMING: 7:00 PM</p>
                    <p className="text-justify">Express your heart is desire with a simple click. Sending Interest is the first step towards building a beautiful connection.</p>
                </div>
            </div>
            {/* row 4 */}
            <div className="flex flex-row-reverse items-center justify-center divide-x-reverse divide-x-4 divide-current max-w-md mx-auto mb-5">
                <div className=" w-full">
                    <img className="w-40 pl-10" src={profile} alt="" />
                </div>
                <div className="pr-10 w-full space-y-3">
                    <h2 className="text-2xl">Get Profile Information</h2>
                    <p className="text-pink-400 ">TIMING: 7:00 PM</p>
                    <p className="text-justify">Discover a world of possibilities as you embark on the journey to find your perfect match.</p>
                </div>
            </div>
            {/* row 5 */}
            <div className="flex items-center justify-center divide-x-4 divide-current max-w-md mx-auto mb-5">
                <div className="w-full mr-10">
                    <img className="w-40 " src={meetUp} alt="" />
                </div>
                <div className="pl-10 w-full space-y-3">
                    <h2 className="text-2xl">Start MeetUp</h2>
                    <p className="text-pink-400 ">TIMING: 7:00 PM</p>
                    <p className="text-justify">Your perfect connection awaits as you get to know the heart behind each profile.</p>
                </div>
            </div>
            {/* row 6 */}
            <div className="flex flex-row-reverse items-center justify-center divide-x-reverse divide-x-4 divide-current max-w-md mx-auto mb-5">
                <div className=" w-full">
                    <img className="w-40 pl-10" src={marriage} alt="" />
                </div>
                <div className="pr-10 w-full space-y-3">
                    <h2 className="text-2xl">Getting Marriage</h2>
                    <p className="text-pink-400 ">TIMING: 7:00 PM</p>
                    <p className="text-justify">As you step into the sacred journey of marriage, may your hearts beat as one, your dreams intertwine, and your love story continue to blossom.Here is to the beginning of a beautiful chapter together.</p>
                </div>
            </div>

           

        </div>
    );
};

export default WorkWay;