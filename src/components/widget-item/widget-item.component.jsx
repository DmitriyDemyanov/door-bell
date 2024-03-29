import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import { getRenderWidgets } from '../../store/widgets/widgets.selector';
import { setRenderWidgets } from '../../store/widgets/widgets.actions';
import { ReactComponent as ChevronRightIcon } from '../../assets/widgets-icon/chevron-right-icon.svg';
import { ReactComponent as PlusSmallIcon } from '../../assets/widgets-icon/plus-small-icon.svg';

import { WidgetItemContainer } from "./widget-item.styles";


const WidgetItem = ({ item }) => {
  const { title,link } = item;
  const nav = useNavigate();
  const currentWidgetsRender = useSelector(getRenderWidgets);
  const dispatch = useDispatch();

  const addToRenderWidgets = (item) => {
    if (link) {
      return nav(link);
    }
    if (!currentWidgetsRender.find((el) => el.id === item.id)) {
      dispatch(setRenderWidgets(item));

    }
  }

  return (
    <WidgetItemContainer onClick={() => addToRenderWidgets(item)} >
      <div className="widget-title"> {title} </div>
      <div className="wrapper-bg"></div>
      <div className="widget-icon">
        {
          link ? <ChevronRightIcon /> : <div ><PlusSmallIcon /></div>
        }
      </div>
    </WidgetItemContainer>
  )
};

export default WidgetItem;