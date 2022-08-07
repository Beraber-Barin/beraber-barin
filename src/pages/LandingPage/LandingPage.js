import React from "react";
import styles from "./LandingPage.module.scss";
import wave from "../../assets/svg/wave.svg";
import LandingPageLoginOrRegister from "../../components/LandingPageLoginOrRegister/LandingPageLoginOrRegister";
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <CompanyInfo isCompanyNameVisible />
      </nav>
      <div className={styles.content}>
        <div className={styles.company}>
          <CompanyInfo isLogoVisible />
          <p>
            Beraber Barın ile ev arkadaşı bulmak artık çok kolay! Edu mail
            adresinle kaydol, binlerce ilana göz at veya kendi ilanını yarat!
          </p>
        </div>
        <div className={styles.inputField}>
          <LandingPageLoginOrRegister />
        </div>
      </div>
      <div className={styles.hero}>
        <img src={wave} />
      </div>
    </div>
  );
};

export default LandingPage;
