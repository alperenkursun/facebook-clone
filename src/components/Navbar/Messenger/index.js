import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

function Messenger() {
  return (
    <div>
      <FontAwesomeIcon icon={faMessage} className={styles.messenger} />
    </div>
  );
}

export default Messenger;
