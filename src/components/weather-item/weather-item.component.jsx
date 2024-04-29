
import SvgIcon from "../../components/icon-svg/svg-icon.component";
import { WeatherItemContainer } from "./weather-item.styles";
const WeatherItem = () => {
  return (
    <WeatherItemContainer>
      <div className="weather-item-date">6 June</div>
      <div className="weather-item-icon">
        <SvgIcon name='weather-thunderstorms-icon' />
      </div>
      <div className="weather-item-degrees">29&deg;C</div>
    </WeatherItemContainer>
  );
};

export default WeatherItem;