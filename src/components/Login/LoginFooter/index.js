import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import ad from "./adchoice.jpeg";

function LoginFooter() {
  return (
    <div className={styles.loginBottomInner}>
      <ul className={styles.languages}>
        <li>Türkçe</li>
        <li>
          <a href="/#">Kurdî (Kurmancî)</a>
        </li>
        <li>
          <a href="/#">العربية</a>
        </li>
        <li>
          <a href="/#">English (UK)</a>
        </li>
        <li>
          <a href="/#">Zaza</a>
        </li>
        <li>
          <a href="/#">Deutsch</a>
        </li>
        <li>
          <a href="/#">Русский</a>
        </li>
        <li>
          <a href="/#">Français (France)</a>
        </li>
        <li>
          <a href="/#">فارسی</a>
        </li>
        <li>
          <a href="/#">Español</a>
        </li>
        <li>
          <a href="/#">Português (Brasil)</a>
        </li>
        <li>
          <a href="/#">
            <FontAwesomeIcon className={styles.languagePlus} icon={faPlus} />
          </a>
        </li>
      </ul>
      <div className={styles.border}></div>
      <ul className={styles.links}>
        <li>
          <a href="/#">Kaydol</a>
        </li>
        <li>
          <a href="/#">Giriş Yap</a>
        </li>
        <li>
          <a href="/#">Messenger</a>
        </li>
        <li>
          <a href="/#">Facebook Lite</a>
        </li>
        <li>
          <a href="/#">Watch</a>
        </li>
        <li>
          <a href="/#">Yerler</a>
        </li>
        <li>
          <a href="/#">Oyunlar</a>
        </li>
        <li>
          <a href="/#">Marketplace</a>
        </li>
        <li>
          <a href="/#">Meta Pay</a>
        </li>
        <li>
          <a href="/#">Oculus</a>
        </li>
        <li>
          <a href="/#">Portal</a>
        </li>
        <li>
          <a href="/#">Instagram</a>
        </li>
        <li>
          <a href="#/">Bulletin</a>
        </li>
        <li>
          <a href="#/">Bağış Kampanyaları</a>
        </li>
        <li>
          <a href="/#">Hizmetler</a>
        </li>
        <li>
          <a href="/#">Oy Kullanma Bilgi Merkezi</a>
        </li>
        <li>
          <a href="/#">Gizlilik İlkesi</a>
        </li>
        <li>
          <a href="/#">Gizlilik Merkezi</a>
        </li>
        <li>
          <a href="/#">Gruplar</a>
        </li>
        <li>
          <a href="/#">Hakkımızda</a>
        </li>
        <li>
          <a href="/#">Reklam Oluştur</a>
        </li>
        <li>
          <a href="/#">Sayfa Oluştur</a>
        </li>
        <li>
          <a href="/#">Geliştiriciler</a>
        </li>
        <li>
          <a href="/#">Kariyer Olanakları</a>
        </li>
        <li>
          <a href="/#">Çerezler</a>
        </li>
        <li style={{ display: "flex" }}>
          <a href="/#">Ad Choices</a>
        </li>
        <img
          src={ad}
          alt="adchoice"
          style={{ width: "16px", height: "16px" }}
        />

        <li>
          <a href="/#">Koşullar</a>
        </li>
        <li>
          <a href="/#">Yardım</a>
        </li>
        <li>
          <a href="/#">Kişi Yükleme ve Hesabı Olmayan Kişiler</a>
        </li>
      </ul>
      <div className={styles.copyright}> Meta © 2022</div>
    </div>
  );
}

export default LoginFooter;
