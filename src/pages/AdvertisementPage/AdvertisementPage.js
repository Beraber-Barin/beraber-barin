import React from "react";
import styles from "./AdvertisementPage.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import btnStyles from "../../components/Button/Button.module.scss";
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";
import { carouselData } from "../../assets/sampleData/carouselData";
import AdvertisementBadge from "../../components/AdvertisementBadge/AdvertisementBadge";
const AdvertisementPage = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>İlanlarım</h3>
        <Button
          className={btnStyles.btn + " " + btnStyles.primary}
          buttonText="İlan oluştur"
          leftIcon={<PlusIcon />}
          type="button"
          onClick={() => navigate("/ilanlarim")}
        />
      </div>
      <div className={styles.advertisements}>
        {carouselData.map((advert, i) => {
          return i < 5 && <AdvertisementBadge key={i} {...advert} />;
        })}
      </div>
    </div>
  );
};

export default AdvertisementPage;
