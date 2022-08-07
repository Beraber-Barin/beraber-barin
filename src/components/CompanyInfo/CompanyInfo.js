import React from "react";
import styles from "./CompanyInfo.module.scss";
import beraberBarinLogo from "../../assets/svg/beraberBarinLogo.svg";

const CompanyInfo = (props) => {
  const { isLogoVisible, isCompanyNameVisible, onClick } = props;
  return (
    <div
      className={styles.companyInfo}
      onClick={onClick}
      style={onClick ? { cursor: "pointer" } : undefined}
    >
      {isLogoVisible && <img src={beraberBarinLogo} alt="bum" />}
      {isCompanyNameVisible && <h5>Beraber Barın</h5>}
    </div>
  );
};

export default CompanyInfo;
