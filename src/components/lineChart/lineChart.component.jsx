import React, { useState, useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import ContentWrapper from "../contentWrapper/contentWrapper.component";

import { options } from "./utils";
import { useCity } from "../../context/cities-context";
import { useForecast } from "../../hooks/forecast/forecast.hooks";

const LineChart = () => {
  const {
    state: {
      activeCity: { name, coordinates },
    },
  } = useCity();

  const [optionsForChart, setOptionsForChart] = useState(options);
  const { humidity, temperatures, xAxisDates } = useForecast(coordinates);

  useEffect(() => {
    if (humidity.length === 3) {
      setOptionsForChart((prev) => ({
        ...prev,
        series: [
          { name: "Temperature", data: temperatures },
          { name: "Humidity", data: humidity },
        ],
        title: { text: `3 Days forecast in ${name}` },
        xAxis: { categories: xAxisDates },
      }));
    }
  }, [humidity, temperatures, name, xAxisDates]);

  return (
    <div>
      <ContentWrapper>
        <HighchartsReact highcharts={Highcharts} options={optionsForChart} />
      </ContentWrapper>
    </div>
  );
};

export default LineChart;
