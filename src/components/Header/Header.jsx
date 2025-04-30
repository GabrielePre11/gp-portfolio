import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

import { BsGrid } from "react-icons/bs";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <header className="header">
            <div className="container">
                <a href="/" className="logo">
                    <h3>Gabriele</h3>
                </a>

                <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                <BsGrid className={`open-menu ${isMenuOpen ? 'opened' : ''}`} onClick={toggleMenu} aria-label='Open menu' />
            </div>
        </header>
    )
}

export default Header