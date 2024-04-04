import {Routes, Route} from "react-router-dom";

import CamerasScreen from "../cameras-screen/cameras-screen";
import CameraDetails from "../camera-details/camera-details";

const Cameras = () => {
  return (
    <Routes>
      <Route index element={<CamerasScreen />} />
      <Route path=':id' element={<CameraDetails />} />
    </Routes>
  )
}

export default Cameras;
