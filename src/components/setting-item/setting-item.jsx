import { useSelector,useDispatch } from 'react-redux';


import { getActiveCleanupHistory } from '../../store/call-history/call-history.selector';
import { setActiveCleanupHistory } from '../../store/call-history/call-history.actions';
import { getActiveVisitorCallSetting,getActiveDoorbellSetting } from '../../store/sleep-mode/sleep-mode.selector';
import { setActiveDoorbellSetting,setActiveVisitorCallSetting } from '../../store/sleep-mode/sleep-mode.action';

import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { SettingItemContainer } from "./setting-item.styles";

const SettingItem = ({ title,setting }) => {
  const dispatch = useDispatch();
  const activeCleanupInterval = useSelector(getActiveCleanupHistory);
  const activeDoorbellSetting = useSelector(getActiveDoorbellSetting);
  const activeVisitorCallSetting = useSelector(getActiveVisitorCallSetting);
  const setActiveTitle = (setting) => {
    if (title === 'Set Cleanup Interval' && activeCleanupInterval !== setting) {
      dispatch(setActiveCleanupHistory(setting));
    }
    if (title === 'Doorbell' && activeCleanupInterval !== setting) {
      dispatch(setActiveDoorbellSetting(setting));
    }
    if (title === 'Visitor Call' && activeCleanupInterval !== setting) {
      dispatch(setActiveVisitorCallSetting(setting));
    }
  };
  const setCheckIcon = () => {
    if (title === 'Set Cleanup Interval') {
      return activeCleanupInterval;
    }
    if (title === 'Doorbell') {
      return activeDoorbellSetting;
    }
    if (title === 'Visitor Call') {
      return activeVisitorCallSetting;
    }
  }
  return (
    <SettingItemContainer
      onClick={() => setActiveTitle(setting)}
    >
      <div className="setting-item-title"> {setting} </div>
      <div className={setCheckIcon() === setting ? 'wrapper-icon' : 'hide'} > <SvgIcon name='check-icon' /> </div>
    </SettingItemContainer>
  );
};

export default SettingItem;