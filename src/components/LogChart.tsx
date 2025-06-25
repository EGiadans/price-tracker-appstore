"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const LogChart = () => {
  const data = [
    {
      name: "19/Jun",
      price: 179,
    },
    {
      name: "20/Jun",
      price: 179,
    },
    {
      name: "21/Jun",
      price: 179,
    },
    {
      name: "22/Jun",
      price: 179,
    },
    {
      name: "23/Jun",
      price: 179,
    },
    {
      name: "24/Jun",
      price: 179,
    },
  ];

  return (
    <>
      <ResponsiveContainer width={"100%"} height={500}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
