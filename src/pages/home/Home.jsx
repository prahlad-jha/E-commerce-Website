import React, { useState } from 'react'
import Nav from '../../components/nav/nav'
import bg from "../../assets/bg0.gif"
import "./home.css"
import { Category } from '../../categroy'
import { dummydata } from '../../dumydata'
import Product from '../../components/product/product'
function Home() {
   let [cate,setCate] = useState(dummydata)
   function filterProducts(Category){
    const updatedata = dummydata.filter((item)=>(item.category===Category))
    setCate(updatedata)
   }

   
  return (
    <div className='home'>
         <div className="Hero-bg">
         <img src={bg} alt="" />
         </div>
         <div className="category-section">
         {Category.slice(0,5).map((item)=>(
            <div className="category-card" onClick={()=>{
              filterProducts(item.name)
            }
            }>
              <img src = {item.image} alt = ""/>
              <span>{item.name}</span>
            </div>
          ))}
         </div>
         <h1>Trending Products</h1>
        <div className="product-section">
          {cate.slice(0,7).map((item)=>(
            <Product name ={item.name} price = {item.price} image = {item.image} id={item.id}/>
          ))}
        </div>
       
    </div>
  )
}

export default Home