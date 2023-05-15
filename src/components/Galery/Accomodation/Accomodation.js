import { Link } from "react-router-dom";
import styles from "./Accomodation.module.scss";

function Accomodation({title, cover, id}) {
  return (
      <Link to={`/accomodation/${id}`} className={styles.accomodation}>
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </Link>
  );
}

export default Accomodation;
