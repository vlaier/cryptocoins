import { useState } from "react";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";
import CoinsTable from "../components/CoinsTable/CoinsTable.js";

export default function Home({ coins: { coins: coins } }) {
  const [query, setQuery] = useState("");
  const filtrerCoins = () => {};

  return (
    <Layout>
      <div className={styles.counts}>Found {coins.length} crypto coins.</div>
      <SearchInput query={query} />
      <div>
        <CoinsTable coins={coins} />
      </div>
      test
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=20"
  );
  const coins = await res.json();
  return {
    props: {
      coins,
    },
  };
};
