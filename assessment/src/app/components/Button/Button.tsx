"use client";
//dependencies
import React from "react";

//styles
import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  const buttonClass =
    type === "submit" ? `${styles.button} ${styles.submit}` : styles.button;
  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
