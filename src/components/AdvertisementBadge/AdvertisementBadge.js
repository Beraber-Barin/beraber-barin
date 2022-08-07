import React from "react";
import styles from "./AdvertisementBadge.module.scss";
import { Link } from "react-router-dom";
import heart from "../../assets/svg/heart.svg";
import eye from "../../assets/svg/eye.svg";
const AdvertisementBadge = (props) => {
  const { title, text, date, views, likes, imgUrl } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.availablity}>Yayında</div>
      <div className={styles.body}>
        <div className={styles.imgContainer}>
          <img src={imgUrl} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h5>{title}</h5>
            <span>{date}</span>
          </div>
          <div className={styles.text}>{text}</div>
          <div className={styles.icons}>
            <div className={styles.iconWrapper}>
              <img src={eye} />
              {views}
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.iconWrapper}>
                <img src={heart} />
                {likes}
              </div>
              <Link to="/">Detay için tıkla</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementBadge;
