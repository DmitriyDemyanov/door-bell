import SvgIcon from '../../components/icon-svg/svg-icon.component';

import { SettingItemContainer } from "./setting-item.styles";

const SettingItem = () => {
  return (
    <SettingItemContainer
    onClick={()=> console.log('check!')}
    >
      <div className="setting-item-title"> 24 hours </div>
      <div className="wrapper-icon"> <SvgIcon name='check-icon' /> </div>
    </SettingItemContainer>
  );
};

export default SettingItem;