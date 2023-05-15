import styles from "./Homepage.module.scss";
import { data } from "../../data/accomodations";
import Accomodation from "./Accomodation/Accomodation";
import Banner from "../../components/Banner/Banner";

function Homepage() {
  const accomodations = data;
  return (
    <div className="flex-fill container">
      <Banner />
      <div className={styles.homepageCard}>
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

export default Homepage;
