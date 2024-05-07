import { setWeatherIcon } from "../../utils/setWeatherIcon.js";

import SvgIcon from "../../components/icon-svg/svg-icon.component";
import { WeatherItemContainer } from "./weather-item.styles";
const WeatherItem = ({ item }) => {

  const { dt,main,weather } = item;
  const setDate = () => new Date(dt * 1000).toLocaleString('en-GB',{ month: 'long',day: 'numeric' });
  return (
    <WeatherItemContainer>
      <div className="weather-item-date">{setDate()}</div>
      <div className="weather-item-icon">
        <SvgIcon name={setWeatherIcon(weather[0].icon)} />
      </div>
      <div className="weather-item-degrees"> {Math.round(main.temp)}&deg;C</div>
    </WeatherItemContainer>
  );
};

export default WeatherItem;