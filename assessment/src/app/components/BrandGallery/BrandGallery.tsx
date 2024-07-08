"use client";
//dependencies
import React from "react";

//styles
import styles from "./gallery.module.css";

//icons
import ArrowLeft from "@/app/components/Icons/ArrowLeft";
import Microsoft from "@/app/components/Icons/Microsoft";
import Twitter from "@/app/components/Icons/Twitter";
import CocaCola from "@/app/components/Icons/CocaCola";
import ArrowRight from "@/app/components/Icons/ArrowRight";

const BrandGallery: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centerContent}>
        <p className={styles.heading}>Trusted by</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>
      </div>
      <div className={styles.brands}>
        <ArrowLeft />
        <div className={styles.svgContainer}>
          <Microsoft />
          <Twitter />
          <CocaCola />
        </div>
        <ArrowRight />
      </div>
    </div>
  );
};

export default BrandGallery;
