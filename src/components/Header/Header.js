import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <div>
          <img src={logo} alt="logo kasa" />
        </div>
        <ul>
          <li className={styles.li}>Accueil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
