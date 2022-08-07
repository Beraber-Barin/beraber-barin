import React from "react";
import styles from "./ProfileSideBar.module.scss";
import { NavLink } from "react-router-dom";
import userPicturePlaceholder from "../../assets/svg/userPicturePlaceholder.svg";

const ProfileSideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <img src={userPicturePlaceholder} alt="userPic" />
        </div>
        <h5>Ahmet Özefe</h5>
      </div>
      <div className={styles.body}>
        <NavLink
          to={"/user/"}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Kullanıcı Bilgilerim
        </NavLink>
        <NavLink
          to={"/user/security"}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Güvenlik
        </NavLink>
        <NavLink
          to={"/user/notifications"}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Bildirim Tercihlerim
        </NavLink>
        <NavLink
          to={"/user/privacy"}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Gizlilik Tercihlerim
        </NavLink>
        <NavLink
          to={"/user/support"}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Destek
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileSideBar;
