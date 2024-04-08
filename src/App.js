import { Routes,Route } from "react-router-dom";
import { Fragment } from "react";

import ModalCommon from "./components/modal-common/modal-common.component.jsx";
import GlobalLoader from "./components/global-loader/global-loader.component.jsx";

import MainLayout from "./routes/main-layout/main-layout";
import MainScreen from "./routes/main-screen/main-screen.jsx";
import AddWidget from "./routes/add-widget/add-widget.jsx";
import ServiceScreen from "./routes/service-screen/service-screen.jsx";
import SettingsScreen from "./routes/settings-screen/settings-screen.jsx";
import CleaningMode from "./routes/cleaning-mode/cleaning-mode.component.jsx";
import MessageScreen from "./routes/message-screen/message-screen.jsx";
import CamerasScreen from "./routes/cameras/cameras-screen.js";
import CameraDetails from "./routes/camera-details/camera-details.jsx";
import UserManual from "./routes/user-manual/user-manual.jsx";
import CallHistory from "./routes/call-history/call-history.jsx";

function App() {
  return (
    <Fragment>
      <ModalCommon />
      <GlobalLoader />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainScreen />} />
          <Route path='/add-widget' element={<AddWidget />} />
          <Route path="/add-widget/service" element={<ServiceScreen />} />
          <Route path="/add-widget/settings" element={<SettingsScreen />} />
          <Route path="/add-widget/camera-add" element={<CamerasScreen />} />
          <Route path="/cleaning-mode" element={<CleaningMode />} />
          <Route path="/message" element={<MessageScreen />} />
          <Route path="/cameras" element={<CamerasScreen />} />
          <Route path="/cameras/details-camera" element={<CameraDetails />} />
          <Route path='/main-settings' element={<AddWidget />} />
          <Route path='/main-settings/general-settings' element={<AddWidget />} />
          <Route path='/main-settings/audio-preferences' element={<AddWidget />} />
          <Route path='/main-settings/languages' element={<AddWidget />} />
          <Route path='/main-settings/user-manual' element={<UserManual />} />
          <Route path='/main-settings/general-settings/call-history' element={<CallHistory/>} />
        </Route>
      </Routes>
    </Fragment>
  );
}

// "then" case
// sendUserMessage("Hello guys")
//   .then(res => console.log("First Success: ", res))
//   .catch(err => console.log("First Error: ", err.message))
//   .finally(() => {
//     window.console.log("First Finally");
//   })

// // "async" case
// const sendMessageToUser = async (message) => {
//   try {
//     const result = await sendUserMessage(message);
//     window.console.log("Second Success: ", result);
//   } catch (e) {
//     window.console.log("Second Error: ", e.message);
//   } finally {
//     window.console.log("Second Finally");
//   }
// }

// sendMessageToUser("Second message");

export default App;
