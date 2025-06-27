"use client";
import { useEffect, useState } from "react";
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

type LogChartProps = {
  priceData: { price: string; date: string }[];
};

export const LogChart = ({ priceData }: LogChartProps) => {
  const [historicData, setHistoricData] = useState([]);

  useEffect(() => {
    setHistoricData(priceData);
  }, []);

  return (
    <>
      <ResponsiveContainer width={"100%"} height={500}>
        <LineChart
          width={500}
          height={300}
          data={historicData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
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
