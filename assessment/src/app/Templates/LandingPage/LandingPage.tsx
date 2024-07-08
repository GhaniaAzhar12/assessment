"use client";
//dependencies
import React from "react";

//styles
import styles from "./landing.module.css";

//components
import NavBar from "@/app/components/NavBar";
import Card from "@/app/components/Card";
import BrandGallery from "@/app/components/BrandGallery";

//constants
import { footerOptions, headerOptions } from "@/app/constants/NavOptions";
import { feedback } from "@/app/constants/Feedback";

//images
import transition1 from "../../../../public/Transition_1.png";

const LandingPage: React.FC = () => {
  return (
    <div className={styles.content}>
      <NavBar options={headerOptions} />
      <div className={styles.twoColumnLayout}>
        <div className={styles.cardsContainer}>
          <h2>Lorem ipsum dolor sit amet yo 👋</h2>
          {feedback.map((card, index) => (
            <Card
              key={index}
              iconSrc={card.iconSrc}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
        <div>
          <img src={transition1.src} alt="icon" />
        </div>
      </div>

      <BrandGallery />
      <div style={{ backgroundColor: "#fff" }}>
        {" "}
        {feedback.map((card, index) => (
          <Card
            key={index}
            iconSrc={card.iconSrc}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
      <NavBar options={footerOptions} />
    </div>
  );
};

export default LandingPage;
