import { products } from '../data.js';
import Item from "./Item.js";

const List = () => {

    return (
        <div>
            {products.map(item=>(
                <Item item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List;
