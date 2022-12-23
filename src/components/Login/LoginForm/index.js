import { useState } from "react";
import styles from "./styles.module.css";
import { Formik } from "formik";
import { useAuth } from "../../../contexts/AuthContext";

import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function LoginForm() {
  let {
    isLogin,
    login,
    users,
    setIsLogin,
    emailValidation,
    setEmailValidation,
    passwordValidation,
    setPasswordValidation,
    loginnedUsers,
    setLoginnedUsers,
    disable,
    setDisable,
    setLoginnedUserr,
  } = useAuth();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <div className={styles.formContainer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            setEmailValidation(false);
            setPasswordValidation(false);
            let emailControl = false;
            for (let i = 0; i < users.length; i++) {
              if (users[i].email === values.email) {
                emailControl = true;
              }
              if (
                users[i].email === values.email &&
                users[i].password === values.password
              ) {
                console.log("Giriş yapıldı...");

                setEmailValidation(false);
                setPasswordValidation(false);
                console.log(loginnedUsers.length);
                if (loginnedUsers.length < 6) {
                  console.log("girdi asdasdasdsad");
                  let isThere = false;
                  for (let item of loginnedUsers) {
                    console.log(item);
                    console.log(users[i]);

                    if (item.email === users[i].email) {
                      setSubmitting(true);

                      setIsLogin(true);

                      setLoginnedUserr(item);
                      // setLoginnedUsers([...loginnedUsers, users[i]]);
                      isThere = true;

                      break;
                    }
                  }
                  if (isThere === false) {
                    let isT = false;
                    for (let item of loginnedUsers) {
                      if (item.email === users[i].email) {
                        isT = true;
                      }
                    }
                    if (isT !== true) {
                      setLoginnedUsers([...loginnedUsers, users[i]]);
                    }
                  }
                }
                // setIsLogin(true);
              }
              setSubmitting(false);
            }
            if (!isLogin) {
              if (emailControl) {
                setEmailValidation(false);
                setPasswordValidation(true);
              } else {
                setEmailValidation(true);
                setPasswordValidation(false);
              }
            }

            login = values;
            localStorage.setItem("login", JSON.stringify(login));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Popover>
                <PopoverTrigger>
                  <Input
                    id="email"
                    width="364px"
                    height="52px"
                    py="14px"
                    px="16px"
                    mx="15px"
                    my="6px"
                    borderColor="#ccd0d5"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="E-posta veya Telefon Numarası"
                    autoFocus
                  />
                </PopoverTrigger>
                {emailValidation && (
                  <PopoverContent
                    color="rgb(190,75,73)"
                    backgroundColor="white"
                    width="auto"
                  >
                    <PopoverArrow backgroundColor="white" />

                    <PopoverHeader>
                      Girdiğin e-posta veya cep telefonu numarası bir hesaba
                      bağlı değil.{" "}
                      <a href="/" style={{ fontWeight: "700" }}>
                        Hesabını bul ve giriş yap.
                      </a>
                    </PopoverHeader>
                  </PopoverContent>
                )}
              </Popover>

              <Popover>
                <PopoverTrigger>
                  <InputGroup size="md">
                    <Input
                      id="password"
                      width="364px"
                      height="52px"
                      py="14px"
                      px="16px"
                      mx="16px"
                      my="6px"
                      borderColor="#ccd0d5"
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Şifre"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <InputRightElement
                      width="4.5rem"
                      className={styles.buttonMiddle}
                    >
                      <Button
                        verticalAlign="middle"
                        h="1.75rem"
                        size="sm"
                        onClick={handleClick}
                        style={{ backgroundColor: "transparent" }}
                        disabled={disable}
                      >
                        {show ? (
                          <FontAwesomeIcon icon={faEye} />
                        ) : (
                          <FontAwesomeIcon icon={faEyeSlash} />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </PopoverTrigger>
                {passwordValidation && (
                  <PopoverContent
                    color="rgb(190,75,73)"
                    backgroundColor="white"
                    width="auto"
                  >
                    <PopoverArrow backgroundColor="white" />

                    <PopoverHeader>
                      Girdiğin şifre yanlış.{" "}
                      <a href="/" style={{ fontWeight: "700" }}>
                        Şifreni mi unuttun?
                      </a>
                    </PopoverHeader>
                  </PopoverContent>
                )}
              </Popover>

              <Button
                colorScheme="messenger"
                width="364px"
                height="48px"
                mt="6px"
                mx="16px"
                fontSize="20px"
                fontFamily="inherit"
                textAlign="center"
                verticalAlign="middle"
                type="submit"
                fontWeight="700"
              >
                Giriş Yap
              </Button>
            </form>
          )}
        </Formik>
        <div className={styles.loginRightMiddle}>
          <a href="/#">Şifreni mi Unuttun?</a>
          <hr />
          <Button
            colorScheme="whatsapp"
            fontWeight="bold"
            width="187.89px"
            height="48px"
            onClick={() => {
              document.getElementById("openModal").click();
            }}
          >
            Yeni Hesap Oluştur
          </Button>
        </div>
      </div>
      <Text className={styles.loginRightBottom}>
        Ünlü biri, marka veya işletme için <a href="/">Sayfa Oluştur.</a>
      </Text>
    </>
  );
}

export default LoginForm;
