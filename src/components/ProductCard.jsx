import React from 'react';

const ProductCard = ({ stock = 0, title , price }) => {
    const handleMouseEnterImg = (elem) => {
        elem.target.classList.add('opacity-1');
        elem.target.classList.remove('opacity-0');
    };

    const handleMouseLeaveImg = (elem) => {
        elem.target.classList.add('opacity-0');
        elem.target.classList.remove('opacity-1');
    };

    return (
        <div className='flex flex-col items-center gap-5 w-fit'>
            <div className='relative'>
                <img src="/assets/images/products/p-1-back.webp" className='absolute top-0 opacity-0 w-72 transition-all duration-300' onMouseEnter={handleMouseEnterImg} onMouseLeave={handleMouseLeaveImg} />
                <img src="/assets/images/products/p-1.webp" className='justify-center w-72 opacity-1' />
                {stock === 0 && <span className='absolute top-0 left-0 pl-[17px] pt-[17px] text-gray-500 text-[12px]'>SOLD OUT</span>}
            </div>
            <div className='text-gray-500'>
                <h6>{title}</h6>
                <span className='block text-center'>${price}</span>
            </div>
        </div>
    );
};

export default ProductCard;
