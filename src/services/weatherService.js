import axios from "axios";
import BACKEND_URL from "../utils/constatnts";

// Fetch current weather data
export const fetchCurrentWeather = async (city) => {
  try {
    // console.log(`${BACKEND_URL}/current/${city}`);
    const response = await axios.get(`${BACKEND_URL}/current/${city}`);

    return response.data; // Return current weather data
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

// Fetch historical weather data
export const fetchHistoricalData = async (city, from, to) => {
  try {
    // console.log(`${BACKEND_URL}/history`);
    const response = await axios.get(`${BACKEND_URL}/history`, {
      params: { city, from, to },
    });
    return response.data; // Return historical data
  } catch (error) {
    console.error("Error fetching historical data:", error);
    throw error;
  }
};
