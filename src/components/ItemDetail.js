import "./ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

    return (
        <div className="product">
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.product}</h5>
                <p className="card-text">{item.brand}</p>
                <p>${item.price}</p>
                <p className="card-text"><small className="text-muted">{item.category}</small></p>
                <ItemCount stock={item.stock} />
        </div>
    </div>
    )};

export default ItemDetail;