"use client";
//dependencies
import React from "react";

//styles
import styles from "./button.module.css";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
