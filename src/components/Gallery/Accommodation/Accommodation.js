import { Link } from "react-router-dom";
import styles from "./Accommodation.module.scss";

function Accommodation({ title, cover, id }) {
  return (
    <Link to={`/accommodation/${id}`} className={styles.accommodation}>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

export default Accommodation;
