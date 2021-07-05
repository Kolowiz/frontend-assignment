import React from "react";

import SearchInput from "./SearchInput";
import logo from "../../images/logo.svg";
import styles from "./style.module.css";

const Header = ({ onSearch }) => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Timescale" />
      <SearchInput onSearch={onSearch} />
    </div>
  );
};

export default Header;
