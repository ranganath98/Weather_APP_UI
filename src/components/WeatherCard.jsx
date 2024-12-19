import React from "react";
import {WEATHER_ICON_URL} from "../utils/constatnts"

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold capitalize">{weather.city}</h2>
      <div className="flex items-center space-x-4">
        <img
          src={`${WEATHER_ICON_URL}/${weather.icon}`}
          alt="weather-icon"
        />
        <div>
          <p className="text-3xl font-bold">{weather.temperature}°C</p>
          <p className="text-gray-500 capitalize">{weather.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
