import { useState, useRef } from "react";
import styles from "./styles.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useDisclosure,
  Text,
  Flex,
  Select,
  RadioGroup,
  Stack,
  Radio,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import userSchema from "./validations";

function RegisterFormModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("1");

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const max = new Date().getFullYear();
  const min = max - 117;
  const years = [];
  for (let i = 0; i < max; i++) {
    if (i === 119) {
      break;
    }
    years.push(max - i);
  }

  const month = new Date().getMonth();
  const months = [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara",
  ];

  const day = new Date().getDate();
  const days = [];
  for (let i = 1; i < 32; i++) {
    if (i === 119) {
      break;
    }
    days.push(i);
  }

  const [alert, setAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      day: day,
      month: months[month],
      year: max,
      gender: "",
    },
    validationSchema: userSchema,
    onSubmit: (values, bag) => {
      values.name = "";
      values.surname = "";
      values.email = "";
      values.password = "";
      values.day = day;
      values.month = months[month];
      values.year = max;
      values.gender = "";
      console.log(values);
      formik.setErrors({});

      document.getElementById("close").click();
      setAlert(true);

      // alert(JSON.stringify(values, null, 2));
    },
  });

  const [err, setErr] = useState({});

  return (
    <div>
      {alert && (
        <Alert position="absolute" top="0" textAlign="center" status="success">
          <AlertIcon />
          Kayıt işleminiz başarıyla gerçekleşmiştir...
        </Alert>
      )}

      <Button id="openModal" onClick={onOpen} style={{ display: "none" }}>
        Open Modal
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent className={styles.registerForm}>
          <ModalHeader
            fontSize="3xl"
            fontFamily="SFProDisplay-Bold, Helvetica, Arial, sans-serif"
          >
            Kaydol
            <Text fontSize="sm" fontWeight="normal">
              Hızlı ve kolaydır.
            </Text>
          </ModalHeader>
          <hr />

          <ModalCloseButton
            id="close"
            fontSize="md"
            onClick={() => {
              formik.setErrors({});
              formik.values.name = "";
              formik.values.surname = "";
              formik.values.email = "";
              formik.values.password = "";
              formik.values.day = day;
              formik.values.month = months[month];
              formik.values.year = max;
              formik.values.gender = "";
              setAlert(false);
            }}
          />
          <ModalBody p={4}>
            <form onSubmit={formik.handleSubmit}>
              <Flex width="100%" pb="8px">
                <FormControl width="50%" pr="8px">
                  <Popover>
                    <PopoverTrigger>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={() => setErr(formik.errors)}
                        value={formik.values.name}
                        ref={initialRef}
                        placeholder="Adın"
                        style={err.name && { border: "1px solid red" }}
                      />
                    </PopoverTrigger>
                    {err.name && (
                      <PopoverContent
                        color="white"
                        backgroundColor="rgb(190,75,73)"
                        width="auto"
                      >
                        <PopoverArrow backgroundColor="rgb(190,75,73)" />

                        <PopoverHeader>{formik.errors.name}</PopoverHeader>
                      </PopoverContent>
                    )}
                  </Popover>
                </FormControl>
                <FormControl width="50%">
                  <Popover>
                    <PopoverTrigger>
                      <Input
                        id="surname"
                        name="surname"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={() => setErr(formik.errors)}
                        value={formik.values.surname}
                        placeholder="Soyadın"
                        style={err.surname && { border: "1px solid red" }}
                      />
                    </PopoverTrigger>
                    {err.surname && (
                      <PopoverContent
                        color="white"
                        backgroundColor="rgb(190,75,73)"
                        width="auto"
                      >
                        <PopoverArrow backgroundColor="rgb(190,75,73)" />
                        <PopoverHeader>{formik.errors.surname}</PopoverHeader>
                      </PopoverContent>
                    )}
                  </Popover>
                </FormControl>
              </Flex>
              <FormControl width="100%" pb="8px">
                <Popover>
                  <PopoverTrigger>
                    <Input
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={() => setErr(formik.errors)}
                      value={formik.values.email}
                      placeholder="Cep telefonu numarası veya e-posta"
                      style={err.email && { border: "1px solid red" }}
                    />
                  </PopoverTrigger>
                  {err.email && (
                    <PopoverContent
                      color="white"
                      backgroundColor="rgb(190,75,73)"
                      width="auto"
                    >
                      <PopoverArrow backgroundColor="rgb(190,75,73)" />
                      <PopoverHeader>{err.email}</PopoverHeader>
                    </PopoverContent>
                  )}
                </Popover>
              </FormControl>
              <FormControl width="100%" pb="8px">
                <Popover>
                  <PopoverTrigger>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={() => setErr(formik.errors)}
                      placeholder="Yeni şifre"
                      style={err.password && { border: "1px solid red" }}
                    />
                  </PopoverTrigger>
                  {err.password && (
                    <PopoverContent
                      color="white"
                      backgroundColor="rgb(190,75,73)"
                      width="auto"
                    >
                      <PopoverArrow backgroundColor="rgb(190,75,73)" />
                      <PopoverHeader>{formik.errors.password}</PopoverHeader>
                    </PopoverContent>
                  )}
                </Popover>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="xs" fontWeight="normal" m="0">
                  Doğum Tarihi{" "}
                  <FontAwesomeIcon
                    icon={faQuestion}
                    className={styles.question}
                  />
                </FormLabel>
              </FormControl>
              <Flex pb="8px">
                <FormControl>
                  <Popover>
                    <PopoverTrigger>
                      <Select
                        id="day"
                        name="day"
                        type="day"
                        onChange={formik.handleChange}
                        onBlur={() => setErr(formik.errors)}
                        value={formik.values.day}
                        pr="8px"
                        style={err.year && { border: "1px solid red" }}
                      >
                        {days.map((item, index) => {
                          return (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </Select>
                    </PopoverTrigger>
                    {err.day && (
                      <PopoverContent
                        color="white"
                        backgroundColor="rgb(190,75,73)"
                        width="auto"
                      >
                        <PopoverArrow backgroundColor="rgb(190,75,73)" />
                        <PopoverHeader>{formik.errors.day}</PopoverHeader>
                      </PopoverContent>
                    )}
                  </Popover>
                </FormControl>
                <FormControl>
                  <Popover>
                    <PopoverTrigger>
                      <Select
                        id="month"
                        name="month"
                        type="month"
                        onChange={formik.handleChange}
                        onBlur={() => setErr(formik.errors)}
                        value={formik.values.month}
                        pr="8px"
                        style={err.year && { border: "1px solid red" }}
                      >
                        {months.map((item, index) => {
                          return (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </Select>
                    </PopoverTrigger>
                    {err.month && (
                      <PopoverContent
                        color="white"
                        backgroundColor="rgb(190,75,73)"
                        width="auto"
                      >
                        <PopoverArrow backgroundColor="rgb(190,75,73)" />
                        <PopoverHeader>{formik.errors.month}</PopoverHeader>
                      </PopoverContent>
                    )}
                  </Popover>
                </FormControl>
                <FormControl>
                  <Popover>
                    <PopoverTrigger>
                      <Select
                        id="year"
                        name="year"
                        type="year"
                        onChange={formik.handleChange}
                        onBlur={() => setErr(formik.errors)}
                        value={formik.values.year}
                        pr="8px"
                        style={err.year && { border: "1px solid red" }}
                      >
                        {years.map((item, index) => {
                          return (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </Select>
                    </PopoverTrigger>
                    {err.year && (
                      <PopoverContent
                        color="white"
                        backgroundColor="rgb(190,75,73)"
                        width="auto"
                      >
                        <PopoverArrow backgroundColor="rgb(190,75,73)" />
                        <PopoverHeader>{formik.errors.year}</PopoverHeader>
                      </PopoverContent>
                    )}
                  </Popover>
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel fontSize="xs" fontWeight="normal" m="0">
                  Cinsiyet{" "}
                  <FontAwesomeIcon
                    icon={faQuestion}
                    className={styles.question}
                  />
                </FormLabel>
              </FormControl>

              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="row">
                  <div
                    style={err.gender && { border: "1px solid red" }}
                    className={styles.radio}
                  >
                    <Radio
                      onChange={formik.handleChange}
                      name="gender"
                      value="Kadın"
                    >
                      Kadın
                    </Radio>
                  </div>

                  <div
                    style={err.gender && { border: "1px solid red" }}
                    className={styles.radio}
                  >
                    <Radio
                      onChange={formik.handleChange}
                      name="gender"
                      value="Erkek"
                    >
                      Erkek
                    </Radio>
                  </div>

                  <div
                    style={err.gender && { border: "1px solid red" }}
                    className={styles.radio}
                  >
                    <Radio
                      onChange={formik.handleChange}
                      name="gender"
                      value="Özel"
                    >
                      Özel
                    </Radio>
                  </div>
                </Stack>
              </RadioGroup>
              <Text className={styles.text}>
                Hizmetimizi kullanan kişiler senin iletişim bilgilerini
                Facebook'a yüklemiş olabilir.
                <br /> <a href="/">Daha fazla bilgi al.</a>
              </Text>
              <Text className={styles.text}>
                Kaydol düğmesine tıklayarak, <a href="/">Koşullarımızı</a>,
                <a href="/">Gizlilik İlkemizi</a> ve{" "}
                <a href="/">Çerezler İlkemizi</a> kabul etmiş olursun. Bizden
                SMS Bildirimleri alabilir ve bu bildirimleri istediğin zaman
                durdurabilirsin.
              </Text>
              <div className={styles.registerContainer}>
                <Button
                  colorScheme="whatsapp"
                  mr={3}
                  className={styles.register}
                  type="submit"
                  onClick={async () => {
                    setErr(formik.errors);
                    await setTimeout(() => setAlert(false), 3000);
                  }}
                >
                  Kaydol
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default RegisterFormModal;
