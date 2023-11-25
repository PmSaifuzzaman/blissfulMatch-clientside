import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";




const MainLayout = () => {
    return (
        <div className="lg:max-w-7xl lg:mx-auto">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;