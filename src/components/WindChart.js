"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function WindChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="time" />

        <YAxis />

        <Tooltip />

        <Legend />

        <Line
          type="monotone"
          dataKey="actual"
          stroke="#0000ff"
          strokeWidth={2}
        />

        <Line
          type="monotone"
          dataKey="forecast"
          stroke="#00aa00"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
