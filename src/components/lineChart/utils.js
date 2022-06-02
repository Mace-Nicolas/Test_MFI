export const options = {
  chart: {
    type: "line",
  },
  title: {
    text: "3 Days forecast",
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    title: {
      text: "Amount",
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    { name: "Temperature", data: [12, 15, 18] },
    { name: "Humidity", data: [30, 50, 25] },
  ],
};
