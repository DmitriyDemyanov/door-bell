
import SettingItem from "../../components/setting-item/setting-item";
import { SleepModeBehaviorContainer } from "./sleep-mode.styles";

const doorbell = ['Bell','Mute'];
const visitorCall = ['Bell','Mute'];
const SleepModeBehavior = () => {
  return (
    <SleepModeBehaviorContainer>
      <div> Sleep Mode Behavior  </div>
      <div className='call-history-sub-title'> Doorbell </div>
      <div className="wrapper-setting-item">
        {
          doorbell.map((title,ind) => (<SettingItem title={title} key={ind} />))
        }
      </div>
      <div className='call-history-sub-title'> Visitor Call </div>
      <div className="wrapper-setting-item">
        {
          visitorCall.map((title,ind) => (<SettingItem title={title} key={ind} />))
        }
      </div>
    </SleepModeBehaviorContainer>
  );
};

export default SleepModeBehavior;