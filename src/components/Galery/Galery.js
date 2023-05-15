import { data } from "../../data/accomodations";
import Accomodation from "./Accomodation/Accomodation";
import styles from "./Galery.module.scss";

function Galery () {
    const accomodations = data;
    return (
        <div className={styles.homepageCard}>
        <div className={styles.grid}>
          {accomodations.map((accomodation) => (
            <Accomodation
              key={accomodation.id}
              id={accomodation.id}
              title={accomodation.title}
              cover={accomodation.cover}
            />
          ))}
        </div>
      </div>
    )
}

export default Galery;