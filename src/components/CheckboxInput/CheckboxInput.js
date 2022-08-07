import React from "react";
import styles from "./CheckboxInput.module.scss";
const CheckboxInput = (props) => {
  const { text, name, checked, disabled, value, onChange } = props;
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={name}
        name={name}
        disabled={disabled}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{text}</label>
    </div>
  );
};

export default CheckboxInput;
