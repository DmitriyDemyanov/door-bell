const API_KEY = '4a181470a6cb181dfbf7ea732910d5c2';
const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=50.404815&lon=30.651682&units=metric&lang=en&appid=';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=50.404815&lon=30.651682&units=metric&lang=en&appid=';

export const fetchForecast = async () => {
  try {
    const res = await fetch(`${FORECAST_URL}${API_KEY}`);
    const data = await res.json();
    if (data.cod === '200') {
      return data;
    }
    throw new Error(`Request Failed: ${data.cod}, ${data.message}`);
  } catch (error) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
};

export const fetchCurrentWeather = async () => {
  try {
    const res = await fetch(`${CURRENT_WEATHER_URL}${API_KEY}`);
    const current = await res.json();
    if (current.cod === 200) {
      return current;
    }
    throw new Error(`Request Failed: ${current.cod}, ${current.message}`);
  } catch (error) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
};