import ItemList from "./ItemList";
import { products } from "../data.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ItemListContainer = () => {

    const getProducts = () => {

    let { categoryId } = useParams();

    useEffect(()=>{

        products.then((res)=>{
            if(categoryId){
                setProductList(res.filter((item)=> item.category === categoryId))
            }else{
                setProductList(res)
            }
            })
            .catch((error)=> console.log(error))
        }, [categoryId])
    

        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(
                    categoryId ? products.filter((product) => product.category === categoryId) : products
                );
            })
        })}

    return (
    <div>
        <ItemList />
    </div>
    )}

export default ItemListContainer;