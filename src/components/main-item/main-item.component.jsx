import SvgIcon from "../icon-svg/svg-icon.component";

import { MainItemContainer } from "./main-item.styles";

const MainItem = ({ item }) => {
    const { icon,title,link } = item;
    return (
        <MainItemContainer
            to={link}
            className={`${title === "Leave" ? "accent-bg" : ""} `}>
            <div className={`wrapper-icon ${icon === "plus-icon" ? "center" : ""} `}>
                <SvgIcon name={icon} />
            </div>
            <div>{title}</div>
        </MainItemContainer>
    );
};

export default MainItem;
