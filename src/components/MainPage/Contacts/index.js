import {
  faEllipsis,
  faMagnifyingGlass,
  faPenToSquare,
  faPlus,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.css";
import profile from "../../Login/LoginLeft2/profil.jpg";

function Contacts() {
  return (
    <div
      style={{
        position: "fixed",
        top: "55px",
        right: "0",
        display: "block",
        width: "360px",
        height: "100vh",
      }}
    >
      <div style={{ height: "100vh", position: "relative" }}>
        <div className={styles.contactHeader}>
          <div className={styles.header}>Kişiler</div>
          <div style={{ marginLeft: "8px" }}>
            <FontAwesomeIcon icon={faVideo} className={styles.icon} />
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
            <FontAwesomeIcon
              icon={faEllipsis}
              className={styles.icon}
              styles={{ marginRight: "0 !important" }}
            />
          </div>
        </div>

        <div className={styles.contactsContainer}>
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>{" "}
          <div className={styles.contact}>
            <img src={profile} alt="contact" className={styles.image} />
            <div className={styles.contactName}>Lorem ipsum.</div>
          </div>
        </div>
        <div className={styles.groupContacts}>Grup Konuşmaları</div>
        <div className={styles.newGroup}>
          <FontAwesomeIcon icon={faPlus} className={styles.imageNew} />
          <div className={styles.contactName}>Lorem ipsum.</div>
        </div>
        <div className={styles.penIconContainer}>
          <FontAwesomeIcon icon={faPenToSquare} className={styles.penIcon} />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
