import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ navbarStyle = "bg-white" }) => {
    return (
        <nav className={`w-full fixed top-0 z-10 ${navbarStyle} ${navbarStyle !== 'bg-white' ? null : "shadow-md"}`}>
            <div className="nav_interior h-[80px] flex justify-between items-center relative">
                <div className={`brand_logo mx-auto ${navbarStyle !== 'bg-white' ? "text-white" : "text-black"}`}>Aestin</div>
                <div className='flex gap-12 items-center absolute right-[48px]'>
                    <Link to="">
                        <img src="assets/icons/search.png" title='Search' alt="Search" className={`${navbarStyle !== "bg-white" ? "" : "invert"}`} />
                    </Link>
                    <Link to="">
                        <img src="assets/icons/user.png" title='User Profile' alt="User profile" className={`${navbarStyle !== "bg-white" ? "" : "invert"}`} />
                    </Link>
                    <Link to="" className='cart_icon'>
                        <img src="assets/icons/cart.png" title='Shopping cart' alt="Shopping cart" className={`${navbarStyle !== "bg-white" ? "" : "invert"}`} />
                        <span className={`absolute inset-0 top-1/2 -translate-y-[29%] flex items-center justify-center text-xs ${navbarStyle !== 'bg-white' ? "text-white" : "text-black"}`}>
                            33
                        </span>
                    </Link>
                    <Link to="">
                        <img src="assets/icons/menu.png" title='Menu' alt="Menu" className={`${navbarStyle !== "bg-white" ? "" : "invert"}`} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar