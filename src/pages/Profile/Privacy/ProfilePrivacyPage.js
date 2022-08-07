import React, { useState } from "react";
import styles from "./ProfilePrivacyPage.module.scss";
import CheckboxInput from "../../../components/CheckboxInput/CheckboxInput";
import Button from "../../../components/Button/Button";
import btnStyles from "../../../components/Button/Button.module.scss";

const ProfilePrivacyPage = () => {
  const [checkboxValue, setCheckboxValue] = useState({
    cb1: false,
    cb2: true,
    cb3: true,
    cb4: false,
    cb5: false,
  });
  const handleOnChange = (e) => {
    setCheckboxValue((prevValues) => {
      return { ...prevValues, [e.target.name]: !prevValues[e.target.name] };
    });
  };
  React.useEffect(() => {
    console.log(checkboxValue);
  }, [checkboxValue]);
  return (
    <div className={styles.wrapper}>
      <h3>Gizlilik Tercihlerim</h3>
      <p>Gizlilik tercihlerini burada düzenleyebilirsin.</p>
      <div className={styles.checkboxContainer}>
        <CheckboxInput
          text="Profilimde yaşımı göster"
          name="cb1"
          value={checkboxValue.cb1}
          checked={checkboxValue.cb1}
          onChange={handleOnChange}
        />
        <CheckboxInput
          text="Sohbet penceresinde çevrim içi ibaresini göster (Kapatırsan diğerlerinin ibaresini de göremezsin)"
          name="cb2"
          value={checkboxValue.cb2}
          checked={checkboxValue.cb2}
          onChange={handleOnChange}
        />
        <CheckboxInput
          text="Mesajlaşmak için onay iste"
          name="cb3"
          value={checkboxValue.cb3}
          checked={checkboxValue.cb3}
          onChange={handleOnChange}
        />
        <CheckboxInput
          text="Profil fotoğrafımı sadece onay verdiğim kişilere göster"
          name="cb4"
          value={checkboxValue.cb4}
          checked={checkboxValue.cb4}
          onChange={handleOnChange}
        />
        <CheckboxInput
          text="Sohbette kötü kelimeleri gizle"
          name="cb5"
          value={checkboxValue.cb5}
          checked={checkboxValue.cb5}
          onChange={handleOnChange}
        />
      </div>

      <div className={styles.btnContainer}>
        <Button
          className={
            btnStyles.btn + " " + btnStyles.secondary + " " + styles.btn
          }
          buttonText="İptal Et"
        />
        <Button
          className={btnStyles.btn + " " + btnStyles.primary + " " + styles.btn}
          buttonText="Kaydet"
        />
      </div>
    </div>
  );
};

export default ProfilePrivacyPage;
