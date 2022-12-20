import { useState, useEffect } from "react";
import Item from "./Item";
import "./ItemList.css";
import { products } from "../data";

const ItemList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });

        getData.then(res => setData(res));
    }, [])
    

    return (
    <div className="products">
        {data.map(item=>(
            <Item item={item} key={item.id}/>
        ))}
    </div>
    )
}

export default ItemList;
