import { WEATHER_ACTION_TYPES } from "./weather.types";

const INITIAL_STATE = {
  forecast: ['test'],
};

export const weatherReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {
    case WEATHER_ACTION_TYPES.SET_WEATHER_FORECAST:
      return {
        ...state,
        forecast: payload,
      }
    default:
      return state;
  }
}


