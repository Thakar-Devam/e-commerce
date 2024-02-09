import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer_interior py-16 container mx-auto flex justify-between">
                <div className='useful_links flex gap-16'>
                    <div>
                        <h6 className='mb-6'>May We Help You?</h6>
                        <ul type='none'>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">My Orders</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Help & Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='mb-6'>The Company</h6>
                        <ul type='none'>
                            <li><a href="#">Carrier</a></li>
                            <li><a href="#">Privacy & Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className='social_icons'>
                    <h6 className='text-right mb-6'>Follow Us</h6>
                    <ul type="none" className='flex gap-5'>
                        <li><a href="#"><img src="assets/icons/Gmail.png" alt="Gmail" className="w-6" /></a></li>
                        <li><a href="#"><img src="assets/icons/Facebook.png" alt="Facebook" className="w-6" /></a></li>
                        <li><a href="#"><img src="assets/icons/Instagram.png" alt="Instagram" className="w-6" /></a></li>
                        <li><a href="#"><img src="assets/icons/YouTube.png" alt="YouTube" className="w-6" /></a></li>
                        <li><a href="#"><img src="assets/icons/Linkedin.png" alt="Linkedin" className="w-6" /></a></li>
                        <li><a href="#"><img src="assets/icons/X.png" alt="X" className="w-6" /></a></li>
                        <li><a href="#"><img src="assets/icons/TikTok.png" alt="TikTok" className="w-6" /></a></li>
                    </ul>
                </div>
            </div>
            <div className='footer_logo py-20'>
                <img src="/assets/images/AESTIN.png" alt="Aestin" className='m-auto w-4/5' />
            </div>
        </footer>
    )
}

export default Footer