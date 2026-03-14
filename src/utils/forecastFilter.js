export function getForecastForHorizon(actualData, forecastData, horizonHours) {
  const result = [];

  actualData.forEach((actual) => {
    const targetTime = new Date(actual.startTime);

    const cutoff = new Date(targetTime);
    cutoff.setHours(cutoff.getHours() - horizonHours);

    const candidates = forecastData.filter((f) => {
      return (
        f.startTime === actual.startTime && new Date(f.publishTime) <= cutoff
      );
    });

    if (candidates.length === 0) return;

    candidates.sort(
      (a, b) => new Date(b.publishTime) - new Date(a.publishTime),
    );

    const bestForecast = candidates[0];

    result.push({
      time: actual.startTime,
      actual: actual.generation,
      forecast: bestForecast.generation,
    });
  });

  return result;
}
