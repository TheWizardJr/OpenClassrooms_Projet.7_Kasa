import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <div>
          <img src={logo} alt="logo kasa" />
        </div>
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Accueil
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/about"
          >
            A propos
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
