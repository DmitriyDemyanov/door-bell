import { useSelector } from "react-redux";
import { getActiveMessage } from "../../store/messages/messages.selector";

import SvgIcon from "../icon-svg/svg-icon.component";

import { MainItemContainer } from "./main-item.styles";

const MainItem = ({ item }) => {

    const { icon,title,link } = item;
    const activeMessage = useSelector(getActiveMessage);
    return (
        <MainItemContainer
            to={link}
            className={`${title === "Leave" ? "accent-bg" : ""} `}>
            <div className={`wrapper-icon ${icon === "plus-icon" ? "center" : ""} `}>
                <SvgIcon name={icon} />
                <div className={title === 'message' && activeMessage ? 'info-marker' : ''}></div>
            </div>
            <div>{title}</div>
        </MainItemContainer>
    );
};

export default MainItem;
