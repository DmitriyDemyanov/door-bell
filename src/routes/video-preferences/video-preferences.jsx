
import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { VideoPreferencesContainer } from "./video-preferences.styled";
const VideoPreferences = () => {
  return (
    <VideoPreferencesContainer>
      <div>Themes</div>
      <div className="wrapper-themes">
        
        <div className="theme-item">
          <SvgIcon name='dark-theme-icon' />
          <div className="title-item-theme">Dark Theme</div>
          <div className="wrapper-check-icon">
            <SvgIcon name='check-icon' />
          </div>
        </div>


      </div>
      <div className='video-themes-bar' ></div>
      <div className="wrapper-bright-screen">
        <div>Screen Brightness</div>
        <SvgIcon name='audio-icon' />
      </div>
      <SvgIcon name='slider-call-history-icon' />
    </VideoPreferencesContainer>
  );
};

export default VideoPreferences;