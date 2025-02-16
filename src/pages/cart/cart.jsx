import React from 'react'
import "./cart.css"
import Cartcard from '../../components/Cardcard/Cartcard'
import { useSelector } from 'react-redux'
import ec from "../../assets/emptycart.png"

function Cart() {
  let items = useSelector(state=>state)
  let total = items.cart.reduce((a,b)=>a+b.price,0)
  return (
     <div className='cart'>
    {items.cart.length<=0?<div className="empty-card">
       <img src={ec} alt="" />
       <h1>Empty card</h1>

    </div>: <div className="cartcard-section">
      {items.cart.map((item)=>(
        <Cartcard name={item.name} price={item.price} image={item.image} id={item.id}/>
      ))}
    </div>
     }
     <div className="price-section">
      <span>Total Products: {items.cart.length} </span>
      <span>Total Price: {total}</span>
     </div>
     </div>
  )
}

export default Cart