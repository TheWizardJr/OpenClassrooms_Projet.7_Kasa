import styles from "./NotFound.module.scss";
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className={`${styles.notfound} container`}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.paragraph}>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={"/"}>Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound;
