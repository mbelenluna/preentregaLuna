import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

    

    return <div className="navbar">
        <Link to={"/"}>
            <p className="logo">IMPORTADOS</p>
        </Link>
        <nav>
            <Link to={"/maquillaje"}>Maquillaje</Link>
            <Link to={"/cuidado-del-cabello"}>Cuidado del cabello</Link>
            <Link to={"/skincare"}>Skincare</Link>
        </nav>
        <CartWidget />

    </div>
}

export default NavBar;