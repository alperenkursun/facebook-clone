import React from "react";
import Posts from "./Posts";
import Story from "./Story";
import styles from "./styles.module.css";
import UserPost from "./UserPost";

function MainContent() {
  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.mainInner}>
          <Story />
          <UserPost />
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
