import React from 'react'

const ProductInfo = () => {
    return (
        <>
            <div className="productWrapper">
                <div className="productContent">
                    <div className="productGallary">
                        <ul>
                            <li><img src="/assets/images/products/p-1.webp" alt="" /></li>
                            <li><img src="/assets/images/products/p-1.webp" alt="" /></li>
                            <li><img src="/assets/images/products/p-1.webp" alt="" /></li>
                            <li><img src="/assets/images/products/p-1.webp" alt="" /></li>
                        </ul>
                    </div>
                    <div className="productDetails">
                        <div className="productMain">
                            <div className="flex justify-between items-center">
                                <h1 className='product_title'>Piqué polo shirt</h1>
                                <span className='product_price'>$125.00</span>
                            </div>
                            <div className="flex"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo