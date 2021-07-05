import React from "react";
import styles from "./style.module.css";

const MovieItem = ({ data, onClickItem }) => {
  return (
    <div className="grid-item">
      <div className={styles.card} onClick={() => onClickItem(data)}>
        <div
          className={styles.cardImageContainer}
          style={{
            background: `url(https://image.tmdb.org/t/p/w400/${data.poster_path})`,
            backgroundSize: "cover",
          }}
        >
          <div className={styles.rating}>{data.vote_average}</div>
        </div>
        <div className={styles.cardTitle}>{data.title}</div>
      </div>
    </div>
  );
};

export default MovieItem;
