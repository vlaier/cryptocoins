import { useState } from "react";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import CoinsTable from "../components/CoinsTable/CoinsTable.js";
import { loadCoins } from "../lib/apiCallls";

export default function Home({ coins: { coins } }) {
  const [query, setQuery] = useState("");
  const filtrerCoins = () => {};

  return (
    <Layout>
      {/* <SearchInput query={query} /> */}

      <CoinsTable coins={coins} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const coins = await loadCoins();
  return {
    props: {
      coins,
    },
  };
};
