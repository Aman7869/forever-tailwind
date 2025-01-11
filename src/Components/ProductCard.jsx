import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ image, productName, price,productId }) => {
    return (
        
            <div className='shadow-custom mb-3'>
                <div className='overflow-hidden'>
                    <img src={image} alt="product" className='h-[310px] w-[293px] transition ease-in-out hover:scale-110' />
                </div>
                <div className='product-details p-3'>
                    <p className='text-[#414141]'>{productName}</p>
                    <p className='text-[#414141]'>${price}</p>
                </div>
            </div>
     
    )
}

export default ProductCard