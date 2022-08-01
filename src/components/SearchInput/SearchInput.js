import React from "react";
import styles from "./SearchInput.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchInput(props) {
  return (
    <div className={styles.wrapper}>
      <FaSearch />
      <input type="text" placeholder="Search..." />
    </div>
  );
}
