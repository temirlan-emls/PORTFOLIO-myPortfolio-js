import React from 'react';
import NavBurger from '../components/navBurger/navBurger';
import Cursor from '../components/cursor/cursor';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
    return (
        <>
            {' '}
            <NavBurger />
            <Cursor />
            <Outlet />
        </>
    );
};

export default LayoutPage;
