import { Outlet } from "react-router-dom";




const MainLayout = () => {
    return (
        <div className="lg:max-w-7xl lg:mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;