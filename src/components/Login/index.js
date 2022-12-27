import React from "react";
import LoginForm from "./LoginForm";
import LoginLeft1 from "./LoginLeft1";
import LoginLeft2 from "./LoginLeft2";

import LoginFooter from "./LoginFooter";
import styles from "./styles.module.css";
import RegisterFormModal from "./RegisterFormModal";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const { loginnedUsers } = useAuth();
  return (
    <div className={styles.bodyLogin}>
      <div className={styles.loginUp}>
        <div className={styles.loginUpInner}>
          <div className={styles.loginUpContainer}>
            <div
              className={
                loginnedUsers.length > 0 ? styles.loginLeft2 : styles.loginLeft1
              }
            >
              {loginnedUsers.length > 0 ? <LoginLeft2 /> : <LoginLeft1 />}
            </div>

            <div className={styles.loginRight}>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.loginBottom}>
        <LoginFooter />
      </div>

      <RegisterFormModal />
    </div>
  );
}

export default Login;
