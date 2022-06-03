import React, { useCallback, useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import ContentWrapper from "../contentWrapper/contentWrapper.component";
import { getForecastFromLonLat } from "../../data/APIs/APIs";

import { options } from "./utils";
import { useCity } from "../../context/cities-context";

const LineChart = () => {
  const {
    state: {
      activeCity: { name, coordinates },
    },
  } = useCity();

  const getData = async () => {
    console.log(name);
    const data = await getForecastFromLonLat(coordinates[1], coordinates[0]);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ContentWrapper>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </ContentWrapper>
    </div>
  );
};

export default LineChart;
