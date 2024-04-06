import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setDetailsCamera } from '../../store/cameras/cameras.action';

import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { CameraItemContainer } from "./camera-item.styles";


const CameraItem = ({ item }) => {

  const { pathname } = useLocation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [showCheck,setShowCheck] = useState(false);

  const onCameraSelect = (pathname) => {
    if (pathname === '/cameras') {
      nav('details-camera');
      dispatch(setDetailsCamera(item));
    }
    else {
      setShowCheck(true);
    }
  }

  return (
    <CameraItemContainer
      style={{ backgroundImage: `url(${item.url})` }}
      onClick={() => onCameraSelect(pathname)}
    >
      {
        showCheck ? (<SvgIcon className='check-camera-svg' name='check-icon' />) : ''
      }
      <SvgIcon name='no-camera-small-icon' />
      <div className={'camera-title'}>{item.title}</div>
    </CameraItemContainer>
  );
};

export default CameraItem;
