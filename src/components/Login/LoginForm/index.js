import { useState } from "react";
import styles from "./styles.module.css";
import { Formik } from "formik";
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <div className={styles.formContainer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
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
              {errors.email && touched.email && errors.email}

              <InputGroup size="md">
                <Input
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
                  >
                    {show ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && touched.password && errors.password}
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
                disabled={isSubmitting}
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
