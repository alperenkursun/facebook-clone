import React, { useState } from "react";
import Profil from "../../Login/LoginLeft2/profil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faCircleExclamation,
  faCircleQuestion,
  faGear,
  faHouse,
  faMoon,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import profile from "../../Login/LoginLeft2/profil.jpg";
import { useAuth } from "../../../contexts/AuthContext";
function Profile() {
  let { setIsLogin, loginnedUserr } = useAuth();
  let [count, setCount] = useState(false);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div>
      <div className={styles.profileContainer}>
        <img
          src={Profil}
          alt="Profile"
          className={styles.profile}
          onClick={() => {
            if (count === false) {
              setCount(true);
            }
            if (count === true) {
              setCount(false);
            }
          }}
        />
        <FontAwesomeIcon icon={faChevronDown} className={styles.chevronDown} />
        <div
          id="profileContent"
          className={styles.logout}
          style={{
            display: count ? "block" : "none",
          }}
        >
          <div className={styles.logoutUpContainer}>
            <div className={styles.profileLinkContainer}>
              <div className={styles.profileLink}>
                <img
                  src={profile}
                  alt="profil"
                  className={styles.profileLinkImg}
                />
                <div className={styles.profileLinkName}>
                  {`${capitalizeFirstLetter(
                    loginnedUserr.name
                  )} ${capitalizeFirstLetter(loginnedUserr.surname)}`}
                </div>
              </div>
            </div>
            <hr style={{ width: "296px", margin: "0 auto" }} />
            <div className={styles.allProfile}>Tüm Profilleri Gir</div>
          </div>
          <div className={styles.buttons}>
            <FontAwesomeIcon icon={faHouse} className={styles.icon} />
            <div className={styles.buttonText}>Home</div>
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon2} />
          </div>
          <div className={styles.buttons}>
            <FontAwesomeIcon icon={faGear} className={styles.icon} />
            <div className={styles.buttonText}>Ayarlar ve Gizlilik</div>
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon2} />
          </div>
          <div className={styles.buttons}>
            <FontAwesomeIcon icon={faCircleQuestion} className={styles.icon} />
            <div className={styles.buttonText}>Yardım ve Destek</div>
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon2} />
          </div>
          <div className={styles.buttons}>
            <FontAwesomeIcon icon={faMoon} className={styles.icon} />
            <div className={styles.buttonText}>Görünüm ve Erişebilirlik</div>
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon2} />
          </div>
          <div className={styles.buttons}>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={styles.icon}
            />
            <div className={styles.buttonText}>Görüş Bildir</div>
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon2} />
          </div>

          <div className={styles.buttons}>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className={styles.icon}
            />
            <div
              className={styles.buttonText}
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Çıkış Yap
            </div>
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
