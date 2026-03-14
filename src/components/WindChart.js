import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function WindChart({ data }) {
  const formatTime = (value) => {
    const date = new Date(value);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 60,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          {/* X AXIS */}
          <XAxis
            dataKey="time"
            tickFormatter={formatTime}
            minTickGap={40}
            label={{
              value: "Target Time End (UTC)",
              position: "bottom",
              offset: 20,
            }}
          />

          {/* Y AXIS */}
          <YAxis
            label={{
              value: "Power (MW)",
              angle: -90,
              position: "insideLeft",
              style: { textAnchor: "middle" },
            }}
          />

          <Tooltip />

          {/* LEGEND */}
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              bottom: 0,
              paddingTop: "25px",
            }}
          />

          <Line
            type="monotone"
            dataKey="actual"
            stroke="#2f7ed8"
            strokeWidth={2}
            dot={false}
            name="actual"
          />

          <Line
            type="monotone"
            dataKey="forecast"
            stroke="#2ca02c"
            strokeWidth={2}
            dot={false}
            name="forecast"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
