import { useSelector,useDispatch } from 'react-redux';


import { getActiveCleanupHistory } from '../../store/call-history/call-history.selector';
import { setActiveCleanupHistory } from '../../store/call-history/call-history.actions';

import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { SettingItemContainer } from "./setting-item.styles";

const SettingItem = ({ title }) => {
  const dispatch = useDispatch();
  const activeCleanupInterval = useSelector(getActiveCleanupHistory);

  return (
    <SettingItemContainer
      onClick={() => dispatch(setActiveCleanupHistory(title))}
    >
      <div className="setting-item-title"> {title} </div>
      <div className={activeCleanupInterval === title ? 'wrapper-icon' : 'hide'} > <SvgIcon name='check-icon' /> </div>
    </SettingItemContainer>
  );
};

export default SettingItem;