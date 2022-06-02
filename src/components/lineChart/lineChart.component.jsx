import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import ContentWrapper from "../contentWrapper/contentWrapper.component";
import { options } from "./utils";

const LineChart = () => {
  return (
    <div>
      <ContentWrapper>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </ContentWrapper>
    </div>
  );
};

export default LineChart;
