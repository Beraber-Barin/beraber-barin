import React from "react";
import styles from "./InputBar.module.scss";
import Button from "../Button/Button";
import btnStyles from "../Button/Button.module.scss";
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";
import { ReactComponent as ShuffleIcon } from "../../assets/svg/shuffle.svg";
import { useNavigate } from "react-router-dom";
const InputBar = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div style={{ width: "250px", backgroundColor: "grey" }}>select</div>
      <div>
        <Button
          className={btnStyles.btn + " " + btnStyles.secondary}
          buttonText="Konumumda rastgele ilan bul"
          leftIcon={<ShuffleIcon />}
          type="button"
          // onClick={sayHello}
        />
      </div>
      <div>
        <Button
          className={btnStyles.btn + " " + btnStyles.secondary}
          buttonText="En çok takip edilen ilanlara göz at"
          type="button"
          // onClick={sayHello}
        />
      </div>
      <div>
        <Button
          className={btnStyles.btn + " " + btnStyles.primary}
          buttonText="İlan oluştur"
          leftIcon={<PlusIcon />}
          type="button"
          onClick={() => navigate("/ilanlarim")}
        />
      </div>
    </div>
  );
};

export default InputBar;
