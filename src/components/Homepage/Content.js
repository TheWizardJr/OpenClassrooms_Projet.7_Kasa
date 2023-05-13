import styles from "./Content.module.scss";
import { data } from "../../data/accomodations";
import Accomodation from "../Accomodation/Accomodation";
import Banner from "../Banner/Banner";

function Content() {
  const accomodations = data;
  return (
    <div className="flex-fill container">
      <Banner />
      <div className={styles.contentCard}>
        <div className={styles.grid}>
          {accomodations.map((accomodation) => (
            <Accomodation
              key={accomodation.id}
              title={accomodation.title}
              cover={accomodation.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
