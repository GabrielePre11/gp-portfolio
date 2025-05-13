import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

import { BsGrid } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <a href="/" className="logo" aria-label="Gabriele">
          <h3>Gabriele</h3>
        </a>

        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <BsGrid
          className={`open-menu ${isMenuOpen ? "opened" : ""}`}
          onClick={toggleMenu}
          aria-label="Open menu"
        />
      </div>
    </motion.header>
  );
};

export default Header;
