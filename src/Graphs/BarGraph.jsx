import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const BarGraph = () => {
  const data = [
    {
      name: "AD",
      uv: 450,   // Modified value
      pv: 250,   // Modified value
      amt: 200,  // Modified value
      count: 50, // Modified value
    },
    {
      name: "AE",
      uv: 300,   // Modified value
      pv: 150,   // Modified value
      amt: 450,  // Modified value
      count: 100, // Modified value
    },
    {
      name: "AF",
      uv: 200,   // Modified value
      pv: 500,   // Modified value
      amt: 150,  // Modified value
      count: 200, // Modified value
    },
    {
      name: "AG",
      uv: 400,   // Modified value
      pv: 350,   // Modified value
      amt: 100,  // Modified value
      count: 250, // Modified value
    },
    {
      name: "AH",
      uv: 150,   // Modified value
      pv: 450,   // Modified value
      amt: 300,  // Modified value
      count: 150, // Modified value
    },
    {
      name: "AL",
      uv: 250,   // Modified value
      pv: 350,   // Modified value
      amt: 400,  // Modified value
      count: 200, // Modified value
    },
    {
      name: "AM",
      uv: 350,   // Modified value
      pv: 300,   // Modified value
      amt: 250,  // Modified value
      count: 400, // Modified value
    },
  ];
  
  
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 10,
          left: 0,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" type="category" /> 
        <YAxis type="number" /> 
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#ffb5b5" />
        <Bar dataKey="uv" stackId="a" fill="#bbe4e9" />
        <Bar dataKey="amt" stackId="a" fill="#ff9a3c" />
        <Bar dataKey="count" stackId="a" fill="#ffcab0" />
        
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
