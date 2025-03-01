import React from "react";
import styles from "./Logo.module.css"; 

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img
        src="BrandEvolution-WhiteonNottinghamBlue-Cropped-450x173.png"
        alt="school logo"
        className={styles.logo}
      />
    </div>
  );
};

export default Logo;
