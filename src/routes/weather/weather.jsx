
import { Fragment } from "react";
import { useSelector } from "react-redux";

import { getWeatherForecast } from '../../store/weather/weather.selector';
import WeatherItem from "../../components/weather-item/weather-item.component";
import SvgIcon from '../../components/icon-svg/svg-icon.component'
import { WeatherContainer,WeatherFooter } from "./weather.styles";


const Weather = () => {
  const weatherForecast = useSelector(getWeatherForecast);
  console.log('weather',weatherForecast)
  return (
    <Fragment>
      <WeatherContainer>

        <div className="weather-title">Kyiv, Thuesday, June 6</div>
        <div className="weather-image">
          <SvgIcon name='weather-cloud-icon' />
        </div>
        <div className="weather-subtitle">Overcast Clouds</div>
        <div className="weather-temperature"> <span>29</span>&deg;C</div>

        <div className="wrapper-weather-details">

          <div className="weather-description">
            <div className="weather-icon"><SvgIcon name='weather-windy-icon' /></div>
            <div className="weather-item">Wind</div>
            <div className="weather-vertical-bar"></div> 10 km/h
          </div>

          <div className="weather-description">
            <div className="weather-icon"><SvgIcon name='weather-hum-icon' /></div>
            <div className="weather-item">Hum</div>
            <div className="weather-vertical-bar"></div> 54 %
          </div>

        </div>

      </WeatherContainer>

      <WeatherFooter>
        <div className="wrapper-footer-items">
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
        </div>

      </WeatherFooter>

    </Fragment>
  );
};

export default Weather;