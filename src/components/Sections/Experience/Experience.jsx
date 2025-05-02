import React from 'react'
import { motion } from 'framer-motion';
import './Experience.css'
import SectionTitle from '../../SectionTitle/SectionTitle'

import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiUdemy } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaLaptopCode } from "react-icons/fa6";


const Experience = () => {
    const skills = [
        { id: 1, skill: 'HTML5', icon: <FaHtml5 /> },
        { id: 2, skill: 'CSS3', icon: <IoLogoCss3 /> },
        { id: 3, skill: 'JavaScript', icon: <BiLogoJavascript /> },
        { id: 4, skill: 'TypeScript', icon: <BiLogoTypescript /> },
        { id: 5, skill: 'React', icon: <FaReact /> },
        { id: 6, skill: 'TailwindCSS', icon: <RiTailwindCssFill /> }
    ];

    const experiencesAndStudies = [
        {
            id: 1,
            icon: <LiaSchoolSolid />,
            title: 'Istituto Superiore Majorana',
            date: 'Set 2018 - Giu 2023',
            subtitle: {
                listItem1: 'Diploma di Perito Informatico',
                listItem2: 'Corsi CISCO Networking Academy & Cybersecurity Essentials',
            },
        },

        {
            id: 2,
            icon: <FaLaptopCode />,
            title: 'Studio da autodidatta',
            date: 'Nov 2024 - Ad oggi',
            subtitle: {
                listItem1: 'HTML5, CSS3, JavaScript',
                listItem2: 'Attualmente (Apr 2025) sono concentrato su React e sto esplorando TailwindCSS',
            },
        },

        {
            id: 3,
            icon: <SiUdemy />,
            title: "Corso Udemy - JavaScript (+ TypeScript, Node.js, React.js, Vue.js)",
            date: 'Mar 2025 - Apr 2025',
            subtitle: {
                listItem1: 'Javascript, TypeScript, React.js, Vue.js',
                listItem2: 'Esplorazione di Node.js, Vue.js e Svelte',
            },
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="section experience"
            aria-label='experience section'
            id="experience">
            <SectionTitle title="Esperienza e studi" />

            <div className="container">
                <ul className="skills">
                    {skills.map(({ id, skill, icon }) => (
                        <li key={id} className="skill-wrapper">
                            <motion.div
                                initial={{ opacity: 0, rotate: 360 }}
                                whileInView={{ opacity: 1, rotate: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.10 * id }}
                                className="experience-skill">
                                {icon}
                            </motion.div>
                            <motion.span
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.10 * id }}
                                className="skill-name">{skill}</motion.span>
                        </li>
                    ))}
                </ul>

                <ul className="grid-list">
                    {experiencesAndStudies.map(({ id, icon, title, date, subtitle }) => (
                        <li key={id} className='experience-item'>
                            <span className="experience-icon">{icon}</span>

                            <div className="info">
                                <h3 className="info-title">{title}</h3>
                                <p className="info-date">{date}</p>

                                <ul className="subtitle">
                                    {Object.entries(subtitle).map(([key, value]) => (
                                        <li key={key} className="subtitle-item">
                                            {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.section>
    )
}

export default Experience