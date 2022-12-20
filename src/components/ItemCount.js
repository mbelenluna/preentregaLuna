import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ( {stock} ) => {

    const [contador, onAdd] = useState(1);

    return (
        <div>
            <div className="cantidad">
                <button onClick={() => {
                    onAdd(contador - 1);
                }}
                disabled={contador === 1}>-</button>
                {contador}
                <button onClick={() => {
                    onAdd(contador + 1);
                }}
                disabled={contador > stock}>+</button>
            </div>
            <div>
                <button className="agregar">Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount;