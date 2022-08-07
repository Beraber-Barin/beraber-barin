import React, { useState, useRef } from "react";
import styles from "./ProfileSupportPage.module.scss";
import { Link } from "react-router-dom";
import magnifier from "../../../assets/svg/magnifierGray.svg";

const ProfileSupportPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  return (
    <div className={styles.wrapper}>
      <h3>Destek</h3>
      <p>Bu sayfada aradığın yardımı bulabilirsin.</p>
      <div className={styles.inputContainer}>
        <label htmlFor="search">Destek makaleleri içinde ara</label>
        <div
          className={styles.inputWrapper}
          onClick={() => inputRef.current.focus()}
        >
          <img src={magnifier} onClick={() => inputRef.current.focus()} />
          <input
            type="text"
            id="search"
            name="search"
            value={searchValue}
            placeholder="Makaleler içinde ara"
            onChange={(e) => setSearchValue(e.target.value)}
            ref={inputRef}
          />
        </div>
      </div>
      <div className={styles.linksWrapper}>
        <p>İlgini çekebilir</p>
        <Link to={window?.location?.pathname}>
          Nasıl daha iyi ilan açıklaması yazarım?
        </Link>
        <Link to={window?.location?.pathname}>
          Beraber Barın sitesi üzerinden neler paylaşmamalıyım?
        </Link>
        <Link to={window?.location?.pathname}>
          Nasıl daha iyi fotoğraflar çekerim?
        </Link>
        <Link to={window?.location?.pathname}>
          Beraber Barın bilgilerimle ne yapıyor?
        </Link>
      </div>
    </div>
  );
};

export default ProfileSupportPage;
