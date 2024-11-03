import React from 'react';
import '../styles/nav.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/buy">Buy</a></li>
                <li><a href="/profile">Your Cart</a></li> {/* Updated to reflect grocery cart */}
            </ul>
        </nav>
    );
};

export default Nav;