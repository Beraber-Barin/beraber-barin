import React from "react";
import TagBadge from "../TagBadge/TagBadge";
import styles from "./TagInputField.module.scss";
const TagInputField = (props) => {
  const { tagList, leftContainerChildren, rightContainerChildren } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.tagGridContainer}>
        <div className={styles.header}>{leftContainerChildren}</div>
        <div className={styles.content}>
          {tagList.map((tag, i) => i < 6 && <TagBadge key={i} {...tag} />)}
        </div>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.tagGridContainer}>
        <div className={styles.header}>{rightContainerChildren}</div>
        <div className={styles.content}>
          {tagList.map(
            (tag, i) => i < 6 && <TagBadge key={i} {...tag} isSelected={true} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TagInputField;
