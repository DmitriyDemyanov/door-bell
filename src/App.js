import { Routes,Route } from "react-router-dom";
import { Fragment } from "react";

import { loadFromLS } from './utils/localStorage.util.js';

import ModalCommon from "./components/modal-common/modal-common.component.jsx";
import GlobalLoader from "./components/global-loader/global-loader.component.jsx";

import MainLayout from "./routes/main-layout/main-layout";
import MainScreen from "./routes/main-screen/main-screen.jsx";
import AddWidget from "./routes/add-widget/add-widget.jsx";
import SettingsScreen from "./routes/settings-screen/settings-screen.jsx";
import CleaningMode from "./routes/cleaning-mode/cleaning-mode.component.jsx";
import MessageScreen from "./routes/message-screen/message-screen.jsx";
import CamerasScreen from "./routes/cameras/cameras-screen.js";
import CameraDetails from "./routes/camera-details/camera-details.jsx";
import UserManual from "./routes/user-manual/user-manual.jsx";
import CallHistory from "./routes/call-history/call-history.jsx";
import SleepModeBehavior from "./routes/sleep-mode/sleep-mode.jsx";
import WalkSpeed from "./routes/walk-speed/walk-speed.jsx";
import System from "./routes/system/system.jsx";
import VideoPreferences from "./routes/video-preferences/video-preferences.jsx";
import AudioSettings from "./routes/audio-settings/audio-settings.jsx";
import AddService from "./routes/add-service/add-service.jsx";
import ServicesScreen from "./routes/services-screen/services-screen.jsx";
import SetSleepMode from "./routes/set-sleep-mode/set-sleep-mode.jsx";
import Transfers from "./routes/transfers/transfers.jsx";
import ModalSleepMode from "./components/modal-sleep-mode/modal-sleep-mode.component.jsx";

function App() {
  const theme = loadFromLS('app-theme');
  document.body.setAttribute('data-theme',theme || 'dark');
  return (
    <Fragment>
      <ModalCommon />
      <ModalSleepMode/>
      <GlobalLoader />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainScreen />} />
          <Route path='/add-widget' element={<AddWidget />} />
          <Route path="/add-widget/service" element={<AddService />} />
          <Route path="/add-widget/settings" element={<SettingsScreen />} />
          <Route path="/add-widget/camera-add" element={<CamerasScreen />} />
          <Route path="/services/cleaning-mode" element={<CleaningMode />} />
          <Route path="/message" element={<MessageScreen />} />
          <Route path="/cameras" element={<CamerasScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/services/transfers" element={<Transfers />} />
          <Route path="/services/set-sleep-mode" element={<SetSleepMode />} />
          <Route path="/cameras/details-camera" element={<CameraDetails />} />
          <Route path='/main-settings' element={<AddWidget />} />
          <Route path='/main-settings/general-settings' element={<AddWidget />} />
          <Route path='/main-settings/audio-preferences' element={<AddWidget />} />
          <Route path='/main-settings/languages' element={<AddWidget />} />
          <Route path='/main-settings/user-manual' element={<UserManual />} />
          <Route path='/main-settings/general-settings/call-history' element={<CallHistory />} />
          <Route path='/main-settings/general-settings/Sleep-mode-behavior' element={<SleepModeBehavior />} />
          <Route path='/main-settings/general-settings/walk-speed' element={<WalkSpeed />} />
          <Route path='/main-settings/general-settings/system' element={<System />} />
          <Route path='/main-settings/video-preferences' element={<VideoPreferences />} />
          <Route path="/main-settings/audio-preferences/audio-general" element={<AudioSettings />} />
          <Route path="/main-settings/audio-preferences/doorbell" element={<AudioSettings />} />
          <Route path="/main-settings/audio-preferences/visitor-call" element={<AudioSettings />} />
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
