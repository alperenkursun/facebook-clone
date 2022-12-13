import { Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

function LoginLeft1() {
  return (
    <>
      <div className={styles.imageDiv}>
        <Image
          height="106px"
          margin=" -28px"
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="facebook"
        />
      </div>
      <Text className={styles.text}>
        Facebook tanıdıklarınla iletişim kurmanı ve hayatında olup bitenleri
        paylaşmanı sağlar.
      </Text>
    </>
  );
}

export default LoginLeft1;
