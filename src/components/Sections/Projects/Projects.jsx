import React from 'react'
import { motion } from 'framer-motion';
import './Projects.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import { FaGithub } from "react-icons/fa";

import educityProject from '../../../assets/images/educity.png'
import formProject from '../../../assets/images/form.png'
import musicPlayerProject from '../../../assets/images/musicPlayer.png'
import ToDo from '../../../assets/images/TODO.png'
import Meteo from '../../../assets/images/Meteo.png'
import Quiz from '../../../assets/images/Quiz.png'

import Button from '../../Button/Button';

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: Quiz,
            href: "https://github.com/GabrielePre11/gp-quiz-app",
            title: 'Quiz App',
            description: "Una Quiz App sviluppata in React, TypeScript e TailwindCSS v4, con un totale di 10 domande e 4 opzioni disponibli per ogni domanda!",
            languages: ['React', 'TailwindCSS', 'TypeScript']
        },

        {
            id: 2,
            image: Meteo,
            href: "https://github.com/GabrielePre11/meteo-app",
            title: 'Weather/Meteo App',
            description: "Una semplice App Meteo creata in React, TypeScript e Tailwind CSS v4. Le API sono fornite da OpenWeatherMap.",
            languages: ['React', 'TailwindCSS', 'TypeScript']
        },

        {
            id: 3,
            image: ToDo,
            href: "https://github.com/GabrielePre11/todo-list",
            title: 'To-Do List',
            description: "Una moderna To-Do List creata con React, Vite, TypeScript e TailwindCSS v4, che permette l'aggiunta di nuove attività, l'eliminazione delle attività e il salvataggio con localStorage",
            languages: ['React', 'TailwindCSS', 'TypeScript']
        },

        {
            id: 4,
            image: educityProject,
            href: "https://github.com/GabrielePre11/educity-react.git",
            title: 'Educity Website',
            description: "Educity è una replica di un sito educativo sviluppata con React e Vite come mio primo progetto e che mi ha permesso di mettere in pratica le basi e gli hooks principali.",
            languages: ['HTML', 'CSS', 'JavaScript', 'React']
        },

        {
            id: 5,
            image: formProject,
            href: "https://github.com/GabrielePre11/Form-Veicoli-in-TS.git",
            title: 'Form Veicoli',
            description: "Un form in cui l'utente può inserire nei vari campi le informazioni (ex. numero di targa e carburante) di varie categorie di veicoli, registrarli e mostrarli in una lista.",
            languages: ['HTML', 'CSS', 'TypeScript']
        },

        {
            id: 6,
            image: musicPlayerProject,
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
                <SectionTitle title="Progetti" />

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

                                {id === 4 && (
                                    <a href="https://educity-react-mu.vercel.app/" target='_blank'>
                                        <Button label="Demo" />
                                    </a>
                                )}

                                {id === 1 && (
                                    <a href="https://gp-quiz-app.vercel.app/" target='_blank'>
                                        <Button label="Demo" />
                                    </a>
                                )}

                                {id === 2 && (
                                    <a href="https://gp-meteo-app.vercel.app/" target='_blank'>
                                        <Button label="Demo" />
                                    </a>
                                )}

                                {id === 3 && (
                                    <a href="https://todo-list-woad-sigma.vercel.app/" target='_blank'>
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