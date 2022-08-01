export default (chart) => {
  const timeLabels = [];
  const priceInUsdData = [];
  const priceInBtcData = [];
  const priceInEthData = [];
  chart.forEach((chartElement) => {
    timeLabels.push(new Date(chartElement[0] * 1000));
    priceInUsdData.push(chartElement[1]);
    priceInBtcData.push(chartElement[2]);
    priceInEthData.push(chartElement[3]);
  });

  return { timeLabels, priceInUsdData, priceInBtcData, priceInEthData };
};
