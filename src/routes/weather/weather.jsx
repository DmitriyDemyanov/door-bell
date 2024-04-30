
import { Fragment,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import { setWeatherIcon } from "../../utils/setWeatherIcon";
import { fetchWeatherForecastAsync } from "../../store/weather/weather.action";
import { getWeatherForecast,getCurrentWeather } from "../../store/weather/weather.selector"


import WeatherItem from "../../components/weather-item/weather-item.component";
import SvgIcon from '../../components/icon-svg/svg-icon.component'
import { WeatherContainer,WeatherFooter } from "./weather.styles";


const Weather = () => {
  const dispatch = useDispatch();

  const currentWeather = useSelector(getCurrentWeather);
  const { name,wind,dt,weather,main } = currentWeather;

  const setCurrentDate = () => {
    return new Date(dt * 1000).toLocaleString('en-US',{ weekday: 'long',month: 'long',day: 'numeric' });
  }
  setCurrentDate()
  const forecastWeather = useSelector(getWeatherForecast);
  const filterForecast = forecastWeather.list?.filter((el) => el.dt_txt.slice((el.dt_txt.indexOf(' ') + 1),el.dt_txt.length) === '15:00:00');
  // const allForecastItem = Object.assign(filterForecast,{ wind,dt,weather,main });
  // console.log('allForecastItem---->>',allForecastItem)
  useEffect(() => {
    dispatch(fetchWeatherForecastAsync());
  },[]);

  return (
    <Fragment>
      {Object.keys(currentWeather).length ?
        <WeatherContainer>

          <div className="weather-title">{name}, {setCurrentDate()}</div>
          <div className="weather-image">
            <SvgIcon name={setWeatherIcon(currentWeather.weather[0].icon)} />
          </div>
          <div className="weather-subtitle"> {weather[0].description}</div>
          <div className="weather-temperature"> {Math.round(main.temp)}&deg;C</div>

          <div className="wrapper-weather-details">

            <div className="weather-description">
              <div className="weather-icon">
                <SvgIcon name='weather-windy-icon' />
              </div>
              <div className="weather-item">Wind</div>
              <div className="weather-vertical-bar"></div> {wind.speed} km/h
            </div>

            <div className="weather-description">
              <div className="weather-icon"><SvgIcon name='weather-hum-icon' /></div>
              <div className="weather-item">Hum</div>
              <div className="weather-vertical-bar"></div> {main.humidity} %
            </div>

          </div>
        </WeatherContainer> : <h1>LOADER!!!</h1>
      }


      {
        filterForecast?.length ?
          <WeatherFooter>
            <div className="wrapper-footer-items">
              <WeatherItem item={currentWeather} />
              {
                filterForecast.map((el,ind) => (<WeatherItem item={el} key={ind} />))
              }

            </div>

          </WeatherFooter> : <h2>forecastWeather!!!!</h2>
      }

    </Fragment>
  );
};

export default Weather;