import { Link } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <h3>This is navigation bar</h3>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default NavBar;