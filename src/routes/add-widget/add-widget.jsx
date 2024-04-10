import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getMainSettings,getGeneralSettings,getAudioPreferences } from "../../store/settings/settings.selector";
import { getLanguages } from '../../store/languages/languages.selector';

import WidgetItem from "../../components/widget-item/widget-item.component";

import { AddWidgetContainer } from "./add-widget.styles";

const widgetScreen = [
  {
    title: 'Camera',
    link: 'camera-add'
  },
  {
    title: 'Service',
    link: 'service'
  },
  {
    title: 'Settings',
    link: 'settings'
  }
]
const AddWidget = () => {
  const { pathname } = useLocation();
  const mainSettingsScreen = useSelector(getMainSettings);
  const generalSettingsScreen = useSelector(getGeneralSettings);
  const audioPreferences = useSelector(getAudioPreferences);

  const languages = useSelector(getLanguages);
 
  console.log('pathname',pathname);
  const handlerScreenRender = () => {
    if (pathname === '/main-settings') {
      return mainSettingsScreen;
    }
    if (pathname === '/main-settings/general-settings') {
      return generalSettingsScreen;
    }
    if (pathname === '/main-settings/audio-preferences') {
      return audioPreferences;
    }
    if (pathname === '/main-settings/languages') {
      return languages;
    }
    return widgetScreen;
  }

  return (
    <AddWidgetContainer>
      {
        handlerScreenRender().map((item,ind) => (<WidgetItem item={item} key={ind} />))
      }
    </AddWidgetContainer>
  )
};

export default AddWidget;