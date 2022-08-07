import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./ProfileSharedLayout.module.scss";
import ProfileSideBar from "../../components/ProfileSideBar/ProfileSideBar";
const ProfileSharedLayout = () => {
  return (
    <main>
      <Navbar />
      <div className={styles.outletWrapper}>
        <ProfileSideBar />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default ProfileSharedLayout;
