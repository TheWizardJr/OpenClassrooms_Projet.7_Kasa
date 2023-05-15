import styles from "./Accomodation.module.scss";

function Accomodation({title, cover}) {
  return (
      <div className={styles.accomodation}>
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </div>
  );
}

export default Accomodation;
