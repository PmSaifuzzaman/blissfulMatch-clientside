import Navbar from "../../components/Navbar/Navbar";
import Ratings from "../../components/Ratings/Ratings";
import SuccessCounter from "../../components/SuccessCounter/SuccessCounter";
import WorkWay from "../../components/WorkWay/WorkWay";
import Banner from "../Banner/Banner";
import FeaturedBiodata from "./FeaturedBiodata";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedBiodata></FeaturedBiodata>
            <WorkWay></WorkWay>
            <SuccessCounter></SuccessCounter>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;