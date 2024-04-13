import { useLocation } from 'react-router-dom';
import AudioSettingsItem from '../../components/audio-settings-item/audio-settings-item';

import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { AudioSettingsContainer } from "./audio-settings.styles";


const generalSettings = [
  {
    title: 'Acoustic Feedback Volume',
    icon: 'audio-norm-icon',
    slider: 'slider-min-icon'
  },
  {
    title: 'Acoustic Feedback Volume',
    icon: 'audio-off-icon',
    slider: 'slider-gray-middle-icon'
  }
];
const doorbellSettings = [
  {
    title: 'Ringtone Volume',
    icon: 'audio-norm-icon',
    slider: 'slider-min-icon'
  },
  {
    title: 'Duration',
    icon: '',
    slider: 'slider-middle-icon'
  }
];
const visitorCallSettings = [
  {
    title: 'Call (voice) Volume ',
    icon: 'audio-icon',
    slider: 'slider-middle-icon'
  },
  {
    title: 'Ringtone Volume',
    icon: 'audio-norm-icon',
    slider: 'slider-min-icon'
  }
];

const AudioSettings = () => {
  const { pathname } = useLocation();
  const showRenderSettings = () => {
    if (pathname === '/main-settings/audio-preferences/audio-general') {
      return generalSettings;
    }
    if (pathname === '/main-settings/audio-preferences/doorbell') {
      return doorbellSettings;
    }
    if (pathname === '/main-settings/audio-preferences/visitor-call') {
      return visitorCallSettings;
    }
  }
  return (
    <AudioSettingsContainer>

      <AudioSettingsItem setting={showRenderSettings()[0]} />
      <div className="item-bar"></div>
      <AudioSettingsItem setting={showRenderSettings()[1]} />

      {
        pathname === '/main-settings/audio-preferences/doorbell' ? <SvgIcon name='progress-bar-doorbell-icon' /> : ''
      }

    </AudioSettingsContainer>
  );
};

export default AudioSettings;

