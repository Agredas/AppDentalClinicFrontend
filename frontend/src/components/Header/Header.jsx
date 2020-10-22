import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </header>
    )
}
export default Header;