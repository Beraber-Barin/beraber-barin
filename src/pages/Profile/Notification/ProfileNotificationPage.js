import React, { useState } from "react";
import styles from "./ProfileNotificationPage.module.scss";
import CheckboxInput from "../../../components/CheckboxInput/CheckboxInput";
import Button from "../../../components/Button/Button";
import btnStyles from "../../../components/Button/Button.module.scss";

const ProfileNotificationPage = () => {
  const [checkboxValue, setCheckboxValue] = useState({
    cb1: true,
    cb2: false,
    cb3: false,
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
      <h3>Bildirim Tercihlerim</h3>
      <p>Bildirim tercihlerini burada düzenleyebilirsin.</p>
      <div className={styles.checkboxContainer}>
        <CheckboxInput
          text="Senin için uygun olabileceğini düşündüğümüz ilanlar hakkında bildirim yolla"
          name="cb1"
          value={checkboxValue.cb1}
          checked={checkboxValue.cb1}
          onChange={handleOnChange}
        />
        <CheckboxInput
          text="Takip ettiğim ilanlarda değişiklilik olursa bildirim yolla"
          name="cb2"
          value={checkboxValue.cb2}
          checked={checkboxValue.cb2}
          onChange={handleOnChange}
        />
        <CheckboxInput
          text="İlanımı takip eden olursa bildirim yolla"
          name="cb3"
          value={checkboxValue.cb3}
          checked={checkboxValue.cb3}
          onChange={handleOnChange}
        />
        <CheckboxInput
          text="İlanımla ilgili gelişmeler hakkında bildirim yolla"
          name="cb4"
          value={checkboxValue.cb4}
          checked={checkboxValue.cb4}
          onChange={handleOnChange}
        />
        <CheckboxInput
          text="Birisi mesaj yollarsa bildirim yolla"
          name="cb5"
          value={checkboxValue.cb5}
          checked={checkboxValue.cb5}
          onChange={handleOnChange}
        />
      </div>
      <div>selectinput</div>
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

export default ProfileNotificationPage;
