import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import List from "./List";
import { products } from '../data.js';

const NavBar = () => {
    
    const getProducts = (categoryId) => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(
                    categoryId ? products.filter((product) => product.category === categoryId) : products
                );
            })
        })
    }

    return <div className="navbar">
        <p className="logo">IMPORTADOS</p>
        <nav>
            <Link to={"/inicio"}>Inicio</Link>
            <Link to={"/categorias"}>Categorías</Link>
            <Link to={"/marcas"}>Marcas</Link>
            <Link to={"/ofertas"}>Ofertas</Link>
        </nav>
        <CartWidget />
        <ul>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/maquillaje" element={<List list={"Maquillaje"} />} />
                <Route path="/cuidadodelcabello" element={<List list={"Cuidado del cabello"} />} />
                <Route path="/skincare" element={<List list={"Skincare"} />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </ul>
    </div>
}

export default NavBar;