import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import { getWidgetsList } from "../../store/widgets/widgets.selector";
import { setAddedWidgets } from "../../store/widgets/widgets.actions";

import {setModalTitle} from "../../store/modal/modal.action";

import SvgIcon from "../icon-svg/svg-icon.component";
import { WidgetItemContainer } from "./widget-item.styles";

const linkCorrection = ['service','settings']
const WidgetItem = ({ item }) => {
    const { title,link } = item;
    const nav = useNavigate();
    const widgetsList = useSelector(getWidgetsList);
    const dispatch = useDispatch();

    const addWidget = (item) => {
        if (linkCorrection.includes(item.link)) {
            return nav(link);
        }
        if (!widgetsList.find((el) => el.id === item.id)) {
            dispatch(setAddedWidgets(item));
            dispatch(setModalTitle(title));
        }
    };

    const renderedIcon = () => {
        if (linkCorrection.includes(link)) {
            return <div> <SvgIcon name='chevron-right-icon' /> </div>;
        }
        if (widgetsList.find((el) => el.title === title)) {
            return <div><SvgIcon name='check-icon' /></div>;
        }
        return <div><SvgIcon name='plus-small-icon' /></div>;
    };

    return (
        <WidgetItemContainer onClick={() => addWidget(item)}>
            <div className="widget-title"> {title} </div>
            <div className="wrapper-bg"></div>
            <div className="widget-icon">
                {renderedIcon()}
            </div>
        </WidgetItemContainer>
    );
};

export default WidgetItem;
