import React from 'react'
import { motion } from 'framer-motion';
import './About.css'
import SectionTitle from '../../SectionTitle/SectionTitle'

import { LuPuzzle } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";

const About = () => {
    const contentTexts = [
        {
            id: 1,
            span: "03/2004",
            text: "Ciao, mi chiamo Gabriele e ho 21 anni. Sono un aspirante Junior Front End Developer."
        },

        {
            id: 2,
            span: "2018 - 2023",
            text: "Ho sempre avuto una passione per l’informatica e lo sviluppo web. Durante il mio percorso in un istituto tecnico-informatico, ho studiato linguaggi di programmazione come C++ e Java, e appreso le basi di HTML. Ho inoltre seguito un percorso PCTO CISCO su Internet of Everything e Cybersecurity Essentials, e al quinto anno ho lavorato con CMS come Joomla e database come mySQL."
        },

        {
            id: 3,
            span: "2024 / 2025",
            text: "Dopo un’esperienza lavorativa estiva, ho deciso di dedicarmi completamente al Front-End Development, studiando da autodidatta HTML5, CSS3 e JavaScript, e iniziando a esplorare tecnologie come React, Git e framework moderni. Ad aprile 2025, ho completato un corso Udemy, che mi ha permesso di imparare JS, e mi ha introdotto a TypeScript, Node.js, e frameworks/librerie come React e Vue.js."
        }
    ];

    const softSkills = [
        {
            id: 1,
            icon: <LuPuzzle />,
            skill: "Problem Solving",
            description: "Quando incontro un problema, cerco sempre di suddividerlo in parti più piccole per trovare la soluzione migliore. Mi piace esplorare diverse opzioni per arrivare a quella più efficace."
        },

        {
            id: 2,
            icon: <TbListDetails />,
            skill: "Attenzione ai dettagli",
            description: "Mi piace prestare attenzione anche ai dettagli più piccoli, perché credo che sia ciò che faccia la differenza in ogni progetto."
        },

        {
            id: 3,
            icon: <RiTeamLine />,
            skill: "Lavoro di squadra",
            description: "Credo che il lavoro di squadra sia ottimo perché mi permette di confrontarmi con altre persone, in modo da poter scambiare idee o soluzioni per un problema, ascoltare consigli e imparare dalle esperienze altrui."
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="section about"
            aria-label='about section'
            id="about">
            <div className="container">
                <div className="about-content">
                    <SectionTitle title="About Me" />
                    {contentTexts.map(({ id, span, text }) => (
                        <div key={id} className="about-desc">
                            <span className="year">{span}</span>
                            <p className="about-text">{text}</p>
                        </div>
                    ))}
                </div>

                <ul className="grid-list">
                    {softSkills.map(({ id, icon, skill, description }) => (
                        <motion.li
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 * id }}
                            key={id}
                            className='soft-skill-item'>
                            <span className='icon'>{icon}</span>
                            <div className="informations">
                                <h3 className="skill">{skill}</h3>
                                <p className="desc">{description}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.section>
    )
}

export default About