import React from "react";
import styles from "./style.module.css";

const SearchInput = ({ onSearch }) => {
  return (
    <div className={styles.searchInputContainer}>
      <input
        className={styles.searchInput}
        placeholder="Search for a movie"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
