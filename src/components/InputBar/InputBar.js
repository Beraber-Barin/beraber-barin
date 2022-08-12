import React from "react";
import styles from "./InputBar.module.scss";
import Button from "../Button/Button";
import btnStyles from "../Button/Button.module.scss";
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";
import { ReactComponent as ShuffleIcon } from "../../assets/svg/shuffle.svg";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import { dropdownData } from "../../assets/sampleData/dropdownData";
import { useNavigate } from "react-router-dom";
import SelectInput from "../SelectInput/SelectInput";
const InputBar = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div>
        <SelectInput
          placeholder="Konum Değiştir - Üsküdar"
          dropdownIsVisibleIcon={<DownArrow />}
          dropdownIsHiddenIcon={<DownArrow />}
          data={dropdownData}
        />
      </div>
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
          onClick={() => navigate("/ilan-ekle")}
        />
      </div>
    </div>
  );
};

export default InputBar;
