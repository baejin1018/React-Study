import React from "react";
import styles from "./CSSModule.module.css";
// import classNames from "./classnames/bind";
// const cx = classNames.bind(styles);
const CSSModule = () => {
  console.log(styles);
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      저는 <span className={styles.something}>CSS Moudle</span>
    </div>
  );
};

export default CSSModule;
