import { useState } from 'react';

import { saveToLS,loadFromLS } from '../../utils/localStorage.util';

import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { VideoPreferencesContainer } from "./video-preferences.styled";
const VideoPreferences = () => {
  const [showActiveTheme,setShowActiveTheme] = useState(loadFromLS('app-theme') || 'dark');
  const setTheme = (title) => {
    setShowActiveTheme(title);
    document.body.setAttribute('data-theme',title);
    saveToLS('app-theme',title);

  }
  return (
    <VideoPreferencesContainer>
      <div>Themes</div>
      <div className="wrapper-themes">

        <div onClick={() => setTheme('dark')} className="theme-item">
          <SvgIcon name='dark-theme-icon' />
          <div className="title-item-theme">Dark Theme</div>
          {
            showActiveTheme === 'dark' ?
              <div className="wrapper-check-icon">
                <SvgIcon name='check-icon' />
              </div> : ''
          }

        </div>
        <div onClick={() => setTheme('light')} className="theme-item">
          <SvgIcon name='light-theme-icon' />
          <div className="title-item-theme">Light Theme</div>

          {
            showActiveTheme === 'light' ?
              <div className="wrapper-check-icon">
                <SvgIcon name='check-icon' />
              </div> : ''
          }

        </div>

      </div>
      <div className='item-bar' ></div>
      <div className="wrapper-bright-screen">
        <div>Screen Brightness</div>
        <SvgIcon name='audio-icon' />
      </div>
      <SvgIcon name='slider-call-history-icon' />
    </VideoPreferencesContainer>
  );
};

export default VideoPreferences;