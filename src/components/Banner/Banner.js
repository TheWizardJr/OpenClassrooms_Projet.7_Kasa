import styles from "./Banner.module.scss";
import aboutBanner from "../../assets/images/about-banner.png";
import banner from "../../assets/images/banner.png";
import { useLocation } from "react-router-dom";

function Banner() {
  const location = useLocation();

  if (location.pathname === "/about") {
    return (
      <div className={styles.bannerContainer}>
        <img src={aboutBanner} alt="bannière" />
      </div>
    );
  } else {
    return (
      <div className={styles.bannerContainer}>
        <img src={banner} alt="bannière" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    );
  }
}

export default Banner;
