import React from "react";
const locations = ["Delhi", "Moscow", "Paris", "New York", "Sydney", "Riyadh"];

const Filters = ({ location, setLocation, from, setFrom, to, setTo, onSearch }) => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex space-x-4">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select Location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={onSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
        <button
          onClick={() => {
            setLocation("");
            setTo("");
            setFrom("");
          }
            }
          className="bg-red-400 text-white px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
