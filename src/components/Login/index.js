import { Text } from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm";
import LoginLeft1 from "./LoginLeft1";
import LoginFooter from "./LoginFooter";
import styles from "./styles.module.css";

function Login() {
  return (
    <div className={styles.bodyLogin}>
      <div className={styles.loginUp}>
        <div className={styles.loginUpInner}>
          <div className={styles.loginUpContainer}>
            <div className={styles.loginLeft1}>
              <LoginLeft1 />
            </div>

            <div className={styles.loginRight}>
              <LoginForm />
              <Text className={styles.loginRightBottom}>
                Ünlü biri, marka veya işletme için
                <a href="/#"> Sayfa Oluştur</a>
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.loginBottom}>
        <LoginFooter />
      </div>
    </div>
  );
}

export default Login;
