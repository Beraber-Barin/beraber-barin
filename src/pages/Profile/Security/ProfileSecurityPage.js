import React, { useState } from "react";
import styles from "./ProfileSecurityPage.module.scss";
import Button from "../../../components/Button/Button";
import btnStyles from "../../../components/Button/Button.module.scss";
const ProfileSecurityPage = () => {
  const [inputValues, setInputValues] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordAgain: "",
    email: "",
    gsm: "",
  });
  const handleOnChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    console.log(typeof e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <h3>Güvenlik</h3>
      <p>Güvenlik tercihlerini burada düzenleyebilirsin.</p>
      <div className={styles.allInputContainer}>
        <div className={styles.passwordsContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="currentPassword">Mevcut Şifre</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={inputValues.currentPassword}
              placeholder="Şifrenizi giriniz"
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="newPassword">Yeni Şifre</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={inputValues.newPassword}
              placeholder="Yeni şifre giriniz"
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="newPasswordAgain">Yeni Şifre - Tekrar</label>
            <input
              type="password"
              id="newPasswordAgain"
              name="newPasswordAgain"
              value={inputValues.newPasswordAgain}
              placeholder="Yeni şifrenizi tekrar giriniz"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Kurtarma mail adresi</label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputValues.email}
              placeholder="Mail adresiniz"
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="gsm">Telefon numarası</label>
            <input
              type="tel"
              id="gsm"
              name="gsm"
              value={inputValues.gsm}
              placeholder="+(90)531 *** ** **"
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
      <div>
        Güçlü bir şifre için ipuçları:
        <br />
        -En az 8 karakter olmalı <br />
        -Sayı, büyük harf ve özel karakter içermeli <br />
        -Doğum günün, 1234 gibi kolay tahmin edilebilir sayılar içermemeli
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.resetPassword}>
          Şifreni hatırlamıyor musun? Şifreni sıfırla.
        </div>
        <div className={styles.btnContainer}>
          <Button
            className={
              btnStyles.btn + " " + btnStyles.secondary + " " + styles.btn
            }
            buttonText="İptal Et"
          />
          <Button
            className={
              btnStyles.btn + " " + btnStyles.primary + " " + styles.btn
            }
            buttonText="Kaydet"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSecurityPage;
