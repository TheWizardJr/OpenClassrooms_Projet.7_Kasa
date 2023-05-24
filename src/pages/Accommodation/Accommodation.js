import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Slider from "../../components/Slider/Slider";
import { data } from "../../data/accommodations";
import styles from "./Accommodation.module.scss";
import AccommodationInformations from "../../components/AccommodationInformations/AccommodationInformations";

function Accommodation() {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id);

  return (
    <main className="container">
      <Slider />
      {accommodation && (
        <>
          <AccommodationInformations accommodation={accommodation} />
          <div className={styles.collapse}>
            <Collapse title="Description" content={accommodation.description} />
            <Collapse title="Équipements" content={accommodation.equipments} />
          </div>
        </>
      )}
    </main>
  );
}

export default Accommodation;
