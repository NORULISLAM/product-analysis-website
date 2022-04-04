import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="mx-auto">
                    <a className="navbar-brand" href="/home">HOME</a>
                    <a className="navbar-brand" href="/reviews">REVIEWS</a>
                    <a className="navbar-brand" href="/dashbord">DASHBORD</a>
                    <a className="navbar-brand" href="/blogs">BLOGS</a>
                    <a className="navbar-brand" href="/about">ABOUT</a>

                </div>
            </nav>

        </div>
    );
};

export default Header;