import "./ItemDetailContainer.css";
import { products } from '../data.js';
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setData] = useState([]);

    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });

        getItem.then(res => setData(res));
    }, [])

    return (
    <div>            
        <ItemDetail item={item} />
    </div>
    )
}

export default ItemDetailContainer;