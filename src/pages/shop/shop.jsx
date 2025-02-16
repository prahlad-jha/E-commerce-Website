import React, { useState } from 'react'
import "./shop.css"
import { Category } from '../../categroy'
import { dummydata } from '../../dumydata'
import { FaShopify} from "react-icons/fa";
import Product from '../../components/product/product'
function Shop() {
     let [cate,setCate] = useState(dummydata)
       function filterProducts(Category){
        if(Category === "All"){
            setCate(dummydata)
        }
        else{
        const updatedata = dummydata.filter((item)=>(item.category===Category))
        setCate(updatedata)
        }
       }
  return (

   <div className="shop">
    <div className="heading">
        <span>Shop</span>
        <FaShopify />
    </div>
     <div className="category-section">
            {Category.map((item)=>(
               <div className="category-card" onClick={()=>{
                 filterProducts(item.name)
               }
               }>
                 <img src = {item.image} alt = ""/>
                 <span>{item.name}</span>
               </div>
             ))}
             </div>
             <div className="product-section">
          {cate.map((item)=>(
            <Product name ={item.name} price = {item.price} image = {item.image} id = {item.id}/>
          ))}
        </div>
   </div>
  )
}

export default Shop