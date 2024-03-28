import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import { getRenderWidgets } from '../../store/widgets/widgets.selector';
import { setRenderWidgets } from '../../store/widgets/widgets.actions';
import { ReactComponent as ChevronRightIcon } from '../../assets/widgets-icon/chevron-right-icon.svg';
import { WidgetItemContainer } from "./widget-item.styles";


const WidgetItem = ({ item }) => {
  const { pathname } = useLocation();
  const { title,link } = item;
  const nav = useNavigate();
  const currentWidgetsRender = useSelector(getRenderWidgets);
  const dispatch = useDispatch();
  const addToRenderWidgets = (item) => {
    if (!currentWidgetsRender.find((el) => el.id === item.id)) {
      dispatch(setRenderWidgets(item));
    }
  }

  return (
    <WidgetItemContainer>
      <div className="widget-title"> {title} </div>
      <div className="wrapper-bg"></div>
      <div className="widget-icon">
        {
          pathname === '/add-widget' ? <ChevronRightIcon onClick={() => nav(link)} /> :
            <div onClick={() => addToRenderWidgets(item)}>+</div>
        }
      </div>
    </WidgetItemContainer>
  )
};

export default WidgetItem;