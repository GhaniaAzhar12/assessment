const validateName = (value: string) => {
  if (!value) {
    return "Name is required.";
  }
  return "";
};
const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    return "Email is required.";
  } else if (!emailRegex.test(value)) {
    return "Invalid email address.";
  }
  return "";
};
export const inputs = [
  {
    label: "Name",
    placeholder: "Enter your name",
    value: "",
    error: "",
    validator: validateName,
  },
  {
    label: "Email",
    placeholder: "Enter your email",
    value: "",
    error: "",
    validator: validateEmail,
  },
];
