import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.scss";
const SharedLayout = () => {
  return (
    <main>
      <Navbar />
      <div className={styles.outletWrapper}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default SharedLayout;
