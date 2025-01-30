import { useLoaderData } from "react-router-dom";
import { Card } from "../layout/UI/Card";


export const Product = () => {
    const productsData = useLoaderData();
    console.log(productsData)

    return(
        productsData.map((curProduct)=>{
            return <Card key={curProduct.id} curProduct= {curProduct} />
        })
    )    
   
}



