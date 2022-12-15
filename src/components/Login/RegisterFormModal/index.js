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
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

function RegisterFormModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("1");

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <div>
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

          <ModalCloseButton fontSize="md" />
          <ModalBody p={4}>
            <Flex width="100%" pb="8px">
              <FormControl width="50%" pr="8px">
                <Input ref={initialRef} placeholder="Adın" />
              </FormControl>
              <FormControl width="50%">
                <Input placeholder="Soyadın" />
              </FormControl>
            </Flex>
            <FormControl width="100%" pb="8px">
              <Input placeholder="Cep telefonu numarası veya e-posta" />
            </FormControl>
            <FormControl width="100%" pb="8px">
              <Input type="password" placeholder="Yeni şifre" />
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
                <Select placeholder="15" pr="8px">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
              <FormControl>
                <Select placeholder="Ara" pr="8px">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
              <FormControl>
                <Select placeholder="2022" pr="8px">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
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
                <div className={styles.radio}>
                  <Radio value="1" selected>
                    Kadın
                  </Radio>
                </div>

                <div className={styles.radio}>
                  <Radio value="2">Erkek</Radio>
                </div>

                <div className={styles.radio}>
                  <Radio value="3">Özel</Radio>
                </div>
              </Stack>
            </RadioGroup>
            <Text className={styles.text}>
              Hizmetimizi kullanan kişiler senin iletişim bilgilerini Facebook'a
              yüklemiş olabilir.
              <br /> <a href="/">Daha fazla bilgi al.</a>
            </Text>
            <Text className={styles.text}>
              Kaydol düğmesine tıklayarak, <a href="/">Koşullarımızı</a>,
              <a href="/">Gizlilik İlkemizi</a> ve{" "}
              <a href="/">Çerezler İlkemizi</a> kabul etmiş olursun. Bizden SMS
              Bildirimleri alabilir ve bu bildirimleri istediğin zaman
              durdurabilirsin.
            </Text>
            <div className={styles.registerContainer}>
              <Button colorScheme="whatsapp" mr={3} className={styles.register}>
                Kaydol
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default RegisterFormModal;
