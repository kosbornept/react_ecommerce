import React, { useContext } from 'react'

import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, title, price, category, description, image } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={image} />
        <div className='product__description'>
          <h2 className='product__description__title'>{title}</h2>
          <h3 className='product__description__price'>{price}€</h3>
          {/* {category == "men's clothing" && <button className='product__category_mens' disabled>{category}</button>}
          {category == "jewelery" && <button className='product__category_jewelery' disabled>{category}</button>}
          {category == "electronics" && <button className='product__category_electronics' disabled>{category}</button>}
          {category == "women's clothing" && <button className='product__category_womens' disabled>{category}</button>} */}
        </div>
        <button onClick={() => addToCart(id)} className='addToCartBtn'>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}
