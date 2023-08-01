import React, { useEffect, useState } from "react";
import CityCard from "./components/city-card";
import Input from "./components/input";
import { search } from "./utils/input";

function App() {
  const [ selectedCity, setSelectedCity ] = useState(null);
  const [ cardData, setCardData ] = useState(null);


  useEffect(()=>{
    const storedValue = localStorage.getItem('city')
    if(storedValue) {
      setSelectedCity({value: storedValue, label: storedValue})
    }
  },[])

  useEffect(() => {
    if (selectedCity) {
      search(selectedCity.value, (data) => {
        setCardData(data);
      });
    } else {
      setCardData(null)
    }
  }, [ selectedCity ]);


  // Handle city selection
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  useEffect(() => {
  }, [ selectedCity ]);
  return (
      <div className="w-full h-full flex flex-col align-center">
        <Input selectedCity={selectedCity} handleSelectCity={handleCityChange}/>
        {cardData && <CityCard selectedCity={selectedCity} data={cardData}/>}
      </div>
  );
}

export default App;
