import React from "react";
import moment from "moment";
import styles from "./style.module.css";

const Modal = ({ visible, onClose, data }) => {
  return (
    <div
      className={`${styles.modal} ${visible ? styles.show : null}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>{data.title}</h3>
          <button onClick={onClose} className={styles.closeBtn}></button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalCol}>
            <img
              src={`https://image.tmdb.org/t/p/w400/${data.poster_path}`}
              className={styles.modalImage}
              alt={data.title}
            />
          </div>
          <div className={styles.modalCol}>
            <div className={styles.movieDetails}>
              <div>
                <strong>Release date: </strong>
                {moment(data.release_date).format("MMM DD, YYYY")}
              </div>
              <p>{data.overview}</p>
              <div>
                {`${data.vote_average} / 10 (${data.vote_count} total votes)`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
