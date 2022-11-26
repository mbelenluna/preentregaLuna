import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return <div className="navbar">
        <p className="logo">IMPORTADOS</p>
            <button>Inicio</button>
            <button>Categorías</button>
            <button>Marcas</button>
            <button>Ofertas</button>
            <CartWidget />
    </div>
}

export default NavBar;