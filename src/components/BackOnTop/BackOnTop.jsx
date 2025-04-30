import React from 'react'
import './BackOnTop.css'
import { FaArrowUp } from "react-icons/fa";

const BackOnTop = ({ isVisible }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a onClick={scrollToTop} aria-label='Scroll to top'> <FaArrowUp className={`back-on-top ${isVisible ? 'visible' : ''}`} /> </a>
    )
}

export default BackOnTop