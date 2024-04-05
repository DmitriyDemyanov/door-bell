import { Routes,Route } from "react-router-dom";
import { Fragment } from "react";

import ModalCommon from "./components/modal-common/modal-common.component.jsx";

import MainLayout from "./routes/main-layout/main-layout";
import MainScreen from "./routes/main-screen/main-screen.jsx";
import AddWidget from "./routes/add-widget/add-widget.jsx";
import ServiceScreen from "./routes/service-screen/service-screen.jsx";
import SettingsScreen from "./routes/settings-screen/settings-screen.jsx";
import CleaningMode from "./routes/cleaning-mode/cleaning-mode.component.jsx";
import MessageScreen from "./routes/message-screen/message-screen.jsx";
import CamerasScreen from "./routes/cameras/cameras-screen.js";
import CameraDetails from "./routes/camera-details/camera-details.jsx";

function App() {
  return (
    <Fragment>
      <ModalCommon />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainScreen />} />
          <Route path='add-widget' element={<AddWidget />} />
          <Route path="add-widget/service" element={<ServiceScreen />} />
          <Route path="add-widget/settings" element={<SettingsScreen />} />
          <Route path="/cleaning-mode" element={<CleaningMode />} />
          <Route path="/message" element={<MessageScreen />} />
          <Route path="/cameras" element={<CamerasScreen />} />
          <Route path="/cameras/details-camera" element={<CameraDetails />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
