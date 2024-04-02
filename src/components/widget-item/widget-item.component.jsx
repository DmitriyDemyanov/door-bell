import {useNavigate}              from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getWidgetsList}  from "../../store/widgets/widgets.selector";
import {setAddedWidgets} from "../../store/widgets/widgets.actions";

import {setModalCommonInfo} from "../../store/widgets/widgets.actions";

import {ReactComponent as ChevronRightIcon} from "../../assets/widgets-icon/chevron-right-icon.svg";
import {ReactComponent as CheckIcon}        from "../../assets/widgets-icon/check-icon.svg";
import {ReactComponent as PlusSmallIcon}    from "../../assets/widgets-icon/plus-small-icon.svg";
import {WidgetItemContainer}                from "./widget-item.styles";

const linkCorrection = ['service','settings']
const WidgetItem = ({item}) => {
    const {title, link} = item;
    const nav           = useNavigate();
    const widgetsList   = useSelector(getWidgetsList);
    const dispatch      = useDispatch();

  const addWidget = (item) => {
    if (linkCorrection.includes(item.link)) {
      return nav(link);
    }
      if (!widgetsList.find((el) => el.id === item.id)) {
          dispatch(setAddedWidgets(item));
          dispatch(setModalCommonInfo(item));
      }
  };

    const renderedIcon = () => {
        if (link) {
            return <ChevronRightIcon/>;
        }
        if (widgetsList.find((el) => el.title === title)) {
            return <div><CheckIcon/></div>;
        }
        return <div><PlusSmallIcon/></div>;
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
