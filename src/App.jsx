import TopButtons from "./components/TopButtons"
import Inputs from "./components/Inputs"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"
import Forecast from "./components/Forecast"
import getFormattedWeatherData from "./services/weatherService"
import { useEffect, useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {

  const [query, setQuery] = useState({q: "pune"});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async() => {

    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

  await getFormattedWeatherData({ ...query, units}).then( data => {
    setWeather(data);
  })
    console.log(data);
  };
  useEffect(() => {
    getWeather();
  }, [query, units]);



  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      { weather && (
        <>
        <TimeAndLocation weather={weather} />
        <TempAndDetails weather={weather} units={units} />
        <Forecast title="3 Hour Step Forecast" data={weather.hourly} />
        <Forecast title="Daily Forecast" data={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={1500} theme="colored" />
      
    </div>
  );
};

export default App;