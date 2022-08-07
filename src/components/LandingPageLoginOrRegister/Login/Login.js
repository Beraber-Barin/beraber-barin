import React, { useState } from "react";
import styles from "./Login.module.scss";
import Button from "../../Button/Button";
import btnStyles from "../../Button/Button.module.scss";
import { Link } from "react-router-dom";
const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setInputValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className={styles.wrapper}>
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
      <Button
        className={btnStyles.btn + " " + btnStyles.primary + " " + styles.btn}
        buttonText="Giriş Yap"
      />
      <Link to="/">Şifremi unuttum</Link>
    </div>
  );
};

export default Login;
