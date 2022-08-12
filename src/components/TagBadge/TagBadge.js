import React from "react";
import styles from "./TagBadge.module.scss";
const TagBadge = (props) => {
  const { id, tagName, isSelected, ...args } = props;
  const handleClassName = () => {
    let baseClassName = styles.wrapper;
    if (isSelected) baseClassName = baseClassName + " " + styles.isSelected;
    return baseClassName;
  };
  return (
    <div className={handleClassName()} {...args}>
      <div className={styles.tagName}>{tagName}</div>
    </div>
  );
};

export default TagBadge;
