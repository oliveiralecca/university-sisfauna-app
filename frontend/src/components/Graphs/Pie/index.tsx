import { useCallback } from "react";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { CustomizedLabelProps, Data } from "./types";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;

export function PieGraph({ data }: { data: Data[] }) {
  const renderCustomizedLabel = useCallback(
    ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index,
    }: CustomizedLabelProps) => {
      const radius = 25 + innerRadius + (outerRadius - innerRadius);
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="#609966"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {data[index]?.name}
          {` (${(percent * 100).toFixed(0)}%)`}
        </text>
      );
    },
    [data]
  );

  return (
    <ResponsiveContainer width="100%" height="88%">
      <PieChart height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
