import React from 'react';
import Navigation from './Nav';

const Header = () => {
    return (
        <header>
            <div className = "header-container">
                <h1>Maya Chakravarty</h1>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;