import styles from "./Accomodation.module.scss";
import { data } from "../../data/accomodations";
import Collapse from "../../components/Collapse/Collapse";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Rating from "../../components/Rating/Rating";

function Accomodation() {
  const idAccomodation = useParams().id;
  const dataAccomodation = data.filter((data) => data.id === idAccomodation);
  const hostName = dataAccomodation[0].host.name.split(" ");

  return (
    <main className="container">
      <Slider />
      {dataAccomodation.map((dataAccomodation) => (
        <>
          <div className={styles.informations}>
            <div>
              <h2>{dataAccomodation.title}</h2>
              <p>{dataAccomodation.location}</p>
              <div className={styles.tag}>
                {dataAccomodation.tags.map((tag) => (
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
                <img src={dataAccomodation.host.picture} alt="" />
              </div>
              <Rating rating={dataAccomodation.rating} />
            </div>
          </div>
          <div className={styles.collapse}>
            <Collapse
              title="Description"
              content={dataAccomodation.description}
            />
            <Collapse
              title="Équipements"
              content={dataAccomodation.equipments}
            />
          </div>
        </>
      ))}
    </main>
  );
}

export default Accomodation;
