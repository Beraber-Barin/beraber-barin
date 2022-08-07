import React from "react";
import InputBar from "../../components/InputBar/InputBar";
import Carousel from "../../components/Carousel/Carousel";
import { carouselData } from "../../assets/sampleData/carouselData";
import styles from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <InputBar />
      <Carousel title="Sana yakın (Üsküdar)" data={carouselData} />
      <Carousel title="Sana yakın (Üsküdar)" data={carouselData} />
      <Carousel title="Sana yakın (Üsküdar)" data={carouselData} />
    </div>
  );
};

export default HomePage;
