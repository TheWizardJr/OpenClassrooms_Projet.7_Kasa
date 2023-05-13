import styles from "./Banner.module.scss";
import banner from "../../assets/images/banner.svg";

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <img src={banner} alt="bannière" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
