import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 >
        <span>😕</span>
        <br />
        Uh oh... Page Not Found!
      </h1>
      <br/>
      <p className={styles.description}> We can't find the page you're looking for. </p>
    </div>
  );
};

export default NotFoundBlock;
