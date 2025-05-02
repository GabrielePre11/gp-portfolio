import React from 'react'
import { motion } from 'framer-motion';
import './Projects.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import { FaGithub } from "react-icons/fa";

import project1 from '../../../assets/images/Progetto1.png'
import project2 from '../../../assets/images/Progetto2.png'
import project3 from '../../../assets/images/Progetto3.png'
import Button from '../../Button/Button';

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: project1,
            href: "https://github.com/GabrielePre11/educity-react.git",
            title: 'Educity Website',
            description: "Educity è una replica di un sito educativo sviluppata con React e Vite come mio primo progetto e che mi ha permesso di mettere in pratica le basi e gli hooks principali.",
            languages: ['HTML', 'CSS', 'JavaScript', 'React']
        },

        {
            id: 2,
            image: project2,
            href: "https://github.com/GabrielePre11/Form-Veicoli-in-TS.git",
            title: 'Form Veicoli',
            description: "Un form in cui l'utente può inserire nei vari campi le informazioni (ex. numero di targa e carburante) di varie categorie di veicoli, registrarli e mostrarli in una lista.",
            languages: ['HTML', 'CSS', 'TypeScript']
        },

        {
            id: 3,
            image: project3,
            href: "https://github.com/GabrielePre11/Music-Player.git",
            title: 'Music Player',
            description: "Una semplice interfaccia di un lettore musicale che permette di riprodurre una canzone e mostrare informazioni come titolo, artista e la durata.",
            languages: ['HTML', 'CSS', 'JavaScript']
        }
    ];

    // For animations
    const MobileView = window.innerWidth < 768;

    return (
        <section className="section projects" aria-label='projects section' id="projects">
            <div className="container">
                <SectionTitle title="Alcuni Progetti" />

                <ul className="grid-list">
                    {projects.map(({ id, image, href, title, description, languages }) => (
                        <motion.li
                            initial={{ opacity: 0, x: MobileView ? -30 : 0, y: MobileView ? 0 : -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.3 * id }}
                            key={id}
                            className="project-card">
                            <figure className="project-image-wrapper">
                                <img src={image} alt={title} className="project-img" loading='lazy' />

                                {id === 1 && (
                                    <a href="https://educity-react-mu.vercel.app/" target='_blank'>
                                        <Button label="Demo" />
                                    </a>
                                )}

                                <a href={href} target='_blank'>
                                    <FaGithub className='github-icon' />
                                </a>
                            </figure>

                            <div className="card-content">
                                <h3 className="project-title">{title}</h3>

                                <p className="card-desc">
                                    {description}
                                </p>

                                <ul className="projects-languages">
                                    {languages.map((lang, index) => (
                                        <li key={index} className='card-lang'>{lang}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects