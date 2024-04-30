import { WEATHER_ACTION_TYPES } from "./weather.types";

const INITIAL_STATE = {
  forecast: [],
  currentWeather: {},
};

export const weatherReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {
    case WEATHER_ACTION_TYPES.SET_WEATHER_FORECAST:
      return {
        ...state,
        forecast: payload,
      }
    case WEATHER_ACTION_TYPES.SET_WEATHER_CURRENT:
      return {
        ...state,
        currentWeather: payload,
      }
    default:
      return state;
  }
}


