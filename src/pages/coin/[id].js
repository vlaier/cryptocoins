import React from "react";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import styles from "./Coin.module.css";
import convertChartData from "../../utils/convertChartData";
import CoinChart from "../../components/Chart/Chart";
import { FaTwitter } from "react-icons/fa";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export default function coinId({
  coin: { coin: coin },
  chart: { chart: chart },
}) {
  const chartData = chart;
  console.log(coin);
  return (
    <Layout>
      <div className={styles.coinInfo}>
        <div className={styles.coinHeader}>
          <img src={coin.icon} alt={`${coin.name} logo`} />
          <h2>{`${coin.name} (${coin.symbol})`}</h2>
          <p>{`${formatter.format(coin.price)}`}</p>
        </div>
        <div className={styles.coinOverview}>
          <div className={styles.coinSocials}>
            <div className={styles.coinSocialRow}>
              <span className={styles.rowTitle}>Website</span>
              <div className={styles.coinItems}>
                <div className={styles.coinItem}>
                  <Link href={coin.websiteUrl}>{coin.websiteUrl}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.chart}>
        <CoinChart chartData={convertChartData(chartData)} />
      </div> */}

      <Link href={"../"}>
        <button>back</button>
      </Link>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://api.coinstats.app/public/v1/coins/${params.id}`
  );
  const coin = await res.json();
  const resChart = await fetch(
    `https://api.coinstats.app/public/v1/charts?period=24h&coinId=${params.id}`
  );
  const chart = await resChart.json();
  return {
    props: {
      coin,
      chart,
    },
  };
};
export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
