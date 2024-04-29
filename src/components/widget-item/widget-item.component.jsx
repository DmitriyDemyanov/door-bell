import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import { getCurrentLanguage } from "../../store/languages/languages.selector";
import { getWidgetsList } from "../../store/widgets/widgets.selector";
import { addWidget } from "../../store/widgets/widgets.actions";

import { setSleepModeTimer,setShowSleepModal } from "../../store/sleep-mode/sleep-mode.action";
import { setModalSettings } from "../../store/modal/modal.action";

import { setCurrentLanguage } from "../../store/languages/languages.action";

import SvgIcon from "../icon-svg/svg-icon.component";
import { WidgetItemContainer } from "./widget-item.styles";

const linkCorrection = ['service','settings','camera-add','general-settings','audio-preferences','video-preferences','user-manual','languages','call-history','Sleep-mode-behavior','walk-speed','system','audio-general','doorbell','visitor-call','set-sleep-mode','cleaning-mode','transfers','/',
];
const WidgetItem = ({ item }) => {
    const { title,link } = item;
    const nav = useNavigate();
    const widgetsList = useSelector(getWidgetsList);
    const dispatch = useDispatch();
    const currentLanguage = useSelector(getCurrentLanguage);
    const dataSuccess = {
        stringTitle: `${title} widget added to home Screen`,
        type: 'info'
    };
    const dataAttention = {
        stringTitle: `${title} widget already added`,
        type: 'attention'
    };



    const addWidgetToStore = (item) => {
        if (linkCorrection.includes(item.link)) {
            return nav(link);
        }
        if (!widgetsList.find((el) => el.id === item.id)) {
            dispatch(addWidget(item));
            dispatch(setModalSettings(dataSuccess));
        }
        else {
            dispatch(setModalSettings(dataAttention));
        }
    };

    const handlerItem = (item) => {

        if (item.type === 'set-sleep-mode') {
            dispatch(setSleepModeTimer(item.title.slice(0,2) * 1000));
            dispatch(setShowSleepModal(true));

        }
        if (item.type === 'language' && item.id !== currentLanguage.id) {
            return dispatch(setCurrentLanguage(item));
        }
        else if (item.type !== 'language') {
            addWidgetToStore(item);
        }
    }

    const renderedIcon = () => {
        if (linkCorrection.includes(link)) {
            return <div> <SvgIcon name='chevron-right-icon' /> </div>;
        }
        if (widgetsList.find((el) => el.title === title || currentLanguage.id === item.id)) {
            return <div><SvgIcon name='check-icon' /></div>;
        }
        if (item.type !== 'language') {
            return <div><SvgIcon name='plus-small-icon' /></div>;
        }

    };

    return (
        <WidgetItemContainer onClick={() => handlerItem(item)}>
            <div className="widget-title"> {title} </div>
            <div className="wrapper-bg"></div>
            <div className="widget-icon">
                {renderedIcon()}
            </div>
        </WidgetItemContainer>
    );
};

export default WidgetItem;
