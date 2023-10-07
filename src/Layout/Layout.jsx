import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";


const Layout = () => {
    return (
        <div className="font-lato">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;