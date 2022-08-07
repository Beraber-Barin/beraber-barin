import React, { useState } from "react";
import styles from "./LandingPageLoginOrRegister.module.scss";
import Login from "./Login/Login";
import Register from "./Register/Register";
const LandingPageLoginOrRegister = () => {
  const [tabSelect, setTabSelect] = useState("login"); //login or register
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabsWrapper}>
        <button
          type="button"
          onClick={() => setTabSelect("login")}
          className={
            tabSelect === "login"
              ? styles.tab + " " + styles.activeTab
              : styles.tab
          }
        >
          Giriş Yap
        </button>
        <button
          type="button"
          onClick={() => setTabSelect("register")}
          className={
            tabSelect === "register"
              ? styles.tab + " " + styles.activeTab
              : styles.tab
          }
        >
          Kaydol
        </button>
      </div>
      {tabSelect === "login" ? <Login /> : <Register />}
    </div>
  );
};

export default LandingPageLoginOrRegister;
