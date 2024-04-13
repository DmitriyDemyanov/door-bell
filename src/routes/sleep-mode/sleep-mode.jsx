
import SettingItem from "../../components/setting-item/setting-item";
import { SleepModeBehaviorContainer } from "./sleep-mode.styles";

const doorbell =
{
  title: 'Doorbell',
  settings: ['Bell','Mute'],
}
const visitorCall = {
  title: 'Visitor Call',
  settings: ['Bell','Mute'],
}

const SleepModeBehavior = () => {
  return (
    <SleepModeBehaviorContainer>
      <div> Sleep Mode Behavior  </div>
      <div className='call-history-sub-title'> {doorbell.title} </div>
      <div className="wrapper-setting-item">
        {
          doorbell.settings.map((setting,ind) => (<SettingItem title={doorbell.title} setting={setting} key={ind} />))
        }
      </div>
      <div className='call-history-sub-title'> {visitorCall.title} </div>
      <div className="wrapper-setting-item">
        {
          visitorCall.settings.map((setting,ind) => (<SettingItem title={visitorCall.title} setting={setting} key={ind} />))
        }
      </div>
    </SleepModeBehaviorContainer>
  );
};

export default SleepModeBehavior;