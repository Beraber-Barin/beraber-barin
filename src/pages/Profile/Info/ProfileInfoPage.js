import React, { useState, useRef } from "react";
import userPicturePlaceholder from "../../../assets/svg/userPicturePlaceholder.svg";
import cameraWithCircle from "../../../assets/svg/cameraWithCircle.svg";
import styles from "./ProfileInfoPage.module.scss";
const ProfileInfoPage = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    surname: "",
    date: "",
  });
  const imageInputRef = useRef(null);
  const handleOnChange = (e) => {
    console.log(e);
    console.log(typeof e.target.value);
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.wrapper}>
      <h3>Kullanıcı Bilgilerim</h3>
      <p>
        İnsanların seni tanıması için gereken temel bilgilerini bu sayfada
        düzenleyebilirsin.
      </p>
      <div className={styles.allInputContainer}>
        <div className={styles.nameInputsWrapper}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Ad</label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputValues.name}
              placeholder="Ahmet"
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="surname">Soyad</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={inputValues.surname}
              placeholder="Özefe"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="date">Doğum Tarihi</label>
          <input
            type="date"
            name="date"
            id="date"
            value={inputValues.date}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className={styles.pictureContainer}>
        <h5>Profil Fotoğrafı</h5>
        <div
          className={styles.pictureWrapper}
          onClick={() => imageInputRef.current.focus()}
        >
          {/* <input
            src={userPicturePlaceholder}
            type="image"
            ref={imageInputRef}
          /> */}
          <img src={userPicturePlaceholder} />
          <div className={styles.blurContainer}>
            <img src={cameraWithCircle} />
          </div>
        </div>
        <p>Yüksek kaliteli, yüzünü net olarak gösteren bir fotoğraf yükle</p>
      </div>
    </div>
  );
};

export default ProfileInfoPage;
