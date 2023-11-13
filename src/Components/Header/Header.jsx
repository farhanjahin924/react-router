import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <span>THis is Header:  </span>
           <Link to={'/about'}>About   </Link>
           
           <Link to={'/contact'}>Contact</Link>
        </div>
    );
};

export default Header;