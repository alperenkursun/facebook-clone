import React from "react";
import styles from "./styles.module.css";
import profile from "../../../../Login/LoginLeft2/profil.jpg";
import {
  faAngleDown,
  faEllipsis,
  faLock,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import postimage from "./postimage.jpg";
import { faComment, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "../../../../../contexts/AuthContext";

function Posts() {
  const { loginnedUserr, posts, setPosts } = useAuth();
  return (
    <>
      {posts
        .slice(0)
        .reverse()
        .map((item, index) => {
          return (
            item.email === loginnedUserr.email && (
              <div className={styles.post} key={index}>
                <div className={styles.postUp}>
                  <div className={styles.profileContainer}>
                    <img
                      src={profile}
                      alt="profile"
                      className={styles.profile}
                    />
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
                      <div
                        className={styles.profileName}
                      >{`${item.name} ${item.surname}`}</div>

                      <div className={styles.postTime}>
                        34d . <FontAwesomeIcon icon={faLock} />
                      </div>
                    </div>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      style={{ width: "20px", height: "20px", padding: "16px" }}
                      className={styles.ellipsis}
                    />
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{ width: "20px", height: "20px", padding: "16px" }}
                      className={styles.ellipsis}
                      onClick={() => {
                        let pos = posts;
                        setPosts(pos.filter((it) => it.post !== item.post));
                      }}
                    />
                  </div>
                </div>
                <div className={styles.postContent}>{item.post}</div>
                <img
                  src={postimage}
                  alt="PostImage"
                  className={styles.postImage}
                />
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
                    <img
                      src={profile}
                      alt="profile"
                      className={styles.profile}
                    />
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
            )
          );
        })}
    </>
  );
}

export default Posts;
