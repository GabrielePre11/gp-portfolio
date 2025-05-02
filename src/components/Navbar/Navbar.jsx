import React, { useEffect, useRef } from 'react'
import './Navbar.css'

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
    const links = [
        { label: 'About', href: 'about' },
        { label: 'Esperienza', href: 'experience' },
        { label: 'Progetti', href: 'projects' },
        { label: 'Contatti', href: 'contacts' }
    ];

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    // Handle the click of the user outside the nav menu (mobile)
    const nav = useRef(null);

    const clickOutside = (e) => {
        if (nav.current && !nav.current.contains(e.target)) {
            setIsMenuOpen(false)
        }
    }

    useEffect(() => {
        isMenuOpen ? document.addEventListener('mousedown', clickOutside) : document.removeEventListener('mousedown', clickOutside)

        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav ref={nav} className={`navbar ${isMenuOpen ? 'opened' : ''}`}>
            <ul className='nav-list'>
                {links.map(({ label, href }, key) => (
                    <li key={key}>
                        <a href={`#${href}`} className="nav-link" onClick={closeMenu}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar