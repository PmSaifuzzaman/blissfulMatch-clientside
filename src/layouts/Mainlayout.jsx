import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";





const MainLayout = () => {
    return (
        <div className="lg:max-w-7xl lg:mx-auto">
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;