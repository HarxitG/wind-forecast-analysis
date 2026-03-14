# Wind Forecast Analysis Dashboard

This project implements a wind generation forecast analysis system.

## Features

- Wind forecast vs actual visualization
- Forecast horizon filtering (0–48 hours)
- Date range selection
- Interactive charts
- Data analysis using Jupyter Notebook

## Tech Stack

Frontend
- Next.js
- Recharts

Data Analysis
- Python
- Pandas
- Matplotlib
- Jupyter Notebook

## Project Structure

src/
components/
utils/

public/data/
actual.json
forecast.json

analysis/
wind_analysis.ipynb

## Running the Project

npm install
npm run dev

Open http://localhost:3000

## Deployment

Deployed using Vercel.
Live: https://wind-forecast-analysis.vercel.app/

## Analysis

Notebook includes:

- forecast error calculation
- mean error
- median error
- p99 error
- error distribution
- reliable wind capacity
