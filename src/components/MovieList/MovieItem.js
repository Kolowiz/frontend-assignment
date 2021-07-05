import React from "react";
import styles from "./style.module.css";

const MovieItem = ({ data, onClickItem }) => {
  return (
    <div className="grid-item">
      <div className={styles.card} onClick={() => onClickItem(data)}>
        <div
          className={styles.cardImageContainer}
          style={{
            background: `url(${process.env.REACT_APP_API_BASE_IMAGE_URL}/${data.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
