import { useLoaderData } from "react-router-dom";
import Navigationbar from "../../../components/Navbar/Navbar";


const BiodataDetails = () => {

    const singleBiodata = useLoaderData()
    console.log(singleBiodata)

    return (
        <div>
            <Navigationbar></Navigationbar>
            <div className="flex flex-row">
                <div className="basis-3/4 h-96 bg-green-500">

                </div>
                <div className="basis-1/4 bg-red-400">

                </div>

            </div>
        </div>
    );
};

export default BiodataDetails;