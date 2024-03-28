import { Routes,Route } from "react-router-dom";

import MainLayout from "./routes/main-layout/main-layout";
import MainScreen from "./routes/main-screen/main-screen.jsx";
import AddWidget from "./routes/add-widget/add-widget.jsx";
import ServiceScreen from "./routes/service-screen/service-screen.jsx";
import SettingsScreen from "./routes/settings-screen/settings-screen.jsx";


function App() {
  return (

    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<MainScreen />} />
        <Route path='add-widget' element={<AddWidget />} />
        <Route path="add-widget/service" element={<ServiceScreen />} />
        <Route path="add-widget/settings" element={<SettingsScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
