import { useSelector,useDispatch } from "react-redux";

import { getActiveMessage } from "../../store/messages/messages.selector";
import { setDetailsCamera } from "../../store/cameras/cameras.action";

import SvgIcon from "../icon-svg/svg-icon.component";

import { MainItemContainer } from "./main-item.styles";

const typesDefaultIcon = {
    camera: 'cameras-icon',
    message: 'message-icon',
}

const links = {
    camera: '/cameras/details-camera',

};

const MainItem = ({ item }) => {
    const { icon,title,link,type } = item;
    const dispatch = useDispatch();
    const activeMessage = useSelector(getActiveMessage);

    const handleClick = () => {
        if (type === 'camera') {
            dispatch(setDetailsCamera(item));
        }
    }
    return (
        <MainItemContainer
            onClick={() => handleClick()}
            to={link ?? links[type]}
            className={`${title === "Leave" ? "accent-bg accent-color" : ""} `}>
            <div className={`wrapper-icon ${icon === "plus-icon" ? "center" : ""} `}>
                <SvgIcon name={icon || typesDefaultIcon[type]} />
                <div className={title === 'message' && activeMessage ? 'info-marker' : ''}></div>
            </div>
            <div className="wrapper-main-title" > <div className="main-item-title">{title}</div></div>

        </MainItemContainer>
    );
};

export default MainItem;
