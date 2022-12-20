import React from "react";
import Profil from "../../Login/LoginLeft2/profil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

function Profile() {
  return (
    <div>
      <div className={styles.profileContainer}>
        <img src={Profil} alt="Profile" className={styles.profile} />
        <FontAwesomeIcon icon={faChevronDown} className={styles.chevronDown} />
      </div>
    </div>
  );
}

export default Profile;
