import React from "react";
import styles from "./styles.module.css";
import profile from "../../../../Login/LoginLeft2/profil.jpg";
import {
  faAngleDown,
  faEllipsis,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import postimage from "./postimage.jpg";
import { faComment, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "../../../../../contexts/AuthContext";

function Posts() {
  const { loginnedUserr } = useAuth();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className={styles.post}>
      <div className={styles.postUp}>
        <div className={styles.profileContainer}>
          <img src={profile} alt="profile" className={styles.profile} />
          <div className={styles.online}></div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
          }}
        >
          <div className={styles.profileNameContainer}>
            <div className={styles.profileName}>
              {" "}
              {`${capitalizeFirstLetter(
                loginnedUserr.name
              )} ${capitalizeFirstLetter(loginnedUserr.surname)}`}
            </div>

            <div className={styles.postTime}>
              34d . <FontAwesomeIcon icon={faLock} />
            </div>
          </div>
          <FontAwesomeIcon
            icon={faEllipsis}
            style={{ width: "20px", height: "20px", padding: "16px" }}
            className={styles.ellipsis}
          />
        </div>
      </div>
      <div className={styles.postContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <img src={postimage} alt="PostImage" className={styles.postImage} />
      <div className={styles.buttonsContainer}>
        <div className={styles.buttons}>
          <div className={styles.likeContainer}>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ paddingRight: "10px" }}
            />
            Beğen
          </div>
          <div className={styles.likeContainer}>
            <FontAwesomeIcon
              icon={faComment}
              style={{ paddingRight: "10px" }}
            />
            Yorum Yap
          </div>
        </div>
      </div>
      <div className={styles.commentContainer}>
        <div className={styles.profileContainer}>
          <img src={profile} alt="profile" className={styles.profile} />
          <div className={styles.onlineMenu}>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{
                borderRadius: "50%",
                backgroundColor: "rgb(228,230,235)",
              }}
            />
          </div>
        </div>
        <input className={styles.input} placeholder="Yorum Yaz..." />
      </div>
    </div>
  );
}

export default Posts;
