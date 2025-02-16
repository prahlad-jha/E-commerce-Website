import React from 'react'
import { FaShopify, FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import "./nav.css"
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
function Nav() {
  let dispatch = useDispatch()
  let items = useSelector(state=>state)
  return (
    <div className="nav">
      <div className="top-nav">
      <Link to="/"> <div className="logo">
          <span>V-SHOP</span>
          <FaShopify />
        </div></Link> 
        <form className="search-box">
          <input type="text" placeholder="Search Items..." />
          <button type="submit">
            <IoSearchSharp />
          </button>
        </form>
      <Link to ="/cart"> <div className="cart-box">
          <FaShoppingCart />
          <span>{items.cart.length}</span>
        </div>
        </Link>
      </div>
      <div className="bottom-nav">
        <ul>
         <Link to="/"><li>Home</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
         <Link to="/cart"><li>Cart</li></Link> 
         <Link to="/contact"> <li>Contact</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;