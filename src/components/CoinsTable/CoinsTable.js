import React, { useState } from "react";
import styles from "./CoinsTable.module.css";
import Link from "next/link";
export default function CoinsTable({ coins }) {
  const [direction, setDirection] = useState("desc");
  const [value, setValue] = useState("price");
  const setValueAndDirection = (localValue) => {
    setValue(localValue);
    direction === "asc" ? setDirection("desc") : setDirection("asc");
  };
  const sortBy = () => {
    if (direction === "asc") {
      return coins.sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }
    if (direction === "desc") {
      return coins.sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
  };
  const sortedCoins = sortBy();
  const coinElements = sortedCoins.map((coin) => (
    <Link href={`coin/${coin.id}`} key={coin.id}>
      <div>
        <div className={styles.coin_logo}>
          <img src={coin.icon} alt={`${coin.name} logo`} />
        </div>
        <div className={styles.coin_name}>{coin.name}</div>
        <div className={styles.coin_price}>{coin.price}</div>
        <div className={styles.coin_name}>{coin.marketCap}</div>
        <div className={styles.coin_name}>{coin.priceBtc}</div>
      </div>
    </Link>
  ));
  return (
    <div className={styles.table}>
      <button
        className={styles.column_name}
        onClick={() => setValueAndDirection("name")}
      >
        Name
      </button>
      <button
        className={styles.column_name}
        onClick={() => setValueAndDirection("name")}
      >
        Name
      </button>
      <button
        className={styles.column_name}
        onClick={() => setValueAndDirection("price")}
      >
        Price{" "}
      </button>
      <button
        className={styles.column_name}
        onClick={() => setValueAndDirection("marketCap")}
      >
        Market Cap
      </button>
      <button
        className={styles.column_name}
        onClick={() => setValueAndDirection("priceBtc")}
      >
        Price in BTC
      </button>

      {coinElements}
    </div>
  );
}
