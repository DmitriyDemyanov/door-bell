
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setDetailsCamera } from '../../store/cameras/cameras.action';

import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { CameraItemContainer } from "./camera-item.styles";


const CameraItem = ({ item }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const lookDetailsCamera = (item) => {
    nav('details-camera');
    dispatch(setDetailsCamera(item));
    
  }
  return (
    <CameraItemContainer
      style={{ backgroundImage: `url(${item.url})` }}
      onClick={() => lookDetailsCamera(item)}
    >
      <SvgIcon name='no-camera-small-icon' />
      <div>{item.title}</div>
    </CameraItemContainer>
  );
};

export default CameraItem;