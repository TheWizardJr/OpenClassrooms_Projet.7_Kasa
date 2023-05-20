import styles from "./Accomodation.module.scss";
import { data } from "../../data/accomodations";
import Collapse from "../../components/Collapse/Collapse";
import { useParams } from "react-router-dom";

function Accomodation() {
  const idAccomodation = useParams().id;
  const dataAccomodation = data.filter((data) => data.id === idAccomodation);
  const hostName = dataAccomodation[0].host.name.split(" ");

  return (
    <main className="container">
      {dataAccomodation.map((dataAccomodation) => (
        <>
          <div className={styles.carroussel}>
            <img
              src={dataAccomodation.pictures[0]}
              alt={dataAccomodation.title}
            />
            <i className={`fas fa-chevron-left ${styles.left}`}></i>
            <i className={`fas fa-chevron-right ${styles.right}`}></i>
            <p>1/4</p>
          </div>
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
              <div className={styles.rating}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div className={styles.collapse}>
            <div>
              <Collapse
                title="Description"
                content={dataAccomodation.description}
              />
            </div>
            <div>
              <Collapse
                title="Équipements"
                content={dataAccomodation.equipments}
              />
            </div>
          </div>
        </>
      ))}
    </main>
  );
}

export default Accomodation;
