"use client";
//dependencies
import React from "react";
import { StaticImageData } from "next/image";

//styles
import styles from "./card.module.css";

interface CardProps {
  iconSrc: StaticImageData;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ iconSrc, title, text }) => {
  return (
    <div className={styles.card}>
      <img src={iconSrc.src} alt="icon" className={styles.icon} />
      <div className={styles.textContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default Card;
