import SvgIcon from "../icon-svg/svg-icon.component";

import { AudioSettingsItemContainer } from "./audio-settings-item.styles";
const AudioSettingsItem = ({ setting }) => {
  const { title,icon,slider } = setting;
  return (
    <AudioSettingsItemContainer>
      <div className="wrapper-setting" >
        <div className="setting-title"> {title} </div>
        <div className="setting-icon"> <SvgIcon name={icon} /> </div>
      </div>
      <SvgIcon name={slider} />
    </AudioSettingsItemContainer>
  );
};

export default AudioSettingsItem;