import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

import { getDetailsCamera } from '../../store/cameras/cameras.selector';

import SvgIcon from '../icon-svg/svg-icon.component';
import { HeaderCommonContainer } from "./header-common.styles";


const settingTitle = {
  '/add-widget': 'Add to Main Screen',
  '/add-widget/service': 'Add Service',
  '/add-widget/settings': 'Add Settings',
  '/cleaning-mode': 'Please clean the Screen now',
  '/message': 'Message',
  '/cameras': 'Live cameras',
}

const HeaderCommon = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [showCamera,setShowCamera] = useState(false);
  const detailsCamera = useSelector(getDetailsCamera);
  // console.log('pathname',pathname);
  useEffect(() => {
    if (pathname === '/cameras/details-camera') {
      setShowCamera(true);
    }
    else {
      setShowCamera(false);
    }
  },[pathname]);

  const setDate = (data) => {
    const date = new Date(detailsCamera.date * 1).toLocaleString('en-DE',{ year: "2-digit",month: "2-digit",day: "2-digit" }).replaceAll('/','.')
    const time = new Date(detailsCamera.date * 1).toLocaleString('en-DE',{ hour: '2-digit',minute: '2-digit' });
    if (data === 'date') {
      return date
    }
    return time


  }
  setDate()

  return (
    <HeaderCommonContainer>
      <div className={pathname === '/cleaning-mode' ? 'hide' : ''} onClick={() => nav(-1)} > <SvgIcon name='arrow-left-icon' /> </div>
      <div className="header-title">
        {showCamera ? detailsCamera.title : settingTitle[pathname]}
        <div className={`${showCamera ? "header-date" : 'hide'}`}>{setDate('date')} <span className='vertical-slash'>|</span> {setDate('time')} </div>
      </div>
      <div className={showCamera ? 'item-add' : 'hide'} onClick={() => console.log('add camera!')} > <SvgIcon name='plus-small-icon' /> </div>
    </HeaderCommonContainer>
  )
};

export default HeaderCommon;

