"use client";
// dependencies
import React, { useState, useEffect } from "react";
import Input from "../Input/index";
import styles from "./form.module.css";
import Button from "../Button";

interface FormInput {
  label: string;
  placeholder: string;
  value: string;
  error: string;
  validator: (value: string) => string;
}

interface FormProps {
  formTitle: string;
  formDesc: string;
  inputs: FormInput[];
  onSubmit: (values: { [key: string]: string }) => void;
}

const Form: React.FC<FormProps> = ({
  formTitle,
  formDesc,
  inputs,
  onSubmit,
}) => {
  const [formState, setFormState] = useState(inputs);

  useEffect(() => {
    const savedFormState = formState.map((input) => {
      const savedValue = localStorage.getItem(input.label.toLowerCase());
      return {
        ...input,
        value: savedValue || input.value,
      };
    });
    setFormState(savedFormState);
  }, []);

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFormState = [...formState];
      newFormState[index].value = e.target.value;
      newFormState[index].error = newFormState[index].validator(e.target.value);
      setFormState(newFormState);
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = formState.every((input) => !input.error && input.value);
    if (isValid) {
      const values = formState.reduce((acc, input) => {
        acc[input.label.toLowerCase()] = input.value;
        return acc;
      }, {} as { [key: string]: string });

      const savedName = localStorage.getItem("name");
      const savedEmail = localStorage.getItem("email");
      if (values.name === savedName || values.email === savedEmail) {
        alert("Duplicate name or email detected!");
      } else {
        formState.forEach((input) => {
          localStorage.setItem(input.label.toLowerCase(), input.value);
        });
        onSubmit(values);
      }
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <div className={styles.heading}>{formTitle}</div>
      <div className={styles.text}>{formDesc}</div>
      {formState.map((input, index) => (
        <Input
          key={index}
          label={input.label}
          placeholder={input.placeholder}
          value={input.value}
          error={input.error}
          onChange={handleChange(index)}
        />
      ))}
      <Button text={"Submit"} type={"submit"} />
    </form>
  );
};

export default Form;
