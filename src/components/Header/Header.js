import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="mx-auto">
                    <Link className="navbar-brand" to="/home">HOME</Link>
                    <Link className="navbar-brand" to="/reviews">REVIEWS</Link>
                    <Link className="navbar-brand" to="/dashbord">DASHBORD</Link>
                    <Link className="navbar-brand" to="/blogs">BLOGS</Link>
                    <Link className="navbar-brand" to="/about">ABOUT</Link>

                </div>
            </nav>

        </div>
    );
};

export default Header;