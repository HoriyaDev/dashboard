import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

export function GeographyChart() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="240px"
      data={data}
      options={{
        backgroundColor: "transparent", // Set background to transparent
        colorAxis: { colors: ["#ffffff", "#808080" ] }, // Gradient from white to gray
        datalessRegionColor: "#f5f5f5", // Gray color for regions without data
        defaultColor: "#f5f5f5", // Default color for areas without data
      }}
    />
  );
}
