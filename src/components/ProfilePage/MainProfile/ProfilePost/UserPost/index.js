import React from "react";
import styles from "./styles.module.css";
import profile from "../../../../Login/LoginLeft2/profil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faVideo,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "../../../../../contexts/AuthContext";

function UserPost() {
  const { loginnedUserr } = useAuth();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div>
      <div className={styles.userPostContainer}>
        <div style={{ display: "flex" }}>
          <img src={profile} alt="profile" className={styles.profile} />
          <input
            type="text"
            placeholder={`Ne düşünüyorsun, ${capitalizeFirstLetter(
              loginnedUserr.name
            )}?`}
            className={styles.postInput}
          />
        </div>

        <div className={styles.imagesUser}>
          <div className={styles.bottomButtons}>
            <FontAwesomeIcon
              icon={faVideo}
              className={styles.icon}
              style={{ color: "rgb(240,40,73)" }}
            />
            <div
              style={{
                fontWeight: 600,
                fontSize: "15px",
                color: "rgb(101,103,107)",
              }}
            >
              Canlı Video
            </div>
          </div>
          <div className={styles.bottomButtons}>
            <FontAwesomeIcon
              icon={faImage}
              className={styles.icon}
              style={{ color: "rgb(69,189,98)" }}
            />
            <div
              style={{
                fontWeight: 600,
                fontSize: "15px",
                color: "rgb(101,103,107)",
              }}
            >
              Fotoğraf/Video
            </div>
          </div>
          <div className={styles.bottomButtons}>
            <FontAwesomeIcon
              icon={faFaceSmile}
              className={styles.icon}
              style={{ color: "rgb(249,201,91)" }}
            />
            <div
              style={{
                fontWeight: 600,
                fontSize: "15px",
                color: "rgb(101,103,107)",
              }}
            >
              His/Hareket
            </div>
          </div>
        </div>
      </div>
      <div className={styles.room}>
        <div className={styles.button}>
          <FontAwesomeIcon
            icon={faPeopleRoof}
            className={styles.icon}
            style={{ color: "rgb(95,99,215)" }}
          />
          <div>Oda Oluştur</div>
        </div>
      </div>
    </div>
  );
}

export default UserPost;
