import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' ? null : <Navbar navbarStyle="bg-white" />}
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
