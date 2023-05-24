import { data } from "../../data/accommodations";
import Accommodation from "./Accommodation/Accommodation";
import styles from "./Gallery.module.scss";

function Gallery() {
  const accommodations = data;
  return (
    <div className={styles.homepageCard}>
      <div className={styles.grid}>
        {accommodations.map((accommodation) => (
          <Accommodation
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            cover={accommodation.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
