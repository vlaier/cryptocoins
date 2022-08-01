import React, { useRef, useEffect } from "react";
import styles from "./Chart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CoinChart({ chartData: chartData }) {
  const data = {
    labels: chartData.timeLabels.map((tl) => tl.toLocaleTimeString("pl-PL")),
    datasets: [
      {
        label: "Price in USD",
        data: chartData.priceInUsdData,
        borderColor: "#ff9332",
        backgroundColor: "#ffb347",
      },
      {
        label: "Price in BTC",
        data: chartData.priceInBtcData,
        borderColor: "#ff9332",
        backgroundColor: "#ffb347",
      },
      {
        label: "Price in ETH",
        data: chartData.priceInEthData,
        borderColor: "#1652f0",
        backgroundColor: "#3b99fc",
      },
    ],
  };
  const options = {
    plugins: {
      tooltip: { intersect: false },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          callback: function (val, index) {
            return index % 5 === 0 ? this.getLabelForValue(val) : "";
          },
        },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <Line
        className={styles.chart}
        options={options}
        data={data}
        height={350}
      />
      ;
    </div>
  );
}
