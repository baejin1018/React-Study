import React from "react";
import styles from "./CSSModule.module.css";
import classnames from "./classnames/bind";
const cx = classnames.bind(styles);
const CSSModule = () => {
  console.log(styles);
  return (
    <div className={styles.wrapper}>
      저는 <span className={styles.something}>CSS Moudle</span>
    </div>
  );
};

export default CSSModule;
