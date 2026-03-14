export async function loadActualData() {
  const res = await fetch("/data/actual.json");
  return await res.json();
}

export async function loadForecastData() {
  const res = await fetch("/data/forecast.json");
  return await res.json();
}
