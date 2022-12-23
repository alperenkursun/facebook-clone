import React from "react";
import Posts from "./Posts";
import UserPost from "./UserPost";
import styles from "./styles.module.css";

function ProfilePost() {
  return (
    <div>
      <div className={styles.myProfile}>
        <div className={styles.profileSideBar}>
          <div className={styles.personalRecord}>
            <div className={styles.personalRecordHeader}>Künye</div>
            <div className={styles.personalRecordButton}>Biyografi Ekle</div>
            <div className={styles.personalRecordButton}>Detayları Düzenle</div>
            <div className={styles.personalRecordButton}>Hobi Ekle</div>
            <div className={styles.personalRecordButton}>Öne Çıkarma Ekle</div>
            <div className={styles.personalRecordButton}>Lorem Ipsum</div>
            <div className={styles.personalRecordButton}>Lorem Ipsum</div>
          </div>
          <div className={styles.photosContainer}>
            <div className={styles.personalRecordHeader}>Fotoğraflar</div>
          </div>
          <div className={styles.photosContainer}>
            <div className={styles.personalRecordHeader}>Arkadaşlar</div>
          </div>
        </div>
        <div className={styles.myPosts}>
          <UserPost />
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default ProfilePost;
