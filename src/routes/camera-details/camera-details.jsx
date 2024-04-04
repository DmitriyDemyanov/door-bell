import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import {useParams} from "react-router-dom";

import {getAllCameras} from "../../store/cameras/cameras.selector";

import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { CameraUrlContainer,CameraDefaultContainer } from './camera-details.styles';

const CameraDetails = () => {
  const {id} = useParams();
  const allCameras = useSelector(getAllCameras);
  const cameraItem = allCameras.find((cam) => cam.id === id);

  return (
    <Fragment>
      {
        cameraItem.url ?
          <CameraUrlContainer style={{ backgroundImage: `url(${cameraItem.url})` }} ></CameraUrlContainer> :
          <CameraDefaultContainer> <SvgIcon name='no-camera-big-icon' /> </CameraDefaultContainer>
      }
    </Fragment>
  );
};

export default CameraDetails;
