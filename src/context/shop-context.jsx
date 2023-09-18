import React, { createContext, useState, useEffect } from 'react'
// import { productData } from '../pages/shop/shop'

export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {}
//     for (let i=1; i < productData.length + 1; i++) {
//         cart[i] = 0;
//     }
//     return cart;
// }

export const ShopContextProvider = (props) => {
    const [productData, setProductData] = useState([]);
    // Default value 0 for each shopping item (20 in array)
    const [cartItems, setCartItems] = useState({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16:0, 17: 0, 18: 0, 19: 0, 20: 0});

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=> {
              setProductData(json);
          })
      }, [setProductData])

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = productData.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}