import styles from "./Accommodation.module.scss";
import { data } from "../../data/accommodations";
import Collapse from "../../components/Collapse/Collapse";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Rating from "../../components/Rating/Rating";

function Accommodation() {
  const idAccommodation = useParams().id;
  const dataAccommodation = data.filter((data) => data.id === idAccommodation);
  const hostName = dataAccommodation[0].host.name.split(" ");

  return (
    <main className="container">
      <Slider />
      {dataAccommodation.map((dataAccommodation) => (
        <>
          <div className={styles.informations}>
            <div>
              <h2>{dataAccommodation.title}</h2>
              <p>{dataAccommodation.location}</p>
              <div className={styles.tag}>
                {dataAccommodation.tags.map((tag) => (
                  <div>{tag}</div>
                ))}
              </div>
            </div>
            <div className={styles.host}>
              <div className={styles.hostInformations}>
                <div>
                  {hostName.map((name) => (
                    <p>{name}</p>
                  ))}
                </div>
                <img src={dataAccommodation.host.picture} alt="" />
              </div>
              <Rating rating={dataAccommodation.rating} />
            </div>
          </div>
          <div className={styles.collapse}>
            <Collapse
              title="Description"
              content={dataAccommodation.description}
            />
            <Collapse
              title="Équipements"
              content={dataAccommodation.equipments}
            />
          </div>
        </>
      ))}
    </main>
  );
}

export default Accommodation;
