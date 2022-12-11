import React from "react";
import LoginForm from "./LoginForm";
import styles from "./styles.module.css";

function Login() {
  return (
    <div className={styles.bodyLogin}>
      <div className={styles.loginUp}>
        <div className={styles.loginUpInner}>
          <div className={styles.loginUpContainer}>
            <div></div>

            <div className={styles.loginRight}>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.loginBottom}></div>
    </div>
  );
}

export default Login;
