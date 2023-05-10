import styles from "./Header.module.scss";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center `}>
      <div className="flex-fill">
        <img src={logo} alt="logo kasa" />
      </div>
      <ul className="d-flex flex-row">
        <li className={styles.li}>Accueil</li>
        <li>A propos</li>
      </ul>
    </header>
  );
}

export default Header;
