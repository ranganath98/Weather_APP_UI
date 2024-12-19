import React, { useState } from "react";

import WeatherCard from "./components/WeatherCard";
import WeatherTable from "./components/WeatherTable";
import Filters from "./components/Filters";
import Loader from "./components/Loader";
import {
  fetchCurrentWeather,
  fetchHistoricalData,
} from "./services/weatherService"; // Import the service

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // New state for tracking search

  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const getCurrentWeather = async () => {
    setLoading(true);
    try {
      const data = await fetchCurrentWeather(location); // Call service function
      setCurrentWeather(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const getHistoricalData = async () => {
    setLoading(true);
    try {
      const data = await fetchHistoricalData(location, from, to); // Call service function
      setHistoricalData(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const onSearch = () => {
    if (location) {
      setHasSearched(true); // Mark that a search has been performed
      if (from && !to) {
        alert("Please select a To Date!");
      } else if (!from && to) {
        alert("Please select a From Date!");
      } else if (!from && !to) {
        getCurrentWeather(); // Fetch current weather
      } else {
        const fromDate = new Date(from);
        const toDate = new Date(to);
        const maxRange = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
        if (toDate - fromDate > maxRange) {
          alert("Date range cannot exceed 30 days!");
          return;
        }
        getHistoricalData(); // Fetch historical data
      }
    } else {
      alert("Please select a location!");
    }
  };
  // if (!location && !from && !to) return;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center bg-cyan-500 text-white p-3">
        Weather App
      </h1>
      <Filters
        location={location}
        setLocation={setLocation}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        onSearch={onSearch}
      />

      {/* {loading ? <Loader /> : <WeatherCard weather={currentWeather} />}
      <WeatherTable historicalData={historicalData} hasSearched={hasSearched} /> */}

      {/* Loader */}
      {loading && <Loader />}
      {/* Conditional rendering for WeatherCard and WeatherTable */}
      {!loading && hasSearched && (
        <>
          {/* Display WeatherCard if location is provided */}
          {location && !from && !to && (
            <>{currentWeather && <WeatherCard weather={currentWeather} />}</>
          )}

          {/* Display WeatherTable if both location and date range are provided */}
          {location && from && to && (
            <>
              {historicalData.length > 0 ? (
                <WeatherTable
                  historicalData={historicalData}
                  hasSearched={hasSearched}
                />
              ) : (
                <h1 className="text-2xl font-bold text-center mt-8">
                  No historical data available
                </h1>
              )}
            </>
          )}
        </>
      )}

      {/*  */}
    </div>
  );
};

export default App;
