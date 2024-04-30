import { WEATHER_ACTION_TYPES } from "./weather.types";

const INITIAL_STATE = {
  forecast: [],
  currentWeather: {},
  isForecastLoading: false,
  isCurrentWeatherLoading: false,
  error: null,
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


    case WEATHER_ACTION_TYPES.FETCH_WEATHER_CURRENT_START:
      return {
        ...state,
        isCurrentWeatherLoading: true,
      }
    case WEATHER_ACTION_TYPES.FETCH_WEATHER_CURRENT_SUCCESS:
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
    default:
      return state;
  }
}


