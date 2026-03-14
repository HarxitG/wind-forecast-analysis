"use client";

import { useEffect, useState } from "react";

import WindChart from "../components/WindChart";
import { loadActualData, loadForecastData } from "../utils/dataLoader";
import { getForecastForHorizon } from "../utils/forecastFilter";

export default function Home() {
  const [horizon, setHorizon] = useState(4);
  const [data, setData] = useState([]);

  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-01-02");

  useEffect(() => {
    async function loadData() {
      const actual = await loadActualData();
      const forecast = await loadForecastData();

      const filteredActual = actual.filter((a) => {
        const t = new Date(a.startTime);

        const start = new Date(startDate);

        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);

        return t >= start && t <= end;
      });

      const merged = getForecastForHorizon(filteredActual, forecast, horizon);

      setData(merged);
    }

    loadData();
  }, [horizon, startDate, endDate]);

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1100px",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >
      <h1>Wind Forecast Monitoring</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <label>Start Date</label>
          <br />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label>End Date</label>
          <br />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <label>Forecast Horizon: {horizon} hours</label>

        <br />

        <input
          type="range"
          min="0"
          max="48"
          value={horizon}
          onChange={(e) => setHorizon(Number(e.target.value))}
          style={{ width: "400px" }}
        />
      </div>

      {data.length === 0 && (
        <p style={{ marginBottom: "20px" }}>
          No forecast available for selected horizon.
        </p>
      )}

      <div
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #333",
        }}
      >
        <WindChart data={data} />
      </div>
    </div>
  );
}
