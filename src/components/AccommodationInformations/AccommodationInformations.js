import React from "react";
import styles from "./AccommodationInformations.module.scss";
import Rating from "../Rating/Rating";

function AccommodationInformations({ accommodation }) {
  const { title, location, tags, host, rating } = accommodation;
  const hostName = host.name.split(" ");

  return (
    <div className={styles.informations}>
      <div>
        <h2>{title}</h2>
        <p>{location}</p>
        <div className={styles.tag}>
          {tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      </div>
      <div className={styles.host}>
        <div className={styles.hostInformations}>
          <div>
            {hostName.map((name) => (
              <p key={name}>{name}</p>
            ))}
          </div>
          <img src={host.picture} alt="" />
        </div>
        <Rating rating={rating} />
      </div>
    </div>
  );
}

export default AccommodationInformations;
