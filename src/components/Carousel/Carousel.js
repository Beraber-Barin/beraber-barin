import React from "react";
import styles from "./Carousel.module.scss";
const Carousel = (props) => {
  const { title, data } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4>{title}</h4>
      </div>
      <div className={styles.body}>
        {data.map((media) => {
          const { title, text, imgUrl } = media;
          return (
            <div className={styles.mediaWrapper}>
              <img src={imgUrl} />
              <div className={styles.mediaContent}>
                <p>{title}</p>
                <span>{text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
