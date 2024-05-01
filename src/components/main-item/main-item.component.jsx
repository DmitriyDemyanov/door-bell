import { useSelector,useDispatch } from "react-redux";
import { BounceLoader } from "react-spinners";

import { getActiveMessage } from "../../store/messages/messages.selector";
import { setDetailsCamera } from "../../store/cameras/cameras.action";
import { getCurrentWeather } from "../../store/weather/weather.selector";

// import LocalSpinner from "../local-spinner/local-spinner.component";
import SvgIcon from "../icon-svg/svg-icon.component";

import { MainItemContainer } from "./main-item.styles";

const typesDefaultIcon = {
    camera: 'cameras-icon',
    message: 'message-icon',
}

const links = {
    camera: '/cameras/details-camera',
};

const makeTitle = ({ title },{ weather = [] }) => title === 'weather' ? weather[0]?.description : title;

const makeClassNames = ({ icon,name }) => {
    let classNames = '';
    if (icon === 'plus-icon') {
        classNames += "center "
    }
    if (name === 'weather') {
        classNames += 'weather-icon-setting ';
    }
    return classNames;
}
const showCurrentTemp = (temp) => temp ? `${temp}°C ` : false;

const MainItem = ({ item }) => {
    const { icon,title,link,type } = item;
    const dispatch = useDispatch();
    const activeMessage = useSelector(getActiveMessage);
    const currentWeather = useSelector(getCurrentWeather);

    const handleClick = () => {

        if (type === 'camera') {
            dispatch(setDetailsCamera(item));
        }
    }
    return (
        <MainItemContainer
            onClick={() => handleClick()}
            to={link ?? links[type]}
            className={`${title === "Leave" ? "accent-bg" : ""} `}>
            <div className={`wrapper-icon ${makeClassNames(item)} `}>
                <SvgIcon name={icon || typesDefaultIcon[type]} />
                <div className={title === 'message' && activeMessage ? 'info-marker' : ''}></div>
            </div>
            {
                item.name === 'weather' ? <div className="weather-temp">
                    {
                        showCurrentTemp(Math.round(currentWeather.main?.temp)) ||
                        <BounceLoader size={70} speedMultiplier={1.5} className="spinner-weather" />

                    } </div> : ''
            }
            <div className="wrapper-main-title" >
                <div className={`main-item-title ${item.name === 'weather' ? "weather-font-size" : ''}`}>
                    {makeTitle(item,currentWeather)}
                </div>
            </div>

        </MainItemContainer>
    );
};
export default MainItem;
