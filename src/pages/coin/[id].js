import React from "react";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import convertChartData from "../../utils/convertChartData";
import LineChart from "../../components/LineChart/LineChart";
import Calculator from "../../components/Calculator/Calculator";
import { FaTwitter } from "react-icons/fa";
import { priceFormatter } from "../../utils/priceFormatter";

export default function coinId({
  coin: { coin: coin },
  chart: { chart: chart },
}) {
  const chartData = chart;

  return (
    <Layout>
      <div className="text-white">
        <div>
          <img src={coin.icon} alt={`${coin.name} logo`} />
          <h2>{`${coin.name} (${coin.symbol})`}</h2>
          <p>{`${priceFormatter.format(coin.price)}`}</p>
        </div>
        <div>
          <div>
            <div>
              <span>Website</span>
              <div>
                <div>
                  <Link href={coin.websiteUrl}>{coin.websiteUrl}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-10 ">
        <div className="w-[66%] rounded-md shadow-md bg-secondary h-[50vh] p-3">
          <LineChart chartData={convertChartData(chartData)} />
        </div>
        <div className="w-[33%] rounded-md shadow-md bg-secondary h-fit p-3">
          <Calculator
            iconUrl={coin.icon}
            baseCurrencyId={coin.symbol}
            priceInBtc={coin.priceBtc}
            priceInUsd={coin.price}
          />
        </div>
      </div>

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
