
import SvgIcon from '../../components/icon-svg/svg-icon.component';
import { WalkSpeedContainer } from "./walk-speed.styles";
const WalkSpeed = () => {
  return (
    <WalkSpeedContainer>
      <div className='wrapper-walk-speed-title'>
        <div className="title">Walk Speed</div>
        <div className="walk-speed-icon" onClick={() => console.log('walk-speed-info!')}>
          <SvgIcon name='info-icon' />
        </div>
      </div>
      <div className="wrapper-progress-bar">
        <SvgIcon name='slider-call-history-icon' />
        <SvgIcon name='progress-walk-speed-icon' />
      </div>
    </WalkSpeedContainer>
  );
};

export default WalkSpeed;
