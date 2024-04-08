import { useEffect,useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import { setDetailsCamera } from '../../store/cameras/cameras.action';
import { getWidgetsList } from '../../store/widgets/widgets.selector';
import { addWidget } from '../../store/widgets/widgets.actions';

import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { CameraItemContainer } from "./camera-item.styles";

const CameraItem = ({ item }) => {

  const { pathname } = useLocation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const widgetsList = useSelector(getWidgetsList);
  const [showCheck,setShowCheck] = useState(false);

  useEffect(() => {
    if (widgetsList.filter((el) => el.id === item.id).length) {
      setShowCheck(true);
    }
  },[item])

  const onCameraSelect = (pathname) => {
    if (pathname === '/cameras') {
      nav('details-camera');
      dispatch(setDetailsCamera(item));
    }
    if (pathname === '/add-widget/camera-add' && !showCheck) {
      dispatch(addWidget(item));
      setShowCheck(true);
    }
  }

  return (
    <CameraItemContainer
      style={{ backgroundImage: `url(${item.url})` }}
      onClick={() => onCameraSelect(pathname)}
    >
      {
        showCheck && pathname === '/add-widget/camera-add' ? (<SvgIcon className='check-camera-svg' name='check-icon' />) : ''
      }
      <SvgIcon name='no-camera-small-icon' />
      <div className={'camera-title'}>{item.title}</div>
    </CameraItemContainer>
  );
};

export default CameraItem;
