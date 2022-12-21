import { products } from "../data.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Item from "./Item";

const ItemListContainer = () => {

    let { categoryId } = useParams();

    useEffect(()=>{

        products.then((res)=>{
            if(categoryId){
                getProducts(res.filter((item)=> item.category === categoryId))
            }else{
                getProducts(res)
            }
            })
            .catch((error)=> console.log(error))
        }, [categoryId])

    const getProducts = () => {

        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(
                    categoryId ? products.filter((product) => product.category === categoryId) : products
                );
            })
        })}



    return (
        <div className="products">
        {   products.map(item=>(
            <Item item={item} key={item.id}/>
            ))}
        </div>
    )}

export default ItemListContainer;