import React, { useState, useRef, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function createGradient(ctx, area, colorStart, colorEnd) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
}
export default function LineChart({ chartData: chartValues }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ datasets: [] });

  const data = {};
  const options = {
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: { display: true },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        grid: {
          display: false,
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          display: false,
        },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 8,
        hitRadius: 8,
        pointStyle: "circle",
      },
    },
  };
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    const chartData = {
      labels: chartValues.timeLabels.map((tl) =>
        tl.toLocaleTimeString("pl-PL")
      ),
      datasets: [
        {
          label: "Price in USD",
          data: chartValues.priceInUsdData,
          borderColor: "green",
          backgroundColor: createGradient(
            chart.ctx,
            chart.chartArea,
            "rgba(58, 170, 67, 0)",
            "rgba(58, 170, 67, 0.1)"
          ),

          yAxisID: "y",
          fill: true,
        },
        {
          label: "Price in BTC",
          data: chartValues.priceInBtcData,
          borderColor: "#ff9332",
          backgroundColor: createGradient(
            chart.ctx,
            chart.chartArea,
            "rgba(255, 202, 0, 0)",
            "rgba(255, 202, 0, 0.1)"
          ),
          yAxisID: "y1",
          fill: true,
        },
        {
          label: "Price in ETH",
          data: chartValues.priceInEthData,
          borderColor: "#1652f0",
          backgroundColor: createGradient(
            chart.ctx,
            chart.chartArea,
            "rgba(0, 102, 234, 0)",
            "rgba(0, 102, 234, 0.1)"
          ),
          yAxisID: "y2",
          fill: true,
        },
      ],
    };
    setChartData(chartData);
  }, []);
  return <Line ref={chartRef} options={options} data={chartData} />;
}
