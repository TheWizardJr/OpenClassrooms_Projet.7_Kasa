import { useState } from "react";
import styles from "./Collapse.module.scss";

function Collapse({ title, content, id }) {
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
      <div
        onClick={() => toggleDescription(id)}
        className={`${styles.collapse} ${
          visibleDescriptions.includes(id) ? "" : styles.withmargin
        }`}
      >
        <h3>{title}</h3>
        {/* Utilisation de la balise <i> avec des classes conditionnelles */}
        <i
          className={`fas ${
            visibleDescriptions.includes(id)
              ? "fa-chevron-up"
              : "fa-chevron-down"
          }`}
        ></i>
      </div>
      <div className={styles.description}>
        {/* Vérification si le content est un tableau */}
        {Array.isArray(content)
          ? content.map((item, index) => {
              return (
                visibleDescriptions.includes(id) && (
                    <p key={index}>{item}</p>
                )
              );
            })
          : visibleDescriptions.includes(id) && (
                <p>{content}</p>
            )}
      </div>
    </div>
  );
}

export default Collapse;
