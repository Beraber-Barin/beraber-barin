import React, { useState } from "react";
import styles from "./Register.module.scss";
import Button from "../../Button/Button";
import btnStyles from "../../Button/Button.module.scss";
import { Link } from "react-router-dom";
const Register = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordAgain: "",
  });
  const handleOnChange = (e) => {
    setInputValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.nameInputs}>
        <div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="name"
              name="name"
              value={inputValues.name}
              placeholder="Ad"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="surname"
              name="surname"
              value={inputValues.surname}
              placeholder="Soyad"
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="email"
          id="email"
          name="email"
          value={inputValues.email}
          placeholder="Edu mail adresi"
          onChange={handleOnChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="password"
          id="password"
          name="password"
          value={inputValues.password}
          placeholder="Şifre"
          onChange={handleOnChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="password"
          id="passwordAgain"
          name="passwordAgain"
          value={inputValues.passwordAgain}
          placeholder="Şifre tekrar"
          onChange={handleOnChange}
        />
      </div>
      <Button
        className={btnStyles.btn + " " + btnStyles.primary + " " + styles.btn}
        buttonText="Kaydol"
      />
      <Link to="/">Neden Beraber Barın?</Link>
    </div>
  );
};

export default Register;
