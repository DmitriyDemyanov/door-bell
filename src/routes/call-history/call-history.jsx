import { useSelector } from 'react-redux';

import { getAllCleanupHistory } from '../../store/call-history/call-history.selector';

import SettingItem from "../../components/setting-item/setting-item";
import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { CallHistoryComponent } from "./call-history.styles";
const CallHistory = () => {
  const allCleanupHistory = useSelector(getAllCleanupHistory);

  return (
    <CallHistoryComponent>
      <div> Call History  </div>
      <div className='call-history-title'> {allCleanupHistory.title} </div>
      <div className="wrapper-setting-item">
        {
          allCleanupHistory.setting.map((setting,ind) => (<SettingItem title={allCleanupHistory.title} setting={setting} key={ind} />))
        }
      </div>
      <div className="item-bar"></div>
      <div> Maximum Number of Items  </div>
      <div style={{ marginTop: '32px' }} className="wrapper-call-history-progress-bar">
        <SvgIcon name='slider-middle-icon' />
        <SvgIcon name='progress-call-history-icon' />
      </div>
    </CallHistoryComponent>
  );
};

export default CallHistory;