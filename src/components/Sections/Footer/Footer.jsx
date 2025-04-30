import React from 'react'
import './Footer.css'

import { IoIosMail } from "react-icons/io";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const footerLinks = [
        {
            id: 1,
            icon: <IoIosMail className='footer-icon' />,
            name: 'prestano.gabriele@outlook.com',
            link: "mailto:prestano.gabriele@outlook.com"
        },

        {
            id: 2,
            icon: <RiLinkedinBoxFill className='footer-icon' />,
            name: 'linkedin.com/gabriele-prestano',
            link: "https://www.linkedin.com/in/gabriele-prestano-70a346357"
        },

        {
            id: 3,
            icon: <FaGithub className='footer-icon' />,
            name: 'github.com/GabrielePre11',
            link: "https://github.com/GabrielePre11"
        }
    ];

    return (
        <footer className="section footer" id="contacts">
            <div className="container">
                <div className="footer-content">
                    <h2 className="footer-title">Contattami</h2>
                    <p className="contact">Potete contattarmi facilmente qui {window.innerWidth > 530 ? '👉🏼' : '👇🏼'}</p>
                </div>

                <ul className="grid-list">
                    {footerLinks.map(({ id, icon, name, link }) => (
                        <li key={id} className='footer-link'>
                            {icon}
                            <a href={link}>{name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer