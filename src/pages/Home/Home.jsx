import Navbar from "../../components/Navbar/Navbar";
import SuccessCounter from "../../components/SuccessCounter/SuccessCounter";
import WorkWay from "../../components/WorkWay/WorkWay";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WorkWay></WorkWay>
            <SuccessCounter></SuccessCounter>
        </div>
    );
};

export default Home;