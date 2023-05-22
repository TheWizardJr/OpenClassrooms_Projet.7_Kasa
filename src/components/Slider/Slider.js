import { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/accomodations";
import styles from "./Slider.module.scss";


function Slider() {
    const idAccomodation = useParams().id;
    const dataAccomodation = data.filter((data) => data.id === idAccomodation);
    const pictures = dataAccomodation[0].pictures;

    const [currentPicture, setCurrentPicture] = useState(0);
    const getClassName = (index) => {
      if (index === currentPicture) {
        return styles.show;
      }
      if (index === currentPicture - 1) {
        return styles.left;
      }
      if (index === currentPicture + 1) {
        return styles.right;
      }
      return "";
    };
  
    function leftPicture() {
      if (currentPicture === 0) {
        return;
      } else {
        setCurrentPicture(currentPicture - 1);
      }
    }
  
    function righPicture() {
      if (currentPicture === pictures.length - 1) {
        return;
      } else {
        setCurrentPicture(currentPicture + 1);
      }
    }

    return (
        <div className={styles.carroussel}>
            {pictures.map((picture, index) => (
              <img
                key={index}
                src={picture}
                alt={dataAccomodation.title}
                className={getClassName(index)}
              />
            ))}
            {pictures.length > 1 && (
              <>
                <i
                  onClick={leftPicture}
                  className={`fas fa-chevron-left ${styles.left}`}
                ></i>
                <i
                  onClick={righPicture}
                  className={`fas fa-chevron-right ${styles.right}`}
                ></i>
              </>
            )}
            <p>{currentPicture + 1}/{pictures.length}</p>
          </div>
    );
}

export default Slider;