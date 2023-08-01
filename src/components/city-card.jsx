import React from "react";

const CityCard = ({ selectedCity, data }) => {

  return (

      <div
          className="relative mx-auto mt-8 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div
            className="relative m-0 overflow-hidden rounded-t bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
              src="https://www.timeanddate.com/scripts/weather_og.php?h1=Weather&h2=Local%20Weather%20Around%20the%20World"/>
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {selectedCity && selectedCity.value}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Weather Information
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <p className="flex items-center text-lg font-gray-800">
            Temperature:
          </p>
          <span>℃</span>
        </div>
        <div className="flex items-center justify-between px-6 py-2">
          <p className="flex items-center text-sm font-gray-800">
            Max:
          </p>
          <span>℃</span>
        </div>
        <div className="flex items-center justify-between px-6 py-2">
          <p className="flex items-center text-sm font-gray-800">
            Min:
          </p>
          <span>℃</span>
        </div>
        <div className="flex items-center justify-between p-6">
          <p className="flex items-center text-lg font-gray-800">
            Wind:
          </p>
          <span>℃</span>
        </div>
        <div className="flex items-center justify-between p-6">
          <p className="flex items-center text-lg font-gray-800">
            Humidity:
          </p>
          <span>℃</span>
        </div>
      </div>
  );
};

export default CityCard;
