import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';

const Home = () => {
    const [solidNav, setSolidNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const showcaseCategories = document.querySelector('.showcase_categories');
            if (showcaseCategories) {
                const rect = showcaseCategories.getBoundingClientRect();
                const isTouchingTop = rect.top <= 0;
                setSolidNav(isTouchingTop);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar navbarStyle={solidNav ? "bg-white" : "bg-transparent backdrop-blur-[6px]"} />

            {/* hero section  */}
            <div className="hero_section h-[100vh] w-full text-white flex justify-around items-end">
                <img src="/assets/images/hero_img.png" alt="Aestin" />
                <div className='h-full flex items-center'>
                    <div className='flex flex-col items-center'>
                        <h1>New summer<br />
                            Collection 2024</h1>
                        <Link to="">Discover</Link>
                    </div>
                </div>
            </div>

            {/* showcase_categories */}
            <div className="showcase_categories">
                <Link to='/product' className='showcase_category'>
                    <img className="last" src="assets/images/showcase (1).png" alt="Men" />
                    <h3 className='category_title'>Men</h3>
                </Link>
                <Link to='' className='showcase_category'>
                    <img src="assets/images/showcase (3).png" alt="Women" />
                    <h3 className='category_title'>Women</h3>
                </Link>
                <Link to='' className='showcase_category'>
                    <img src="assets/images/showcase (2).png" alt="Accessories" />
                    <h3 className='category_title'>Accessories</h3>
                </Link>
            </div>

            {/* showcase_clothes */}
            <div className="showcase_clothes flex flex-wrap justify-center w-full">
                <div className='flex justify-center'>
                    <Link className="showcase_cloth"><div className='image_wrapper'><img src="/assets/images/clothes (1).png" alt="Aestin Clothes" /></div></Link>
                    <Link className="showcase_cloth"><div className='image_wrapper'><img src="/assets/images/clothes (2).png" alt="Aestin Clothes" /></div></Link>
                </div>
                <div className='flex justify-center'>
                    <Link className="showcase_cloth"><div className='image_wrapper'><img src="/assets/images/clothes (3).png" alt="Aestin Clothes" /></div></Link>
                    <Link className="showcase_cloth"><div className='image_wrapper'><img src="/assets/images/clothes (4).png" alt="Aestin Clothes" /></div></Link>
                </div>
            </div>
        </>
    );
};

export default Home;
