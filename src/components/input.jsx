import React from 'react';
import Select from 'react-select';
import {cities} from "../utils/input";
import 'tailwindcss/tailwind.css';

const options = cities.map(city => ({value: city, label: city}));

const AutocompleteSelect = ({ selectedCity, handleSelectCity}) => {

  return (
      <div className="w-64 mx-auto mt-8">
        <Select
            options={options}
            value={selectedCity}
            onChange={handleSelectCity}
            placeholder="Search cities..."
            isClearable
            isSearchable
        />
      </div>
  );
};

export default AutocompleteSelect;



