import SettingItem from "../../components/setting-item/setting-item";

import { CallHistoryComponent } from "./call-history.styles";
const CallHistory = () => {
  return (
    <CallHistoryComponent>
      <div> Call History  </div>
      <div className='call-history-sub-title'> Set Cleanup Interval </div>
      <div className="wrapper-setting-item">
        <SettingItem />
        <SettingItem />
        <SettingItem />
        <SettingItem />
      </div>

    </CallHistoryComponent>
  );
};

export default CallHistory;