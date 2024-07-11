"use client";
//dependencies
import React from "react";

//styles
import styles from "./input.module.css";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  error,
  onChange,
}) => {
  return (
    <div className={styles.main}>
      <label className={styles.label}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
