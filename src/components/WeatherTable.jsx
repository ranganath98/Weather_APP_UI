import React from "react";

const WeatherTable = ({ historicalData, hasSearched }) => {
    if(!hasSearched) return <></>
  if (!historicalData.length) return <h1 className="text-2xl font-bold text-center mt-40">No data available</h1>;

  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">City</th>
          <th className="border-b p-2 text-left">Date</th>
          <th className="border-b p-2 text-left">Temperature (°C)</th>
          <th className="border-b p-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        {historicalData.map((item, index) => (
          <tr key={index} className="hover:bg-sky-100 even:bg-gray-100">
            <td className="border-b p-2 capitalize">{item.city}</td>
            <td className="border-b p-2">{new Date(item.date).toLocaleDateString("en-IN")}</td>
            <td className="border-b p-2">{item.temperature}</td>
            <td className="border-b p-2 capitalize">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherTable;
