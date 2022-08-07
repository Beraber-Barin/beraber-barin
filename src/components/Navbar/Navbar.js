import React, { useState, useRef } from "react";
import bell from "../../assets/svg/bell.svg";
import userPicturePlaceholder from "../../assets/svg/userPicturePlaceholder.svg";
import magnifier from "../../assets/svg/magnifier.svg";
import styles from "./Navbar.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import Button from "../Button/Button";
import btnStyles from "../Button/Button.module.scss";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <CompanyInfo
        isLogoVisible
        isCompanyNameVisible
        onClick={() => navigate("/")}
      />
      <div className={styles.inputContainer}>
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
            placeholder="İlanlar arasında ara"
            onChange={(e) => setSearchValue(e.target.value)}
            ref={inputRef}
          />
        </div>
      </div>
      <div className={styles.userInfo}>
        <img className={styles.bellIcon} src={bell} alt="bell" />
        <NavLink to="/" className={({ isActive }) => styles.navLink}>
          İlanlarım
        </NavLink>
        <NavLink to="/" className={({ isActive }) => styles.navLink}>
          Takip ettiklerim
        </NavLink>
        <img
          className={styles.userPic}
          src={userPicturePlaceholder}
          alt="userPic"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.links}>
            <Link to="/user">Profilim</Link>
            <Link to="/">Hesap geçmişim</Link>
            <Link to="/">Mesajlar</Link>
            <Link to="/">Son incelediklerim</Link>
            <Link to="/">Onay verdiklerim</Link>
          </div>
          <Button
            className={
              btnStyles.btn + " " + btnStyles["ui-danger"] + " " + styles.btn
            }
            buttonText="Çıkış Yap"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
