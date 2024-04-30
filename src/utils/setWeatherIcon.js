const allWeatherIcon = {
  '01d': 'weather-sun-icon',
  '02d': 'weather-sun-cloudy-icon',
  '03d': 'weather-cloud-icon',
  '09d': 'weather-rain-icon',
  '13d': 'weather-snow-icon',
  '11d': 'weather-thunderstorms-icon',
  '01n': 'weather-moon-icon',
  '50d': 'weather-foggy-icon'
}

export const setWeatherIcon = (iconCode) => {
  return allWeatherIcon[iconCode] || 'weather-sun-cloudy-icon'
}







