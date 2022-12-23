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
import profil from "../../Login/LoginLeft2/profil.jpg";
import { useAuth } from "../../../contexts/AuthContext";
import ProfilePost from "./ProfilePost";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Friends from "./Friends";
import Photos from "./Photos";
import Videos from "./Videos";
import Location from "./Location";

function MainProfile() {
  const { loginnedUserr, profilePages, setProfilePages } = useAuth();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
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
          <div className={styles.profileName}>
            {`${capitalizeFirstLetter(
              loginnedUserr.name
            )} ${capitalizeFirstLetter(loginnedUserr.surname)}`}
          </div>
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
            className={`${styles.profileContentItem} ${
              profilePages === "Pr" && styles.profileContentItemActive
            }`}
            onClick={() => {
              setProfilePages("Pr");
            }}
          >
            <Link to="/">Gönderiler</Link>
          </div>
          <div
            className={`${styles.profileContentItem} ${
              profilePages === "Ab" && styles.profileContentItemActive
            }`}
            onClick={() => {
              setProfilePages("Ab");
            }}
          >
            <Link to="/about">Hakkında</Link>
          </div>
          <div
            className={`${styles.profileContentItem} ${
              profilePages === "Fr" && styles.profileContentItemActive
            }`}
            onClick={() => {
              setProfilePages("Fr");
            }}
          >
            <Link to="/friends">Arkadaşlar</Link>
          </div>
          <div
            className={`${styles.profileContentItem} ${
              profilePages === "Ph" && styles.profileContentItemActive
            }`}
            onClick={() => {
              setProfilePages("Ph");
            }}
          >
            <Link to="/photos">Fotoğraflar</Link>
          </div>
          <div
            className={`${styles.profileContentItem} ${
              profilePages === "Vi" && styles.profileContentItemActive
            }`}
            onClick={() => {
              setProfilePages("Vi");
            }}
          >
            <Link to="/videos">Videolar</Link>
          </div>
          <div
            className={`${styles.profileContentItem} ${
              profilePages === "Lo" && styles.profileContentItemActive
            }`}
            onClick={() => {
              setProfilePages("Lo");
            }}
          >
            <Link to="/location">Yer Bildirimleri</Link>
          </div>
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
      <Routes>
        <Route path="/" element={<ProfilePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default MainProfile;
