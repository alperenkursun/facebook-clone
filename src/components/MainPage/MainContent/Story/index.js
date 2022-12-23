import React from "react";
import styles from "./styles.module.css";
import profil from "../../../Login/LoginLeft2/profil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import story from "./story.jpg";

function Story() {
  return (
    <div style={{ display: "flex", marginBottom: "24px" }}>
      <div className={styles.storyContainer}>
        <div className={styles.storyContainerInner}>
          <img src={profil} alt="StoryCreate" className={styles.img} />
          <div className={styles.storyCreate}>
            <FontAwesomeIcon icon={faCirclePlus} className={styles.plus} />
            Hikaye Oluştur
          </div>
        </div>
      </div>
      <div className={styles.storyContainer}>
        <div className={styles.storyContainerInner}>
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <img src={story} alt="StoryCreate" className={styles.imgStory} />
            <img src={profil} alt="StoryCreate" className={styles.imgProfile} />
            <div className={styles.storyOwner}>Lorem Ipsum</div>
          </div>
        </div>
      </div>
      <div className={styles.storyContainer}>
        <div className={styles.storyContainerInner}>
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <img src={story} alt="StoryCreate" className={styles.imgStory} />
            <img src={profil} alt="StoryCreate" className={styles.imgProfile} />
            <div className={styles.storyOwner}>Lorem Ipsum</div>
          </div>
        </div>
      </div>
      <div className={styles.storyContainer}>
        <div className={styles.storyContainerInner}>
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <img src={story} alt="StoryCreate" className={styles.imgStory} />
            <img src={profil} alt="StoryCreate" className={styles.imgProfile} />
            <div className={styles.storyOwner}>Lorem Ipsum</div>
          </div>
        </div>
      </div>
      <div className={styles.storyContainer}>
        <div className={styles.storyContainerInner}>
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <img src={story} alt="StoryCreate" className={styles.imgStory} />
            <img src={profil} alt="StoryCreate" className={styles.imgProfile} />
            <FontAwesomeIcon
              icon={faArrowRight}
              className={styles.arrowRight}
            />
            <div className={styles.storyOwner}>Lorem Ipsum</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
