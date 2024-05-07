
import { Fragment,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import { BounceLoader } from "react-spinners";

import { loadFromLS,saveToLS } from "../../utils/localStorage.util";

import { setWeatherIcon } from "../../utils/setWeatherIcon";
import { fetchWeatherForecastAsync,fetchWeatherForecastSuccess,setTimeForecast } from "../../store/weather/weather.action";
import { getWeatherForecast,getCurrentWeather,getTimeForecast } from "../../store/weather/weather.selector"

import WeatherItem from "../../components/weather-item/weather-item.component";
import SvgIcon from '../../components/icon-svg/svg-icon.component'
import { WeatherContainer,WeatherFooter,SpinnerPosition } from "./weather.styles";



const Weather = () => {
  const dispatch = useDispatch();
  const timeFetchForecast = useSelector(getTimeForecast);

  const currentWeather = useSelector(getCurrentWeather);
  const { name,wind,dt,weather,main } = currentWeather;

  const setCurrentDate = () => {
    return new Date(dt * 1000).toLocaleString('en-US',{ weekday: 'long',month: 'long',day: 'numeric' });
  }
  setCurrentDate()

  const forecastWeather = useSelector(getWeatherForecast);



  useEffect(() => {
    console.log('timeFetchForecast_before',timeFetchForecast,)
    if (Date.now() - timeFetchForecast > 180000 || !forecastWeather.length) {
      dispatch(fetchWeatherForecastAsync());
      dispatch(setTimeForecast(Date.now()));
      saveToLS('time-forecast',Date.now());
    }
    else {
      dispatch(fetchWeatherForecastSuccess(loadFromLS('forecast')));
    }

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
          <div className="weather-temperature"> {Math.round(main?.temp)}&deg;C</div>

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
        </WeatherContainer> : <BounceLoader color="#36d7b7" />
      }
      {
        forecastWeather?.length ?
          <WeatherFooter>
            <div className="wrapper-footer-items">
              {
                forecastWeather.map((el,ind) => (<WeatherItem item={el} key={ind} />))
              }
            </div>
          </WeatherFooter> : <SpinnerPosition ><BounceLoader color="#36d7b7" /> </SpinnerPosition>
      }
    </Fragment>
  );
};

export default Weather;


