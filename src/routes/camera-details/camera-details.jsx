
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

import { getDetailsCamera } from '../../store/cameras/cameras.selector';

import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { CameraUrlContainer,CameraDefaultContainer } from './camera-details.styles';

const CameraDetails = () => {
  const { url } = useSelector(getDetailsCamera);
  return (
    <Fragment>
      {
        url ?
          <CameraUrlContainer style={{ backgroundImage: `url(${url})` }} ></CameraUrlContainer> :
          <CameraDefaultContainer> <SvgIcon name='no-camera-big-icon' /> </CameraDefaultContainer>
      }
    </Fragment>
  );
};

export default CameraDetails;