import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import { getDetailsCamera } from '../../store/cameras/cameras.selector';
import { getWidgetsList } from '../../store/widgets/widgets.selector';
import { addWidget } from '../../store/widgets/widgets.actions';

import SvgIcon from '../icon-svg/svg-icon.component';
import { HeaderCommonContainer } from "./header-common.styles";


const settingTitle = {
  '/add-widget': 'Add to Main Screen',
  '/add-widget/service': 'Add Service',
  '/add-widget/settings': 'Add Settings',
  '/cleaning-mode': 'Please clean the Screen now',
  '/message': 'Message',
  '/cameras': 'Live cameras',
  '/add-widget/camera-add': 'Add to Main Screen',
}

const HeaderCommon = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [showCamera,setShowCamera] = useState(false);
  const [showAddButton,setShowAddButton] = useState(true);
  const detailsCamera = useSelector(getDetailsCamera);
  const widgetsList = useSelector(getWidgetsList);
  console.log('detailsCamera=>',detailsCamera);
  console.log('widgetsList',widgetsList);
  // console.log('pathname',pathname);
  useEffect(() => {
    if (pathname === '/cameras/details-camera') {
      setShowCamera(true);
    }
    else {
      setShowCamera(false);
    }
  },[pathname]);
  useEffect(() => {

    if (widgetsList.filter((el) => el.id === detailsCamera.id).length) {
      setShowAddButton(false);
    }
    else {
      setShowAddButton(true);
    }
  },[widgetsList,detailsCamera]);

  const setDate = (data) => {
    const date = new Date(detailsCamera.date * 1).toLocaleString('en-DE',{ year: "2-digit",month: "2-digit",day: "2-digit" }).replaceAll('/','.')
    const time = new Date(detailsCamera.date * 1).toLocaleString('en-DE',{ hour: '2-digit',minute: '2-digit' });
    if (data === 'date') {
      return date
    }
    return time;
  }
  setDate()

  const addCameraToWidgets = (item) => {
    dispatch(addWidget(item));
  }

  return (
    <HeaderCommonContainer>
      <div className={pathname === '/cleaning-mode' ? 'hide' : ''} onClick={() => nav(-1)} > <SvgIcon name='arrow-left-icon' /> </div>
      <div className="header-title">
        {showCamera ? detailsCamera.title : settingTitle[pathname]}
        <div className={`${showCamera ? "header-date" : 'hide'}`}>{setDate('date')} <span className='vertical-slash'>|</span> {setDate('time')} </div>
      </div>
      <div
        className={showCamera && showAddButton ? 'item-add' : 'hide'}
        onClick={() => addCameraToWidgets(detailsCamera)} > <SvgIcon name='plus-small-icon' /> </div>
    </HeaderCommonContainer>
  )
};

export default HeaderCommon;

