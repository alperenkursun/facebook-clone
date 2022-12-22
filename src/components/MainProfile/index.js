import React from "react";
import styles from "./styles.module.css";
import mountain from "./mountain.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCirclePlus,
  faEllipsis,
  faPencil,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import profil from "../Login/LoginLeft2/profil.jpg";
import Posts from "../MainContent/Posts";
import UserPost from "../MainContent/UserPost";

function MainProfile() {
  return (
    <div className={styles.MainProfileContainer}>
      <div className={styles.topBackground}></div>
      <div className={styles.cover}>
        <img src={mountain} alt="mountain" className={styles.cover} />
        <div className={styles.coverButtonContainer}>
          <FontAwesomeIcon
            icon={faCamera}
            style={{ width: "16px", height: "16px", margin: "0 3px" }}
          />
          Kapak Fotoğrafını Düzenle
        </div>
      </div>

      <div className={styles.profile}>
        <img src={profil} alt="mountain" className={styles.profileImg} />
        <div className={styles.profileContainer}>
          <div className={styles.profileName}>Lorem Ipsum</div>
          <div className={styles.friends}>0 arkadaş</div>
        </div>
        <div className={styles.profileButtonGroups}>
          <div
            className={styles.profileButton1Container}
            style={{ margin: "0 4px" }}
          >
            <FontAwesomeIcon icon={faCirclePlus} style={{ margin: "0 3px" }} />
            Hikaye ekleme yap
          </div>
          <div
            className={styles.profileButton2Container}
            style={{ margin: "0 4px" }}
          >
            <FontAwesomeIcon icon={faPencil} style={{ margin: "0 3px" }} />
            Profili düzenle
          </div>
        </div>
      </div>
      <div className={styles.profileContentContainer}>
        <div className={styles.profileContent}>
          <div
            className={`${styles.profileContentItem} ${styles.profileContentItemActive}`}
          >
            Gönderiler
          </div>
          <div className={styles.profileContentItem}>Hakkında</div>
          <div className={styles.profileContentItem}>Arkadaşlar</div>
          <div className={styles.profileContentItem}>Fotoğraflar</div>
          <div className={styles.profileContentItem}>Videolar</div>
          <div className={styles.profileContentItem}>Yer Bildirimleri</div>
          <div className={styles.profileContentItem}>
            Diğer{" "}
            <FontAwesomeIcon icon={faSortDown} style={{ marginLeft: "4px" }} />
          </div>
        </div>
        <div className={styles.profileContentMenuContainer}>
          <div className={styles.profileContentMenu}>
            <FontAwesomeIcon
              icon={faEllipsis}
              style={{ width: "16px", height: "16px" }}
            />
          </div>
        </div>
      </div>
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
      <div
        style={{
          marginTop: "462.94px",
          position: "absolute",
          top: "0",
          width: "100%",
          height: "206px",
          backgroundColor: "white",
        }}
      ></div>
    </div>
  );
}

export default MainProfile;
