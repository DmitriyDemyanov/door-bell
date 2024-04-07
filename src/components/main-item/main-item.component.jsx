import { useSelector } from "react-redux";
import { getActiveMessage } from "../../store/messages/messages.selector";

import SvgIcon from "../icon-svg/svg-icon.component";

import { MainItemContainer } from "./main-item.styles";

const typesDefaultIcon = {
    camera: 'cameras-icon',
    message: 'message-icon',
}

const MainItem = ({ item }) => {
    const { icon,title,link,type } = item;
    console.log('icon=>>>>',type);

    const activeMessage = useSelector(getActiveMessage);
    return (
        <MainItemContainer
            onClick={(event) => console.log('event',event)}
            to={link}
            className={`${title === "Leave" ? "accent-bg" : ""} `}>
            <div className={`wrapper-icon ${icon === "plus-icon" ? "center" : ""} `}>
                <SvgIcon name={icon || typesDefaultIcon[type]} />
                <div className={title === 'message' && activeMessage ? 'info-marker' : ''}></div>
            </div>
            <div className="wrapper-main-title" > <div className="main-item-title">{title}</div></div>

        </MainItemContainer>
    );
};

export default MainItem;
