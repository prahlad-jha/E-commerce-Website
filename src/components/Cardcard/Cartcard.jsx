import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import "./Cardcard.css"
import image1 from "../../assets/image1.jpg"
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';
function Cartcard({name,price,image,id}) {
  let dispatch = useDispatch()
  return (
    <>
   <div className="cartcard">
    <div className="left-card">
      <img src= {image}alt="" />
      <div className="name-price">
        <span>{name}</span>
        <span>Rs {price}</span>
      </div>
    </div>
    <div className="right-card">
      <button onClick={()=>{
      dispatch(RemoveItem(id))
      alert("Product Removed Successfully...")
      }}>Remove <AiTwotoneDelete /></button>
    </div>
   </div>
   </>
  )
}

export default Cartcard