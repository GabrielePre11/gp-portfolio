import React from 'react'
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

    return (
        <nav className={`navbar ${isMenuOpen ? 'opened' : ''}`}>
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