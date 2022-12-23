import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserGroup,
  faStore,
  faNewspaper,
  faPlay,
  faPeopleLine,
  faBorderAll,
  faPeopleGroup,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./styles.module.css";
import Profil from "../../Login/LoginLeft2/profil.jpg";
import ad from "../../Login/LoginFooter/adchoice.jpeg";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "../../../contexts/AuthContext";

function Sidebar() {
  const { loginnedUserr, setPages, pages } = useAuth();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarFlex}>
        <div className={styles.sidebarUp}>
          <div className={pages === "Main" && styles.left}></div>
          <div
            className={styles.routeContainer}
            onClick={() => {
              setPages("Main");
            }}
          >
            <FontAwesomeIcon icon={faHouse} className={styles.home} />
            <div className={styles.routeName}>Ana Sayfa</div>
          </div>
          <div
            className={styles.routeContainer}
            onClick={() => {
              setPages("Profile");
            }}
          >
            <img src={Profil} alt="Profile" className={styles.profile} />
            <div className={styles.routeName}>{`${capitalizeFirstLetter(
              loginnedUserr.name
            )} ${capitalizeFirstLetter(loginnedUserr.surname)}`}</div>
          </div>
        </div>

        <div className={styles.sidebarMid1}>
          <hr
            width="268px"
            height="1px !important"
            style={{
              marginBottom: "8px",
              borderColor: "rgb(206,208,212)",
              margin: "0 auto 8px auto",
            }}
          />
          <div className={styles.routeContainer}>
            <FontAwesomeIcon icon={faUserGroup} className={styles.mid1} />
            <div className={styles.routeName}>Arkadaşlar</div>
          </div>
          <div className={styles.routeContainer}>
            <FontAwesomeIcon icon={faStore} className={styles.mid1} />
            <div className={styles.routeName}>Marketplace</div>
          </div>
          <div className={styles.routeContainer}>
            <FontAwesomeIcon icon={faNewspaper} className={styles.mid1} />
            <div className={styles.routeName}>En Yeniler</div>
          </div>
          <div className={styles.routeContainer}>
            <FontAwesomeIcon icon={faPlay} className={styles.mid1} />
            <div className={styles.routeName}>Watch</div>
          </div>
          <div className={styles.routeContainer}>
            <FontAwesomeIcon icon={faPeopleLine} className={styles.mid1} />
            <div className={styles.routeName}>Gruplar</div>
          </div>
          <div className={styles.routeContainer}>
            <FontAwesomeIcon icon={faBorderAll} className={styles.mid1Last} />
            <div className={styles.routeName}>Tümünü Gör</div>
          </div>
        </div>

        <div className={styles.sidebarMid1}>
          <hr
            width="268px"
            height="1px !important"
            style={{
              marginBottom: "8px",
              borderColor: "rgb(206,208,212)",
              margin: "0 auto 8px auto",
            }}
          />
          <div className={styles.routeContainer}>
            <FontAwesomeIcon icon={faPeopleGroup} className={styles.mid1Last} />
            <div className={styles.routeName}>Tüm grupları gör</div>
          </div>
        </div>

        <div className={styles.sidebarMid1}>
          <hr
            width="268px"
            height="1px !important"
            style={{
              marginBottom: "8px",
              borderColor: "rgb(206,208,212)",
              margin: "0 auto 8px auto",
            }}
          />
          <div className={styles.routeContainer}>
            <FontAwesomeIcon icon={faLink} className={styles.mid1Last} />
            <div className={styles.routeName}>Tüm kısayolları gör</div>
          </div>
        </div>
      </div>

      <div
        className={styles.routerFooter}
        width="300px"
        height="57.250px"
        style={{ padding: "16px" }}
      >
        <a href="/">Gizlilik</a> . <a href="/">Koşullar</a> .{" "}
        <a href="/">Reklam</a> . <a href="/">Ad Choices </a>
        <img
          src={ad}
          alt="adchoice"
          style={{ width: "16px", height: "16px", display: "inline" }}
        />{" "}
        . <a href="/">Çerezler</a> . <a href="/">Diğer</a> .{" "}
        <a href="/">
          Meta <FontAwesomeIcon icon={faCopyright} /> 2022
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
