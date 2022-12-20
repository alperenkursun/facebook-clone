import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

function Statement() {
  return (
    <div>
      <FontAwesomeIcon icon={faBell} className={styles.statement} />
    </div>
  );
}

export default Statement;
