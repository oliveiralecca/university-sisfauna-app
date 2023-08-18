/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { Data } from "./types";

export function StackedBarGraph({ data }: { data: any[] }) {
  const newData = useMemo(() => {
    const standardData: Data[] = [];

    if (data.length && typeof data !== "string") {
      data.forEach((item) => {
        const { animal, genres } = item;
        const { male, female } = genres;

        standardData.push({
          animal,
          male,
          female,
        });
      });
    }

    return standardData;
  }, [data]);

  if (data && typeof data === "string") {
    return <p>{data}</p>;
  }

  return (
    <BarChart
      width={550}
      height={350}
      data={newData}
      margin={{
        top: 10,
        right: 60,
        left: 20,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="animal" fontSize={14} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="male" stackId="a" fill="#8884d8" />
      <Bar dataKey="female" stackId="a" fill="#e8a2d9" />
    </BarChart>
  );
}
