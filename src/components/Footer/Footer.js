import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.companyContent}>
          <CompanyInfo isLogoVisible isCompanyNameVisible />
          <div className={styles.companyTextContainer}>
            <span>
              Üniversite öğrencilerinin ev arkadaşı bulmak için ihtiyacı olan
              tek internet sitesi
            </span>
          </div>
        </div>
        <div className={styles.siteNavigationsContainer}>
          <div className={styles.navColumns}>
            <Link to="/">Anasayfa</Link>
            <Link to="/">İlanlarım</Link>
            <Link to="/">Takip ettiklerim</Link>
            <Link to="/">Profil</Link>
          </div>
          <div className={styles.navColumns}>
            <Link to="/">Gizlilik İlkeleri</Link>
            <Link to="/">Vizyon</Link>
            <Link to="/">Neden Beraber Barın?</Link>
          </div>
          <div className={styles.navColumns}>
            <Link to="/">Haberler</Link>
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.linkContainer}>
          <Link to="/">Instagram</Link>
          <Link to="/">Twitter</Link>
          <Link to="/">Facebook</Link>
          <Link to="/">Destek</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
