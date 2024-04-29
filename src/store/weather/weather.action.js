import { WEATHER_ACTION_TYPES } from "./weather.types";

export const setWeatherForecast = (forecast) => ({ type: WEATHER_ACTION_TYPES.SET_WEATHER_FORECAST,payload:forecast })