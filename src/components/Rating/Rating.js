import styles from "./Rating.module.scss";

function Rating(dataAccomodation) {
  
  function renderRatingStars(rating) {
    const starCount = 5;
    const fullStar = "fas fa-star";
    const emptyStar = `fas fa-star ${styles.emptyStar}`;

    const stars = [];
    for (let i = 1; i <= starCount; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className={fullStar}></i>);
      } else {
        stars.push(<i key={i} className={emptyStar}></i>);
      }
    }
    return stars;
  }

  return (
    <div className={styles.rating}>
      {renderRatingStars(dataAccomodation.rating)}
    </div>
  );
}

export default Rating;
