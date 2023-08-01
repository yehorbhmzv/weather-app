import React, {useEffect, useState} from "react";
import axios from "axios";
import { debounce } from 'lodash';

import { getCityData } from "../api/openweathermap";

const Input = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch cities data from API
  const fetchCities = async (searchTerm) => {
    try {
      const response = await axios.get(
          `https://api.openaq.org/v1/cities?limit=10&country=US&city=${searchTerm}`
      );
      const citiesData = response.data.results.map((city) => city.city);
      setCities(citiesData);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  // Debounced function to avoid calling API on every keystroke
  const debouncedFetchCities = debounce(fetchCities, 500);

  // Handle input change
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    debouncedFetchCities(searchTerm);
  };

  return (
      <div className="w-64 mx-auto mt-8">
        <input
            type="text"
            placeholder="Search cities..."
            className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleInputChange}
        />
        <ul className="mt-2 border border-t-0 rounded-b bg-white">
          {cities.map((city, index) => (
              <li
                  key={index}
                  className="px-4 py-2 hover:bg-blue-200 cursor-pointer"
                  onClick={() => setSearchTerm(city)}
              >
                {city}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default Input;
