import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    return (
        <div>
            <h1>This is my website</h1>
            <NavBar></NavBar>
            <Outlet></Outlet>           
        </div>
    );
};

export default Home;