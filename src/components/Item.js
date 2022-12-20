import ItemCount from "./ItemCount";
import "./Item.css";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({item}) => {

    return (

    <div className="product">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{item.product}</h5>
            <button onClick={<ItemDetailContainer />}>Ver detalle</button>
            <ItemCount stock={item.stock} />
        </div>
    </div>

    )
}

export default Item;
