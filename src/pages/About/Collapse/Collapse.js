import { useState } from "react";
import styles from "./Collapse.module.scss";
import { data } from "../../../data/about";

function Collapse() {
  // Utilisation de l'état pour gérer les descriptions visibles
  const [visibleDescriptions, setVisibleDescriptions] = useState([]);

  // Fonction pour basculer la visibilité de la description
  const toggleDescription = (itemId) => {
    if (visibleDescriptions.includes(itemId)) {
      // Si l'ID de l'élément est déjà dans le tableau, le supprimer pour masquer la description
      setVisibleDescriptions(visibleDescriptions.filter((id) => id !== itemId));
    } else {
      // Sinon, ajouter l'ID de l'élément au tableau pour afficher la description
      setVisibleDescriptions([...visibleDescriptions, itemId]);
    }
  };

  return (
    <div className={styles.about}>
      {data.map((item) => (
        <>
          <div
            onClick={() => toggleDescription(item.id)}
            key={item.id}
            className={`${styles.collapse} ${
              visibleDescriptions.includes(item.id) ? "" : styles.withmargin
            }`}
          >
            <p>{item.title}</p>
            {/* Utilisation de la balise <i> avec des classes conditionnelles */}
            <i
              className={`fas ${
                visibleDescriptions.includes(item.id)
                  ? "fa-chevron-up"
                  : "fa-chevron-down"
              }`}
            ></i>
          </div>
          <div className={styles.description}>
            {/* Utilisation de la condition visibleDescriptions.includes(item.id) pour afficher ou masquer la description */}
            {visibleDescriptions.includes(item.id) && <p>{item.description}</p>}
          </div>
        </>
      ))}
    </div>
  );
}

export default Collapse;
