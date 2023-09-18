import React, { useEffect, useState, useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';
import './cart.css'

export const Cart = () => {
  const [productData, setProductData] = useState([]);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> {
          setProductData(json);
      })
  }, [setProductData])
  return (
    <div className='cartWrapper'>
      <div className='cart'>
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className='cart'>
          {productData.map((product) => {
            if(cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />
            }
          })}  
        </div>
      </div>
      <div>
        {totalAmount > 0 ?
        <div className='checkout'>
          
          <h3>Subtotal: {totalAmount}€</h3>
          <div>
            <button className='checkoutBtn' onClick={() => navigate("/shop")}>Continue Shopping</button>
            <button disabled>Checkout</button>
          </div>
        </div>
        : <h1>Your Cart is Empty</h1> } 
      </div>
    </div>
        
  )
}

