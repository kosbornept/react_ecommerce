import React, { useEffect, useState } from 'react'
import { Product } from './product';
import './shop.css';

export const Shop = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                setProductData(json);
            })
    }, [setProductData])

    return (
        <div className='shop'>
            <div className='shop__title'>
                <h1>Products</h1>
            </div>
            <div className='shop__products'>
                {productData.map((product) => (
                    <Product key={product.id} data={product} />
                ))}                
            </div>
        </div>
    )
}
