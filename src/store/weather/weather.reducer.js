import { WEATHER_ACTION_TYPES } from "./weather.types";
import { saveToLS,loadFromLS } from "../../utils/localStorage.util";

const INITIAL_STATE = {
  forecast: [],
  currentWeather: loadFromLS('current-weather') || {},
  isForecastLoading: false,
  isCurrentWeatherLoading: false,
  error: null,
  timeFetchWeather: loadFromLS('timeLastFetchWeather') || 0,
  timeFetchForecast: loadFromLS('time-forecast') || 0,

};


export const weatherReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {

    case WEATHER_ACTION_TYPES.FETCH_WEATHER_FORECAST_START:
      return {
        ...state,
        isForecastLoading: true,
      }
    case WEATHER_ACTION_TYPES.FETCH_WEATHER_FORECAST_SUCCESS:
      saveToLS('forecast',payload);
      return {
        ...state,
        forecast: payload,
        isForecastLoading: false,
      }
    case WEATHER_ACTION_TYPES.FETCH_WEATHER_FORECAST_ERROR:
      return {
        ...state,
        error: payload,
        isForecastLoading: false,
      }
    case WEATHER_ACTION_TYPES.TIME_FETCH_FORECAST:
      // saveToLS('time-forecast',payload);
      return {
        ...state,
        timeFetchForecast: payload
      }



    case WEATHER_ACTION_TYPES.FETCH_WEATHER_CURRENT_START:
      return {
        ...state,
        isCurrentWeatherLoading: true,
      }
    case WEATHER_ACTION_TYPES.FETCH_WEATHER_CURRENT_SUCCESS:
      saveToLS('current-weather',payload);
      return {
        ...state,
        isCurrentWeatherLoading: false,
        currentWeather: payload,
      }
    case WEATHER_ACTION_TYPES.FETCH_WEATHER_CURRENT_ERROR:
      return {
        ...state,
        error: payload,
        isCurrentWeatherLoading: false,
      }
    case WEATHER_ACTION_TYPES.TIME_FETCH_WEATHER:
      // saveToLS('timeLastFetchWeather',payload);
      return {
        ...state,
        timeFetchWeather: payload
      }

    default:
      return state;
  }
}


