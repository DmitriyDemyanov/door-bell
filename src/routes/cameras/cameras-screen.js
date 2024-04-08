import { Fragment } from "react";
import { useSelector } from 'react-redux';

import { getAllCameras } from '../../store/cameras/cameras.selector';

import CameraItem from "../../components/camera-item/camera-item.component";
import SvgIcon from "../../components/icon-svg/svg-icon.component";
import { CamerasScreenContainer,NoCamerasContainer } from "./cameras-screen.styles";

const CamerasScreen = () => {
  const allCameras = useSelector(getAllCameras);
  
  return (
    <Fragment>
      {
        allCameras.length ?
          <CamerasScreenContainer>
            {
              allCameras.map((item) => (<CameraItem item={item} key={item.id} />))
            }
          </CamerasScreenContainer> :

          <NoCamerasContainer >
            <div className="no-camera-icon"> <SvgIcon name='no-camera-big-icon' /></div>
            <div className="no-camera-title">No cameras available for your device </div>
          </NoCamerasContainer>
      }
    </Fragment>
  );
};

export default CamerasScreen;