import React from "react";
import styles from "./styles.module.css";
import FacebookLogo from "./FacebookLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Messenger from "./Messenger";
import Statement from "./Statement";
import Profile from "./Profile";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={FacebookLogo} alt="FacebookLogo" className={styles.img} />
      <div className={styles.searchContainer}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Facebook'ta Ara"
          className={styles.searchInput}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Messenger />
        <Statement />
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
