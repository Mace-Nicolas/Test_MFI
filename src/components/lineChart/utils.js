export const options = {
  chart: {
    type: "line",
  },
  title: {
    text: "3 Days forecast",
  },
  xAxis: {
    categories: [],
  },

  legend: {
    enabled: false,
  },
  series: [
    { name: "Temperature", data: [], tooltip: { valueSuffix: "°C" } },
    { name: "Humidity", data: [], tooltip: { valueSuffix: "%" } },
  ],
  tooltip: {
    shared: true,
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
    },
  },
};
