import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

import profilePic from "../../../assets/images/profile-pic.png";
import { FiDownload } from "react-icons/fi";
import Button from "../../Button/Button";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="section hero"
      aria-label="hero section"
      id="hero"
    >
      <div className="container">
        <div className="profile-wrapper">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src={profilePic}
            className="profile-pic"
            alt="Gabriele"
          />
          <div className="border"></div>
        </div>

        <div className="hero-content">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-subtitle"
          >
            ASPIRANTE FRONT END DEVELOPER
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-title"
          >
            Ciao, sono <span>Gabriele Prestano</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-desc"
          >
            Sono un aspirante front end developer di 21 anni con una grande
            passione per la programmazione e che sta costruendo il suo futuro.
          </motion.p>

          <div className="hero-buttons">
            <motion.a
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="#contacts"
            >
              <Button label="Contattami" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              href={"/CV-Gabriele-Prestano.pdf"}
              download={"CV-Gabriele-Prestano.pdf"}
            >
              <Button label="Scarica CV" icon={<FiDownload />} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
