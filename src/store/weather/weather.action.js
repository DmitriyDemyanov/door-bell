import { WEATHER_ACTION_TYPES } from "./weather.types";
import { fetchForecast,fetchCurrentWeather } from "../../utils/weatherApi";



export const fetchWeatherForecastStart = () => ({ type: WEATHER_ACTION_TYPES.FETCH_WEATHER_FORECAST_START });
export const fetchWeatherForecastSuccess = (forecast) => ({ type: WEATHER_ACTION_TYPES.FETCH_WEATHER_FORECAST_SUCCESS,payload: forecast });
export const fetchWeatherForecastError = (error) => ({ type: WEATHER_ACTION_TYPES.FETCH_WEATHER_CURRENT_ERROR,payload: error });

export const fetchWeatherForecastAsync = () => async (dispatch) => {
  dispatch(fetchWeatherForecastStart())
  try {
    const forecast = await fetchForecast();
    dispatch(fetchWeatherForecastSuccess(forecast));
  }
  catch (error) {
    dispatch(fetchWeatherForecastError(error))
  }
}


export const fetchWeatherCurrentStart = () => ({ type: WEATHER_ACTION_TYPES.FETCH_WEATHER_CURRENT_START });
export const fetchWeatherCurrentSuccess = (current) => ({ type: WEATHER_ACTION_TYPES.FETCH_WEATHER_CURRENT_SUCCESS,payload: current });
export const fetchWeatherCurrentError = (error) => ({ type: WEATHER_ACTION_TYPES.FETCH_WEATHER_CURRENT_ERROR,payload: error });

export const fetchCurrentWeatherAsync = () => async (dispatch) => {
  dispatch(fetchWeatherCurrentStart())
  try {
    const current = await fetchCurrentWeather();
    dispatch(fetchWeatherCurrentSuccess(current));
  }
  catch (error) {
    dispatch(fetchWeatherCurrentError(error))
  }
}