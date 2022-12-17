import React from "react";
import { Image } from "@chakra-ui/react";
import styles from "./styles.module.css";
import profil from "./profil.jpg";
import { faXmark, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoginLeft2() {
  return (
    <div>
      <div className={styles.imageDiv}>
        <Image
          width="198.812px"
          height="70px"
          padding-top="8px"
          padding-bottom="16px"
          margin="-20px"
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="facebook"
        />
      </div>
      <div className={styles.text1}>Yakınlardaki Girişler</div>
      <div className={styles.text2}>Resmine tıkla veya bir hesap ekle</div>
      <div className={styles.accounts}>
        <div className={styles.account}>
          <Image
            width="160px"
            height="160px"
            borderTopRadius="8px"
            src={profil}
            alt="facebook"
          />
          <div className={styles.name}>Alperen</div>
          <FontAwesomeIcon icon={faXmark} className={styles.close} />
        </div>
        <div
          className={styles.account}
          style={{ border: "1px solid rgb(222, 224, 227)" }}
          onClick={() => {
            document.getElementById("email").focus();
          }}
        >
          <div className={styles.addAccount}>
            <FontAwesomeIcon
              icon={faCirclePlus}
              className={styles.circlePlus}
            />
          </div>
          <div className={styles.name} style={{ color: "#1877f2" }}>
            Hesap Ekle
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLeft2;