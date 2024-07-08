"use client";

//dependencies
import React, { useState } from "react";

//styles
import styles from "./nav.module.css";

//components
import Button from "../Button";

//icons
import Logo from "../Icons/Logo/Logo";

interface NavBarProps {
  options: string[];
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ options, className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${styles.header}  ${className} ${
        menuOpen ? styles.menuOpen : ""
      }`}
    >
      <Logo />
      <div className={styles.rightContent}>
        <>
          {options.map((option, index) => (
            <p key={index} className={styles.content}>
              {option}
            </p>
          ))}
          <Button text={"Contact Us"} />
        </>
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={styles.menuIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
